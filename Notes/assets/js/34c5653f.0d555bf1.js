"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[5238],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),k=a,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5356:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"NAT"},l="NAT",i={unversionedId:"Installs/Mikrotik/CLI/NAT/NAT",id:"Installs/Mikrotik/CLI/NAT/NAT",title:"NAT",description:"NAT Masquerade/PAT/Overload",source:"@site/docs/Installs/Mikrotik/CLI/NAT/NAT.md",sourceDirName:"Installs/Mikrotik/CLI/NAT",slug:"/Installs/Mikrotik/CLI/NAT/",permalink:"/Notes/docs/Installs/Mikrotik/CLI/NAT/",draft:!1,tags:[],version:"current",frontMatter:{title:"NAT"},sidebar:"tutorialSidebar",previous:{title:"Failover",permalink:"/Notes/docs/Installs/Linux/Ubuntu/Active Directory/Failover"},next:{title:"Telep\xedt\xe9s",permalink:"/Notes/docs/Installs/Windows/Core/ActiveDirectory/Install"}},s={},p=[{value:"NAT Masquerade/PAT/Overload",id:"nat-masqueradepatoverload",level:2},{value:"Port forward",id:"port-forward",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nat"},"NAT"),(0,a.kt)("h2",{id:"nat-masqueradepatoverload"},"NAT Masquerade/PAT/Overload"),(0,a.kt)("p",null,"Egy adott ip pool/ip c\xedm\xe9t/c\xedmeit kicser\xe9li az interfacen l\xe9v\u0151 ipj\xe9re vagy vissza"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ip firewall nat add src-address=x.x.x.x/x action=masquerade out-interface=etherX chain=srcnat\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"chain=srcnat")," - A bels\u0151 h\xe1l\xf3zatb\xf3l",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"src-address")," - ezt/ezeket az ip c\xedmet/c\xedmeket",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"action=masquerade")," - ki szeretn\xe9nk cser\xe9lni",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"out-interface")," - ezen a kimen\u0151 az interf\xe9cen"),(0,a.kt)("h2",{id:"port-forward"},"Port forward"),(0,a.kt)("p",null,"Addott ip pool/ip + port-ot (csak egy\xfctt) tov\xe1bb\xedt egy adott ip-re"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ip firewall nat add chain=dstnat dst-address=x.x.x.x protocol=X dst-port=X action=dst-nat to-addresses=x.x.x.x to-ports=X\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"chain=dstnat")," - Bej\xf6v\u0151 csomagot",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"dst-address")," - ami erre az ipre megy",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"protocol")," - (nem k\xf6telez\u0151) ilyen protocollal",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"dst-port")," - ezen a porton",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"action=dst-nat")," - ir\xe1ny\xedtsa \xe1t",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"to-addresses")," - erre az ipre",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"to-ports")," - (nem k\xf6telez\u0151) erre a portra",(0,a.kt)("br",null)))}d.isMDXComponent=!0}}]);