---
sidebar_position: 1
sidebar_label: Install
---

# Install

:::tip Automatikus bash script

Letölthető [itt](../../../../Scripts/Ubuntu_AD_Install.sh)

:::

## Frissítsük a servert
```bash
sudo apt update && sudo apt upgrade
```
# Hostname megváltoztatása/ellenörzése
Fontos, hogy a hostname rendben legyen, mert ha utólag megváltoztatjuk problémákhoz vezethet. [Leírás](https://github.com/BarnaNorbert19/Notes/blob/main/Linux/Debian/Hostname/Megváltoztatása.md "Leírás")

## Statikus IP
[Leírás](https://github.com/BarnaNorbert19/Notes/blob/main/Linux/Ubuntu/IP/IP%20megváltoztatása.md "Leírás")

## Hosts fájl
```bash
sedo nano /etc/hostname
```
```
127.0.0.1 localhost
192.168.1.1 debiansambaad.domain.nev debiansambaad
```

## Samba telepítése (kiegészítõ csomagokkal)
`samba` - Gondolhatunk rá, úgy mint a AD linuxos verziójára. Ingyenes software.
`winbind`  - Windows felhasználók és csoportok értelmezhetőek legyenek linuxon.
`krb5-config` - Autentikáció
`smbclient` - Fájlmegosztás
```bash
sudo apt install samba winbind krb5-config smbclient -y
```
## A telepítõ kérdéseket fog feltenni
```
Realm=DOMAIN.NEV (nagybetûkkel)
Kerberos server for your realm=debiansambaad.domain.nev (kisbetûkkel)
Administrative server for your kerberos realm=debiansambaad.domain.nev (kisbetûkkel)
```
## A Samba konfigurálása elõtt állítsuk/tiltsuk le a háttérben futó Samba alkalmazásokat (daemon-okat)
```bash
sudo systemctl stop samba-ad-dc.service smbd.service nmbd.service winbind.service
sudo systemctl disable samba-ad-dc.service smbd.service nmbd.service winbind.service
```
## Nevezzük át vagy távolítsuk el a samba eredeti konfigurációját.
Ez feltétlenül fontos, mert a Samba egy ideiglenes konfigurációs fájlt hoz létre és hibát jelezhet, ha egy régi smb.conf fájlt talál.
```bash
sudo mv /etc/samba/smb.conf /etc/samba/smb.conf.orig
```
## Telepítsük a tartományi szolgáltatást interaktív módon
`--use-rfc2307` - Engedélyezi a NIS (Network Information Service) kiterjesztések használatát.
`--interactive` - Ez a paraméter kényszeríti a szolgáltatási szkript interaktív futtatását.
```bash
sudo samba-tool domain provision --use-rfc2307 --interactive
```
```
Realm [DOMAIN.NEV]:
Domain [DOMAIN]:
Server Role [dc]:
DNS backend: [SAMBA_INTERNAL]
DNS forwarder IP address [8.8.8.8]: 8.8.8.8
Administrator password: Aa123456
```
## Kerberos konfigurációs fájlja
Nevezzük át, vagy távolítsuk el a Kerberos fõ konfigurációs fájlját a /etc könyvtárból. Majd linkeljük a /var/lib/samba/private mappában lévõ Kerberos fájlt.
```bash
sudo mv /etc/krb5.conf /etc/krb5.conf.original
```
## Linkeljük a Samba által létrehozott Kerberos fájlt az elõzõ helyre
```bash
sudo ln -sf /var/lib/samba/private/krb5.conf /etc/krb5.conf
```
## Nyissuk meg a /etc/resolv.conf fájlt, és a következõkre cseréljük a tartalmát
```bash
sudo nano /etc/resolv.conf
```
```
domain domain.nev
search domain.nev
nameserver 192.168.1.1
nameserver 8.8.8.8
```
## man:systemd
Ubuntu esetében a resolv.conf fájlt a man:systemd kezeli, ez annyit jelent, hogy linkelve van, tehát ha megváltoztatunk benne valamit az nem fog érvényesülni. Ezért unlinkeljük.
```bash
sudo unlink /etc/resolv.conf
```
## Indítsuk el a Samba szolgáltatásokat
```bash
sudo systemctl unmask samba-ad-dc.service
sudo systemctl start samba-ad-dc.service
sudo systemctl enable samba-ad-dc.service
```
