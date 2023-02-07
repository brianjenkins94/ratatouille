(()=>{var e={};e.id=660,e.ids=[660],e.modules={256:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(997),i=r.n(n),s=r(331);function l(){return(0,n.jsxs)(s.Html,{lang:"en",children:[n.jsx(s.Head,{}),(0,n.jsxs)("body",{children:[n.jsx(s.Main,{}),n.jsx(s.NextScript,{})]})]})}},13:(e,t,r)=>{"use strict";n={value:!0},t.Html=$,t.Main=w,n=void 0;var n,i=f(r(689)),s=r(724),l=r(140),a=r(716),o=p(r(274)),c=r(743);class u extends i.default.Component{static getInitialProps(e){return e.defaultGetInitialProps(e)}render(){return i.default.createElement($,null,i.default.createElement(S,null),i.default.createElement("body",null,i.default.createElement(w,null),i.default.createElement(I,null)))}}function p(e){return e&&e.__esModule?e:{default:e}}function d(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function f(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}function h(e,t,r){let n=l.getPageFiles(e,"/_app"),i=r?[]:l.getPageFiles(e,t);return{sharedFiles:n,pageFiles:i,allFiles:[...new Set([...n,...i])]}}function m(e,t){let{assetPrefix:r,buildManifest:n,devOnlyCacheBusterQueryString:s,disableOptimizedLoading:l,crossOrigin:a}=e;return n.polyfillFiles.filter(e=>e.endsWith(".js")&&!e.endsWith(".module.js")).map(e=>i.default.createElement("script",{key:e,defer:!l,nonce:t.nonce,crossOrigin:t.crossOrigin||a,noModule:!0,src:`${r}/_next/${e}${s}`}))}function g(e){return!!e&&!!e.props}function y({styles:e}){if(!e)return null;let t=Array.isArray(e)?e:[];if(e.props&&Array.isArray(e.props.children)){let r=e=>{var t,r;return null==e?void 0:null==(t=e.props)?void 0:null==(r=t.dangerouslySetInnerHTML)?void 0:r.__html};e.props.children.forEach(e=>{Array.isArray(e)?e.forEach(e=>r(e)&&t.push(e)):r(e)&&t.push(e)})}return i.default.createElement("style",{"amp-custom":"",dangerouslySetInnerHTML:{__html:t.map(e=>e.props.dangerouslySetInnerHTML.__html).join("").replace(/\/\*# sourceMappingURL=.*\*\//g,"").replace(/\/\*@ sourceURL=.*?\*\//g,"")}})}function v(e,t,r){let{dynamicImports:n,assetPrefix:s,isDevelopment:l,devOnlyCacheBusterQueryString:a,disableOptimizedLoading:o,crossOrigin:c}=e;return n.map(e=>!e.endsWith(".js")||r.allFiles.includes(e)?null:i.default.createElement("script",{async:!l&&o,defer:!o,key:e,src:`${s}/_next/${encodeURI(e)}${a}`,nonce:t.nonce,crossOrigin:t.crossOrigin||c}))}function x(e,t,r){var n;let{assetPrefix:s,buildManifest:l,isDevelopment:a,devOnlyCacheBusterQueryString:o,disableOptimizedLoading:c,crossOrigin:u}=e,p=r.allFiles.filter(e=>e.endsWith(".js")),d=null==(n=l.lowPriorityFiles)?void 0:n.filter(e=>e.endsWith(".js"));return[...p,...d].map(e=>i.default.createElement("script",{key:e,src:`${s}/_next/${encodeURI(e)}${o}`,nonce:t.nonce,async:!a&&c,defer:!c,crossOrigin:t.crossOrigin||u}))}function _(e,t){let{assetPrefix:r,scriptLoader:n,crossOrigin:s,nextScriptWorkers:l}=e;if(!l)return null;try{let{partytownSnippet:e}=require("@builder.io/partytown/integration"),l=Array.isArray(t.children)?t.children:[t.children],a=l.find(e=>{var t,r;return g(e)&&(null==e?void 0:null==(t=e.props)?void 0:null==(r=t.dangerouslySetInnerHTML)?void 0:r.__html.length)&&"data-partytown-config"in e.props});return i.default.createElement(i.default.Fragment,null,!a&&i.default.createElement("script",{"data-partytown-config":"",dangerouslySetInnerHTML:{__html:`
            partytown = {
              lib: "${r}/_next/static/~partytown/"
            };
          `}}),i.default.createElement("script",{"data-partytown":"",dangerouslySetInnerHTML:{__html:e()}}),(n.worker||[]).map((e,r)=>{let{strategy:n,src:l,children:a,dangerouslySetInnerHTML:o,...c}=e,u={};if(l)u.src=l;else if(o&&o.__html)u.dangerouslySetInnerHTML={__html:o.__html};else if(a)u.dangerouslySetInnerHTML={__html:"string"==typeof a?a:Array.isArray(a)?a.join(""):""};else throw Error("Invalid usage of next/script. Did you forget to include a src attribute or an inline script? https://nextjs.org/docs/messages/invalid-script");return i.default.createElement("script",Object.assign({},u,c,{type:"text/partytown",key:l||r,nonce:t.nonce,"data-nscript":"worker",crossOrigin:t.crossOrigin||s}))}))}catch(e){return o.default(e)&&"MODULE_NOT_FOUND"!==e.code&&console.warn(`Warning: ${e.message}`),null}}function E(e,t){let{scriptLoader:r,disableOptimizedLoading:n,crossOrigin:s}=e,l=_(e,t),a=(r.beforeInteractive||[]).filter(e=>e.src).map((e,r)=>{let{strategy:l,...a}=e;return i.default.createElement("script",Object.assign({},a,{key:a.src||r,defer:a.defer??!n,nonce:t.nonce,"data-nscript":"beforeInteractive",crossOrigin:t.crossOrigin||s}))});return i.default.createElement(i.default.Fragment,null,l,a)}function b(e){let{crossOrigin:t,nonce:r,...n}=e;return n}function k(e,t){return e||`${t}${t.includes("?")?"&":"?"}amp=1`}function O(e,t,r=""){if(!e)return{preconnect:null,preload:null};let n=e.pages["/_app"],s=e.pages[t],l=[...n??[],...s??[]],a=!!(0===l.length&&(n||s));return{preconnect:a?i.default.createElement("link",{rel:"preconnect",href:"/",crossOrigin:"anonymous"}):null,preload:l?l.map(e=>{let t=/\.(woff|woff2|eot|ttf|otf)$/.exec(e)[1];return i.default.createElement("link",{key:e,rel:"preload",href:`${r}/_next/${encodeURI(e)}`,as:"font",type:`font/${t}`,crossOrigin:"anonymous"})}):null}}n=u;class S extends i.default.Component{static contextType=c.HtmlContext;getCssLinks(e){let{assetPrefix:t,devOnlyCacheBusterQueryString:r,dynamicImports:n,crossOrigin:s,optimizeCss:l,optimizeFonts:a}=this.context,o=e.allFiles.filter(e=>e.endsWith(".css")),c=new Set(e.sharedFiles),u=new Set([]),p=Array.from(new Set(n.filter(e=>e.endsWith(".css"))));if(p.length){let e=new Set(o);p=p.filter(t=>!(e.has(t)||c.has(t))),u=new Set(p),o.push(...p)}let d=[];return o.forEach(e=>{let n=c.has(e);l||d.push(i.default.createElement("link",{key:`${e}-preload`,nonce:this.props.nonce,rel:"preload",href:`${t}/_next/${encodeURI(e)}${r}`,as:"style",crossOrigin:this.props.crossOrigin||s}));let a=u.has(e);d.push(i.default.createElement("link",{key:e,nonce:this.props.nonce,rel:"stylesheet",href:`${t}/_next/${encodeURI(e)}${r}`,crossOrigin:this.props.crossOrigin||s,"data-n-g":a?void 0:n?"":void 0,"data-n-p":a?void 0:n?void 0:""}))}),a&&(d=this.makeStylesheetInert(d)),0===d.length?null:d}getPreloadDynamicChunks(){let{dynamicImports:e,assetPrefix:t,devOnlyCacheBusterQueryString:r,crossOrigin:n}=this.context;return e.map(e=>e.endsWith(".js")?i.default.createElement("link",{rel:"preload",key:e,href:`${t}/_next/${encodeURI(e)}${r}`,as:"script",nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||n}):null).filter(Boolean)}getPreloadMainLinks(e){let{assetPrefix:t,devOnlyCacheBusterQueryString:r,scriptLoader:n,crossOrigin:s}=this.context,l=e.allFiles.filter(e=>e.endsWith(".js"));return[...(n.beforeInteractive||[]).map(e=>i.default.createElement("link",{key:e.src,nonce:this.props.nonce,rel:"preload",href:e.src,as:"script",crossOrigin:this.props.crossOrigin||s})),...l.map(e=>i.default.createElement("link",{key:e,nonce:this.props.nonce,rel:"preload",href:`${t}/_next/${encodeURI(e)}${r}`,as:"script",crossOrigin:this.props.crossOrigin||s}))]}getBeforeInteractiveInlineScripts(){let{scriptLoader:e}=this.context,{nonce:t,crossOrigin:r}=this.props;return(e.beforeInteractive||[]).filter(e=>!e.src&&(e.dangerouslySetInnerHTML||e.children)).map((e,n)=>{let{strategy:s,children:l,dangerouslySetInnerHTML:a,src:o,...c}=e,u="";return a&&a.__html?u=a.__html:l&&(u="string"==typeof l?l:Array.isArray(l)?l.join(""):""),i.default.createElement("script",Object.assign({},c,{dangerouslySetInnerHTML:{__html:u},key:c.id||n,nonce:t,"data-nscript":"beforeInteractive",crossOrigin:r||void 0}))})}getDynamicChunks(e){return v(this.context,this.props,e)}getPreNextScripts(){return E(this.context,this.props)}getScripts(e){return x(this.context,this.props,e)}getPolyfillScripts(){return m(this.context,this.props)}makeStylesheetInert(e){return i.default.Children.map(e,e=>{var t,r;if((null==e?void 0:e.type)==="link"&&(null==e?void 0:null==(t=e.props)?void 0:t.href)&&s.OPTIMIZED_FONT_PROVIDERS.some(({url:t})=>{var r,n;return null==e?void 0:null==(r=e.props)?void 0:null==(n=r.href)?void 0:n.startsWith(t)})){let t={...e.props||{},"data-href":e.props.href,href:void 0};return i.default.cloneElement(e,t)}if(null==e?void 0:null==(r=e.props)?void 0:r.children){let t={...e.props||{},children:this.makeStylesheetInert(e.props.children)};return i.default.cloneElement(e,t)}return e}).filter(Boolean)}render(){let{styles:e,ampPath:t,inAmpMode:n,hybridAmp:s,canonicalBase:l,__NEXT_DATA__:a,dangerousAsPath:o,headTags:c,unstable_runtimeJS:u,unstable_JsPreload:p,disableOptimizedLoading:d,optimizeCss:f,optimizeFonts:m,assetPrefix:g,fontLoaderManifest:v}=this.context,x=!1===u,_=!1===p||!d;this.context.docComponentsRendered.Head=!0;let{head:E}=this.context,S=[],j=[];E&&(E.forEach(e=>{e&&"link"===e.type&&"preload"===e.props.rel&&"style"===e.props.as?S.push(e):e&&j.push(e)}),E=S.concat(j));let I=i.default.Children.toArray(this.props.children).filter(Boolean);m&&!n&&(I=this.makeStylesheetInert(I));let $=!1,w=!1;E=i.default.Children.map(E||[],e=>{if(!e)return e;let{type:t,props:r}=e;if(n){let n="";if("meta"===t&&"viewport"===r.name?n='name="viewport"':"link"===t&&"canonical"===r.rel?w=!0:"script"===t&&(r.src&&-1>r.src.indexOf("ampproject")||r.dangerouslySetInnerHTML&&(!r.type||"text/javascript"===r.type))&&(n="<script",Object.keys(r).forEach(e=>{n+=` ${e}="${r[e]}"`}),n+="/>"),n)return console.warn(`Found conflicting amp tag "${e.type}" with conflicting prop ${n} in ${a.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`),null}else"link"===t&&"amphtml"===r.rel&&($=!0);return e});let M=h(this.context.buildManifest,this.context.__NEXT_DATA__.page,n),P=O(v,o,g);return i.default.createElement("head",Object.assign({},b(this.props)),this.context.isDevelopment&&i.default.createElement(i.default.Fragment,null,i.default.createElement("style",{"data-next-hide-fouc":!0,"data-ampdevmode":n?"true":void 0,dangerouslySetInnerHTML:{__html:"body{display:none}"}}),i.default.createElement("noscript",{"data-next-hide-fouc":!0,"data-ampdevmode":n?"true":void 0},i.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{display:block}"}}))),E,i.default.createElement("meta",{name:"next-head-count",content:i.default.Children.count(E||[]).toString()}),I,m&&i.default.createElement("meta",{name:"next-font-preconnect"}),P.preconnect,P.preload,n&&i.default.createElement(i.default.Fragment,null,i.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"}),!w&&i.default.createElement("link",{rel:"canonical",href:l+r(368).cleanAmpPath(o)}),i.default.createElement("link",{rel:"preload",as:"script",href:"https://cdn.ampproject.org/v0.js"}),i.default.createElement(y,{styles:e}),i.default.createElement("style",{"amp-boilerplate":"",dangerouslySetInnerHTML:{__html:"body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}"}}),i.default.createElement("noscript",null,i.default.createElement("style",{"amp-boilerplate":"",dangerouslySetInnerHTML:{__html:"body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}"}})),i.default.createElement("script",{async:!0,src:"https://cdn.ampproject.org/v0.js"})),!n&&i.default.createElement(i.default.Fragment,null,!$&&s&&i.default.createElement("link",{rel:"amphtml",href:l+k(t,o)}),this.getBeforeInteractiveInlineScripts(),!f&&this.getCssLinks(M),!f&&i.default.createElement("noscript",{"data-n-css":this.props.nonce??""}),!x&&!_&&this.getPreloadDynamicChunks(),!x&&!_&&this.getPreloadMainLinks(M),!d&&!x&&this.getPolyfillScripts(),!d&&!x&&this.getPreNextScripts(),!d&&!x&&this.getDynamicChunks(M),!d&&!x&&this.getScripts(M),f&&this.getCssLinks(M),f&&i.default.createElement("noscript",{"data-n-css":this.props.nonce??""}),this.context.isDevelopment&&i.default.createElement("noscript",{id:"__next_css__DO_NOT_USE__"}),e||null),i.default.createElement(i.default.Fragment,{},...c||[]))}}function j(e,t,r){var n,s,l,a;if(!r.children)return;let o=[],c=Array.isArray(r.children)?r.children:[r.children],u=null==(n=c.find(e=>e.type===S))?void 0:null==(s=n.props)?void 0:s.children,p=null==(l=c.find(e=>"body"===e.type))?void 0:null==(a=l.props)?void 0:a.children,d=[...Array.isArray(u)?u:[u],...Array.isArray(p)?p:[p]];i.default.Children.forEach(d,t=>{var r;if(t&&(null==(r=t.type)?void 0:r.__nextScript)){if("beforeInteractive"===t.props.strategy){e.beforeInteractive=(e.beforeInteractive||[]).concat([{...t.props}]);return}if(["lazyOnload","afterInteractive","worker"].includes(t.props.strategy)){o.push(t.props);return}}}),t.scriptLoader=o}t.Head=S;class I extends i.default.Component{static contextType=c.HtmlContext;getDynamicChunks(e){return v(this.context,this.props,e)}getPreNextScripts(){return E(this.context,this.props)}getScripts(e){return x(this.context,this.props,e)}getPolyfillScripts(){return m(this.context,this.props)}static getInlineScriptSource(e){let{__NEXT_DATA__:t,largePageDataBytes:n}=e;try{let i=JSON.stringify(t),s=Buffer.from(i).byteLength,l=r(549).Z;return n&&s>n&&console.warn(`Warning: data for page "${t.page}"${t.page===e.dangerousAsPath?"":` (path "${e.dangerousAsPath}")`} is ${l(s)} which exceeds the threshold of ${l(n)}, this amount of data can reduce performance.
See more info here: https://nextjs.org/docs/messages/large-page-data`),a.htmlEscapeJsonString(i)}catch(e){if(o.default(e)&&-1!==e.message.indexOf("circular structure"))throw Error(`Circular structure in "getInitialProps" result of page "${t.page}". https://nextjs.org/docs/messages/circular-structure`);throw e}}render(){let{assetPrefix:e,inAmpMode:t,buildManifest:r,unstable_runtimeJS:n,docComponentsRendered:s,devOnlyCacheBusterQueryString:l,disableOptimizedLoading:a,crossOrigin:o}=this.context,c=!1===n;if(s.NextScript=!0,t)return null;let u=h(this.context.buildManifest,this.context.__NEXT_DATA__.page,t);return i.default.createElement(i.default.Fragment,null,!c&&r.devFiles?r.devFiles.map(t=>i.default.createElement("script",{key:t,src:`${e}/_next/${encodeURI(t)}${l}`,nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||o})):null,c?null:i.default.createElement("script",{id:"__NEXT_DATA__",type:"application/json",nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||o,dangerouslySetInnerHTML:{__html:I.getInlineScriptSource(this.context)}}),a&&!c&&this.getPolyfillScripts(),a&&!c&&this.getPreNextScripts(),a&&!c&&this.getDynamicChunks(u),a&&!c&&this.getScripts(u))}}function $(e){let{inAmpMode:t,docComponentsRendered:r,locale:n,scriptLoader:s,__NEXT_DATA__:l}=i.useContext(c.HtmlContext);return r.Html=!0,j(s,l,e),i.default.createElement("html",Object.assign({},e,{lang:e.lang||n||void 0,amp:t?"":void 0,"data-ampdevmode":void 0}))}function w(){let{docComponentsRendered:e}=i.useContext(c.HtmlContext);return e.Main=!0,i.default.createElement("next-js-internal-body-render-target",null)}t.NextScript=I;let M=function(){return i.default.createElement($,null,i.default.createElement(S,null),i.default.createElement("body",null,i.default.createElement(w,null),i.default.createElement(I,null)))};u[s.NEXT_BUILTIN_DOCUMENT]=M},274:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=i,t.getProperError=s;var n=r(524);function i(e){return"object"==typeof e&&null!==e&&"name"in e&&"message"in e}function s(e){return i(e)?e:Error(n.isPlainObject(e)?JSON.stringify(e):e+"")}},549:(e,t)=>{"use strict";function r(e,t){if(!Number.isFinite(e))throw TypeError(`Expected a finite number, got ${typeof e}: ${e}`);if((t=Object.assign({},t)).signed&&0===e)return" 0 B";let r=e<0,s=r?"-":t.signed?"+":"";if(r&&(e=-e),e<1){let r=i(e,t.locale);return s+r+" B"}let l=Math.min(Math.floor(Math.log10(e)/3),n.length-1);e=Number((e/Math.pow(1e3,l)).toPrecision(3));let a=i(e,t.locale),o=n[l];return s+a+" "+o}t.Z=r;let n=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],i=(e,t)=>{let r=e;return"string"==typeof t?r=e.toLocaleString(t):!0===t&&(r=e.toLocaleString()),r}},331:(e,t,r)=>{e.exports=r(13)},140:e=>{"use strict";e.exports=require("next/dist/server/get-page-files.js")},716:e=>{"use strict";e.exports=require("next/dist/server/htmlescape.js")},368:e=>{"use strict";e.exports=require("next/dist/server/utils.js")},724:e=>{"use strict";e.exports=require("next/dist/shared/lib/constants.js")},743:e=>{"use strict";e.exports=require("next/dist/shared/lib/html-context.js")},524:e=>{"use strict";e.exports=require("next/dist/shared/lib/is-plain-object.js")},689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")}};var t=require("../webpack-runtime.js");t.C(e);var r=t(t.s=256);module.exports=r})();