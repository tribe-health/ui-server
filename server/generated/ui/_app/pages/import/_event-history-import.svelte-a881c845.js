import{S as $,i as y,s as h,e as g,k as b,w as S,c as w,m as N,x as C,b as c,g as u,y as E,T as x,q as O,o as T,d as f,B as k,t as F,h as I}from"../../chunks/index-604742bf.js";import{d as U}from"../../chunks/route-for-93451b94.js";import{g as A}from"../../chunks/navigation-6709cf39.js";import{B}from"../../chunks/button-dba736f2.js";import{t as J}from"../../chunks/index-fd0dc0c9.js";import{n as v}from"../../chunks/notifications-cfed8e58.js";import{i as q,a as G}from"../../chunks/import-events-fe941759.js";import"../../chunks/singletons-d1fb5791.js";import"../../chunks/index-b2629639.js";import"../../chunks/badge-cd9e2482.js";import"../../chunks/is-http-3668e20a.js";import"../../chunks/index-c9e619a8.js";import"../../chunks/persist-store-e5ba5089.js";import"../../chunks/is-function-b969a126.js";import"../../chunks/data-converter-config-8cf2e48e.js";import"../../chunks/atob-eb4fc9a1.js";import"../../chunks/format-date-919f4714.js";import"../../chunks/to-duration-271d3946.js";import"../../chunks/get-event-categorization-8a63628f.js";import"../../chunks/simplify-attributes-64d6cf1a.js";const _={auth:{enabled:!1,options:[]},baseUrl:"base",codec:{},defaultNamespace:"namespace",showTemporalSystemNamespace:!1,notifyOnNewVersion:!1,feedbackURL:"",runtimeEnvironment:{isCloud:!1,isLocal:!0,envOverride:!1},version:"2.0.0"};function L(l){let t;return{c(){t=F("Import")},l(s){t=I(s,"Import")},m(s,o){u(s,t,o)},d(s){s&&f(t)}}}function R(l){let t,s,o,n,a,i;return o=new B({props:{icon:"fileUpload",$$slots:{default:[L]},$$scope:{ctx:l}}}),o.$on("click",l[1]),{c(){t=g("input"),s=b(),S(o.$$.fragment),this.h()},l(e){t=w(e,"INPUT",{class:!0,type:!0,accept:!0}),s=N(e),C(o.$$.fragment,e),this.h()},h(){c(t,"class","import-input block rounded-md border border-gray-200 p-2"),c(t,"type","file"),c(t,"accept",".json")},m(e,r){u(e,t,r),u(e,s,r),E(o,e,r),n=!0,a||(i=x(t,"change",l[0]),a=!0)},p(e,[r]){const m={};r&8&&(m.$$scope={dirty:r,ctx:e}),o.$set(m)},i(e){n||(O(o.$$.fragment,e),n=!0)},o(e){T(o.$$.fragment,e),n=!1},d(e){e&&f(t),e&&f(s),k(o,e),a=!1,i()}}}function j(l){let t;return[async n=>{var a;const i=n.target,e=(a=i==null?void 0:i.files)===null||a===void 0?void 0:a[0],r=new FileReader;e&&(r.readAsText(e),r.onload=()=>{var m,p;try{const d=(p=(m=r==null?void 0:r.result)===null||m===void 0?void 0:m.toString())!==null&&p!==void 0?p:"";t=JSON.parse(d)}catch{v.add("error","Could not parse JSON")}})},async()=>{try{const{events:n,eventGroups:a}=await J({response:Array.isArray(t)?t:t==null?void 0:t.events,namespace:_.defaultNamespace,settings:_});q.set(n),G.set(a);const i=U({importType:"events",view:"feed"});A(i)}catch(n){console.error(n),v.add("error","Could not create event history from JSON")}}]}class lt extends ${constructor(t){super(),y(this,t,j,R,h,{})}}export{lt as default};
