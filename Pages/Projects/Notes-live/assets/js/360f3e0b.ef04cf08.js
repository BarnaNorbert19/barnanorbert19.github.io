"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[2943],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,v=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Install",l={unversionedId:"Installs/Windows/Core/Active Directory/Install",id:"Installs/Windows/Core/Active Directory/Install",title:"Install",description:"Let\xf6lthet\u0151 itt",source:"@site/docs/Installs/Windows/Core/Active Directory/Install.md",sourceDirName:"Installs/Windows/Core/Active Directory",slug:"/Installs/Windows/Core/Active Directory/Install",permalink:"/Pages/Projects/Notes-live/docs/Installs/Windows/Core/Active Directory/Install",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Failover",permalink:"/Pages/Projects/Notes-live/docs/Installs/Linux/Ubuntu/Active Directory/Failover"},next:{title:"Failover",permalink:"/Pages/Projects/Notes-live/docs/Installs/Windows/Core/Active Directory/Failover"}},s={},p=[{value:"AD Install",id:"ad-install",level:2},{value:"Domain fel\xe9p\xedt\xe9se",id:"domain-fel\xe9p\xedt\xe9se",level:2},{value:"Uninstall AD",id:"uninstall-ad",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install"},"Install"),(0,a.kt)("admonition",{title:"Automatikus powershell script",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Let\xf6lthet\u0151 ",(0,a.kt)("a",{parentName:"p",href:"../../../../Scripts/AD_Install.ps1"},"itt"))),(0,a.kt)("h2",{id:"ad-install"},"AD Install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Install-WindowsFeature AD-Domain-Services -IncludeManagementTools \n")),(0,a.kt)("h2",{id:"domain-fel\xe9p\xedt\xe9se"},"Domain fel\xe9p\xedt\xe9se"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-DomainMode")," \xe9s ",(0,a.kt)("inlineCode",{parentName:"p"},"-ForestMode")," a k\xf6vetkez\u0151 param\xe9tereket fogadja el: ",(0,a.kt)("inlineCode",{parentName:"p"},"Win2008"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Win2008R2"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Win2012"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Win2012R2"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"WinThreshold"),"(Win2016), ",(0,a.kt)("inlineCode",{parentName:"p"},"Default")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Install-ADDSFOREST -DomainName DOMAIN.NAME -DomainNetbiosName DOMAIN -Force -DomainMode WinThreshold -ForestMode WinThreshold\n")),(0,a.kt)("admonition",{title:"Samba Win2008R2 -t haszn\xe1l !",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Ha linux a partner szerver (failover vagy main ad, vagy esetleg valami m\xe1s), akkor mindenf\xe9lek\xe9ppen Win2008R2 -t v\xe1lassz.")),(0,a.kt)("h2",{id:"uninstall-ad"},"Uninstall AD"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Uninstall-ADDSDomainController -DemoteOperationMasterRole:$true -IgnoreLastDnsServerForZone:$true -LastDomainControllerInDomain:$true -RemoveDnsDelegation:$true -RemoveApplicationPartitions:$true -IgnoreLastDCInDomainMismatch:$true -Force:$true\n")))}d.isMDXComponent=!0}}]);