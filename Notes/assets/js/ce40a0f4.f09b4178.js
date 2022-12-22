"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[9686],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>g});var a=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(l),g=n,k=m["".concat(o,".").concat(g)]||m[g]||d[g]||r;return l?a.createElement(k,i(i({ref:t},u),{},{components:l})):a.createElement(k,i({ref:t},u))}));function g(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,i=new Array(r);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<r;p++)i[p]=l[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}m.displayName="MDXCreateElement"},6926:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=l(7462),n=(l(7294),l(3905));const r={title:"Telep\xedt\xe9s",position:1},i="Telep\xedt\xe9s",s={unversionedId:"Installs/Windows/GUI/DHCP/Install",id:"Installs/Windows/GUI/DHCP/Install",title:"Telep\xedt\xe9s",description:"Roles and Features",source:"@site/docs/Installs/Windows/GUI/DHCP/Install.md",sourceDirName:"Installs/Windows/GUI/DHCP",slug:"/Installs/Windows/GUI/DHCP/Install",permalink:"/Notes/docs/Installs/Windows/GUI/DHCP/Install",draft:!1,tags:[],version:"current",frontMatter:{title:"Telep\xedt\xe9s",position:1},sidebar:"tutorialSidebar",previous:{title:"Scope m\xf3dis\xedt\xe1sa",permalink:"/Notes/docs/Installs/Windows/GUI/DHCP/EditScope"},next:{title:"Telep\xedt\xe9s",permalink:"/Notes/docs/Installs/Windows/GUI/DNS/Install"}},o={},p=[{value:"Roles and Features",id:"roles-and-features",level:3},{value:"Szerver kiv\xe1laszt\xe1sa",id:"szerver-kiv\xe1laszt\xe1sa",level:3},{value:"M\xe1s szerverekre is fel lehet telep\xedteni (remote install), gy\u0151z\u0151dj\xfcnk meg r\xf3la, hogy a j\xf3 szervert v\xe1lasztottuk ki",id:"m\xe1s-szerverekre-is-fel-lehet-telep\xedteni-remote-install-gy\u0151z\u0151dj\xfcnk-meg-r\xf3la-hogy-a-j\xf3-szervert-v\xe1lasztottuk-ki",level:4},{value:"Windows Roles and Features",id:"windows-roles-and-features",level:3},{value:"V\xe1lasszuk ki a DHCP Server opci\xf3t",id:"v\xe1lasszuk-ki-a-dhcp-server-opci\xf3t",level:4},{value:"DHCP configuration",id:"dhcp-configuration",level:3},{value:"Configur\xe1ljuk a DHCP servert",id:"configur\xe1ljuk-a-dhcp-servert",level:4},{value:"Credentials",id:"credentials",level:3},{value:"Adjuk meg az admin felhaszn\xe1l\xf3nevet \xe9s jelsz\xf3t",id:"adjuk-meg-az-admin-felhaszn\xe1l\xf3nevet-\xe9s-jelsz\xf3t",level:4},{value:"DHCP Manager",id:"dhcp-manager",level:3},{value:"Oldalt navig\xe1ljunk a DHCP oldalra vagy jobb fel\u0171l a tools menub\u0151l v\xe1lasszuk ki a DHCP Managert",id:"oldalt-navig\xe1ljunk-a-dhcp-oldalra-vagy-jobb-fel\u0171l-a-tools-menub\u0151l-v\xe1lasszuk-ki-a-dhcp-managert",level:4},{value:"Scope",id:"scope",level:3},{value:"Hozzunk l\xe9tre egy \xfaj scopeot",id:"hozzunk-l\xe9tre-egy-\xfaj-scopeot",level:4},{value:"Nevezz\xfck el",id:"nevezz\xfck-el",level:4},{value:"Mett\u0151l meddig osszon ipt",id:"mett\u0151l-meddig-osszon-ipt",level:4},{value:"Milyen ipket ne osszon a rangen bel\u0171l",id:"milyen-ipket-ne-osszon-a-rangen-bel\u0171l",level:4},{value:"Adjuk meg a router (default gateway) ipj\xe9t",id:"adjuk-meg-a-router-default-gateway-ipj\xe9t",level:4},{value:"Ezt kell l\xe1ssuk",id:"ezt-kell-l\xe1ssuk",level:4},{value:"Meg ezt",id:"meg-ezt",level:4},{value:"Ha m\xe1r van ip kiosztva neki ip vagy APIPA ipje van",id:"ha-m\xe1r-van-ip-kiosztva-neki-ip-vagy-apipa-ipje-van",level:4}],u={toc:p};function d(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"telep\xedt\xe9s"},"Telep\xedt\xe9s"),(0,n.kt)("h3",{id:"roles-and-features"},"Roles and Features"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/eOOh5zM.png",alt:"Imgur"})),(0,n.kt)("h3",{id:"szerver-kiv\xe1laszt\xe1sa"},"Szerver kiv\xe1laszt\xe1sa"),(0,n.kt)("h4",{id:"m\xe1s-szerverekre-is-fel-lehet-telep\xedteni-remote-install-gy\u0151z\u0151dj\xfcnk-meg-r\xf3la-hogy-a-j\xf3-szervert-v\xe1lasztottuk-ki"},"M\xe1s szerverekre is fel lehet telep\xedteni (remote install), gy\u0151z\u0151dj\xfcnk meg r\xf3la, hogy a j\xf3 szervert v\xe1lasztottuk ki"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/UUafImX.png",alt:"Imgur"})),(0,n.kt)("h3",{id:"windows-roles-and-features"},"Windows Roles and Features"),(0,n.kt)("h4",{id:"v\xe1lasszuk-ki-a-dhcp-server-opci\xf3t"},"V\xe1lasszuk ki a DHCP Server opci\xf3t"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/X13aGmh.png",alt:"Imgur"})),(0,n.kt)("h3",{id:"dhcp-configuration"},"DHCP configuration"),(0,n.kt)("h4",{id:"configur\xe1ljuk-a-dhcp-servert"},"Configur\xe1ljuk a DHCP servert"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/WYASNPH.png",alt:"Imgur"})),(0,n.kt)("h3",{id:"credentials"},"Credentials"),(0,n.kt)("h4",{id:"adjuk-meg-az-admin-felhaszn\xe1l\xf3nevet-\xe9s-jelsz\xf3t"},"Adjuk meg az admin felhaszn\xe1l\xf3nevet \xe9s jelsz\xf3t"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/lDr70Gl.png",alt:"Imgur"})),(0,n.kt)("h3",{id:"dhcp-manager"},"DHCP Manager"),(0,n.kt)("h4",{id:"oldalt-navig\xe1ljunk-a-dhcp-oldalra-vagy-jobb-fel\u0171l-a-tools-menub\u0151l-v\xe1lasszuk-ki-a-dhcp-managert"},"Oldalt navig\xe1ljunk a DHCP oldalra vagy jobb fel\u0171l a tools menub\u0151l v\xe1lasszuk ki a DHCP Managert"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/WanoyQj.png",alt:"Imgur"})),(0,n.kt)("h3",{id:"scope"},"Scope"),(0,n.kt)("h4",{id:"hozzunk-l\xe9tre-egy-\xfaj-scopeot"},"Hozzunk l\xe9tre egy \xfaj scopeot"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/kqjf6hf.png",alt:"Imgur"})),(0,n.kt)("h4",{id:"nevezz\xfck-el"},"Nevezz\xfck el"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/QCcB2lN.png",alt:"Imgur"})),(0,n.kt)("h4",{id:"mett\u0151l-meddig-osszon-ipt"},"Mett\u0151l meddig osszon ipt"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/4akw3ZJ.png",alt:"Imgur"})),(0,n.kt)("h4",{id:"milyen-ipket-ne-osszon-a-rangen-bel\u0171l"},"Milyen ipket ne osszon a rangen bel\u0171l"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/5hE6dHX.png",alt:"Imgur"})),(0,n.kt)("h4",{id:"adjuk-meg-a-router-default-gateway-ipj\xe9t"},"Adjuk meg a router (default gateway) ipj\xe9t"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/qnAfUwr.png",alt:"Imgur"})),(0,n.kt)("h4",{id:"ezt-kell-l\xe1ssuk"},"Ezt kell l\xe1ssuk"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/nweB2Tm.png",alt:"Imgur"})),(0,n.kt)("h4",{id:"meg-ezt"},"Meg ezt"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cmd"},"ipconfig /all\n")),(0,n.kt)("h4",{id:"ha-m\xe1r-van-ip-kiosztva-neki-ip-vagy-apipa-ipje-van"},"Ha m\xe1r van ip kiosztva neki ip vagy APIPA ipje van"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cmd"},"ipconfig /renew\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/dPPEqvk.png",alt:"Imgur"})))}d.isMDXComponent=!0}}]);