import{S as s,i,s as a,w as p,x as c,y as u,q as f,o as g,B as l}from"../../../../../../../../chunks/index-208d16bf.js";import{b as _}from"../../../../../../../../chunks/get-event-categorization-b2bce139.js";import{E as $}from"../../../../../../../../chunks/event-summary-90f9b7ec.js";import"../../../../../../../../chunks/pagination-0ec725d2.js";import"../../../../../../../../chunks/stores-e98c925f.js";import"../../../../../../../../chunks/index-b3caf0f7.js";import"../../../../../../../../chunks/index.es-b78271c9.js";import"../../../../../../../../chunks/filter-select-6d51ec99.js";import"../../../../../../../../chunks/navigation-3f1ea447.js";import"../../../../../../../../chunks/singletons-d1fb5791.js";import"../../../../../../../../chunks/select-c6c5551c.js";import"../../../../../../../../chunks/index-200beb4e.js";import"../../../../../../../../chunks/persist-store-e22b12b5.js";import"../../../../../../../../chunks/index-a8ee0a5c.js";import"../../../../../../../../chunks/format-date-a3b7d511.js";import"../../../../../../../../chunks/format-camel-case-c8f5e0aa.js";import"../../../../../../../../chunks/route-for-d606e623.js";import"../../../../../../../../chunks/code-block-65693d9a.js";import"../../../../../../../../chunks/link-4b791f37.js";import"../../../../../../../../chunks/copyable-8868f814.js";import"../../../../../../../../chunks/empty-state-41a8fee2.js";function v(m){let e,o;return e=new $({props:{items:m[0],groups:m[0],compact:!0}}),{c(){p(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,r){u(e,t,r),o=!0},p(t,[r]){const n={};r&1&&(n.items=t[0]),r&1&&(n.groups=t[0]),e.$set(n)},i(t){o||(f(e.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),o=!1},d(t){l(e,t)}}}const K=async function({stuff:m,url:e}){const o=e.searchParams.get("category"),t=_(m.eventGroups,o);return{props:{items:t},stuff:{matchingEventGroups:t}}};function y(m,e,o){let{items:t}=e;return m.$$set=r=>{"items"in r&&o(0,t=r.items)},[t]}class L extends s{constructor(e){super(),i(this,e,y,v,a,{items:0})}}export{L as default,K as load};