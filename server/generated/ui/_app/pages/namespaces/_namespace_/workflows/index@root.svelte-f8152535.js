import{S as Y,i as Z,s as x,I as Le,e as B,c as L,a as O,d as $,b as T,a5 as pe,g as v,J as Oe,K as je,L as De,q as g,o as k,t as N,k as I,w as S,h as A,m as C,x as q,M as W,y as R,af as he,N as G,j as Ee,B as E,G as Ue,a9 as ge,n as M,p as K,O as X,ap as We,R as D,T as U,U as Q,l as P,V as Ie,a3 as Qe,ag as Ve,E as F,ai as $e,aj as Me}from"../../../../chunks/index-733079a8.js";import{b as Ce,t as Pe}from"../../../../chunks/workflow-status-094ce78e.js";import{j as Ke,k as ze,l as Ge,m as He,n as Je,o as Xe,p as Ye,q as Ze,e as H}from"../../../../chunks/format-date-4b1bc9ef.js";import"../../../../chunks/notifications-7ffcc78e.js";import"../../../../chunks/route-for-api-3914554f.js";import{t as oe,u as re}from"../../../../chunks/time-format-416f6d08.js";import{w as xe}from"../../../../chunks/index-d95e2ca5.js";import{p as Ne}from"../../../../chunks/stores-1e95b62c.js";import{E as et}from"../../../../chunks/empty-state-091dd153.js";import{P as tt}from"../../../../chunks/pagination-d3197b47.js";import{S as nt,W as lt,a as rt,b as at}from"../../../../chunks/_workflows-loading-84a6299f.js";import{g as ae}from"../../../../chunks/navigation-3f1ea447.js";import{S as se,O as V}from"../../../../chunks/select-e2ca0e5a.js";import{F as st,v as ot}from"../../../../chunks/index.es-b93730d8.js";import"../../../../chunks/simplify-attributes-6710d3ed.js";import"../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../chunks/route-for-46a9c4b7.js";import"../../../../chunks/persist-store-bb92bb0b.js";import"../../../../chunks/tooltip-e0caa48f.js";import"../../../../chunks/copyable-a8d8233c.js";import"../../../../chunks/button-dfaef4d6.js";import"../../../../chunks/singletons-d1fb5791.js";const ut=l=>Ke(l)?l==="basic"||l==="advanced":!1,ft=l=>{const e=l.searchParams.get("search");return ut(e)?e:(l.searchParams.set("search","basic"),"basic")},it=l=>{const e={namespace:null,query:null};return Ne.subscribe(n=>{const t=n.params.namespace,r=n.url.searchParams.get("query");(t!==e.namespace||r!==e.query)&&(Ce(t,{query:r}).then(l),e.namespace=t,e.query=r)})},ct=({namespace:l,query:e})=>xe(Ce(l,{query:e}),it);function mt(l){let e,n,t;const r=l[2].default,s=Le(r,l,l[1],null);return{c(){e=B("div"),s&&s.c(),this.h()},l(o){e=L(o,"DIV",{class:!0});var a=O(e);s&&s.l(a),a.forEach($),this.h()},h(){T(e,"class",n=pe(`${l[0]}     
        rounded-sm
        text-center 
        inline-block
        px-1
        ml-1
        text-sm
        align-middle`)+" svelte-1agj3i6")},m(o,a){v(o,e,a),s&&s.m(e,null),t=!0},p(o,[a]){s&&s.p&&(!t||a&2)&&Oe(s,r,o,o[1],t?De(r,o[1],a,null):je(o[1]),null),(!t||a&1&&n!==(n=pe(`${o[0]}     
        rounded-sm
        text-center 
        inline-block
        px-1
        ml-1
        text-sm
        align-middle`)+" svelte-1agj3i6"))&&T(e,"class",n)},i(o){t||(g(s,o),t=!0)},o(o){k(s,o),t=!1},d(o){o&&$(e),s&&s.d(o)}}}function _t(l,e,n){let{$$slots:t={},$$scope:r}=e,{type:s}=e;return l.$$set=o=>{"type"in o&&n(0,s=o.type),"$$scope"in o&&n(1,r=o.$$scope)},[s,r,t]}class pt extends Y{constructor(e){super(),Z(this,e,_t,mt,x,{type:0})}}const ht=l=>{const e=[],n=()=>{t&&(e.push(t),t="")};let t="",r=0;for(;r<l.length;){const s=l[r];if(ze(s)){n(),t+=s,r++;continue}if(Ge(s)||He(s)){n(),r++;continue}t+=s,r++}return n(),e},ee=l=>e=>e.toLowerCase()===l.toLowerCase(),J=(l,e)=>l[e+2],gt=l=>{for(const e of Ze)if(l[e])return{[e]:l[e]}},$t=ee("WorkflowType"),dt=ee("WorkflowId"),wt=ee("StartTime"),kt=ee("ExecutionStatus"),de=l=>{const e=ht(l),n={workflowId:"",workflowType:"",executionStatus:null,timeRange:null};return e.forEach((t,r)=>{if(dt(t)&&(n.workflowId=J(e,r)),$t(t)&&(n.workflowType=J(e,r)),kt(t)){const s=J(e,r);Je(s)&&(n.executionStatus=s)}if(wt(t)){const s=J(e,r);try{const o=Xe(s),a=gt(o);n.timeRange=Ye(a)}catch(o){console.error("Error parsing StartTime from query",o)}}}),n};function bt(l){let e,n,t,r,s,o,a,u,i,b,f;return o=new st({props:{icon:ot,scale:.9,color:"gray",class:"flex items-center"}}),{c(){e=B("div"),n=B("label"),t=N(l[2]),r=I(),s=B("span"),S(o.$$.fragment),a=I(),u=B("input"),this.h()},l(c){e=L(c,"DIV",{class:!0});var m=O(e);n=L(m,"LABEL",{for:!0,class:!0});var p=O(n);t=A(p,l[2]),p.forEach($),r=C(m),s=L(m,"SPAN",{class:!0});var w=O(s);q(o.$$.fragment,w),w.forEach($),a=C(m),u=L(m,"INPUT",{class:!0,placeholder:!0,id:!0,name:!0}),m.forEach($),this.h()},h(){T(n,"for",l[1]),T(n,"class","hidden"),T(s,"class","svelte-fxm0nn"),T(u,"class","block w-full focus:outline-none"),T(u,"placeholder",l[3]),T(u,"id",l[1]),T(u,"name",l[4]),T(e,"class","input-container focus-within:border-blue-700 svelte-fxm0nn")},m(c,m){v(c,e,m),W(e,n),W(n,t),W(e,r),W(e,s),R(o,s,null),W(e,a),W(e,u),he(u,l[0]),i=!0,b||(f=[G(u,"input",l[7]),G(u,"input",l[5]),G(u,"change",l[6])],b=!0)},p(c,[m]){(!i||m&4)&&Ee(t,c[2]),(!i||m&2)&&T(n,"for",c[1]),(!i||m&8)&&T(u,"placeholder",c[3]),(!i||m&2)&&T(u,"id",c[1]),(!i||m&16)&&T(u,"name",c[4]),m&1&&u.value!==c[0]&&he(u,c[0])},i(c){i||(g(o.$$.fragment,c),i=!0)},o(c){k(o.$$.fragment,c),i=!1},d(c){c&&$(e),E(o),b=!1,Ue(f)}}}function vt(l,e,n){let{id:t}=e,{label:r}=e,{value:s}=e,{placeholder:o=r}=e,{name:a=t}=e;function u(f){ge.call(this,l,f)}function i(f){ge.call(this,l,f)}function b(){s=this.value,n(0,s)}return l.$$set=f=>{"id"in f&&n(1,t=f.id),"label"in f&&n(2,r=f.label),"value"in f&&n(0,s=f.value),"placeholder"in f&&n(3,o=f.placeholder),"name"in f&&n(4,a=f.name)},[s,t,r,o,a,u,i,b]}class we extends Y{constructor(e){super(),Z(this,e,vt,bt,x,{id:1,label:2,value:0,placeholder:3,name:4})}}function ke(l,e,n){const t=l.slice();return t[14]=e[n][0],t[15]=e[n][1],t}function be(l,e,n){const t=l.slice();return t[15]=e[n],t}function yt(l){let e,n,t,r,s;return{c(){e=B("a"),n=N("Advanced Search"),this.h()},l(o){e=L(o,"A",{href:!0,class:!0});var a=O(e);n=A(a,"Advanced Search"),a.forEach($),this.h()},h(){T(e,"href",t=l[3].url.pathname+"?searchType=advanced"),T(e,"class","text-blue-700")},m(o,a){v(o,e,a),W(e,n),r||(s=G(e,"click",We(l[6]("advanced"))),r=!0)},p(o,a){a&8&&t!==(t=o[3].url.pathname+"?searchType=advanced")&&T(e,"href",t)},d(o){o&&$(e),r=!1,s()}}}function Tt(l){let e,n,t,r,s;return{c(){e=B("a"),n=N("Basic Search"),this.h()},l(o){e=L(o,"A",{href:!0,class:!0});var a=O(e);n=A(a,"Basic Search"),a.forEach($),this.h()},h(){T(e,"href",t=l[3].url.pathname+"?searchType=basic"),T(e,"class","text-blue-700")},m(o,a){v(o,e,a),W(e,n),r||(s=G(e,"click",We(l[6]("basic"))),r=!0)},p(o,a){a&8&&t!==(t=o[3].url.pathname+"?searchType=basic")&&T(e,"href",t)},d(o){o&&$(e),r=!1,s()}}}function St(l){let e,n,t,r,s,o,a,u,i,b,f,c,m,p,w,h;function _(d){l[9](d)}let j={id:"workflow-id-filter",label:"Workflow ID"};l[2].workflowId!==void 0&&(j.value=l[2].workflowId),n=new we({props:j}),D.push(()=>U(n,"value",_)),n.$on("input",l[8]);function z(d){l[10](d)}let ue={id:"workflow-type-filter",label:"Workflow Type"};l[2].workflowType!==void 0&&(ue.value=l[2].workflowType),s=new we({props:ue}),D.push(()=>U(s,"value",z)),s.$on("input",l[8]);function Ae(d){l[11](d)}let fe={id:"time-range-filter",label:"Time Range",$$slots:{default:[It]},$$scope:{ctx:l}};l[2].timeRange!==void 0&&(fe.value=l[2].timeRange),u=new se({props:fe}),D.push(()=>U(u,"value",Ae)),u.$on("change",l[8]);function Fe(d){l[12](d)}let ie={id:"execution-status-filter",label:"Workflow Status",$$slots:{default:[Pt]},$$scope:{ctx:l}};l[2].executionStatus!==void 0&&(ie.value=l[2].executionStatus),f=new se({props:ie}),D.push(()=>U(f,"value",Fe)),f.$on("change",l[8]);function Be(d){l[13](d)}let ce={id:"filter-by-relative-time",$$slots:{default:[Bt]},$$scope:{ctx:l}};return l[4]!==void 0&&(ce.value=l[4]),p=new se({props:ce}),D.push(()=>U(p,"value",Be)),{c(){e=B("div"),S(n.$$.fragment),r=I(),S(s.$$.fragment),a=I(),S(u.$$.fragment),b=I(),S(f.$$.fragment),m=I(),S(p.$$.fragment),this.h()},l(d){e=L(d,"DIV",{class:!0});var y=O(e);q(n.$$.fragment,y),r=C(y),q(s.$$.fragment,y),a=C(y),q(u.$$.fragment,y),b=C(y),q(f.$$.fragment,y),m=C(y),q(p.$$.fragment,y),y.forEach($),this.h()},h(){T(e,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4")},m(d,y){v(d,e,y),R(n,e,null),W(e,r),R(s,e,null),W(e,a),R(u,e,null),W(e,b),R(f,e,null),W(e,m),R(p,e,null),h=!0},p(d,y){const me={};!t&&y&4&&(t=!0,me.value=d[2].workflowId,Q(()=>t=!1)),n.$set(me);const _e={};!o&&y&4&&(o=!0,_e.value=d[2].workflowType,Q(()=>o=!1)),s.$set(_e);const te={};y&1048580&&(te.$$scope={dirty:y,ctx:d}),!i&&y&4&&(i=!0,te.value=d[2].timeRange,Q(()=>i=!1)),u.$set(te);const ne={};y&1048576&&(ne.$$scope={dirty:y,ctx:d}),!c&&y&4&&(c=!0,ne.value=d[2].executionStatus,Q(()=>c=!1)),f.$set(ne);const le={};y&1048576&&(le.$$scope={dirty:y,ctx:d}),!w&&y&16&&(w=!0,le.value=d[4],Q(()=>w=!1)),p.$set(le)},i(d){h||(g(n.$$.fragment,d),g(s.$$.fragment,d),g(u.$$.fragment,d),g(f.$$.fragment,d),g(p.$$.fragment,d),h=!0)},o(d){k(n.$$.fragment,d),k(s.$$.fragment,d),k(u.$$.fragment,d),k(f.$$.fragment,d),k(p.$$.fragment,d),h=!1},d(d){d&&$(e),E(n),E(s),E(u),E(f),E(p)}}}function qt(l){let e,n;return e=new nt({props:{icon:!0,id:"advanced-search",placeholder:"Query\u2026",value:l[1]}}),e.$on("submit",l[7]),{c(){S(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,r){R(e,t,r),n=!0},p(t,r){const s={};r&2&&(s.value=t[1]),e.$set(s)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function Rt(l){let e;return{c(){e=N("All")},l(n){e=A(n,"All")},m(n,t){v(n,e,t)},d(n){n&&$(e)}}}function ve(l){let e,n;return e=new V({props:{value:l[2].timeRange,$$slots:{default:[Et]},$$scope:{ctx:l}}}),{c(){S(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,r){R(e,t,r),n=!0},p(t,r){const s={};r&4&&(s.value=t[2].timeRange),r&1048580&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function Et(l){let e=l[2].timeRange+"",n;return{c(){n=N(e)},l(t){n=A(t,e)},m(t,r){v(t,n,r)},p(t,r){r&4&&e!==(e=t[2].timeRange+"")&&Ee(n,e)},d(t){t&&$(n)}}}function Wt(l){let e=l[15]+"",n;return{c(){n=N(e)},l(t){n=A(t,e)},m(t,r){v(t,n,r)},p:F,d(t){t&&$(n)}}}function ye(l){let e,n;return e=new V({props:{value:l[15],$$slots:{default:[Wt]},$$scope:{ctx:l}}}),{c(){S(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,r){R(e,t,r),n=!0},p(t,r){const s={};r&1048576&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function It(l){let e,n,t=l[2].timeRange&&!H.includes(l[2].timeRange),r,s,o;e=new V({props:{value:null,$$slots:{default:[Rt]},$$scope:{ctx:l}}});let a=t&&ve(l),u=H,i=[];for(let f=0;f<u.length;f+=1)i[f]=ye(be(l,u,f));const b=f=>k(i[f],1,1,()=>{i[f]=null});return{c(){S(e.$$.fragment),n=I(),a&&a.c(),r=I();for(let f=0;f<i.length;f+=1)i[f].c();s=P()},l(f){q(e.$$.fragment,f),n=C(f),a&&a.l(f),r=C(f);for(let c=0;c<i.length;c+=1)i[c].l(f);s=P()},m(f,c){R(e,f,c),v(f,n,c),a&&a.m(f,c),v(f,r,c);for(let m=0;m<i.length;m+=1)i[m].m(f,c);v(f,s,c),o=!0},p(f,c){const m={};if(c&1048576&&(m.$$scope={dirty:c,ctx:f}),e.$set(m),c&4&&(t=f[2].timeRange&&!H.includes(f[2].timeRange)),t?a?(a.p(f,c),c&4&&g(a,1)):(a=ve(f),a.c(),g(a,1),a.m(r.parentNode,r)):a&&(M(),k(a,1,1,()=>{a=null}),K()),c&0){u=H;let p;for(p=0;p<u.length;p+=1){const w=be(f,u,p);i[p]?(i[p].p(w,c),g(i[p],1)):(i[p]=ye(w),i[p].c(),g(i[p],1),i[p].m(s.parentNode,s))}for(M(),p=u.length;p<i.length;p+=1)b(p);K()}},i(f){if(!o){g(e.$$.fragment,f),g(a);for(let c=0;c<u.length;c+=1)g(i[c]);o=!0}},o(f){k(e.$$.fragment,f),k(a),i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)k(i[c]);o=!1},d(f){E(e,f),f&&$(n),a&&a.d(f),f&&$(r),Ie(i,f),f&&$(s)}}}function Ct(l){let e=l[14]+"",n;return{c(){n=N(e)},l(t){n=A(t,e)},m(t,r){v(t,n,r)},p:F,d(t){t&&$(n)}}}function Te(l,e){let n,t,r;return t=new V({props:{value:e[15],$$slots:{default:[Ct]},$$scope:{ctx:e}}}),{key:l,first:null,c(){n=P(),S(t.$$.fragment),this.h()},l(s){n=P(),q(t.$$.fragment,s),this.h()},h(){this.first=n},m(s,o){v(s,n,o),R(t,s,o),r=!0},p(s,o){e=s;const a={};o&1048576&&(a.$$scope={dirty:o,ctx:e}),t.$set(a)},i(s){r||(g(t.$$.fragment,s),r=!0)},o(s){k(t.$$.fragment,s),r=!1},d(s){s&&$(n),E(t,s)}}}function Pt(l){let e=[],n=new Map,t,r,s=Object.entries(l[5]);const o=a=>a[14];for(let a=0;a<s.length;a+=1){let u=ke(l,s,a),i=o(u);n.set(i,e[a]=Te(i,u))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();t=P()},l(a){for(let u=0;u<e.length;u+=1)e[u].l(a);t=P()},m(a,u){for(let i=0;i<e.length;i+=1)e[i].m(a,u);v(a,t,u),r=!0},p(a,u){u&32&&(s=Object.entries(a[5]),M(),e=Qe(e,u,o,1,a,s,n,t.parentNode,Ve,Te,t,ke),K())},i(a){if(!r){for(let u=0;u<s.length;u+=1)g(e[u]);r=!0}},o(a){for(let u=0;u<e.length;u+=1)k(e[u]);r=!1},d(a){for(let u=0;u<e.length;u+=1)e[u].d(a);a&&$(t)}}}function Nt(l){let e;return{c(){e=N("Relative")},l(n){e=A(n,"Relative")},m(n,t){v(n,e,t)},d(n){n&&$(e)}}}function At(l){let e;return{c(){e=N("UTC")},l(n){e=A(n,"UTC")},m(n,t){v(n,e,t)},d(n){n&&$(e)}}}function Ft(l){let e;return{c(){e=N("Local")},l(n){e=A(n,"Local")},m(n,t){v(n,e,t)},d(n){n&&$(e)}}}function Bt(l){let e,n,t,r,s,o;return e=new V({props:{value:"relative",$$slots:{default:[Nt]},$$scope:{ctx:l}}}),t=new V({props:{value:"UTC",$$slots:{default:[At]},$$scope:{ctx:l}}}),s=new V({props:{value:"local",$$slots:{default:[Ft]},$$scope:{ctx:l}}}),{c(){S(e.$$.fragment),n=I(),S(t.$$.fragment),r=I(),S(s.$$.fragment)},l(a){q(e.$$.fragment,a),n=C(a),q(t.$$.fragment,a),r=C(a),q(s.$$.fragment,a)},m(a,u){R(e,a,u),v(a,n,u),R(t,a,u),v(a,r,u),R(s,a,u),o=!0},p(a,u){const i={};u&1048576&&(i.$$scope={dirty:u,ctx:a}),e.$set(i);const b={};u&1048576&&(b.$$scope={dirty:u,ctx:a}),t.$set(b);const f={};u&1048576&&(f.$$scope={dirty:u,ctx:a}),s.$set(f)},i(a){o||(g(e.$$.fragment,a),g(t.$$.fragment,a),g(s.$$.fragment,a),o=!0)},o(a){k(e.$$.fragment,a),k(t.$$.fragment,a),k(s.$$.fragment,a),o=!1},d(a){E(e,a),a&&$(n),E(t,a),a&&$(r),E(s,a)}}}function Lt(l){let e,n,t,r,s,o;function a(m,p){return m[0]==="advanced"?Tt:yt}let u=a(l),i=u(l);const b=[qt,St],f=[];function c(m,p){return m[0]==="advanced"?0:1}return r=c(l),s=f[r]=b[r](l),{c(){e=B("section"),n=B("p"),i.c(),t=I(),s.c(),this.h()},l(m){e=L(m,"SECTION",{class:!0});var p=O(e);n=L(p,"P",{class:!0});var w=O(n);i.l(w),w.forEach($),t=C(p),s.l(p),p.forEach($),this.h()},h(){T(n,"class","text-right text-xs"),T(e,"class","flex flex-col gap-2")},m(m,p){v(m,e,p),W(e,n),i.m(n,null),W(e,t),f[r].m(e,null),o=!0},p(m,[p]){u===(u=a(m))&&i?i.p(m,p):(i.d(1),i=u(m),i&&(i.c(),i.m(n,null)));let w=r;r=c(m),r===w?f[r].p(m,p):(M(),k(f[w],1,1,()=>{f[w]=null}),K(),s=f[r],s?s.p(m,p):(s=f[r]=b[r](m),s.c()),g(s,1),s.m(e,null))},i(m){o||(g(s),o=!0)},o(m){k(s),o=!1},d(m){m&&$(e),i.d(),f[r].d()}}}function Ot(l,e,n){let t,r;X(l,Ne,_=>n(3,t=_)),X(l,oe,_=>n(4,r=_));let{searchType:s}=e,{query:o}=e,a=de(o);const u={All:null,Running:"Running","Timed Out":"TimedOut",Completed:"Completed",Failed:"Failed","Continued as New":"ContinuedAsNew",Canceled:"Canceled",Terminated:"Terminated"},i=_=>()=>{n(0,s=_),re({parameter:"search",value:s,url:t.url,goto:ae})},b=_=>{const j=new FormData(_.target);n(1,o=String(j.get("query"))),n(2,a=de(o)),re({url:t.url,parameter:"query",value:o,goto:ae})},f=()=>{n(1,o=Pe(a)),re({url:t.url,parameter:"query",value:o,goto:ae})};function c(_){l.$$.not_equal(a.workflowId,_)&&(a.workflowId=_,n(2,a))}function m(_){l.$$.not_equal(a.workflowType,_)&&(a.workflowType=_,n(2,a))}function p(_){l.$$.not_equal(a.timeRange,_)&&(a.timeRange=_,n(2,a))}function w(_){l.$$.not_equal(a.executionStatus,_)&&(a.executionStatus=_,n(2,a))}function h(_){r=_,oe.set(r)}return l.$$set=_=>{"searchType"in _&&n(0,s=_.searchType),"query"in _&&n(1,o=_.query)},[s,o,a,t,r,u,i,b,f,c,m,p,w,h]}class jt extends Y{constructor(e){super(),Z(this,e,Ot,Lt,x,{searchType:0,query:1})}}function Se(l){l[6]=l[9].workflows}function qe(l,e,n){const t=l.slice();return t[11]=e[n],t}function Dt(l){let e;return{c(){e=N("Beta")},l(n){e=A(n,"Beta")},m(n,t){v(n,e,t)},d(n){n&&$(e)}}}function Ut(l){return{c:F,l:F,m:F,p:F,i:F,o:F,d:F}}function Qt(l){Se(l);let e,n,t,r;const s=[Mt,Vt],o=[];function a(u,i){return u[6].length?0:1}return e=a(l),n=o[e]=s[e](l),{c(){n.c(),t=P()},l(u){n.l(u),t=P()},m(u,i){o[e].m(u,i),v(u,t,i),r=!0},p(u,i){Se(u);let b=e;e=a(u),e===b?o[e].p(u,i):(M(),k(o[b],1,1,()=>{o[b]=null}),K(),n=o[e],n?n.p(u,i):(n=o[e]=s[e](u),n.c()),g(n,1),n.m(t.parentNode,t))},i(u){r||(g(n),r=!0)},o(u){k(n),r=!1},d(u){o[e].d(u),u&&$(t)}}}function Vt(l){let e,n;return e=new et({props:{title:"No Workflows Found",content:l[5]}}),{c(){S(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,r){R(e,t,r),n=!0},p:F,i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function Mt(l){let e,n;return e=new tt({props:{items:l[6],$$slots:{default:[zt,({visibleItems:t})=>({10:t}),({visibleItems:t})=>t?1024:0]},$$scope:{ctx:l}}}),{c(){S(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,r){R(e,t,r),n=!0},p(t,r){const s={};r&8&&(s.items=t[6]),r&17428&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function Re(l){let e,n;return e=new at({props:{workflow:l[11],namespace:l[2],timeFormat:l[4]}}),{c(){S(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,r){R(e,t,r),n=!0},p(t,r){const s={};r&1024&&(s.workflow=t[11]),r&4&&(s.namespace=t[2]),r&16&&(s.timeFormat=t[4]),e.$set(s)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function Kt(l){let e,n,t=l[10],r=[];for(let o=0;o<t.length;o+=1)r[o]=Re(qe(l,t,o));const s=o=>k(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=P()},l(o){for(let a=0;a<r.length;a+=1)r[a].l(o);e=P()},m(o,a){for(let u=0;u<r.length;u+=1)r[u].m(o,a);v(o,e,a),n=!0},p(o,a){if(a&1044){t=o[10];let u;for(u=0;u<t.length;u+=1){const i=qe(o,t,u);r[u]?(r[u].p(i,a),g(r[u],1)):(r[u]=Re(i),r[u].c(),g(r[u],1),r[u].m(e.parentNode,e))}for(M(),u=t.length;u<r.length;u+=1)s(u);K()}},i(o){if(!n){for(let a=0;a<t.length;a+=1)g(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)k(r[a]);n=!1},d(o){Ie(r,o),o&&$(e)}}}function zt(l){let e,n;return e=new rt({props:{$$slots:{default:[Kt]},$$scope:{ctx:l}}}),{c(){S(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,r){R(e,t,r),n=!0},p(t,r){const s={};r&17428&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function Gt(l){let e,n;return e=new lt({}),{c(){S(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,r){R(e,t,r),n=!0},p:F,i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function Ht(l){let e,n,t,r,s,o,a,u,i,b,f;t=new pt({props:{type:"beta",$$slots:{default:[Dt]},$$scope:{ctx:l}}});function c(h){l[7](h)}function m(h){l[8](h)}let p={};l[0]!==void 0&&(p.searchType=l[0]),l[1]!==void 0&&(p.query=l[1]),s=new jt({props:p}),D.push(()=>U(s,"searchType",c)),D.push(()=>U(s,"query",m));let w={ctx:l,current:null,token:null,hasCatch:!1,pending:Gt,then:Qt,catch:Ut,value:9,blocks:[,,,]};return $e(b=l[3],w),{c(){e=B("h2"),n=N("Workflows "),S(t.$$.fragment),r=I(),S(s.$$.fragment),u=I(),i=P(),w.block.c(),this.h()},l(h){e=L(h,"H2",{class:!0});var _=O(e);n=A(_,"Workflows "),q(t.$$.fragment,_),_.forEach($),r=C(h),q(s.$$.fragment,h),u=C(h),i=P(),w.block.l(h),this.h()},h(){T(e,"class","text-2xl")},m(h,_){v(h,e,_),W(e,n),R(t,e,null),v(h,r,_),R(s,h,_),v(h,u,_),v(h,i,_),w.block.m(h,w.anchor=_),w.mount=()=>i.parentNode,w.anchor=i,f=!0},p(h,[_]){l=h;const j={};_&16384&&(j.$$scope={dirty:_,ctx:l}),t.$set(j);const z={};!o&&_&1&&(o=!0,z.searchType=l[0],Q(()=>o=!1)),!a&&_&2&&(a=!0,z.query=l[1],Q(()=>a=!1)),s.$set(z),w.ctx=l,_&8&&b!==(b=l[3])&&$e(b,w)||Me(w,l,_)},i(h){f||(g(t.$$.fragment,h),g(s.$$.fragment,h),g(w.block),f=!0)},o(h){k(t.$$.fragment,h),k(s.$$.fragment,h);for(let _=0;_<3;_+=1){const j=w.blocks[_];k(j)}f=!1},d(h){h&&$(e),E(t),h&&$(r),E(s,h),h&&$(u),h&&$(i),w.block.d(h),w.token=null,w=null}}}const Jt=Pe({timeRange:"1 day"}),kn=async function({params:l,url:e}){const n=ft(e);e.searchParams.has("query")||e.searchParams.set("query",Jt);const t=e.searchParams.get("query"),{namespace:r}=l;return{props:{namespace:r,searchType:n,query:t}}};function Xt(l,e,n){let t,r;X(l,oe,c=>n(4,r=c));let{namespace:s}=e,{searchType:o}=e,{query:a}=e,u=ct({namespace:s,query:a});X(l,u,c=>n(3,t=c));const i=o==="advanced"?"Please check your syntax and try again.":"If you have filters applied, try adjusting them.";function b(c){o=c,n(0,o)}function f(c){a=c,n(1,a)}return l.$$set=c=>{"namespace"in c&&n(2,s=c.namespace),"searchType"in c&&n(0,o=c.searchType),"query"in c&&n(1,a=c.query)},[o,a,s,t,r,i,u,b,f]}class bn extends Y{constructor(e){super(),Z(this,e,Xt,Ht,x,{namespace:2,searchType:0,query:1})}}export{bn as default,kn as load};
