(()=>{"use strict";var e={483:(e,t,r)=>{e.exports=function(e,t){if("undefined"==typeof document)return function(){};if((t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},void 0===t.attributes.nonce){var n=r.nc;n&&(t.attributes.nonce=n)}var o=document.createElement("link");return o.rel="stylesheet",o.href=e,Object.keys(t.attributes).forEach((function(e){o.setAttribute(e,t.attributes[e])})),t.insert(o),function(e){"string"==typeof e?o.href=e:o.parentNode.removeChild(o)}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!e;)e=n[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.nc=void 0,console.log("123"),console.log("Hello world"),function(){const e=document.createElement("header");e.classList.add("lsn-header_gray"),e.innerText="form renderHeader",document.body.appendChild(e)}(),(()=>{var e=r(483),t=r.n(e),n=r(569),o=r.n(n);const i=r.p+"index.css";var a={};a.insert=o().bind(null,"head"),t()(i,a)})()})();