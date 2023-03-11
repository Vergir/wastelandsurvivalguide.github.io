"use strict";(self.webpackChunkwsg=self.webpackChunkwsg||[]).push([[5581],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9155:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>C,contentTitle:()=>E,default:()=>T,frontMatter:()=>x,metadata:()=>I,toc:()=>V});var n=a(7462),r=a(7294),l=a(3905),o=a(6010),i=a(2466),s=a(6550),u=a(1980),p=a(7392),c=a(12);function m(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=g({queryString:a,groupId:n}),[p,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),h=(()=>{const e=s??p;return f({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),m(e)}),[u,m,l]),tabValues:l}}var b=a(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==l&&(c(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}const O={tabItem:"tabItem_Ymn6"};function S(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(O.tabItem,n),hidden:a},t)}const x={},E="Game Setup",I={unversionedId:"setup",id:"setup",title:"Game Setup",description:"Before we can proceed with the guide, a clean installation is required for both Fallout NV and Fallout 3.",source:"@site/docs/setup.md",sourceDirName:".",slug:"/setup",permalink:"/wsg.github.io/docs/setup",draft:!1,editUrl:"https://github.com/wastelandsurvivalguide/wastelandsurvivalguide.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/setup.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Intro",permalink:"/wsg.github.io/docs/intro"},next:{title:"Mod Organizer 2",permalink:"/wsg.github.io/docs/mo2"}},C={},V=[{value:"Install Location",id:"install-location",level:2},{value:"Enabling File Extensions",id:"enabling-file-extensions",level:3},{value:"Uninstalling the Games",id:"uninstalling-the-games",level:2},{value:"New Steam Library",id:"new-steam-library",level:2},{value:"Installing the Games",id:"installing-the-games",level:2},{value:"Important Locations",id:"important-locations",level:3},{value:"Generating Fresh .INI Files",id:"generating-fresh-ini-files",level:3}],G={toc:V},F="wrapper";function T(e){let{components:t,...r}=e;return(0,l.kt)(F,(0,n.Z)({},G,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"game-setup"},"Game Setup"),(0,l.kt)("p",null,"Before we can proceed with the guide, a ",(0,l.kt)("strong",{parentName:"p"},"clean installation")," is required for both Fallout NV and Fallout 3."),(0,l.kt)("admonition",{title:"Video Walkthrough Available",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"A ",(0,l.kt)("a",{parentName:"p",href:"https://youtu.be/I7yfNSFVyx4"},"YouTube video")," covering the steps in this section is available.")),(0,l.kt)("h2",{id:"install-location"},"Install Location"),(0,l.kt)("p",null,"It is vitally important to ",(0,l.kt)("strong",{parentName:"p"},"avoid any default Windows folders")," such as ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\Program Files"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\Program Files x86"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"Desktop"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Documents")," (not an exhaustive list). Windows User Account Control (UAC) monitors these folders which\nwill interfere with the games and modding tools. A safe location is any non-default Windows folder, e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\Games\\Steam"),".\nIt is also recommended to install on an SSD, as this will vastly improve performance and loading times."),(0,l.kt)("h3",{id:"enabling-file-extensions"},"Enabling File Extensions"),(0,l.kt)("p",null,"By default, file extensions (such as .ini, .dll, or .esp) are hidden in Windows File Explorer,\nwhich will make distinguishing between files more difficult. Open File Explorer from the Start Menu,\nfrom your desktop, or with the keyboard shortcut ",(0,l.kt)("strong",{parentName:"p"},"Win + E"),", and select\n",(0,l.kt)("strong",{parentName:"p"},"View > Show > File name extensions")," to disable this behaviour.\n",(0,l.kt)("img",{alt:"Show file extensions in File Explorer",src:a(7499).Z,width:"1122",height:"631"})),(0,l.kt)("h2",{id:"uninstalling-the-games"},"Uninstalling the Games"),(0,l.kt)("p",null,"If the game(s) are installed, uninstall them now. Open your Steam or GOG library, right-click Fallout New Vegas and choose ",(0,l.kt)("strong",{parentName:"p"},"Manage > Uninstall"),".\nNext, delete all ",(0,l.kt)("inlineCode",{parentName:"p"},".ini")," files in ",(0,l.kt)("inlineCode",{parentName:"p"},"Documents\\My Games\\FalloutNV"),". Repeat these steps for ",(0,l.kt)("strong",{parentName:"p"},"Fallout 3"),"."),(0,l.kt)("h2",{id:"new-steam-library"},"New Steam Library"),(0,l.kt)("p",null,"Steam users must create a new Steam Library to install the game into, as the default library is in a default Windows UAC-protected folder\n(",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\Program Files x86\\Steam"),"). Open ",(0,l.kt)("strong",{parentName:"p"},"Steam > Settings > Downloads > Steam Library Folders")," and select a location outside of any default\nWindows folders (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\Games\\Steam"),")."),(0,l.kt)("admonition",{title:'"Steam Already Has a Library On This Drive"',type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"If you want your new Steam library to be on the same drive as the default ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\Program Files x86\\Steam"),", you must\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/LostDragonist/steam-library-setup-tool/wiki/Usage-Guide"},"circumvent Steam's one-library-per-drive limit"),".")),(0,l.kt)("h2",{id:"installing-the-games"},"Installing the Games"),(0,l.kt)("p",null,"Open your Steam or GOG Galaxy library, find ",(0,l.kt)("strong",{parentName:"p"},"Fallout New Vegas")," in the list and select ",(0,l.kt)("strong",{parentName:"p"},"Install"),".\nWhen prompted to choose a location, use the new Steam library you just created, or any non-UAC folder if on GOG.\nRepeat these steps for ",(0,l.kt)("strong",{parentName:"p"},"Fallout 3"),"."),(0,l.kt)("h3",{id:"important-locations"},"Important Locations"),(0,l.kt)("p",null,"The guide will frequently refer to two important folders:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Root")," is the folder where Fallout New Vegas is installed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Data")," is a subfolder inside root where the game's assets are located.")),(0,l.kt)(N,{groupId:"platforms",mdxType:"Tabs"},(0,l.kt)(S,{value:"steam",label:"Steam",mdxType:"TabItem"},(0,l.kt)("b",null,"Root"),": ",(0,l.kt)("code",null,"Steam\\steamapps\\common\\Fallout New Vegas"),(0,l.kt)("br",null),(0,l.kt)("b",null,"Data"),": ",(0,l.kt)("code",null,"Steam\\steamapps\\common\\Fallout New Vegas\\Data")),(0,l.kt)(S,{value:"gog",label:"GOG",mdxType:"TabItem"},(0,l.kt)("b",null,"Root"),": ",(0,l.kt)("code",null,"GOG Galaxy\\Games\\Fallout New Vegas"),(0,l.kt)("br",null),(0,l.kt)("b",null,"Data"),": ",(0,l.kt)("code",null,"GOG Galaxy\\Games\\Fallout New Vegas\\Data"))),(0,l.kt)("h3",{id:"generating-fresh-ini-files"},"Generating Fresh .INI Files"),(0,l.kt)("p",null,"Run Fallout New Vegas through Steam or GOG. If you do not get a ",(0,l.kt)("strong",{parentName:"p"},"Detecting Video Hardware")," pop-up, ensure you deleted all\n.ini files in ",(0,l.kt)("inlineCode",{parentName:"p"},"Documents\\My Games\\FalloutNV")," and try again. After clicking OK to the ",(0,l.kt)("strong",{parentName:"p"},"Detecting Video Hardware")," pop-ups,\nclick ",(0,l.kt)("strong",{parentName:"p"},"Options"),". Choose either the ",(0,l.kt)("strong",{parentName:"p"},"High")," or ",(0,l.kt)("strong",{parentName:"p"},"Ultra")," preset then set your preferred ",(0,l.kt)("strong",{parentName:"p"},"Resolution"),". Click ",(0,l.kt)("strong",{parentName:"p"},"OK")," then ",(0,l.kt)("strong",{parentName:"p"},"Exit"),"."),(0,l.kt)("p",null,"Now run ",(0,l.kt)("strong",{parentName:"p"},"Fallout 3")," through Steam, GOG, or Epic. Click OK to the ",(0,l.kt)("strong",{parentName:"p"},"Detecting Video Hardware")," pop-ups, and exit the launcher."))}T.isMDXComponent=!0},7499:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/show file extensions-a4ed2bc53f26afc5e19ed5d16a0294c6.webp"}}]);