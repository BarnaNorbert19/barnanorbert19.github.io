---
sidebar_position: 1
---

# Install
:::tip Automatikus powershell script

Letölthető [itt](../../../../Scripts/DHCP_Install.ps1)

:::
## DHCP feature installálása
```powershell
Install-WindowsFeature DHCP -IncludeManagementTools
```
## DHCP scope (ip range) configurálása
```powershell
Add-DHCPServerV4Scope -name "scope_name" -startrange 192.168.8.1 -endrange 192.168.8.100 -subnetmask 255.255.255.0
```
## DNS szerver(ek) és alapértelmezett átjáró (default gateway) hozzárendelése
```powershell
Set-DHCPServerV4OptionValue -dnsdomain domain.name -dnsserver 192.168.8.1, 192.168.8.2 -router 192.168.8.254
```
## Active Directory authorized DHCP szerverré előléptetjük (ha van AD)

```powershell
Add-DHCPServerInDC -dnsname servername.domain.name
```
:::danger Ha ezt a lépést kihagyod és van AD szerver

AD-n belüli PC-k nem fognak IP-t kapni

:::

## DHCP szerver újraindítása
```powershell
restart-service dhcpserver
```