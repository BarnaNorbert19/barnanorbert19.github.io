---
sidebar_position: 1
---

# Install

:::tip Automatikus bash script

Letölthető [itt](../../../../Scripts/Debian_DHCP_Install.sh)

:::

## Telepítsük a ISC DHCP szolgáltatást, majd állítsuk is le

```bash
apt-get install isc-dhcp-server -y
systemctl stop isc-dhcp-server
```

## Configuráció
ISC DHCP a `/etc/dhcp/dhcpd.conf` fájlt használja. Van egy alap config benne, de érdemesebb a példákat amiket lejjebb írok használni

```bash
mv /etc/dhcp/dhcpd.conf /etc/dhcp/dhcpd.conf.orig
nano -w /etc/dhcp/dhcpd.conf
```

### Példa

```bash
failover peer "failover-partner" {
  secondary;
  address 172.16.0.252; #this host
  port 520;
  peer address 172.16.0.254; #main host
  peer port 519;
  max-response-delay 60;
  max-unacked-updates 10;
  load balance max seconds 3;
}
subnet 172.16.0.0 netmask 255.255.0.0 {
  option subnet-mask 255.255.0.0;
  option broadcast-address 172.16.255.255;
  option time-offset 0;
  option routers 172.16.0.1; #def gateway
  option domain-name "thishostname.domain.name";
  option domain-name-servers 172.16.0.254, 172.16.0.252; #main, partner
  option ntp-servers 172.16.0.254;
  pool {
    failover peer "failover-partner";
    max-lease-time 1800;
    range 172.16.0.100 172.16.0.150; #ip range
  }
}

```
`MCLT` - (Maximum Client Lead Time) Megadja azt az idõtartamot, ameddig a DHCP-bérleti idõt bármelyik feladatátvételi partner megújíthatja anélkül, hogy kapcsolatba lépne a másikkal.<br/>
`Split` - Terhelésmegosztás, 0 és 256 közötti érték lehet. A 128 pl. azt jelenti, hogy 50-50% a terhelésmegosztás.<br/>
`max-response-delay` - Másodpercben adja meg, hogy a szerver meddig vár, amíg sikertelennek nyilvánítja a kapcsolatot.

### Példa failover nélkül

```bash
default-lease-time 600;
max-lease-time 7200;
option subnet-mask 255.255.0.0;
option broadcast-address 172.16.255.255;
option routers 172.16.0.1; #def gateway
option domain-name-servers 172.16.0.254;#this host
option domain-name "thishostname.domain.name";
subnet 172.16.0.0 netmask 255.255.0.0 {
   range 172.16.0.100 172.16.0.150; #ip range
}
```

## Hálózati kártya
```bash
nano /etc/default/isc-dhcp-server
```
Ide a hálózati kártya azonosítóját (vagy azonosítókat) kell megadni.

```bash
INTERFACESV4="Interface card name here"
```

## DHCP újraindítása
```bash
systemctl start isc-dhcp-server
```