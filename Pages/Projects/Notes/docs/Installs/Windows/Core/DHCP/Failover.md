---
sidebar_position: 2
---

# Failover

:::tip Automatikus powershell script

Letölthető [itt](../../../../Scripts/DHCP_Failover.ps1)

:::

## DHCP feature installálása
```powershell
Install-WindowsFeature DHCP -IncludeManagementTools
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
## Failover felépítése
```powershell
Add-DhcpServerv4Failover -ComputerName "current_server_name" -PartnerServer "mainserver_name" -Name "Failover_Hot_standby" -ServerRole Standby -ReservePercent 10 -MaxClientLeadTime 1:00:00 -StateSwitchInterval 00:45:00 -ScopeId 192.168.8.0 -SharedSecret "Pa$$w0rd”
```
## Restart DHCP
```powershell
restart-service dhcpserver
```
