"use strict";exports.id=16,exports.ids=[16],exports.modules={419:(e,t)=>{function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function n(){return r.apply(this,arguments)}Object.defineProperty(t,"Z",{enumerable:!0,get:function(){return n}})},903:(e,t)=>{function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"Z",{enumerable:!0,get:function(){return r}})},199:(e,t)=>{function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}function n(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var f=o?Object.getOwnPropertyDescriptor(e,u):null;f&&(f.get||f.set)?Object.defineProperty(a,u,f):a[u]=e[u]}return a.default=e,n&&n.set(e,a),a}Object.defineProperty(t,"Z",{enumerable:!0,get:function(){return n}})},16:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=c,t.default=void 0;var n=r(419).Z,a=r(903).Z,o=(0,r(199).Z)(r(689)),u=a(r(470)),f=r(918),l=r(796),i=r(732),p=r(618);function c(e=!1){let t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}let s=["name","httpEquiv","charSet","itemProp"];function y(){let e=new Set,t=new Set,r=new Set,n={};return a=>{let o=!0,u=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){u=!0;let t=a.key.slice(a.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(let e=0,t=s.length;e<t;e++){let t=s[e];if(a.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=a.props[t],r=n[t]||new Set;("name"!==t||!u)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}function h(e,t){let{inAmpMode:r}=t;return e.reduce(d,[]).reverse().concat(c(r).reverse()).filter(y()).reverse().map((e,t)=>{let a=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t=n({},e.props||{});return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:a})})}var m=function({children:e}){let t=o.useContext(f.AmpStateContext),r=o.useContext(l.HeadManagerContext);return o.default.createElement(u.default,{reduceComponentsToState:h,headManager:r,inAmpMode:i.isInAmpMode(t)},e)};t.default=m,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}};