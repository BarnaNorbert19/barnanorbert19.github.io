---
title: Bejelentkezett felhasználó
---

# Jelenleg bejelentkezett felhasználó

## Engedélyezzük WINRM-et mindkettő oldalon
```powershell
Enable-PSRemoting
```
vagy
```powershell
winrm quickconfig
```
vagy Group Policy-val engedélyezzük
## Powershell parancs
```powershell
Get-WmiObject -ComputerName pcname -Class Win32_ComputerSystem | Select-Object UserName
```
vagy
```powershell
Get-CimInstance -ComputerName pcname -ClassName Win32_ComputerSystem | Select-Object UserName
```