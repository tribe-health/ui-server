import{w as u}from"./index.deae5bd4.js";import{a as h}from"./paths.8dae7722.js";const g="1680718223284",w="sveltekit:snapshot",A="sveltekit:scroll",R="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function T(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function I(){return{x:pageXOffset,y:pageYOffset}}function i(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function _(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function S(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=_(e)}}function y(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const s=e instanceof SVGAElement?e.target.baseVal:e.target,a=!n||!!s||v(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external")||e.hasAttribute("download");return{url:n,external:a,target:s}}function x(e){let t=null,n=null,s=null,a=null,r=null,l=null,o=e;for(;o&&o!==document.documentElement;)s===null&&(s=i(o,"preload-code")),a===null&&(a=i(o,"preload-data")),t===null&&(t=i(o,"keepfocus")),n===null&&(n=i(o,"noscroll")),r===null&&(r=i(o,"reload")),l===null&&(l=i(o,"replacestate")),o=_(o);return{preload_code:d[s??"off"],preload_data:d[a??"off"],keep_focus:t==="off"?!1:t===""?!0:null,noscroll:n==="off"?!1:n===""?!0:null,reload:r==="off"?!1:r===""?!0:null,replace_state:l==="off"?!1:l===""?!0:null}}function p(e){const t=u(e);let n=!0;function s(){n=!0,t.update(l=>l)}function a(l){n=!1,t.set(l)}function r(l){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&l(o=c)})}return{notify:s,set:a,subscribe:r}}function b(){const{set:e,subscribe:t}=u(!1),n=1e4;let s;async function a(){clearTimeout(s),s=setTimeout(a,n);const r=await fetch(`${h}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(r.ok){const o=(await r.json()).version!==g;return o&&(e(!0),clearTimeout(s)),o}else throw new Error(`Version check failed: ${r.status}`)}return s=setTimeout(a,n),{subscribe:t,check:a}}function v(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let m;function O(e){m=e.client}const U={url:p({}),page:p({}),navigating:u(null),updated:b()};export{R as I,f as P,A as S,w as a,y as b,x as c,I as d,O as e,S as f,T as g,m as h,v as i,U as s};
