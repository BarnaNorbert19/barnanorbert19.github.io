---
title: Failover
sidebar_position: 2
---

# Failover

### Roles and Features
![Imgur](https://i.imgur.com/eOOh5zM.png)

### Szerver kiválasztása
#### Más szerverekre is fel lehet telepíteni (remote install), győződjünk meg róla, hogy a jó szervert választottuk ki
![Imgur](https://i.imgur.com/UUafImX.png)

### Active Directory Domain Services
#### Válasszuk ki az "Active Directory Domain Services" -t
![Imgur](https://i.imgur.com/sPHWsKP.png)

### Restart destination server
#### Ez opcionális, de ha nem vagyunk fizikailag a szerver közelében, jól tud jönni (bár sokszor nem is működik ...)
![Imgur](https://i.imgur.com/KibZMEl.png)

### Promote server
#### A szervert domain controlleré kell előléptetnünk
![Imgur](https://i.imgur.com/wk8c6cO.png)

### Hozzáadás a domainhez
#### Válasszuk az első opciót és adjuk meg a domainünk nevét
![Imgur](https://i.imgur.com/dXzRJ1j.png)

### Credentials
#### Adjuk meg a domain admin felhasználónevét és jelszavát
![Imgur](https://i.imgur.com/NAnEejt.png)

### Domain kiválasztása
#### Válasszuk ki a forestet
![Imgur](https://i.imgur.com/Cl3SeYa.png)

### DSRM jelszó
#### Az AD adatbázishoz egy backup jelszó
![Imgur](https://i.imgur.com/kV8feqL.png)
#### Ha ezek megvannak, a backup és a main AD szerver folyamatosan updatelni fogja a saját adatbázisát ha a másikon létrejön egy object