"use strict";(self.webpackChunkwsg=self.webpackChunkwsg||[]).push([[2603],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>c});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var r=a.createContext({}),u=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=u(e.components);return a.createElement(r.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),d=u(n),p=l,c=d["".concat(r,".").concat(p)]||d[p]||m[p]||i;return n?a.createElement(c,s(s({ref:t},h),{},{components:n})):a.createElement(c,s({ref:t},h))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o[d]="string"==typeof e?e:l,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9001:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const i={},s="Visuals",o={unversionedId:"visuals",id:"visuals",title:"Visuals",description:"WSG doesn't cover texture mods as most of our team doesn't use them, but please check out",source:"@site/docs/visuals.md",sourceDirName:".",slug:"/visuals",permalink:"/wsg.github.io/docs/visuals",draft:!1,editUrl:"https://github.com/wastelandsurvivalguide/wastelandsurvivalguide.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/visuals.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Overhauls",permalink:"/wsg.github.io/docs/overhauls"},next:{title:"Animations",permalink:"/wsg.github.io/docs/animations"}},r={},u=[{value:"Visual Improvements",id:"visual-improvements",level:2},{value:"Fog-based Object Culling",id:"fog-based-object-culling",level:3},{value:"Installation:",id:"installation",level:4},{value:"High Resolution Water Fog",id:"high-resolution-water-fog",level:3},{value:"Installation:",id:"installation-1",level:4},{value:"High Resolution Screens",id:"high-resolution-screens",level:3},{value:"Installation:",id:"installation-2",level:4},{value:"High Res Local Maps",id:"high-res-local-maps",level:3},{value:"Installation:",id:"installation-3",level:4},{value:"Improved LOD Noise Texture",id:"improved-lod-noise-texture",level:3},{value:"Installation:",id:"installation-4",level:4},{value:"Mostly Fixed Facegen Tints TTW",id:"mostly-fixed-facegen-tints-ttw",level:3},{value:"Installation:",id:"installation-5",level:4},{value:"Power Armor Visual Enhancement",id:"power-armor-visual-enhancement",level:3},{value:"Installation:",id:"installation-6",level:4},{value:"CPI - Mod Patches",id:"cpi---mod-patches",level:3},{value:"Installation:",id:"installation-7",level:4},{value:"Lighting &amp; Weather",id:"lighting--weather",level:2},{value:"Dusty Distance Redone",id:"dusty-distance-redone",level:3},{value:"Installation:",id:"installation-8",level:4},{value:"High Resolution Bloom NVSE",id:"high-resolution-bloom-nvse",level:3},{value:"Installation:",id:"installation-9",level:4},{value:"Improved Lighting Shaders",id:"improved-lighting-shaders",level:3},{value:"Installation:",id:"installation-10",level:4},{value:"MoonlightNVSE",id:"moonlightnvse",level:3},{value:"Installation:",id:"installation-11",level:4},{value:"No Muzzle Flash Lights",id:"no-muzzle-flash-lights",level:3},{value:"Installation:",id:"installation-12",level:4},{value:"Pip-Boy Shading Fix NVSE",id:"pip-boy-shading-fix-nvse",level:3},{value:"Installation:",id:"installation-13",level:4},{value:"Atmospheric Lighting Tweaks",id:"atmospheric-lighting-tweaks",level:3},{value:"Installation:",id:"installation-14",level:4},{value:"Desert Natural Weathers",id:"desert-natural-weathers",level:3},{value:"Installation:",id:"installation-15",level:4}],h={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"visuals"},"Visuals"),(0,l.kt)("admonition",{title:"Where are all the texture mods?",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"WSG doesn't cover texture mods as most of our team doesn't use them, but please check out\n",(0,l.kt)("a",{parentName:"p",href:"https://salamand3r.fail/texture-guide"},"Salamand3r's Texture Guide")," if it's something you\nare looking to add to your game.")),(0,l.kt)("h2",{id:"visual-improvements"},"Visual Improvements"),(0,l.kt)("h3",{id:"fog-based-object-culling"},(0,l.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/79516"},"Fog-based Object Culling")),(0,l.kt)("p",null,"Dynamically adjusts draw distance in accordance with the fog to improve performance with little to no visual difference."),(0,l.kt)("h4",{id:"installation"},"Installation:"),(0,l.kt)("p",null,"Main File - Fog-based Object Culling"),(0,l.kt)("h3",{id:"high-resolution-water-fog"},(0,l.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/78400"},"High Resolution Water Fog")),(0,l.kt)("p",null,"Increases resolution of water depth render target, thus significantly reducing aliasing and improving image quality."),(0,l.kt)("h4",{id:"installation-1"},"Installation:"),(0,l.kt)("p",null,"Main File - High Resolution Water Fog"),(0,l.kt)("h3",{id:"high-resolution-screens"},(0,l.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/77989"},"High Resolution Screens")),(0,l.kt)("p",null,"Increases the render resolution of in-game screens (Pip-Boy, terminals, character creation menu) to match your monitor resolution, making them much sharper and more readable."),(0,l.kt)("h4",{id:"installation-2"},"Installation:"),(0,l.kt)("p",null,"Main File - High Resolution Screens"),(0,l.kt)("h3",{id:"high-res-local-maps"},(0,l.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/77963"},"High Res Local Maps")),(0,l.kt)("p",null,"Increases resolution of local maps, resulting in a sharper and clearer image."),(0,l.kt)("h4",{id:"installation-3"},"Installation:"),(0,l.kt)("p",null,"Main File - High Res Local Maps"),(0,l.kt)("h3",{id:"improved-lod-noise-texture"},(0,l.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/46451"},"Improved LOD Noise Texture")),(0,l.kt)("p",null,"Makes distant land textures less ugly."),(0,l.kt)("h4",{id:"installation-4"},"Installation:"),(0,l.kt)("p",null,"Main File - Improved LOD noise Texture"),(0,l.kt)("h3",{id:"mostly-fixed-facegen-tints-ttw"},(0,l.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/71577"},"Mostly Fixed Facegen Tints TTW")),(0,l.kt)("p",null,"Removes unsightly green tint from NPC face textures."),(0,l.kt)("h4",{id:"installation-5"},"Installation:"),(0,l.kt)("p",null,"Main File - FaceGen Tint Fixes for TTW"),(0,l.kt)("h3",{id:"power-armor-visual-enhancement"},(0,l.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/74786"},"Power Armor Visual Enhancement")),(0,l.kt)("p",null,"PAVE is a retexture pack for all power armors in FNV and F3/TTW."),(0,l.kt)("h4",{id:"installation-6"},"Installation:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Main File - Power Armor Visual Enhancement 2K",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Double-click the mod in the left pane & use the Optional ESPs menu to hide ",(0,l.kt)("inlineCode",{parentName:"li"},"PAVE_NV.esp")))),(0,l.kt)("li",{parentName:"ul"},"Update File - PAVE Compatiblity Plugins",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Double-click the mod in the left pane & use the Optional ESPs menu to hide ",(0,l.kt)("inlineCode",{parentName:"li"},"PAVE_NV.esp"))))),(0,l.kt)("h3",{id:"cpi---mod-patches"},(0,l.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/65046"},"CPI - Mod Patches")),(0,l.kt)("p",null,'Gives the "Consistent Pip-Boy Icons" treatment to modded content such as Cyberware. We install this file very late in the guide to ensure it overwrites all the other mods in the guide and we can see all of its icons.'),(0,l.kt)("h4",{id:"installation-7"},"Installation:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Main File - 3. CPI - Mod Patches",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"In the Installer just click Install")))),(0,l.kt)("h2",{id:"lighting--weather"},"Lighting & Weather"),(0,l.kt)("h3",{id:"dusty-distance-redone"},(0,l.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/75183"},"Dusty Distance Redone")),(0,l.kt)("p",null,'Applies a subtle "distant fog" effect that looks nice and can hide ugly LOD, z-fighting and other engine bugs without feeling intrusive.'),(0,l.kt)("h4",{id:"installation-8"},"Installation:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Main File - Dusty Distance Redone-"),(0,l.kt)("li",{parentName:"ul"},"Optional File - Dusty Distance Redone - 39k (no nights tweaks)")),(0,l.kt)("h3",{id:"high-resolution-bloom-nvse"},(0,l.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/77933"},"High Resolution Bloom NVSE")),(0,l.kt)("p",null,"Increases bloom precision, reducing its flicker."),(0,l.kt)("h4",{id:"installation-9"},"Installation:"),(0,l.kt)("p",null,"Main File - High Resolution Bloom"),(0,l.kt)("h3",{id:"improved-lighting-shaders"},(0,l.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/69833"},"Improved Lighting Shaders")),(0,l.kt)("p",null,"Fixes exterior lighting bugs & allows up to 4x the number of active lights."),(0,l.kt)("h4",{id:"installation-10"},"Installation:"),(0,l.kt)("p",null,"Main File - Improved Lighting Shaders"),(0,l.kt)("h3",{id:"moonlightnvse"},(0,l.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/77683"},"MoonlightNVSE")),(0,l.kt)("p",null,"Fixes moonlight, making the moon the light caster instead of the sun."),(0,l.kt)("h4",{id:"installation-11"},"Installation:"),(0,l.kt)("p",null,"Main File - MoonlightNVSE"),(0,l.kt)("h3",{id:"no-muzzle-flash-lights"},(0,l.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/77781"},"No Muzzle Flash Lights")),(0,l.kt)("p",null,"Improves game performance in combat by disabling lights cast on the environment by muzzle flashes.\nOnly the radiant light cast ",(0,l.kt)("em",{parentName:"p"},"by")," the flashes is disabled - not the muzzle flashes themselves."),(0,l.kt)("h4",{id:"installation-12"},"Installation:"),(0,l.kt)("p",null,"Main File - No More Muzzle Flash Lights"),(0,l.kt)("h3",{id:"pip-boy-shading-fix-nvse"},(0,l.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/77957"},"Pip-Boy Shading Fix NVSE")),(0,l.kt)("p",null,"By default, the Pip-Boy ignores external lights, making it appear oddly dark - especially in interiors. This mod fixes that."),(0,l.kt)("h4",{id:"installation-13"},"Installation:"),(0,l.kt)("p",null,"Main File - Pip Boy Shading Fix"),(0,l.kt)("h3",{id:"atmospheric-lighting-tweaks"},(0,l.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/79378"},"Atmospheric Lighting Tweaks")),(0,l.kt)("p",null,"Makes changes to Image Spaces and Lighting Templates to give interiors a more dynamic and atmospheric look."),(0,l.kt)("h4",{id:"installation-14"},"Installation:"),(0,l.kt)("p",null,"Main File - Atmospheric Lighting Tweaks - TTW"),(0,l.kt)("h3",{id:"desert-natural-weathers"},(0,l.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/75437"},"Desert Natural Weathers")),(0,l.kt)("p",null,"An overhaul of weathers with 360 degree panoramic cloud textures, improved lighting, and DLC support."),(0,l.kt)("h4",{id:"installation-15"},"Installation:"),(0,l.kt)("p",null,"Main File - Desert Natural Weathers TTW"))}m.isMDXComponent=!0}}]);