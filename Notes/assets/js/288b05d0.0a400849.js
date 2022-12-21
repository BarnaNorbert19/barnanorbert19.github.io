"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[4517],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5765:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},l="Failover",i={unversionedId:"Installs/Windows/Core/ActiveDirectory/Failover",id:"Installs/Windows/Core/ActiveDirectory/Failover",title:"Failover",description:"Let\xf6lthet\u0151 itt",source:"@site/docs/Installs/Windows/Core/ActiveDirectory/Failover.md",sourceDirName:"Installs/Windows/Core/ActiveDirectory",slug:"/Installs/Windows/Core/ActiveDirectory/Failover",permalink:"/Notes/docs/Installs/Windows/Core/ActiveDirectory/Failover",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Telep\xedt\xe9s",permalink:"/Notes/docs/Installs/Windows/Core/ActiveDirectory/Install"},next:{title:"Install",permalink:"/Notes/docs/Installs/Windows/Core/DHCP/Install"}},s={},c=[{value:"AD Install",id:"ad-install",level:2},{value:"Tartal\xe9k domain fel\xe9p\xedt\xe9se",id:"tartal\xe9k-domain-fel\xe9p\xedt\xe9se",level:2},{value:"DNS forwarder",id:"dns-forwarder",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"failover"},"Failover"),(0,a.kt)("admonition",{title:"Automatikus powershell script",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Let\xf6lthet\u0151 ",(0,a.kt)("a",{parentName:"p",href:"../../../../Scripts/AD_Failover_Install.ps1"},"itt"))),(0,a.kt)("h2",{id:"ad-install"},"AD Install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Add-WindowsFeature AD-Domain-Services\n")),(0,a.kt)("h2",{id:"tartal\xe9k-domain-fel\xe9p\xedt\xe9se"},"Tartal\xe9k domain fel\xe9p\xedt\xe9se"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"$Username  = \"DOMAINHERE\\Administrator\"\n$SecurePassword  = ConvertTo-SecureString \"PWDHERE\" -Asplaintext -Force\n$credentials = New-Object System.Management.Automation.PSCredential($Username, $SecurePassword)\nInstall-ADDSDomainController -CreateDnsDelegation:$false -DatabasePath 'C:\\Windows\\NTDS' -DomainName 'DOMAIHERE' -InstallDns:$true -LogPath 'C:\\Windows\\NTDS' -NoGlobalCatalog:$false -SiteName 'Default-First-Site-Name' -SysvolPath 'C:\\Windows\\SYSVOL' -NoRebootOnCompletion:$true -Force:$true -Credential $credentials\n")),(0,a.kt)("h2",{id:"dns-forwarder"},"DNS forwarder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-DnsServerForwarder -IPAddress 8.8.8.8\n")))}d.isMDXComponent=!0}}]);