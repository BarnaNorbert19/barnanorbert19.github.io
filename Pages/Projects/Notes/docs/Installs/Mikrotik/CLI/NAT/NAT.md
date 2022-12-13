---
title: NAT
---

# NAT
## NAT Masquerade/PAT/Overload
Egy adott ip pool/ip címét/címeit kicseréli az interfacen lévő ipjére vagy vissza
```bash
ip firewall nat add src-address=x.x.x.x/x action=masquerade out-interface=etherX chain=srcnat
```
`chain=srcnat` - A belső hálózatból<br />
`src-address` - ezt/ezeket az ip címet/címeket<br />
`action=masquerade` - ki szeretnénk cserélni<br />
`out-interface` - ezen a kimenő az interfécen

## Port forward
Addott ip pool/ip + port-ot (csak együtt) továbbít egy adott ip-re
```
ip firewall nat add chain=dstnat dst-address=x.x.x.x protocol=X dst-port=X action=dst-nat to-addresses=x.x.x.x to-ports=X
```

`chain=dstnat` - Bejövő csomagot<br />
`dst-address` - ami erre az ipre megy<br />
`protocol` - (nem kötelező) ilyen protocollal<br />
`dst-port` - ezen a porton<br />
`action=dst-nat` - irányítsa át<br />
`to-addresses` - erre az ipre<br />
`to-ports` - (nem kötelező) erre a portra<br />