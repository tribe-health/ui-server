import{S as U,i as X,s as Y,j as S,m as y,o as T,x as k,u as v,v as j,l as ae,f as N,r as Ee,w as Ae,d as i,H as ge,t as P,g as W,e as d,c as g,a as b,b as h,T as be,R as _,G as pe,h as V,k as I,n as E,K as u,ag as $e,ah as Ne,O as Se,ar as ye,as as Te,J as je,L as Pe,M as We,N as De,y as Re}from"../../../../../../chunks/vendor-c7e306c1.js";import{W as Ce,a as Fe}from"../../../../../../chunks/workflow-status-602915e0.js";import{r as He}from"../../../../../../chunks/refreshable-129fa738.js";import{r as qe,a as Me,h as Oe}from"../../../../../../chunks/route-for-api-aecf4d21.js";import{n as Be}from"../../../../../../chunks/notifications-939cb4a5.js";import{B as Je}from"../../../../../../chunks/button-7203de3b.js";import{p as ve}from"../../../../../../chunks/stores-78628462.js";import{r as ne}from"../../../../../../chunks/route-for-c019a53c.js";async function Le({workflow:r,namespace:e,reason:a}){return await qe(Me("workflow.terminate",{namespace:e,executionId:r.id,runId:r.runId}),{options:{method:"POST",body:JSON.stringify({reason:a})},shouldRetry:!1})}function Ie(r){let e,a;return e=new Je({props:{destroy:!0,$$slots:{default:[Ve]},$$scope:{ctx:r}}}),e.$on("click",r[2]),{c(){S(e.$$.fragment)},l(l){y(e.$$.fragment,l)},m(l,t){T(e,l,t),a=!0},p(l,t){const n={};t&128&&(n.$$scope={dirty:t,ctx:l}),e.$set(n)},i(l){a||(k(e.$$.fragment,l),a=!0)},o(l){v(e.$$.fragment,l),a=!1},d(l){j(e,l)}}}function Ve(r){let e;return{c(){e=P("Terminate")},l(a){e=W(a,"Terminate")},m(a,l){N(a,e,l)},d(a){a&&i(e)}}}function Ge(r){let e=r[1](r[0]),a,l,t=e&&Ie(r);return{c(){t&&t.c(),a=ae()},l(n){t&&t.l(n),a=ae()},m(n,s){t&&t.m(n,s),N(n,a,s),l=!0},p(n,[s]){s&1&&(e=n[1](n[0])),e?t?(t.p(n,s),s&1&&k(t,1)):(t=Ie(n),t.c(),k(t,1),t.m(a.parentNode,a)):t&&(Ee(),v(t,1,1,()=>{t=null}),Ae())},i(n){l||(k(t),l=!0)},o(n){v(t),l=!1},d(n){t&&t.d(n),n&&i(a)}}}function Ke(r,e,a){let{workflow:l}=e,{namespace:t}=e,n="";const{refresh:s}=ge("workflow"),f=c=>String(c.status)==="Running",o=()=>{n="",Be.add("success","Workflow Terminated"),s()},p=()=>{Le({workflow:l,namespace:t,reason:n}).then(o).catch(Oe)};return r.$$set=c=>{"workflow"in c&&a(0,l=c.workflow),"namespace"in c&&a(3,t=c.namespace)},[l,f,p,t]}class Qe extends U{constructor(e){super();X(this,e,Ke,Ge,Y,{workflow:0,namespace:3})}}function ze(r){let e;return{c(){e=P(r[1])},l(a){e=W(a,r[1])},m(a,l){N(a,e,l)},p(a,l){l&2&&V(e,a[1])},d(a){a&&i(e)}}}function Ue(r){let e,a,l,t;return{c(){e=P(r[1]),a=I(),l=d("span"),t=P(r[2]),this.h()},l(n){e=W(n,r[1]),a=E(n),l=g(n,"SPAN",{class:!0});var s=b(l);t=W(s,r[2]),s.forEach(i),this.h()},h(){h(l,"class","px-2 text-blue-700 bg-blue-100 rounded-sm")},m(n,s){N(n,e,s),N(n,a,s),N(n,l,s),u(l,t)},p(n,s){s&2&&V(e,n[1]),s&4&&V(t,n[2])},d(n){n&&i(e),n&&i(a),n&&i(l)}}}function Xe(r){let e;function a(n,s){return n[2]?Ue:ze}let l=a(r),t=l(r);return{c(){e=d("a"),t.c(),this.h()},l(n){e=g(n,"A",{class:!0,href:!0});var s=b(e);t.l(s),s.forEach(i),this.h()},h(){h(e,"class","block svelte-62pa3r"),h(e,"href",r[0]),be(e,"active",r[3])},m(n,s){N(n,e,s),t.m(e,null)},p(n,[s]){l===(l=a(n))&&t?t.p(n,s):(t.d(1),t=l(n),t&&(t.c(),t.m(e,null))),s&1&&h(e,"href",n[0]),s&8&&be(e,"active",n[3])},i:_,o:_,d(n){n&&i(e),t.d()}}}function Ye(r,e,a){let l,t;pe(r,ve,o=>a(4,t=o));let{href:n}=e,{label:s}=e,{amount:f=null}=e;return r.$$set=o=>{"href"in o&&a(0,n=o.href),"label"in o&&a(1,s=o.label),"amount"in o&&a(2,f=o.amount)},r.$$.update=()=>{r.$$.dirty&17&&a(3,l=t.path.includes(n))},[n,s,f,l,t]}class re extends U{constructor(e){super();X(this,e,Ye,Xe,Y,{href:0,label:1,amount:2})}}function Ze(r){let e,a,l,t,n,s,f,o,p;return a=new re({props:{label:"History",href:ne("workflow.events",{namespace:r[0],workflowId:r[1],runId:r[2]}),amount:r[3]}}),t=new re({props:{label:"Workers",href:ne("workers",{namespace:r[0],workflowId:r[1],runId:r[2]})}}),s=new re({props:{label:"Stack Trace",href:ne("workflow.stack-trace",{namespace:r[0],workflowId:r[1],runId:r[2]})}}),o=new re({props:{label:"Query",href:ne("workflow.query",{namespace:r[0],workflowId:r[1],runId:r[2]})}}),{c(){e=d("nav"),S(a.$$.fragment),l=I(),S(t.$$.fragment),n=I(),S(s.$$.fragment),f=I(),S(o.$$.fragment),this.h()},l(c){e=g(c,"NAV",{class:!0});var $=b(e);y(a.$$.fragment,$),l=E($),y(t.$$.fragment,$),n=E($),y(s.$$.fragment,$),f=E($),y(o.$$.fragment,$),$.forEach(i),this.h()},h(){h(e,"class","flex gap-6")},m(c,$){N(c,e,$),T(a,e,null),u(e,l),T(t,e,null),u(e,n),T(s,e,null),u(e,f),T(o,e,null),p=!0},p:_,i(c){p||(k(a.$$.fragment,c),k(t.$$.fragment,c),k(s.$$.fragment,c),k(o.$$.fragment,c),p=!0)},o(c){v(a.$$.fragment,c),v(t.$$.fragment,c),v(s.$$.fragment,c),v(o.$$.fragment,c),p=!1},d(c){c&&i(e),j(a),j(t),j(s),j(o)}}}function xe(r,e,a){let l;pe(r,ve,p=>a(5,l=p));let{workflow:t}=e;const{namespace:n,workflow:s,run:f}=l.params,o=t==null?void 0:t.historyEvents;return r.$$set=p=>{"workflow"in p&&a(4,t=p.workflow)},[n,s,f,o,t]}class et extends U{constructor(e){super();X(this,e,xe,Ze,Y,{workflow:4})}}function tt(r){return{c:_,l:_,m:_,p:_,i:_,o:_,d:_}}function at(r){var he;let e,a,l,t,n,s,f,o,p=r[2].name+"",c,$,D,se,R,le,C,G,oe,fe,B,K=r[2].id+"",Z,ue,F,Q,ce,ie,J,z=r[2].runId+"",x,me,H,q;return t=new Se({props:{icon:ye}}),D=new Ce({props:{status:(he=r[2])==null?void 0:he.status}}),R=new Qe({props:{workflow:r[2],namespace:r[0]}}),H=new et({props:{workflow:r[2]}}),{c(){e=d("header"),a=d("main"),l=d("a"),S(t.$$.fragment),s=I(),f=d("div"),o=d("h1"),c=P(p),$=I(),S(D.$$.fragment),se=I(),S(R.$$.fragment),le=I(),C=d("p"),G=d("span"),oe=P("Workflow ID"),fe=I(),B=d("span"),Z=P(K),ue=I(),F=d("p"),Q=d("span"),ce=P("Run ID"),ie=I(),J=d("span"),x=P(z),me=I(),S(H.$$.fragment),this.h()},l(m){e=g(m,"HEADER",{class:!0});var w=b(e);a=g(w,"MAIN",{class:!0});var A=b(a);l=g(A,"A",{href:!0,class:!0,style:!0});var L=b(l);y(t.$$.fragment,L),L.forEach(i),s=E(A),f=g(A,"DIV",{class:!0});var M=b(f);o=g(M,"H1",{class:!0});var O=b(o);c=W(O,p),$=E(O),y(D.$$.fragment,O),O.forEach(i),se=E(M),y(R.$$.fragment,M),M.forEach(i),le=E(A),C=g(A,"P",{class:!0});var ee=b(C);G=g(ee,"SPAN",{});var _e=b(G);oe=W(_e,"Workflow ID"),_e.forEach(i),fe=E(ee),B=g(ee,"SPAN",{class:!0});var we=b(B);Z=W(we,K),we.forEach(i),ee.forEach(i),ue=E(A),F=g(A,"P",{class:!0});var te=b(F);Q=g(te,"SPAN",{});var ke=b(Q);ce=W(ke,"Run ID"),ke.forEach(i),ie=E(te),J=g(te,"SPAN",{class:!0});var de=b(J);x=W(de,z),de.forEach(i),te.forEach(i),A.forEach(i),me=E(w),y(H.$$.fragment,w),w.forEach(i),this.h()},h(){h(l,"href",n="/namespaces/"+r[0]+"/workflows"),h(l,"class","absolute top-2 back-to-workflows"),Te(l,"left","-1.5rem"),h(o,"class","text-2xl"),h(f,"class","flex justify-between items-center"),h(B,"class","font-medium"),h(C,"class","text-md"),h(J,"class","font-medium"),h(F,"class","text-md"),h(a,"class","flex flex-col gap-1 relative"),h(e,"class","flex flex-col gap-4")},m(m,w){N(m,e,w),u(e,a),u(a,l),T(t,l,null),u(a,s),u(a,f),u(f,o),u(o,c),u(o,$),T(D,o,null),u(f,se),T(R,f,null),u(a,le),u(a,C),u(C,G),u(G,oe),u(C,fe),u(C,B),u(B,Z),u(a,ue),u(a,F),u(F,Q),u(Q,ce),u(F,ie),u(F,J),u(J,x),u(e,me),T(H,e,null),q=!0},p(m,w){var O;(!q||w&1&&n!==(n="/namespaces/"+m[0]+"/workflows"))&&h(l,"href",n),(!q||w&2)&&p!==(p=m[2].name+"")&&V(c,p);const A={};w&2&&(A.status=(O=m[2])==null?void 0:O.status),D.$set(A);const L={};w&2&&(L.workflow=m[2]),w&1&&(L.namespace=m[0]),R.$set(L),(!q||w&2)&&K!==(K=m[2].id+"")&&V(Z,K),(!q||w&2)&&z!==(z=m[2].runId+"")&&V(x,z);const M={};w&2&&(M.workflow=m[2]),H.$set(M)},i(m){q||(k(t.$$.fragment,m),k(D.$$.fragment,m),k(R.$$.fragment,m),k(H.$$.fragment,m),q=!0)},o(m){v(t.$$.fragment,m),v(D.$$.fragment,m),v(R.$$.fragment,m),v(H.$$.fragment,m),q=!1},d(m){m&&i(e),j(t),j(D),j(R),j(H)}}}function nt(r){return{c:_,l:_,m:_,p:_,i:_,o:_,d:_}}function rt(r){let e,a,l,t={ctx:r,current:null,token:null,hasCatch:!1,pending:nt,then:at,catch:tt,value:2,blocks:[,,,]};return $e(a=r[1],t),{c(){e=ae(),t.block.c()},l(n){e=ae(),t.block.l(n)},m(n,s){N(n,e,s),t.block.m(n,t.anchor=s),t.mount=()=>e.parentNode,t.anchor=e,l=!0},p(n,[s]){r=n,t.ctx=r,s&2&&a!==(a=r[1])&&$e(a,t)||Ne(t,r,s)},i(n){l||(k(t.block),l=!0)},o(n){for(let s=0;s<3;s+=1){const f=t.blocks[s];v(f)}l=!1},d(n){n&&i(e),t.block.d(n),t.token=null,t=null}}}function st(r,e,a){let l,{namespace:t}=e,n=ge("workflow");return pe(r,n,s=>a(1,l=s)),r.$$set=s=>{"namespace"in s&&a(0,t=s.namespace)},[t,l,n]}class lt extends U{constructor(e){super();X(this,e,st,rt,Y,{namespace:0})}}function ot(r){let e,a,l,t;a=new lt({props:{namespace:r[0]}});const n=r[3].default,s=je(n,r,r[2],null);return{c(){e=d("main"),S(a.$$.fragment),l=I(),s&&s.c(),this.h()},l(f){e=g(f,"MAIN",{class:!0});var o=b(e);y(a.$$.fragment,o),l=E(o),s&&s.l(o),o.forEach(i),this.h()},h(){h(e,"class","flex flex-col gap-6 h-full")},m(f,o){N(f,e,o),T(a,e,null),u(e,l),s&&s.m(e,null),t=!0},p(f,[o]){const p={};o&1&&(p.namespace=f[0]),a.$set(p),s&&s.p&&(!t||o&4)&&Pe(s,n,f,f[2],t?De(n,f[2],o,null):We(f[2]),null)},i(f){t||(k(a.$$.fragment,f),k(s,f),t=!0)},o(f){v(a.$$.fragment,f),v(s,f),t=!1},d(f){f&&i(e),j(a),s&&s.d(f)}}}async function kt({page:r}){const{workflow:e,run:a,namespace:l}=r.params;return{props:{parameters:{namespace:l,executionId:e,runId:a},namespace:l}}}function ft(r,e,a){let{$$slots:l={},$$scope:t}=e,{parameters:n}=e,{namespace:s}=e,f=He(()=>Fe(n));return r.$$set=o=>{"parameters"in o&&a(1,n=o.parameters),"namespace"in o&&a(0,s=o.namespace),"$$scope"in o&&a(2,t=o.$$scope)},Re("workflow",f),[s,n,t,l]}class dt extends U{constructor(e){super();X(this,e,ft,ot,Y,{parameters:1,namespace:0})}}export{dt as default,kt as load};