(self.webpackChunk=self.webpackChunk||[]).push([[27673,8710,56435,24687],{3905:(e,t,a)=>{"use strict";a.r(t),a.d(t,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>x,useMDXComponents:()=>s,withMDXComponents:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),m=function(e){return function(t){var a=s(t.components);return n.createElement(e,i({},t,{components:a}))}},s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(a),c=r,f=m["".concat(o,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(f,l(l({ref:t},d),{},{components:a})):n.createElement(f,l({ref:t},d))}));function x(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},13919:(e,t,a)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,{b:()=>n,Z:()=>r})},44996:(e,t,a)=>{"use strict";a.r(t),a.d(t,{useBaseUrlUtils:()=>i,default:()=>o});var n=a(52263),r=a(13919);function i(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,l=void 0!==o&&o,p=i.absolute,d=void 0!==p&&p;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(l)return t+a;var m=a.startsWith(t)?a:t+a.replace(/^\//,"");return d?e+m:m}(i,a,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},55723:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>d,toc:()=>m,default:()=>c});var n=a(74034),r=a(79973),i=(a(67294),a(3905)),o=["components"],l={},p=void 0,d={unversionedId:"api-reference/types/CacheConfig",id:"version-v13.0.0/api-reference/types/CacheConfig",isDocsHomePage:!1,title:"CacheConfig",description:"Type CacheConfig",source:"@site/versioned_docs/version-v13.0.0/api-reference/types/CacheConfig.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/CacheConfig",permalink:"/docs/api-reference/types/CacheConfig",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/api-reference/types/CacheConfig.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Mofei Zhang",lastUpdatedAt:1647281761,formattedLastUpdatedAt:"3/14/2022",frontMatter:{}},m=[{value:"Type <code>CacheConfig</code>",id:"type-cacheconfig",children:[],level:4}],s={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.mdx)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h4",{id:"type-cacheconfig"},"Type ",(0,i.mdx)("inlineCode",{parentName:"h4"},"CacheConfig")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"An object with the following fields:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"force"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," A boolean. If true, causes a query to be issued unconditionally, regardless of the state of any configured response cache."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"poll"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," A number. Causes a query to live-update by polling at the specified interval, in milliseconds. (This value will be passed to ",(0,i.mdx)("inlineCode",{parentName:"li"},"setTimeout"),")."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"liveConfigId"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," A string. Causes a query to live-update by calling GraphQLLiveQuery; it represents a configuration of gateway when doing live query."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"metadata"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," An object. User-supplied metadata."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"transactionId"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," A string. A user-supplied value, intended for use as a unique id for a given instance of executing an operation.")))))}c.isMDXComponent=!0},43161:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>m,contentTitle:()=>s,metadata:()=>c,toc:()=>u,default:()=>x});var n=a(74034),r=a(79973),i=(a(67294),a(3905)),o=a(55723),l=a(88842),p=a(64912),d=["components"],m={},s=void 0,c={unversionedId:"api-reference/types/MutationConfig",id:"version-v13.0.0/api-reference/types/MutationConfig",isDocsHomePage:!1,title:"MutationConfig",description:"Type MutationConfig",source:"@site/versioned_docs/version-v13.0.0/api-reference/types/MutationConfig.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/MutationConfig",permalink:"/docs/api-reference/types/MutationConfig",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/api-reference/types/MutationConfig.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Mofei Zhang",lastUpdatedAt:1647281761,formattedLastUpdatedAt:"3/14/2022",frontMatter:{}},u=[{value:"Type <code>MutationConfig&lt;TMutationConfig: MutationParameters&gt;</code>",id:"type-mutationconfigtmutationconfig-mutationparameters",children:[],level:4},{value:"Type <code>MutationParameters</code>",id:"type-mutationparameters",children:[],level:4}],f={toc:u};function x(e){var t=e.components,a=(0,r.Z)(e,d);return(0,i.mdx)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h4",{id:"type-mutationconfigtmutationconfig-mutationparameters"},"Type ",(0,i.mdx)("inlineCode",{parentName:"h4"},"MutationConfig<TMutationConfig: MutationParameters>")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"An object with the following fields:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"cacheConfig"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,i.mdx)("a",{parentName:"li",href:"#type-cacheconfig"},(0,i.mdx)("inlineCode",{parentName:"a"},"CacheConfig"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"mutation"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"GraphQLTaggedNode"),". A mutation specified using a GraphQL literal"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"onError"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,i.mdx)("inlineCode",{parentName:"li"},"(Error) => void"),". An optional callback executed if the mutation results in an error."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"onCompleted"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,i.mdx)("inlineCode",{parentName:"li"},"($ElementType<TMutationConfig, 'response'>) => void"),". An optional callback that is executed when the mutation completes."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"onUnsubscribe"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,i.mdx)("inlineCode",{parentName:"li"},"() => void"),". An optional callback that is executed when the mutation the mutation is unsubscribed, which occurs when the returned ",(0,i.mdx)("inlineCode",{parentName:"li"},"Disposable")," is disposed."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"optimisticResponse"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," An object whose type matches the raw response type of the mutation. Make sure you decorate your mutation with ",(0,i.mdx)("inlineCode",{parentName:"li"},"@raw_response_type")," if you are using this field."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"optimisticUpdater"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,i.mdx)("a",{parentName:"li",href:"#type-selectorstoreupdater"},(0,i.mdx)("inlineCode",{parentName:"a"},"SelectorStoreUpdater")),". A callback that is executed when ",(0,i.mdx)("inlineCode",{parentName:"li"},"commitMutation")," is called, after the ",(0,i.mdx)("inlineCode",{parentName:"li"},"optimisticResponse")," has been normalized into the store."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"updater"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,i.mdx)("a",{parentName:"li",href:"#type-selectorstoreupdater"},(0,i.mdx)("inlineCode",{parentName:"a"},"SelectorStoreUpdater")),". A callback that is executed when a payload is received, after the payload has been written into the store."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"uploadables"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,i.mdx)("a",{parentName:"li",href:"#type-uploadablemap"},(0,i.mdx)("inlineCode",{parentName:"a"},"UploadableMap")),". An optional uploadable map."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"variables"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"$ElementType<TMutationConfig, 'variables'>"),". The variables to pass to the mutation.")))),(0,i.mdx)(o.default,{mdxType:"CacheConfig"}),(0,i.mdx)(l.default,{mdxType:"SelectorStoreUpdater"}),(0,i.mdx)(p.default,{mdxType:"UploadableMap"}),(0,i.mdx)("h4",{id:"type-mutationparameters"},"Type ",(0,i.mdx)("inlineCode",{parentName:"h4"},"MutationParameters")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"An object with the following fields:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"response"),": An object"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"variables"),": An object"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"rawResponse"),": An optional object")))))}x.isMDXComponent=!0},88842:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>p,contentTitle:()=>d,metadata:()=>m,toc:()=>s,default:()=>u});var n=a(74034),r=a(79973),i=(a(67294),a(3905)),o=a(44996),l=["components"],p={},d=void 0,m={unversionedId:"api-reference/types/SelectorStoreUpdater",id:"version-v13.0.0/api-reference/types/SelectorStoreUpdater",isDocsHomePage:!1,title:"SelectorStoreUpdater",description:"Type SelectorStoreUpdater",source:"@site/versioned_docs/version-v13.0.0/api-reference/types/SelectorStoreUpdater.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/SelectorStoreUpdater",permalink:"/docs/api-reference/types/SelectorStoreUpdater",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/api-reference/types/SelectorStoreUpdater.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Mofei Zhang",lastUpdatedAt:1647281761,formattedLastUpdatedAt:"3/14/2022",frontMatter:{}},s=[{value:"Type <code>SelectorStoreUpdater</code>",id:"type-selectorstoreupdater",children:[],level:4}],c={toc:s};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.mdx)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h4",{id:"type-selectorstoreupdater"},"Type ",(0,i.mdx)("inlineCode",{parentName:"h4"},"SelectorStoreUpdater")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"A function with signature ",(0,i.mdx)("inlineCode",{parentName:"li"},"(store: RecordSourceSelectorProxy, data) => void")),(0,i.mdx)("li",{parentName:"ul"},"This interface allows you to ",(0,i.mdx)("em",{parentName:"li"},"imperatively")," write and read data directly to and from the Relay store. This means that you have full control over how to update the store in response to the subscription payload: you can ",(0,i.mdx)("em",{parentName:"li"},"create entirely new records"),", or ",(0,i.mdx)("em",{parentName:"li"},"update or delete existing ones"),". The full API for reading and writing to the Relay store is available ",(0,i.mdx)("a",{href:(0,o.default)("docs/api-reference/store/#recordsourceselectorproxy")},"here"),".")))}u.isMDXComponent=!0},64912:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>d,toc:()=>m,default:()=>c});var n=a(74034),r=a(79973),i=(a(67294),a(3905)),o=["components"],l={},p=void 0,d={unversionedId:"api-reference/types/UploadableMap",id:"version-v13.0.0/api-reference/types/UploadableMap",isDocsHomePage:!1,title:"UploadableMap",description:"Type UploadableMap",source:"@site/versioned_docs/version-v13.0.0/api-reference/types/UploadableMap.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/UploadableMap",permalink:"/docs/api-reference/types/UploadableMap",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/api-reference/types/UploadableMap.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Mofei Zhang",lastUpdatedAt:1647281761,formattedLastUpdatedAt:"3/14/2022",frontMatter:{}},m=[{value:"Type <code>UploadableMap</code>",id:"type-uploadablemap",children:[],level:4}],s={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.mdx)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h4",{id:"type-uploadablemap"},"Type ",(0,i.mdx)("inlineCode",{parentName:"h4"},"UploadableMap")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"An object whose values are ",(0,i.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/File"},(0,i.mdx)("inlineCode",{parentName:"a"},"File"))," or ",(0,i.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Blob"},(0,i.mdx)("inlineCode",{parentName:"a"},"Blob")),".")))}c.isMDXComponent=!0}}]);