import{S as b,i as g,s as w,l as S,a as E,w as N,m as T,c as k,x,p as f,b as d,y as C,T as I,f as A,t as B,h as v,B as O,r as F,u as U}from"./index-9d69cec5.js";import{f as G}from"./route-for-eb94bd05.js";import{g as J}from"./navigation-fbe70647.js";import{B as L}from"./button-944065b3.js";import{t as R}from"./index-57dae667.js";import{n as $}from"./notifications-677e5039.js";import{i as W,a as j}from"./import-events-7a5f3c38.js";import{p as q}from"./parse-with-big-int-561ccb8b.js";const h={auth:{enabled:!1,options:[]},baseUrl:"base",codec:{},defaultNamespace:"namespace",disableWriteActions:!1,showTemporalSystemNamespace:!1,notifyOnNewVersion:!1,feedbackURL:"",runtimeEnvironment:{isCloud:!1,isLocal:!0,envOverride:!1},version:"2.0.0"};function H(i){let s;return{c(){s=F("Import")},l(o){s=U(o,"Import")},m(o,t){d(o,s,t)},d(o){o&&v(s)}}}function P(i){let s,o,t,a,l,m;return t=new L({props:{icon:"file-upload",$$slots:{default:[H]},$$scope:{ctx:i}}}),t.$on("click",i[1]),{c(){s=S("input"),o=E(),N(t.$$.fragment),this.h()},l(e){s=T(e,"INPUT",{class:!0,type:!0,accept:!0}),o=k(e),x(t.$$.fragment,e),this.h()},h(){f(s,"class","import-input block rounded-md border border-gray-200 p-2"),f(s,"type","file"),f(s,"accept",".json")},m(e,r){d(e,s,r),d(e,o,r),C(t,e,r),a=!0,l||(m=I(s,"change",i[0]),l=!0)},p(e,[r]){const n={};r&16&&(n.$$scope={dirty:r,ctx:e}),t.$set(n)},i(e){a||(A(t.$$.fragment,e),a=!0)},o(e){B(t.$$.fragment,e),a=!1},d(e){e&&v(s),e&&v(o),O(t,e),l=!1,m()}}}function V(i,s,o){let t,{user:a={}}=s;const l=async e=>{var r;const n=e.target,_=(r=n==null?void 0:n.files)===null||r===void 0?void 0:r[0],c=new FileReader;_&&(c.readAsText(_),c.onload=()=>{var p,u;try{const y=(u=(p=c==null?void 0:c.result)===null||p===void 0?void 0:p.toString())!==null&&u!==void 0?u:"";t=q(y)}catch{$.add("error","Could not parse JSON")}})},m=async()=>{try{const{events:e,eventGroups:r}=await R({response:Array.isArray(t)?t:t==null?void 0:t.events,namespace:h.defaultNamespace,settings:h,accessToken:a.accessToken});W.set(e),j.set(r);const n=G({importType:"events",view:"feed"});J(n)}catch(e){console.error(e),$.add("error","Could not create event history from JSON")}};return i.$$set=e=>{"user"in e&&o(2,a=e.user)},[l,m,a]}class ee extends b{constructor(s){super(),g(this,s,V,P,w,{user:2})}}export{ee as E};