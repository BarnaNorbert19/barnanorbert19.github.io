---
title: Telepítés
sidebar_position: 1
---

# Telepítés

### Szerver kiválasztása
#### Más szerverekre is fel lehet telepíteni (remote install), győződjünk meg róla, hogy a jó szervert választottuk ki
![Imgur](https://i.imgur.com/UUafImX.png)

### Roles and Features -> válasszuk a `Windows Deployment Services`-t
![Imgur](https://i.imgur.com/mLxtc3c.png)

### Management Console
#### Navigáljunk a WDS oldalra bal oldalon vagy jobb felül a tools menüből nyissuk meg a `Windows Deployment Services Management Console`-t
![Imgur](https://i.imgur.com/urjBdrh.png)

### Válasszuk ki a szervert
#### Válasszuk ki a szervert amit configurálni szeretnénk
![Imgur](https://i.imgur.com/hhwAsaj.png)

### Opciók
#### Itt több lehetőségünk van, intergrated -> domain alapján generálja a nevét a PC-nek és alapból a domainben lesz, standalone -> sima telepítés 
![Imgur](https://i.imgur.com/DJ8jalz.png)

### OS tárolása
#### OS fájlokat fog generálni nekünk az adott helyre, itt kapunk is majd egy figyelmeztetést, hogy érdemes más meghajtón tárolni mint ahova a windows van felrakva
![Imgur](https://i.imgur.com/uStF3zp.png)

### Hozzáférés
#### Az első opció -> nem fog semmilyen PC-nek se telepíteni OS-t, második -> MAC címet késöbb hozzá kell adni, harmadik -> mindenkinek telepít és ha a checkboxot bepipáljuk a Management Console-ban fel fog jönni egy értesítés, hogy valaki telepíteni szeretne és ezeket manuálisan engedélyezni kell
![Imgur](https://i.imgur.com/AMYbUDW.png)

### Szolgáltatás elindítása
#### Ha nem indúl el automatikusan (zöld nyíl), akkor manuálisan is el tudjuk indítani
![Imgur](https://i.imgur.com/epyQjNR.png)

### Boot image
#### Adjuk hozzá a boot imaget
![Imgur](https://i.imgur.com/C00opkJ.png)
![Imgur](https://i.imgur.com/3GK1cdz.png)
![Imgur](https://i.imgur.com/V3IeWMG.png)

### Image group
#### Hozzunk létre egy image groupot, ez segít rendezetten tartani az OS-eket
![Imgur](https://i.imgur.com/Id65FQA.png)

### Installation image
#### Adjuk hozzá az installation imaget
![Imgur](https://i.imgur.com/YchyeM2.png)
![Imgur](https://i.imgur.com/KoYDpuu.png)

### Több image
#### Ha több verzió van egy imageben pl. server, ki tudjuk választani melyiket szeretnénk megtartani (telepítés közben ugyanúgy lehet választani)
![Imgur](https://i.imgur.com/4Oe58Qp.png)