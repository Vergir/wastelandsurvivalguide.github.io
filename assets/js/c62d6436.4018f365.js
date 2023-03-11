"use strict";(self.webpackChunkwsg=self.webpackChunkwsg||[]).push([[8142],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},i="LOD Guide",l={unversionedId:"lod",id:"lod",title:"LOD Guide",description:"Before getting started, there are a few things you should know. First, generating LOD is not a requirement, but it will add detail in the distance thanks to the mod linked below. It becomes a requirement for proper visuals if you installed texture mods (such as NMCs or Poco Bueno) or are using a mod that requires LOD to be generated (like MoreMojave). Terrain LOD creates a much larger file size (+500mb) and potential performance loss for a very minimal visual improvement. Therefore, this guide will focus only on generating object LOD with xLODGen. If you need to generate xLODGen terrain LOD for whatever reason, the instructions will be the exact same except you will need to enable Terrain LOD option in addition to the Object LOD option.",source:"@site/docs/lod.md",sourceDirName:".",slug:"/lod",permalink:"/wsg.github.io/docs/lod",draft:!1,editUrl:"https://github.com/wastelandsurvivalguide/wastelandsurvivalguide.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/lod.md",tags:[],version:"current",frontMatter:{},sidebar:"appendixSidebar",previous:{title:"The Method",permalink:"/wsg.github.io/docs/themethod"},next:{title:"Dangerous Dogma",permalink:"/wsg.github.io/docs/dogma"}},s={},p=[{value:"<strong>Installing xLODGen</strong>",id:"installing-xlodgen",level:2},{value:"<strong>Installing LOD Resources</strong>",id:"installing-lod-resources",level:2},{value:"<strong>Running xLODGen</strong>",id:"running-xlodgen",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lod-guide"},"LOD Guide"),(0,o.kt)("p",null,"Before getting started, there are a few things you should know. First, generating LOD is not a requirement, but it will add detail in the distance thanks to the mod linked below. It becomes a requirement for proper visuals if you installed texture mods (such as NMCs or Poco Bueno) or are using a mod that requires LOD to be generated (like MoreMojave). Terrain LOD creates a much larger file size (+500mb) and potential performance loss for a very minimal visual improvement. Therefore, this guide will focus only on generating object LOD with xLODGen. If you need to generate xLODGen terrain LOD for whatever reason, the instructions will be the exact same except you will need to enable ",(0,o.kt)("strong",{parentName:"p"},"Terrain LOD")," option in addition to the ",(0,o.kt)("strong",{parentName:"p"},"Object LOD")," option."),(0,o.kt)("h2",{id:"installing-xlodgen"},(0,o.kt)("strong",{parentName:"h2"},"Installing xLODGen")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the latest ",(0,o.kt)("strong",{parentName:"li"},"xLODGen")," file from ",(0,o.kt)("a",{parentName:"li",href:"https://stepmodifications.org/forum/topic/13451-xlodgen-terrain-lod-beta-94-for-fnv-fo3-fo4-fo4vr-tes5-sse-tes5vr-enderal-enderalse/"},"here"),"."),(0,o.kt)("li",{parentName:"ol"},"Once the download has finished, extract the contents of the archive to any location of your choice."),(0,o.kt)("li",{parentName:"ol"},"In MO2, select the button at the top of MO2 to open the executables menu."),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"+")," at the top of the window and the select ",(0,o.kt)("strong",{parentName:"li"},"Add from file...")),(0,o.kt)("li",{parentName:"ol"},"From the pop-up, navigate to where xLODGen is installed and select ",(0,o.kt)("strong",{parentName:"li"},"xLODGen.exe"),"."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Arguments"),' box in the right pane, enter: -FNV -O:"C:\\Output\\"')),(0,o.kt)("p",null,"This argument will make the files generated through xLODGen appear in a folder called ",(0,o.kt)("strong",{parentName:"p"},"Output")," on your ","*","*","C:","*","*"," drive (the drive Windows is installed on). You can change this path to whatever you would like if you would prefer the files to be generated elsewhere (Not a UAC protected folder or the game folder)."),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Apply")," then ",(0,o.kt)("strong",{parentName:"li"},"OK"),".")),(0,o.kt)("h2",{id:"installing-lod-resources"},(0,o.kt)("strong",{parentName:"h2"},"Installing LOD Resources")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.nexusmods.com/newvegas/mods/61206"},"LOD Additions and Improvements")," - ",(0,o.kt)("strong",{parentName:"li"},"Main File - LODadditions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.nexusmods.com/newvegas/mods/77945"},"LOD Additions - TTW Patch")," - ",(0,o.kt)("strong",{parentName:"li"},"Patch File"))),(0,o.kt)("p",null,"This mod will eventually be merged into TTW."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.nexusmods.com/newvegas/mods/79734"},"Wasted LOD - Cliffs of DC")," - ",(0,o.kt)("strong",{parentName:"li"},"Main File - Wasted DC"))),(0,o.kt)("h2",{id:"running-xlodgen"},(0,o.kt)("strong",{parentName:"h2"},"Running xLODGen")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select xLODGen from the executables drop-down in the top right of MO2 and click ",(0,o.kt)("strong",{parentName:"li"},"Run"),"."),(0,o.kt)("li",{parentName:"ol"},"Once the program has loaded, right-click in the left pane and click ",(0,o.kt)("strong",{parentName:"li"},"Select All"),"."),(0,o.kt)("li",{parentName:"ol"},"In the right pane, check ",(0,o.kt)("strong",{parentName:"li"},"Objects LOD")," but leave ",(0,o.kt)("strong",{parentName:"li"},"Trees LOD")," unchecked.")),(0,o.kt)("p",null,"Tree LOD is not functional in New Vegas. LOD for trees is covered in Object LOD."),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Under the ",(0,o.kt)("strong",{parentName:"li"},"Objects LOD")," section, change the ",(0,o.kt)("strong",{parentName:"li"},"Atlas size")," option to ",(0,o.kt)("strong",{parentName:"li"},"8192")," x ",(0,o.kt)("strong",{parentName:"li"},"8192"),"."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Generate"),"."),(0,o.kt)("li",{parentName:"ol"},"Wait for the message ",(0,o.kt)("strong",{parentName:"li"},"LOD Generator: finished (you can close this application now)")," to appear (Generation time depends on your CPU performance), then close out of the program."),(0,o.kt)("li",{parentName:"ol"},"In MO2, right-click on the ",(0,o.kt)("em",{parentName:"li"},"Overwrite")," folder at the bottom of the left pane and select ",(0,o.kt)("strong",{parentName:"li"},"All Mods -> Create empty mod above.")),(0,o.kt)("li",{parentName:"ol"},"Title the mod ",(0,o.kt)("strong",{parentName:"li"},"FNVLODGen Output.")),(0,o.kt)("li",{parentName:"ol"},"Navigate to where the LOD files were generated and select both the textures and meshes folders."),(0,o.kt)("li",{parentName:"ol"},"Cut them to the ",(0,o.kt)("strong",{parentName:"li"},"FNVLODGen Output")," mod you just created (right-click on the mod and select ",(0,o.kt)("strong",{parentName:"li"},"Open in Explorer)."))))}c.isMDXComponent=!0}}]);