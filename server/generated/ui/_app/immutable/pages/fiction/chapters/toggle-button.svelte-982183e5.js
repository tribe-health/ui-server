import{S as M,i as T,s as C,w as u,a as k,x as c,c as w,y as f,b as i,f as m,t as g,B as p,h as _,r as h,u as d}from"../../../chunks/index-9ea626a2.js";import{C as v}from"../../../chunks/_chapter-c0d56378.js";import{T as A,a as b}from"../../../chunks/toggle-buttons-8f7f1fa1.js";import"../../../chunks/fiction-store-3a192886.js";import"../../../chunks/index-ed4e6b3e.js";import"../../../chunks/icon-3b6c42df.js";import"../../../chunks/stores-3338201a.js";function S($){let n;return{c(){n=h("Auto")},l(a){n=d(a,"Auto")},m(a,e){i(a,n,e)},d(a){a&&_(n)}}}function q($){let n;return{c(){n=h("Manual")},l(a){n=d(a,"Manual")},m(a,e){i(a,n,e)},d(a){a&&_(n)}}}function B($){let n,a,e,s;return n=new b({props:{active:$[0].a==="auto","data-cy":"auto",$$slots:{default:[S]},$$scope:{ctx:$}}}),n.$on("click",$[1]),e=new b({props:{active:$[0].a==="manual","data-cy":"manual",$$slots:{default:[q]},$$scope:{ctx:$}}}),e.$on("click",$[2]),{c(){u(n.$$.fragment),a=k(),u(e.$$.fragment)},l(t){c(n.$$.fragment,t),a=w(t),c(e.$$.fragment,t)},m(t,o){f(n,t,o),i(t,a,o),f(e,t,o),s=!0},p(t,o){const r={};o&1&&(r.active=t[0].a==="auto"),o&32&&(r.$$scope={dirty:o,ctx:t}),n.$set(r);const l={};o&1&&(l.active=t[0].a==="manual"),o&32&&(l.$$scope={dirty:o,ctx:t}),e.$set(l)},i(t){s||(m(n.$$.fragment,t),m(e.$$.fragment,t),s=!0)},o(t){g(n.$$.fragment,t),g(e.$$.fragment,t),s=!1},d(t){p(n,t),t&&_(a),p(e,t)}}}function j($){let n,a;return n=new A({props:{$$slots:{default:[B]},$$scope:{ctx:$}}}),{c(){u(n.$$.fragment)},l(e){c(n.$$.fragment,e)},m(e,s){f(n,e,s),a=!0},p(e,s){const t={};s&33&&(t.$$scope={dirty:s,ctx:e}),n.$set(t)},i(e){a||(m(n.$$.fragment,e),a=!0)},o(e){g(n.$$.fragment,e),a=!1},d(e){p(n,e)}}}function z($){let n;return{c(){n=h("Auto")},l(a){n=d(a,"Auto")},m(a,e){i(a,n,e)},d(a){a&&_(n)}}}function D($){let n;return{c(){n=h("Manual")},l(a){n=d(a,"Manual")},m(a,e){i(a,n,e)},d(a){a&&_(n)}}}function E($){let n,a,e,s;return n=new b({props:{icon:"workflow",active:$[0].b==="auto",$$slots:{default:[z]},$$scope:{ctx:$}}}),n.$on("click",$[3]),e=new b({props:{icon:"calendar-plus",active:$[0].b==="manual",$$slots:{default:[D]},$$scope:{ctx:$}}}),e.$on("click",$[4]),{c(){u(n.$$.fragment),a=k(),u(e.$$.fragment)},l(t){c(n.$$.fragment,t),a=w(t),c(e.$$.fragment,t)},m(t,o){f(n,t,o),i(t,a,o),f(e,t,o),s=!0},p(t,o){const r={};o&1&&(r.active=t[0].b==="auto"),o&32&&(r.$$scope={dirty:o,ctx:t}),n.$set(r);const l={};o&1&&(l.active=t[0].b==="manual"),o&32&&(l.$$scope={dirty:o,ctx:t}),e.$set(l)},i(t){s||(m(n.$$.fragment,t),m(e.$$.fragment,t),s=!0)},o(t){g(n.$$.fragment,t),g(e.$$.fragment,t),s=!1},d(t){p(n,t),t&&_(a),p(e,t)}}}function F($){let n,a;return n=new A({props:{$$slots:{default:[E]},$$scope:{ctx:$}}}),{c(){u(n.$$.fragment)},l(e){c(n.$$.fragment,e)},m(e,s){f(n,e,s),a=!0},p(e,s){const t={};s&33&&(t.$$scope={dirty:s,ctx:e}),n.$set(t)},i(e){a||(m(n.$$.fragment,e),a=!0)},o(e){g(n.$$.fragment,e),a=!1},d(e){p(n,e)}}}function G($){let n,a,e,s;return n=new v({props:{description:"A toggle button",$$slots:{default:[j]},$$scope:{ctx:$}}}),e=new v({props:{description:"A toggle button with icons",$$slots:{default:[F]},$$scope:{ctx:$}}}),{c(){u(n.$$.fragment),a=k(),u(e.$$.fragment)},l(t){c(n.$$.fragment,t),a=w(t),c(e.$$.fragment,t)},m(t,o){f(n,t,o),i(t,a,o),f(e,t,o),s=!0},p(t,[o]){const r={};o&33&&(r.$$scope={dirty:o,ctx:t}),n.$set(r);const l={};o&33&&(l.$$scope={dirty:o,ctx:t}),e.$set(l)},i(t){s||(m(n.$$.fragment,t),m(e.$$.fragment,t),s=!0)},o(t){g(n.$$.fragment,t),g(e.$$.fragment,t),s=!1},d(t){p(n,t),t&&_(a),p(e,t)}}}function H($,n,a){let e={a:"auto",b:"auto"};return[e,()=>a(0,e.a="auto",e),()=>a(0,e.a="manual",e),()=>a(0,e.b="auto",e),()=>a(0,e.b="manual",e)]}class Q extends M{constructor(n){super(),T(this,n,H,G,C,{})}}export{Q as default};