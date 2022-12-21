---
title: Telepítés
sidebar_position: 1
---
# Telepítés

:::tip Automatikus powershell script

Letölthető [itt](../../../../Scripts/AD_Install.ps1)

:::

## AD Install
```powershell
Install-WindowsFeature AD-Domain-Services -IncludeManagementTools 
```
## Domain felépítése
```-DomainMode``` és ```-ForestMode``` a következő paramétereket fogadja el: ```Win2008```, ```Win2008R2```, ```Win2012```, ```Win2012R2```, ```WinThreshold```(Win2016), ```Default```
```powershell
Install-ADDSFOREST -DomainName DOMAIN.NAME -DomainNetbiosName DOMAIN -Force -DomainMode WinThreshold -ForestMode WinThreshold
```
:::danger Samba Win2008R2 -t használ !

Ha linux a partner szerver (failover vagy main ad, vagy esetleg valami más), akkor mindenféleképpen Win2008R2 -t válassz.

:::
## Uninstall AD
```powershell
Uninstall-ADDSDomainController -DemoteOperationMasterRole:$true -IgnoreLastDnsServerForZone:$true -LastDomainControllerInDomain:$true -RemoveDnsDelegation:$true -RemoveApplicationPartitions:$true -IgnoreLastDCInDomainMismatch:$true -Force:$true
```
