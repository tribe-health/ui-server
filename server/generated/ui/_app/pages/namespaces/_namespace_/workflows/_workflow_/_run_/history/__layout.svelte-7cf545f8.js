import{S as he,i as we,s as ke,e as p,t as O,k as S,w as N,c as g,a as h,h as P,d as m,m as C,x as V,b as k,g as W,M as c,y as A,n as ve,a3 as ze,ag as Ue,p as be,q as w,o as v,B as D,l as _e,O as He,v as Le,ah as qe,E as oe,ai as Ne,aj as Be,j as Se,I as Me,J as Qe,K as Ge,L as Ke}from"../../../../../../../chunks/index-733079a8.js";import{a as Xe}from"../../../../../../../chunks/events-service-1ac9fe2c.js";import{g as Ye,f as Ze,k as Ve,e as pe}from"../../../../../../../chunks/route-for-46a9c4b7.js";import{h as xe,a as et,i as tt,j as nt}from"../../../../../../../chunks/index.es-b93730d8.js";import{i as lt}from"../../../../../../../chunks/index-a8ee0a5c.js";import{f as ge}from"../../../../../../../chunks/format-date-4b1bc9ef.js";import{e as rt,s as Te}from"../../../../../../../chunks/event-view-type-a67056be.js";import{T as ot,a as Ie}from"../../../../../../../chunks/toggle-buttons-866890d6.js";import{p as st}from"../../../../../../../chunks/stores-1e95b62c.js";import{L as Re}from"../../../../../../../chunks/link-089a4975.js";import{C as je}from"../../../../../../../chunks/copyable-a8d8233c.js";import{g as at}from"../../../../../../../chunks/query-service-cf3a2d42.js";import{E as ft}from"../../../../../../../chunks/empty-state-091dd153.js";import{C as Je}from"../../../../../../../chunks/code-block-9bb6a382.js";import"../../../../../../../chunks/route-for-api-34e668a1.js";import"../../../../../../../chunks/index-d95e2ca5.js";import"../../../../../../../chunks/notifications-7ffcc78e.js";import"../../../../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../../../../chunks/index-7c5d5fc3.js";import"../../../../../../../chunks/data-converter-config-8b44b398.js";import"../../../../../../../chunks/persist-store-bb92bb0b.js";import"../../../../../../../chunks/atob-5f9d7101.js";import"../../../../../../../chunks/get-event-categorization-b2bce139.js";import"../../../../../../../chunks/simplify-attributes-6710d3ed.js";const it=["WorkflowExecutionFailed","WorkflowExecutionCompleted","WorkflowExecutionContinuedAsNew","WorkflowExecutionTimedOut","WorkflowExecutionCanceled","WorkflowExecutionTerminated"],ct=r=>{for(const e of it)if(r.eventType===e)return!0;return!1},ut=r=>{for(const e of r)if(ct(e))return e},mt=r=>lt(r)?r.attributes.result===null?null:r.attributes.result.payloads:r.attributes,_t=r=>{var o,a;let e,t;const n=r==null?void 0:r.find(s=>!!s.workflowExecutionStartedEventAttributes),l=ut(r);return n&&(e=JSON.stringify((a=(o=n==null?void 0:n.workflowExecutionStartedEventAttributes)==null?void 0:o.input)==null?void 0:a.payloads)),l&&(t=JSON.stringify(mt(l))),{input:e,result:t}};function Ae(r,e,t){const n=r.slice();return n[6]=e[t].id,n[7]=qe(e[t],["id"]),n}function dt(r){let e,t,n,l,o,a=[],s=new Map,i,f,_,y,b=r[0];const F=$=>$[6];for(let $=0;$<b.length;$+=1){let d=Ae(r,b,$),T=F(d);s.set(T,a[$]=De(T,d))}return _=new Re({props:{href:r[1],$$slots:{default:[ht]},$$scope:{ctx:r}}}),{c(){e=p("section"),t=p("h3"),n=O("Pending Activities"),l=S(),o=p("section");for(let $=0;$<a.length;$+=1)a[$].c();i=S(),f=p("div"),N(_.$$.fragment),this.h()},l($){e=g($,"SECTION",{class:!0});var d=h(e);t=g(d,"H3",{class:!0});var T=h(t);n=P(T,"Pending Activities"),T.forEach(m),l=C(d),o=g(d,"SECTION",{class:!0});var E=h(o);for(let z=0;z<a.length;z+=1)a[z].l(E);E.forEach(m),i=C(d),f=g(d,"DIV",{class:!0});var L=h(f);V(_.$$.fragment,L),L.forEach(m),d.forEach(m),this.h()},h(){k(t,"class","text-lg font-medium mb-4"),k(o,"class","w-full table-auto space-x-4"),k(f,"class","text-right"),k(e,"class","border-2 border-gray-300 rounded-lg p-4")},m($,d){W($,e,d),c(e,t),c(t,n),c(e,l),c(e,o);for(let T=0;T<a.length;T+=1)a[T].m(o,null);c(e,i),c(e,f),A(_,f,null),y=!0},p($,d){d&3&&(b=$[0],ve(),a=ze(a,d,F,1,$,b,s,o,Ue,De,null,Ae),be());const T={};d&1024&&(T.$$scope={dirty:d,ctx:$}),_.$set(T)},i($){if(!y){for(let d=0;d<b.length;d+=1)w(a[d]);w(_.$$.fragment,$),y=!0}},o($){for(let d=0;d<a.length;d+=1)v(a[d]);v(_.$$.fragment,$),y=!1},d($){$&&m(e);for(let d=0;d<a.length;d+=1)a[d].d();D(_)}}}function $t(r){let e,t;return{c(){e=p("span"),t=O("(Empty)"),this.h()},l(n){e=g(n,"SPAN",{class:!0});var l=h(e);t=P(l,"(Empty)"),l.forEach(m),this.h()},h(){k(e,"class","bg-gray-300 text-gray-700 px-2 text-sm")},m(n,l){W(n,e,l),c(e,t)},p:oe,i:oe,o:oe,d(n){n&&m(e)}}}function pt(r){var n;let e,t;return e=new je({props:{content:(n=r[7].lastFailure)==null?void 0:n.message,"container-class":"overflow-y-scroll",$$slots:{default:[gt]},$$scope:{ctx:r}}}),{c(){N(e.$$.fragment)},l(l){V(e.$$.fragment,l)},m(l,o){A(e,l,o),t=!0},p(l,o){const a={};o&1024&&(a.$$scope={dirty:o,ctx:l}),e.$set(a)},i(l){t||(w(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){D(e,l)}}}function gt(r){var o;let e,t,n=((o=r[7].lastFailure)==null?void 0:o.message)+"",l;return{c(){e=p("pre"),t=p("code"),l=O(n),this.h()},l(a){e=g(a,"PRE",{class:!0});var s=h(e);t=g(s,"CODE",{class:!0});var i=h(t);l=P(i,n),i.forEach(m),s.forEach(m),this.h()},h(){k(t,"class","language-json"),k(e,"class","rounded-lg max-w-fit")},m(a,s){W(a,e,s),c(e,t),c(t,l)},p:oe,d(a){a&&m(e)}}}function De(r,e){let t,n,l=e[7].activityId+"",o,a,s,i,f,_,y,b,F,$=e[7].activityType+"",d,T,E,L,z,G,fe,U,Z,K,x,j,q,ee,ie,se,te=ge(e[7].lastHeartbeatTime)+"",M,ce,X;const H=[pt,$t],ue=[];function J(B,u){return B[7].lastFailure?0:1}return U=J(e),Z=ue[U]=H[U](e),{key:r,first:null,c(){t=p("a"),n=p("div"),o=O(l),a=S(),s=p("div"),i=p("div"),f=p("h4"),_=O("Activity Name"),y=S(),b=p("p"),F=p("span"),d=O($),T=S(),E=p("div"),L=p("div"),z=p("h3"),G=O("Last Failure"),fe=S(),Z.c(),K=S(),x=p("div"),j=p("div"),q=p("h4"),ee=O("Last Heartbeat Time"),ie=S(),se=p("p"),M=O(te),ce=S(),this.h()},l(B){t=g(B,"A",{class:!0,href:!0});var u=h(t);n=g(u,"DIV",{class:!0});var I=h(n);o=P(I,l),I.forEach(m),a=C(u),s=g(u,"DIV",{class:!0});var R=h(s);i=g(R,"DIV",{class:!0});var Q=h(i);f=g(Q,"H4",{});var ne=h(f);_=P(ne,"Activity Name"),ne.forEach(m),y=C(Q),b=g(Q,"P",{});var le=h(b);F=g(le,"SPAN",{class:!0});var re=h(F);d=P(re,$),re.forEach(m),le.forEach(m),Q.forEach(m),R.forEach(m),T=C(u),E=g(u,"DIV",{class:!0});var ae=h(E);L=g(ae,"DIV",{class:!0});var Y=h(L);z=g(Y,"H3",{class:!0});var de=h(z);G=P(de,"Last Failure"),de.forEach(m),fe=C(Y),Z.l(Y),Y.forEach(m),ae.forEach(m),K=C(u),x=g(u,"DIV",{class:!0});var $e=h(x);j=g($e,"DIV",{class:!0});var Ee=h(j);q=g(Ee,"H4",{});var Ce=h(q);ee=P(Ce,"Last Heartbeat Time"),Ce.forEach(m),ie=C(Ee),se=g(Ee,"P",{});var ye=h(se);M=P(ye,te),ye.forEach(m),Ee.forEach(m),$e.forEach(m),ce=C(u),u.forEach(m),this.h()},h(){k(n,"class","md:w-1/12 text-left font-normal text-gray-500 w-40"),k(F,"class","bg-gray-300 text-gray-700 px-2 text-sm"),k(i,"class","flex gap-2 items-center"),k(s,"class","w-full md:w-1/4"),k(z,"class","whitespace-nowrap"),k(L,"class","flex gap-2 items-center"),k(E,"class","w-full md:w-5/12"),k(j,"class","flex gap-2"),k(x,"class","w-full md:w-1/4"),k(t,"class","block md:flex content-between w-full border-b-2 border-gray-300 p-2 last-of-type:border-b-0 hover:bg-gray-50 gap-4 items-center"),k(t,"href",e[1]),this.first=t},m(B,u){W(B,t,u),c(t,n),c(n,o),c(t,a),c(t,s),c(s,i),c(i,f),c(f,_),c(i,y),c(i,b),c(b,F),c(F,d),c(t,T),c(t,E),c(E,L),c(L,z),c(z,G),c(L,fe),ue[U].m(L,null),c(t,K),c(t,x),c(x,j),c(j,q),c(q,ee),c(j,ie),c(j,se),c(se,M),c(t,ce),X=!0},p(B,u){e=B,Z.p(e,u)},i(B){X||(w(Z),X=!0)},o(B){v(Z),X=!1},d(B){B&&m(t),ue[U].d()}}}function ht(r){let e;return{c(){e=O("Show all")},l(t){e=P(t,"Show all")},m(t,n){W(t,e,n)},d(t){t&&m(e)}}}function wt(r){let e,t,n=r[0].length&&dt(r);return{c(){n&&n.c(),e=_e()},l(l){n&&n.l(l),e=_e()},m(l,o){n&&n.m(l,o),W(l,e,o),t=!0},p(l,[o]){l[0].length&&n.p(l,o)},i(l){t||(w(n),t=!0)},o(l){v(n),t=!1},d(l){n&&n.d(l),l&&m(e)}}}function kt(r,e,t){let n;He(r,st,f=>t(2,n=f));const{pendingActivities:l}=n.stuff.workflow,{namespace:o,workflow:a,run:s}=n.params,i=Ye({namespace:o,workflow:a,run:s});return Le(()=>{window.Prism.highlightAll()}),[l,i]}class vt extends he{constructor(e){super(),we(this,e,kt,wt,ke,{})}}function Oe(r){let e,t,n,l,o,a,s={ctx:r,current:null,token:null,hasCatch:!0,pending:Tt,then:Et,catch:bt,value:3,error:4,blocks:[,,,]};return Ne(o=r[1],s),{c(){e=p("section"),t=p("h3"),n=O("Stack Trace"),l=S(),s.block.c(),this.h()},l(i){e=g(i,"SECTION",{class:!0});var f=h(e);t=g(f,"H3",{class:!0});var _=h(t);n=P(_,"Stack Trace"),_.forEach(m),l=C(f),s.block.l(f),f.forEach(m),this.h()},h(){k(t,"class","text-lg mb-2 w-full"),k(e,"class","stack-trace svelte-18yyc2q")},m(i,f){W(i,e,f),c(e,t),c(t,n),c(e,l),s.block.m(e,s.anchor=null),s.mount=()=>e,s.anchor=null,a=!0},p(i,f){r=i,s.ctx=r,f&2&&o!==(o=r[1])&&Ne(o,s)||Be(s,r,f)},i(i){a||(w(s.block),a=!0)},o(i){for(let f=0;f<3;f+=1){const _=s.blocks[f];v(_)}a=!1},d(i){i&&m(e),s.block.d(),s.token=null,s=null}}}function bt(r){let e,t;return e=new ft({props:{title:"An Error Occured",content:"Please make sure you have at least one worker running."}}),{c(){N(e.$$.fragment)},l(n){V(e.$$.fragment,n)},m(n,l){A(e,n,l),t=!0},p:oe,i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){v(e.$$.fragment,n),t=!1},d(n){D(e,n)}}}function Et(r){let e,t,n;return t=new Je({props:{content:r[3],language:"text"}}),{c(){e=p("div"),N(t.$$.fragment),this.h()},l(l){e=g(l,"DIV",{class:!0});var o=h(e);V(t.$$.fragment,o),o.forEach(m),this.h()},h(){k(e,"class","flex items-start h-full")},m(l,o){W(l,e,o),A(t,e,null),n=!0},p(l,o){const a={};o&2&&(a.content=l[3]),t.$set(a)},i(l){n||(w(t.$$.fragment,l),n=!0)},o(l){v(t.$$.fragment,l),n=!1},d(l){l&&m(e),D(t)}}}function Tt(r){let e,t,n,l,o,a;return{c(){e=p("div"),t=p("h2"),n=O("Loading\u2026"),l=S(),o=p("p"),a=O("(This will fail if you have no workers running.)"),this.h()},l(s){e=g(s,"DIV",{class:!0});var i=h(e);t=g(i,"H2",{class:!0});var f=h(t);n=P(f,"Loading\u2026"),f.forEach(m),l=C(i),o=g(i,"P",{});var _=h(o);a=P(_,"(This will fail if you have no workers running.)"),_.forEach(m),i.forEach(m),this.h()},h(){k(t,"class","font-bold text-2xl mb-4"),k(e,"class","text-center")},m(s,i){W(s,e,i),c(e,t),c(t,n),c(e,l),c(e,o),c(o,a)},p:oe,i:oe,o:oe,d(s){s&&m(e)}}}function It(r){let e=String(r[0].status)==="Running",t,n,l=e&&Oe(r);return{c(){l&&l.c(),t=_e()},l(o){l&&l.l(o),t=_e()},m(o,a){l&&l.m(o,a),W(o,t,a),n=!0},p(o,[a]){a&1&&(e=String(o[0].status)==="Running"),e?l?(l.p(o,a),a&1&&w(l,1)):(l=Oe(o),l.c(),w(l,1),l.m(t.parentNode,t)):l&&(ve(),v(l,1,1,()=>{l=null}),be())},i(o){n||(w(l),n=!0)},o(o){v(l),n=!1},d(o){l&&l.d(o),o&&m(t)}}}function St(r,e,t){let{namespace:n}=e,{workflow:l}=e,o;return Le(()=>{t(1,o=(()=>at({workflow:l,namespace:n}))())}),r.$$set=a=>{"namespace"in a&&t(2,n=a.namespace),"workflow"in a&&t(0,l=a.workflow)},[l,o,n]}class Ct extends he{constructor(e){super(),we(this,e,St,It,ke,{namespace:2,workflow:0})}}function Pe(r){let e,t,n,l,o,a;return o=new Je({props:{content:r[1],class:"mb-2 max-h-96"}}),{c(){e=p("article"),t=p("h3"),n=O(r[0]),l=S(),N(o.$$.fragment),this.h()},l(s){e=g(s,"ARTICLE",{class:!0});var i=h(e);t=g(i,"H3",{class:!0});var f=h(t);n=P(f,r[0]),f.forEach(m),l=C(i),V(o.$$.fragment,i),i.forEach(m),this.h()},h(){k(t,"class","text-lg"),k(e,"class","flex flex-col border-2 border-gray-300 p-4 rounded-lg w-full lg:w-1/2")},m(s,i){W(s,e,i),c(e,t),c(t,n),c(e,l),A(o,e,null),a=!0},p(s,i){(!a||i&1)&&Se(n,s[0]);const f={};i&2&&(f.content=s[1]),o.$set(f)},i(s){a||(w(o.$$.fragment,s),a=!0)},o(s){v(o.$$.fragment,s),a=!1},d(s){s&&m(e),D(o)}}}function yt(r){let e,t,n=r[1]&&Pe(r);return{c(){n&&n.c(),e=_e()},l(l){n&&n.l(l),e=_e()},m(l,o){n&&n.m(l,o),W(l,e,o),t=!0},p(l,[o]){l[1]?n?(n.p(l,o),o&2&&w(n,1)):(n=Pe(l),n.c(),w(n,1),n.m(e.parentNode,e)):n&&(ve(),v(n,1,1,()=>{n=null}),be())},i(l){t||(w(n),t=!0)},o(l){v(n),t=!1},d(l){n&&n.d(l),l&&m(e)}}}function Nt(r,e,t){let{title:n}=e,{content:l}=e;return r.$$set=o=>{"title"in o&&t(0,n=o.title),"content"in o&&t(1,l=o.content)},[n,l]}class We extends he{constructor(e){super(),we(this,e,Nt,yt,ke,{title:0,content:1})}}function Vt(r){let e,t;return{c(){e=p("div"),t=O(r[1]),this.h()},l(n){e=g(n,"DIV",{class:!0});var l=h(e);t=P(l,r[1]),l.forEach(m),this.h()},h(){k(e,"class","select-all")},m(n,l){W(n,e,l),c(e,t)},p(n,l){l&2&&Se(t,n[1])},i:oe,o:oe,d(n){n&&m(e)}}}function At(r){let e,t;return e=new je({props:{content:r[1],$$slots:{default:[Ot]},$$scope:{ctx:r}}}),{c(){N(e.$$.fragment)},l(n){V(e.$$.fragment,n)},m(n,l){A(e,n,l),t=!0},p(n,l){const o={};l&2&&(o.content=n[1]),l&22&&(o.$$scope={dirty:l,ctx:n}),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){v(e.$$.fragment,n),t=!1},d(n){D(e,n)}}}function Dt(r){let e;return{c(){e=O(r[1])},l(t){e=P(t,r[1])},m(t,n){W(t,e,n)},p(t,n){n&2&&Se(e,t[1])},d(t){t&&m(e)}}}function Ot(r){let e,t;return e=new Re({props:{href:r[2],$$slots:{default:[Dt]},$$scope:{ctx:r}}}),{c(){N(e.$$.fragment)},l(n){V(e.$$.fragment,n)},m(n,l){A(e,n,l),t=!0},p(n,l){const o={};l&4&&(o.href=n[2]),l&18&&(o.$$scope={dirty:l,ctx:n}),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){v(e.$$.fragment,n),t=!1},d(n){D(e,n)}}}function Pt(r){let e,t,n,l,o,a,s,i,f,_;const y=[At,Vt],b=[];function F($,d){return $[2]?0:1}return s=F(r),i=b[s]=y[s](r),{c(){e=p("article"),t=p("div"),n=O(r[0]),l=O(":"),o=S(),a=p("div"),i.c(),this.h()},l($){e=g($,"ARTICLE",{class:!0});var d=h(e);t=g(d,"DIV",{class:!0});var T=h(t);n=P(T,r[0]),l=P(T,":"),T.forEach(m),o=C(d),a=g(d,"DIV",{});var E=h(a);i.l(E),E.forEach(m),d.forEach(m),this.h()},h(){k(t,"class","font-medium"),k(e,"class",f="flex gap-2 text-"+r[3])},m($,d){W($,e,d),c(e,t),c(t,n),c(t,l),c(e,o),c(e,a),b[s].m(a,null),_=!0},p($,[d]){(!_||d&1)&&Se(n,$[0]);let T=s;s=F($),s===T?b[s].p($,d):(ve(),v(b[T],1,1,()=>{b[T]=null}),be(),i=b[s],i?i.p($,d):(i=b[s]=y[s]($),i.c()),w(i,1),i.m(a,null)),(!_||d&8&&f!==(f="flex gap-2 text-"+$[3]))&&k(e,"class",f)},i($){_||(w(i),_=!0)},o($){v(i),_=!1},d($){$&&m(e),b[s].d()}}}function Wt(r,e,t){let{title:n}=e,{content:l}=e,{href:o=null}=e,{textSize:a="md"}=e;return r.$$set=s=>{"title"in s&&t(0,n=s.title),"content"in s&&t(1,l=s.content),"href"in s&&t(2,o=s.href),"textSize"in s&&t(3,a=s.textSize)},[n,l,o,a]}class me extends he{constructor(e){super(),we(this,e,Wt,Pt,ke,{title:0,content:1,href:2,textSize:3})}}function Fe(r){var n,l,o;let e,t;return e=new me({props:{title:"Parent",content:(n=r[1].parent)==null?void 0:n.workflowId,href:Ve({namespace:r[0],workflow:(l=r[1].parent)==null?void 0:l.workflowId,run:(o=r[1].parent)==null?void 0:o.runId})}}),{c(){N(e.$$.fragment)},l(a){V(e.$$.fragment,a)},m(a,s){A(e,a,s),t=!0},p(a,s){var f,_,y;const i={};s&2&&(i.content=(f=a[1].parent)==null?void 0:f.workflowId),s&3&&(i.href=Ve({namespace:a[0],workflow:(_=a[1].parent)==null?void 0:_.workflowId,run:(y=a[1].parent)==null?void 0:y.runId})),e.$set(i)},i(a){t||(w(e.$$.fragment,a),t=!0)},o(a){v(e.$$.fragment,a),t=!1},d(a){D(e,a)}}}function Ft(r){let e;return{c(){e=O("Summary")},l(t){e=P(t,"Summary")},m(t,n){W(t,e,n)},d(t){t&&m(e)}}}function Ht(r){let e;return{c(){e=O("Full")},l(t){e=P(t,"Full")},m(t,n){W(t,e,n)},d(t){t&&m(e)}}}function Lt(r){let e;return{c(){e=O("Compact")},l(t){e=P(t,"Compact")},m(t,n){W(t,e,n)},d(t){t&&m(e)}}}function Rt(r){let e;return{c(){e=O("JSON")},l(t){e=P(t,"JSON")},m(t,n){W(t,e,n)},d(t){t&&m(e)}}}function jt(r){let e,t,n,l,o,a,s,i;return e=new Ie({props:{icon:xe,base:pe(r[5]("summary")),href:pe(r[5]("summary")),active:r[2]==="summary",$$slots:{default:[Ft]},$$scope:{ctx:r}}}),e.$on("click",r[9]),n=new Ie({props:{icon:et,href:pe(r[5]("full")),active:r[2]==="full",$$slots:{default:[Ht]},$$scope:{ctx:r}}}),n.$on("click",r[10]),o=new Ie({props:{icon:tt,href:pe(r[5]("compact")),active:r[2]==="compact",$$slots:{default:[Lt]},$$scope:{ctx:r}}}),o.$on("click",r[11]),s=new Ie({props:{icon:nt,href:pe(r[5]("json")),active:r[2]==="json",$$slots:{default:[Rt]},$$scope:{ctx:r}}}),s.$on("click",r[12]),{c(){N(e.$$.fragment),t=S(),N(n.$$.fragment),l=S(),N(o.$$.fragment),a=S(),N(s.$$.fragment)},l(f){V(e.$$.fragment,f),t=C(f),V(n.$$.fragment,f),l=C(f),V(o.$$.fragment,f),a=C(f),V(s.$$.fragment,f)},m(f,_){A(e,f,_),W(f,t,_),A(n,f,_),W(f,l,_),A(o,f,_),W(f,a,_),A(s,f,_),i=!0},p(f,_){const y={};_&4&&(y.active=f[2]==="summary"),_&8192&&(y.$$scope={dirty:_,ctx:f}),e.$set(y);const b={};_&4&&(b.active=f[2]==="full"),_&8192&&(b.$$scope={dirty:_,ctx:f}),n.$set(b);const F={};_&4&&(F.active=f[2]==="compact"),_&8192&&(F.$$scope={dirty:_,ctx:f}),o.$set(F);const $={};_&4&&($.active=f[2]==="json"),_&8192&&($.$$scope={dirty:_,ctx:f}),s.$set($)},i(f){i||(w(e.$$.fragment,f),w(n.$$.fragment,f),w(o.$$.fragment,f),w(s.$$.fragment,f),i=!0)},o(f){v(e.$$.fragment,f),v(n.$$.fragment,f),v(o.$$.fragment,f),v(s.$$.fragment,f),i=!1},d(f){D(e,f),f&&m(t),D(n,f),f&&m(l),D(o,f),f&&m(a),D(s,f)}}}function Jt(r){var B;let e,t,n,l,o,a,s,i,f,_,y,b,F,$,d,T,E,L,z,G,fe,U,Z,K,x,j,q,ee,ie,se,te,M,ce,X;n=new me({props:{title:"Workflow Type",content:r[1].name}}),o=new me({props:{title:"Run ID",content:r[1].runId}}),i=new me({props:{title:"Start Time",content:ge(r[1].startTime,"UTC")}}),_=new me({props:{title:"Close Time",content:ge(r[1].endTime,"UTC")}}),b=new me({props:{title:"Task Queue",content:r[1].taskQueue,href:Ze(r[6])}});let H=((B=r[1])==null?void 0:B.parent)&&Fe(r);d=new me({props:{title:"State Transitions",content:r[1].stateTransitionCount}}),L=new We({props:{title:"Input",content:r[3]}}),G=new We({props:{title:"Results",content:r[4]}}),U=new Ct({props:{namespace:r[0],workflow:r[1]}}),K=new vt({}),M=new ot({props:{$$slots:{default:[jt]},$$scope:{ctx:r}}});const ue=r[8].default,J=Me(ue,r,r[13],null);return{c(){e=p("section"),t=p("section"),N(n.$$.fragment),l=S(),N(o.$$.fragment),a=S(),s=p("div"),N(i.$$.fragment),f=S(),N(_.$$.fragment),y=S(),N(b.$$.fragment),F=S(),H&&H.c(),$=S(),N(d.$$.fragment),T=S(),E=p("section"),N(L.$$.fragment),z=S(),N(G.$$.fragment),fe=S(),N(U.$$.fragment),Z=S(),N(K.$$.fragment),x=S(),j=p("section"),q=p("nav"),ee=p("h3"),ie=O("Recent Events"),se=S(),te=p("div"),N(M.$$.fragment),ce=S(),J&&J.c(),this.h()},l(u){e=g(u,"SECTION",{class:!0});var I=h(e);t=g(I,"SECTION",{class:!0});var R=h(t);V(n.$$.fragment,R),l=C(R),V(o.$$.fragment,R),a=C(R),s=g(R,"DIV",{class:!0});var Q=h(s);V(i.$$.fragment,Q),f=C(Q),V(_.$$.fragment,Q),Q.forEach(m),y=C(R),V(b.$$.fragment,R),F=C(R),H&&H.l(R),$=C(R),V(d.$$.fragment,R),R.forEach(m),T=C(I),E=g(I,"SECTION",{class:!0});var ne=h(E);V(L.$$.fragment,ne),z=C(ne),V(G.$$.fragment,ne),ne.forEach(m),fe=C(I),V(U.$$.fragment,I),Z=C(I),V(K.$$.fragment,I),x=C(I),j=g(I,"SECTION",{id:!0});var le=h(j);q=g(le,"NAV",{class:!0});var re=h(q);ee=g(re,"H3",{class:!0});var ae=h(ee);ie=P(ae,"Recent Events"),ae.forEach(m),se=C(re),te=g(re,"DIV",{id:!0,class:!0});var Y=h(te);V(M.$$.fragment,Y),Y.forEach(m),re.forEach(m),ce=C(le),J&&J.l(le),le.forEach(m),I.forEach(m),this.h()},h(){k(s,"class","flex gap-1 flex-col md:flex-row md:gap-6"),k(t,"class","flex flex-col gap-1"),k(E,"class","flex gap-4 w-full flex-col lg:flex-row"),k(ee,"class","text-lg font-medium"),k(te,"id","event-view-toggle"),k(te,"class","flex gap-4"),k(q,"class","flex gap-4 justify-between items-end pb-4"),k(j,"id","event-history"),k(e,"class","flex flex-col gap-4")},m(u,I){W(u,e,I),c(e,t),A(n,t,null),c(t,l),A(o,t,null),c(t,a),c(t,s),A(i,s,null),c(s,f),A(_,s,null),c(t,y),A(b,t,null),c(t,F),H&&H.m(t,null),c(t,$),A(d,t,null),c(e,T),c(e,E),A(L,E,null),c(E,z),A(G,E,null),c(e,fe),A(U,e,null),c(e,Z),A(K,e,null),c(e,x),c(e,j),c(j,q),c(q,ee),c(ee,ie),c(q,se),c(q,te),A(M,te,null),c(j,ce),J&&J.m(j,null),X=!0},p(u,[I]){var $e;const R={};I&2&&(R.content=u[1].name),n.$set(R);const Q={};I&2&&(Q.content=u[1].runId),o.$set(Q);const ne={};I&2&&(ne.content=ge(u[1].startTime,"UTC")),i.$set(ne);const le={};I&2&&(le.content=ge(u[1].endTime,"UTC")),_.$set(le);const re={};I&2&&(re.content=u[1].taskQueue),b.$set(re),($e=u[1])!=null&&$e.parent?H?(H.p(u,I),I&2&&w(H,1)):(H=Fe(u),H.c(),w(H,1),H.m(t,$)):H&&(ve(),v(H,1,1,()=>{H=null}),be());const ae={};I&2&&(ae.content=u[1].stateTransitionCount),d.$set(ae);const Y={};I&1&&(Y.namespace=u[0]),I&2&&(Y.workflow=u[1]),U.$set(Y);const de={};I&8196&&(de.$$scope={dirty:I,ctx:u}),M.$set(de),J&&J.p&&(!X||I&8192)&&Qe(J,ue,u,u[13],X?Ke(ue,u[13],I,null):Ge(u[13]),null)},i(u){X||(w(n.$$.fragment,u),w(o.$$.fragment,u),w(i.$$.fragment,u),w(_.$$.fragment,u),w(b.$$.fragment,u),w(H),w(d.$$.fragment,u),w(L.$$.fragment,u),w(G.$$.fragment,u),w(U.$$.fragment,u),w(K.$$.fragment,u),w(M.$$.fragment,u),w(J,u),X=!0)},o(u){v(n.$$.fragment,u),v(o.$$.fragment,u),v(i.$$.fragment,u),v(_.$$.fragment,u),v(b.$$.fragment,u),v(H),v(d.$$.fragment,u),v(L.$$.fragment,u),v(G.$$.fragment,u),v(U.$$.fragment,u),v(K.$$.fragment,u),v(M.$$.fragment,u),v(J,u),X=!1},d(u){u&&m(e),D(n),D(o),D(i),D(_),D(b),H&&H.d(),D(d),D(L),D(G),D(U),D(K),D(M),J&&J.d(u)}}}const dn=async function({params:r,url:e,stuff:t,fetch:n}){var l;const{workflow:o}=t,{namespace:a}=r,s={namespace:a,workflowId:o.id,runId:o.runId,reverse:Boolean((l=e==null?void 0:e.searchParams)===null||l===void 0?void 0:l.get("sort"))},{events:i,eventGroups:f}=await Xe(s,n);return{props:{namespace:a,workflow:o,events:i,eventGroups:f},stuff:{events:i,eventGroups:f}}};function zt(r,e,t){let n;He(r,rt,E=>t(2,n=E));let{$$slots:l={},$$scope:o}=e,{namespace:a}=e,{workflow:s}=e,{events:i}=e;const{input:f,result:_}=_t(i),y=(E,L)=>({namespace:a,workflow:s.id,run:s.runId,view:E,eventId:L}),b={namespace:a,workflow:s.id,run:s.runId},F=()=>Te("summary"),$=()=>Te("full"),d=()=>Te("compact"),T=()=>Te("json");return r.$$set=E=>{"namespace"in E&&t(0,a=E.namespace),"workflow"in E&&t(1,s=E.workflow),"events"in E&&t(7,i=E.events),"$$scope"in E&&t(13,o=E.$$scope)},[a,s,n,f,_,y,b,i,l,F,$,d,T,o]}class $n extends he{constructor(e){super(),we(this,e,zt,Jt,ke,{namespace:0,workflow:1,events:7})}}export{$n as default,dn as load};
