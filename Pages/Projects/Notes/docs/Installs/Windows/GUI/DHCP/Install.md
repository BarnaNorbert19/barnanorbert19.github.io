---
title: Telepítés
position: 1
---

# Telepítés

### Roles and Features
![Imgur](https://i.imgur.com/eOOh5zM.png)

### Szerver kiválasztása
#### Más szerverekre is fel lehet telepíteni (remote install), győződjünk meg róla, hogy a jó szervert választottuk ki
![Imgur](https://i.imgur.com/UUafImX.png)

### Windows Roles and Features
#### Válasszuk ki a DHCP Server opciót
![Imgur](https://i.imgur.com/X13aGmh.png)

### DHCP configuration
#### Configuráljuk a DHCP servert
![Imgur](https://i.imgur.com/WYASNPH.png)

### Credentials
#### Adjuk meg az admin felhasználónevet és jelszót
![Imgur](https://i.imgur.com/lDr70Gl.png)

### DHCP Manager
#### Oldalt navigáljunk a DHCP oldalra vagy jobb felűl a tools menuből válasszuk ki a DHCP Managert
![Imgur](https://i.imgur.com/WanoyQj.png)

### Scope
#### Hozzunk létre egy új scopeot
![Imgur](https://i.imgur.com/kqjf6hf.png)
#### Nevezzük el
![Imgur](https://i.imgur.com/QCcB2lN.png)
#### Mettől meddig osszon ipt
![Imgur](https://i.imgur.com/4akw3ZJ.png)
#### Milyen ipket ne osszon a rangen belűl
![Imgur](https://i.imgur.com/5hE6dHX.png)
#### Adjuk meg a router (default gateway) ipjét
![Imgur](https://i.imgur.com/qnAfUwr.png)
#### Ezt kell lássuk
![Imgur](https://i.imgur.com/nweB2Tm.png)
#### Meg ezt 
```cmd
ipconfig /all
```
#### Ha már van ip kiosztva neki ip vagy APIPA ipje van
```cmd
ipconfig /renew
```
![Imgur](https://i.imgur.com/dPPEqvk.png)