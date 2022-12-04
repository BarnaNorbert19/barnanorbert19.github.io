"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[6902],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),v=n,m=u["".concat(s,".").concat(v)]||u[v]||d[v]||l;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4853:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const l={sidebar_position:2},o="Failover",i={unversionedId:"Windows/Core/DHCP/Failover",id:"Windows/Core/DHCP/Failover",title:"Failover",description:"Let\xf6lthet\u0151 itt",source:"@site/docs/Windows/Core/DHCP/Failover.md",sourceDirName:"Windows/Core/DHCP",slug:"/Windows/Core/DHCP/Failover",permalink:"/Notes/docs/Windows/Core/DHCP/Failover",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/Notes/docs/Windows/Core/DHCP/Install"}},s={},p=[{value:"DHCP feature install\xe1l\xe1sa",id:"dhcp-feature-install\xe1l\xe1sa",level:2},{value:"DNS szerver(ek) \xe9s alap\xe9rtelmezett \xe1tj\xe1r\xf3 (default gateway) hozz\xe1rendel\xe9se",id:"dns-szerverek-\xe9s-alap\xe9rtelmezett-\xe1tj\xe1r\xf3-default-gateway-hozz\xe1rendel\xe9se",level:2},{value:"Active Directory authorized DHCP szerverr\xe9 el\u0151l\xe9ptetj\xfck (ha van AD)",id:"active-directory-authorized-dhcp-szerverr\xe9-el\u0151l\xe9ptetj\xfck-ha-van-ad",level:2},{value:"Failover fel\xe9p\xedt\xe9se",id:"failover-fel\xe9p\xedt\xe9se",level:2},{value:"Restart DHCP",id:"restart-dhcp",level:2}],c={toc:p};function d(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"failover"},"Failover"),(0,n.kt)("admonition",{title:"Automatikus powershell script",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Let\xf6lthet\u0151 ",(0,n.kt)("a",{target:"_blank",href:r(509).Z},"itt"))),(0,n.kt)("h2",{id:"dhcp-feature-install\xe1l\xe1sa"},"DHCP feature install\xe1l\xe1sa"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"Install-WindowsFeature DHCP -IncludeManagementTools\n")),(0,n.kt)("h2",{id:"dns-szerverek-\xe9s-alap\xe9rtelmezett-\xe1tj\xe1r\xf3-default-gateway-hozz\xe1rendel\xe9se"},"DNS szerver(ek) \xe9s alap\xe9rtelmezett \xe1tj\xe1r\xf3 (default gateway) hozz\xe1rendel\xe9se"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-DHCPServerV4OptionValue -dnsdomain domain.name -dnsserver 192.168.8.1, 192.168.8.2 -router 192.168.8.254\n")),(0,n.kt)("h2",{id:"active-directory-authorized-dhcp-szerverr\xe9-el\u0151l\xe9ptetj\xfck-ha-van-ad"},"Active Directory authorized DHCP szerverr\xe9 el\u0151l\xe9ptetj\xfck (ha van AD)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"Add-DHCPServerInDC -dnsname servername.domain.name\n")),(0,n.kt)("admonition",{title:"Ha ezt a l\xe9p\xe9st kihagyod \xe9s van AD szerver",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"AD-n bel\xfcli PC-k nem fognak IP-t kapni")),(0,n.kt)("h2",{id:"failover-fel\xe9p\xedt\xe9se"},"Failover fel\xe9p\xedt\xe9se"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'Add-DhcpServerv4Failover -ComputerName "current_server_name" -PartnerServer "mainserver_name" -Name "Failover_Hot_standby" -ServerRole Standby -ReservePercent 10 -MaxClientLeadTime 1:00:00 -StateSwitchInterval 00:45:00 -ScopeId 192.168.8.0 -SharedSecret "Pa$$w0rd\u201d\n')),(0,n.kt)("h2",{id:"restart-dhcp"},"Restart DHCP"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"restart-service dhcpserver\n")))}d.isMDXComponent=!0},509:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/files/DHCP_Failover-31d6cfe0d16ae931b73c59d7e0c089c0.ps1"}}]);