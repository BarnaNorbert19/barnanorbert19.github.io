"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[309],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>p});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),k=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=k(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=k(a),p=l,d=u["".concat(i,".").concat(p)]||u[p]||c[p]||r;return a?n.createElement(d,s(s({ref:t},m),{},{components:a})):n.createElement(d,s({ref:t},m))}));function p(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,s[1]=o;for(var k=2;k<r;k++)s[k]=a[k];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7208:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>k});var n=a(7462),l=(a(7294),a(3905));const r={sidebar_position:1},s="Telep\xedt\xe9s",o={unversionedId:"Installs/Linux/Debian/Active Directory/Install",id:"Installs/Linux/Debian/Active Directory/Install",title:"Telep\xedt\xe9s",description:"Let\xf6lthet\u0151 itt",source:"@site/docs/Installs/Linux/Debian/Active Directory/Install.md",sourceDirName:"Installs/Linux/Debian/Active Directory",slug:"/Installs/Linux/Debian/Active Directory/Install",permalink:"/Notes/docs/Installs/Linux/Debian/Active Directory/Install",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\xc1ttekint\xe9s",permalink:"/Notes/docs/Installs/Overview"},next:{title:"Failover",permalink:"/Notes/docs/Installs/Linux/Debian/Active Directory/Failover"}},i={},k=[{value:"Friss\xedts\xfck a servert",id:"friss\xedts\xfck-a-servert",level:2},{value:"Hostname megv\xe1ltoztat\xe1sa/ellen\xf6rz\xe9se",id:"hostname-megv\xe1ltoztat\xe1saellen\xf6rz\xe9se",level:2},{value:"Statikus IP",id:"statikus-ip",level:2},{value:"Hosts f\xe1jl",id:"hosts-f\xe1jl",level:2},{value:"Samba telep\xedt\xe9se (kieg\xe9sz\xedt\xf5 csomagokkal)",id:"samba-telep\xedt\xe9se-kieg\xe9sz\xedt\xf5-csomagokkal",level:2},{value:"A telep\xedt\xf5 k\xe9rd\xe9seket fog feltenni",id:"a-telep\xedt\xf5-k\xe9rd\xe9seket-fog-feltenni",level:2},{value:"A Samba konfigur\xe1l\xe1sa el\xf5tt \xe1ll\xedtsuk/tiltsuk le a h\xe1tt\xe9rben fut\xf3 Samba alkalmaz\xe1sokat (daemon-okat)",id:"a-samba-konfigur\xe1l\xe1sa-el\xf5tt-\xe1ll\xedtsuktiltsuk-le-a-h\xe1tt\xe9rben-fut\xf3-samba-alkalmaz\xe1sokat-daemon-okat",level:2},{value:"Nevezz\xfck \xe1t vagy t\xe1vol\xedtsuk el a samba eredeti konfigur\xe1ci\xf3j\xe1t.",id:"nevezz\xfck-\xe1t-vagy-t\xe1vol\xedtsuk-el-a-samba-eredeti-konfigur\xe1ci\xf3j\xe1t",level:2},{value:"Telep\xedts\xfck a tartom\xe1nyi szolg\xe1ltat\xe1st interakt\xedv m\xf3don",id:"telep\xedts\xfck-a-tartom\xe1nyi-szolg\xe1ltat\xe1st-interakt\xedv-m\xf3don",level:2},{value:"Nevezz\xfck \xe1t, vagy t\xe1vol\xedtsuk el a Kerberos f\xf5 konfigur\xe1ci\xf3s f\xe1jlj\xe1t.",id:"nevezz\xfck-\xe1t-vagy-t\xe1vol\xedtsuk-el-a-kerberos-f\xf5-konfigur\xe1ci\xf3s-f\xe1jlj\xe1t",level:2},{value:"Linkelj\xfck a Samba \xe1ltal l\xe9trehozott Kerberos f\xe1jlt az el\xf5z\xf5 helyre:",id:"linkelj\xfck-a-samba-\xe1ltal-l\xe9trehozott-kerberos-f\xe1jlt-az-el\xf5z\xf5-helyre",level:2},{value:"Nyissuk meg a /etc/resolv.conf f\xe1jlt, \xe9s a k\xf6vetkez\xf5kre cser\xe9lj\xfck a tartalm\xe1t",id:"nyissuk-meg-a-etcresolvconf-f\xe1jlt-\xe9s-a-k\xf6vetkez\xf5kre-cser\xe9lj\xfck-a-tartalm\xe1t",level:2},{value:"Ind\xedtsuk el a Samba szolg\xe1ltat\xe1sokat",id:"ind\xedtsuk-el-a-samba-szolg\xe1ltat\xe1sokat",level:2}],m={toc:k};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"telep\xedt\xe9s"},"Telep\xedt\xe9s"),(0,l.kt)("admonition",{title:"Automatikus bash script",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Let\xf6lthet\u0151 ",(0,l.kt)("a",{parentName:"p",href:"../../../../Scripts/Debian_AD_Install.sh"},"itt"))),(0,l.kt)("h2",{id:"friss\xedts\xfck-a-servert"},"Friss\xedts\xfck a servert"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"apt update && apt upgrade\n")),(0,l.kt)("h2",{id:"hostname-megv\xe1ltoztat\xe1saellen\xf6rz\xe9se"},"Hostname megv\xe1ltoztat\xe1sa/ellen\xf6rz\xe9se"),(0,l.kt)("p",null,"Fontos, hogy a hostname rendben legyen, mert ha ut\xf3lag megv\xe1ltoztatjuk probl\xe9m\xe1khoz vezethet. ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/BarnaNorbert19/Notes/blob/main/Linux/Debian/Hostname/Megv%C3%A1ltoztat%C3%A1sa.md",title:"Le\xedr\xe1s"},"Le\xedr\xe1s")),(0,l.kt)("h2",{id:"statikus-ip"},"Statikus IP"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/BarnaNorbert19/Notes/blob/main/Linux/Debian/IP/IP%20megv%C3%A1ltoztat%C3%A1sa.md",title:"Le\xedr\xe1s"},"Le\xedr\xe1s")),(0,l.kt)("h2",{id:"hosts-f\xe1jl"},"Hosts f\xe1jl"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/hostname\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"127.0.0.1 localhost\n192.168.1.1 debiansambaad.domain.nev debiansambaad\n")),(0,l.kt)("h2",{id:"samba-telep\xedt\xe9se-kieg\xe9sz\xedt\xf5-csomagokkal"},"Samba telep\xedt\xe9se (kieg\xe9sz\xedt\xf5 csomagokkal)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"samba")," - Gondolhatunk r\xe1, \xfagy mint a AD linuxos verzi\xf3j\xe1ra. Ingyenes software.\n",(0,l.kt)("inlineCode",{parentName:"p"},"winbind"),"  - Windows felhaszn\xe1l\xf3k \xe9s csoportok \xe9rtelmezhet\u0151ek legyenek linuxon.\n",(0,l.kt)("inlineCode",{parentName:"p"},"krb5-config")," - Autentik\xe1ci\xf3\n",(0,l.kt)("inlineCode",{parentName:"p"},"smbclient")," - F\xe1jlmegoszt\xe1s"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"apt install samba winbind krb5-config smbclient -y\n")),(0,l.kt)("h2",{id:"a-telep\xedt\xf5-k\xe9rd\xe9seket-fog-feltenni"},"A telep\xedt\xf5 k\xe9rd\xe9seket fog feltenni"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Realm=DOMAIN.NEV (nagybet\xfbkkel)\nKerberos server for your realm=debiansambaad.domain.nev (kisbet\xfbkkel)\nAdministrative server for your kerberos realm=debiansambaad.domain.nev (kisbet\xfbkkel)\n")),(0,l.kt)("h2",{id:"a-samba-konfigur\xe1l\xe1sa-el\xf5tt-\xe1ll\xedtsuktiltsuk-le-a-h\xe1tt\xe9rben-fut\xf3-samba-alkalmaz\xe1sokat-daemon-okat"},"A Samba konfigur\xe1l\xe1sa el\xf5tt \xe1ll\xedtsuk/tiltsuk le a h\xe1tt\xe9rben fut\xf3 Samba alkalmaz\xe1sokat (daemon-okat)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl stop samba-ad-dc.service smbd.service nmbd.service winbind.service\nsystemctl disable samba-ad-dc.service smbd.service nmbd.service winbind.service\n")),(0,l.kt)("h2",{id:"nevezz\xfck-\xe1t-vagy-t\xe1vol\xedtsuk-el-a-samba-eredeti-konfigur\xe1ci\xf3j\xe1t"},"Nevezz\xfck \xe1t vagy t\xe1vol\xedtsuk el a samba eredeti konfigur\xe1ci\xf3j\xe1t."),(0,l.kt)("p",null,"Ez felt\xe9tlen\xfcl fontos, mert a Samba egy ideiglenes konfigur\xe1ci\xf3s f\xe1jlt hoz l\xe9tre \xe9s hib\xe1t jelezhet, ha egy r\xe9gi smb.conf f\xe1jlt tal\xe1l."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mv /etc/samba/smb.conf /etc/samba/smb.conf.orig\n")),(0,l.kt)("h2",{id:"telep\xedts\xfck-a-tartom\xe1nyi-szolg\xe1ltat\xe1st-interakt\xedv-m\xf3don"},"Telep\xedts\xfck a tartom\xe1nyi szolg\xe1ltat\xe1st interakt\xedv m\xf3don"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--use-rfc2307")," - Enged\xe9lyezi a NIS (Network Information Service) kiterjeszt\xe9sek haszn\xe1lat\xe1t.\n",(0,l.kt)("inlineCode",{parentName:"p"},"--interactive")," - Ez a param\xe9ter k\xe9nyszer\xedti a szolg\xe1ltat\xe1si szkript interakt\xedv futtat\xe1s\xe1t."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"samba-tool domain provision --use-rfc2307 --interactive\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Realm [DOMAIN.NEV]:\nDomain [DOMAIN]:\nServer Role [dc]:\nDNS backend: [SAMBA_INTERNAL]\nDNS forwarder IP address [8.8.8.8]: 8.8.8.8\nAdministrator password: Aa123456\n")),(0,l.kt)("h2",{id:"nevezz\xfck-\xe1t-vagy-t\xe1vol\xedtsuk-el-a-kerberos-f\xf5-konfigur\xe1ci\xf3s-f\xe1jlj\xe1t"},"Nevezz\xfck \xe1t, vagy t\xe1vol\xedtsuk el a Kerberos f\xf5 konfigur\xe1ci\xf3s f\xe1jlj\xe1t."),(0,l.kt)("p",null,"A f\xe1jlt az /etc k\xf6nyvt\xe1rban tal\xe1ljuk. Majd linkelj\xfck a /var/lib/samba/private mapp\xe1ban l\xe9v\u0151 Kerberos f\xe1jlt."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mv /etc/krb5.conf /etc/krb5.conf.original\n")),(0,l.kt)("h2",{id:"linkelj\xfck-a-samba-\xe1ltal-l\xe9trehozott-kerberos-f\xe1jlt-az-el\xf5z\xf5-helyre"},"Linkelj\xfck a Samba \xe1ltal l\xe9trehozott Kerberos f\xe1jlt az el\xf5z\xf5 helyre:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ln -sf /var/lib/samba/private/krb5.conf /etc/krb5.conf\n")),(0,l.kt)("h2",{id:"nyissuk-meg-a-etcresolvconf-f\xe1jlt-\xe9s-a-k\xf6vetkez\xf5kre-cser\xe9lj\xfck-a-tartalm\xe1t"},"Nyissuk meg a /etc/resolv.conf f\xe1jlt, \xe9s a k\xf6vetkez\xf5kre cser\xe9lj\xfck a tartalm\xe1t"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/resolv.conf\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"domain domain.nev\nsearch domain.nev\nnameserver 192.168.1.1\nnameserver 8.8.8.8\n")),(0,l.kt)("h2",{id:"ind\xedtsuk-el-a-samba-szolg\xe1ltat\xe1sokat"},"Ind\xedtsuk el a Samba szolg\xe1ltat\xe1sokat"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl unmask samba-ad-dc.service\nsystemctl start samba-ad-dc.service\nsystemctl enable samba-ad-dc.service\n")))}c.isMDXComponent=!0}}]);