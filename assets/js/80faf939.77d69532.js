(self.webpackChunk=self.webpackChunk||[]).push([[45785],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(a),h=r,f=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},68629:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(44256),r=a(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var t=e.children;return r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),t)}var l=function(){var e=r.useState(!1),t=e[0],a=e[1],n=function(e){a(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":r.createElement(r.Fragment,null,"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return r.createElement("p",null,"Let us know how these docs can be improved by",r.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},s=function(){return r.createElement(o,null,r.createElement(c,null),r.createElement(l,null))},d=function(){return r.createElement(o,null,r.createElement(l,null))};const u=function(){return(0,n.fbContent)({internal:r.createElement(s,null),external:r.createElement(d,null)})}},40262:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>c,contentTitle:()=>s,metadata:()=>d,toc:()=>u,default:()=>h});var n=a(22122),r=a(19756),i=(a(67294),a(3905)),o=a(68629),l=(a(44256),["components"]),c={id:"fetch-policies",title:"Fetch Policies",slug:"/guided-tour/reusing-cached-data/fetch-policies/",description:"Relay guide to fetch policies",keywords:["fetch policy","network-only","store-only","store-and-network","store-or-network"]},s=void 0,d={unversionedId:"guided-tour/reusing-cached-data/fetch-policies",id:"version-v12.0.0/guided-tour/reusing-cached-data/fetch-policies",isDocsHomePage:!1,title:"Fetch Policies",description:"Relay guide to fetch policies",source:"@site/versioned_docs/version-v12.0.0/guided-tour/reusing-cached-data/fetch-policies.md",sourceDirName:"guided-tour/reusing-cached-data",slug:"/guided-tour/reusing-cached-data/fetch-policies/",permalink:"/docs/guided-tour/reusing-cached-data/fetch-policies/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v12.0.0/guided-tour/reusing-cached-data/fetch-policies.md",version:"v12.0.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1634322671,formattedLastUpdatedAt:"10/15/2021",frontMatter:{id:"fetch-policies",title:"Fetch Policies",slug:"/guided-tour/reusing-cached-data/fetch-policies/",description:"Relay guide to fetch policies",keywords:["fetch policy","network-only","store-only","store-and-network","store-or-network"]},sidebar:"version-v12.0.0/docs",previous:{title:"Reusing Cached Data",permalink:"/docs/guided-tour/reusing-cached-data/"},next:{title:"Availability of Data",permalink:"/docs/guided-tour/reusing-cached-data/availability-of-data/"}},u=[],p={toc:u};function h(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The first step to reusing locally cached data is to pass a ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchPolicy")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"loadQuery")," function, which can be provided by ",(0,i.kt)("inlineCode",{parentName:"p"},"useQueryLoader")," (see the ",(0,i.kt)("a",{parentName:"p",href:"../../rendering/queries/"},"Fetching Queries section"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const React = require('React');\nconst {graphql} = require('react-relay');\n\nfunction AppTabs() {\n  const [\n    queryRef,\n    loadQuery,\n  ] = useQueryLoader<HomeTabQueryType>(HomeTabQuery);\n\n  const onSelectHomeTab = () => {\n    loadQuery({id: '4'}, {fetchPolicy: 'store-or-network'});\n  }\n\n  // ...\n}\n")),(0,i.kt)("p",null,"The provided ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchPolicy")," will determine:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"whether")," the query should be fulfilled from the local cache, and"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"whether")," a network request should be made to fetch the query from the server, depending on the ",(0,i.kt)("a",{parentName:"li",href:"../availability-of-data/"},"availability of the data for that query in the store"),".")),(0,i.kt)("p",null,"By default, Relay will try to read the query from the local cache; if any piece of data for that query is ",(0,i.kt)("a",{parentName:"p",href:"../presence-of-data/"},"missing")," or ",(0,i.kt)("a",{parentName:"p",href:"../staleness-of-data/"},"stale"),", it will fetch the entire query from the network. This default ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchPolicy"),' is called "',(0,i.kt)("em",{parentName:"p"},'store-or-network".')),(0,i.kt)("p",null,"Specifically, ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchPolicy")," can be any of the following options: **"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"store-or-network": ',(0,i.kt)("em",{parentName:"li"},"(default)")," ",(0,i.kt)("em",{parentName:"li"},"will")," reuse locally cached data, and will ",(0,i.kt)("em",{parentName:"li"},"only")," send a network request if any data for the query is ",(0,i.kt)("a",{parentName:"li",href:"../presence-of-data/"},"missing")," or ",(0,i.kt)("a",{parentName:"li",href:"../staleness-of-data/"},"stale"),". If the query is fully cached, a network request will ",(0,i.kt)("em",{parentName:"li"},"not")," be made."),(0,i.kt)("li",{parentName:"ul"},'"store-and-network": ',(0,i.kt)("em",{parentName:"li"},"will")," reuse locally cached data and will ",(0,i.kt)("em",{parentName:"li"},"always")," send a network request, regardless of whether any data was ",(0,i.kt)("a",{parentName:"li",href:"../presence-of-data/"},"missing")," or ",(0,i.kt)("a",{parentName:"li",href:"../staleness-of-data/"},"stale")," in the store."),(0,i.kt)("li",{parentName:"ul"},'"network-only": ',(0,i.kt)("em",{parentName:"li"},"will")," ",(0,i.kt)("em",{parentName:"li"},"not")," reuse locally cached data, and will ",(0,i.kt)("em",{parentName:"li"},"always")," send a network request to fetch the query, ignoring any data that might be locally cached and whether it's ",(0,i.kt)("a",{parentName:"li",href:"../presence-of-data/"},"missing")," or ",(0,i.kt)("a",{parentName:"li",href:"../staleness-of-data/"},"stale"),"."),(0,i.kt)("li",{parentName:"ul"},'"store-only": ',(0,i.kt)("em",{parentName:"li"},"will")," ",(0,i.kt)("em",{parentName:"li"},"only")," reuse locally cached data, and will ",(0,i.kt)("em",{parentName:"li"},"never")," send a network request to fetch the query. In this case, the responsibility of fetching the query falls to the caller, but this policy could also be used to read and operate and data that is entirely ",(0,i.kt)("a",{parentName:"li",href:"../../updating-data/local-data-updates/"},"local"),".")),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"refetch")," function discussed in the ",(0,i.kt)("a",{parentName:"p",href:"../../refetching/"},"Fetching and Rendering Different Data")," section also takes a ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchPolicy"),"."),(0,i.kt)(o.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0}}]);