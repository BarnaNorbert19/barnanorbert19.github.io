---
sidebar_position: 2
---

# Failover

:::tip Automatikus bash script

Letölthető [itt](../../../../Scripts/Debian_DHCP_Failover_Install.sh)

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

### Példa failover -rel

```bash
failover peer "failover-partner" {
  primary;
  address 172.16.0.254; #this host
  port 519;
  peer address 172.16.0.252; #partner
  peer port 520;
  max-response-delay 60;
  max-unacked-updates 10;
  mclt 3600;
  split 256;
  load balance max seconds 3;
}

subnet 172.16.0.0 netmask 255.255.0.0 {
  option subnet-mask 255.255.0.0;
  option broadcast-address 172.16.255.255;
  option time-offset 0;
  option routers 172.16.0.1; #def gateway
  option domain-name "thishostname.domain.name";
  option domain-name-servers 172.16.0.254; #partner
  option ntp-servers 172.16.0.254, 172.16.0.252;#this host, partner
  pool {
    failover peer "failover-partner";
    max-lease-time 1800;
    range 172.16.0.100 172.16.0.150; #ip range
  }
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

:::tip Néha reboot is szükséges
```bash
reboot now
```
:::