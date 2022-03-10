var $e=Object.defineProperty,we=Object.defineProperties;var ve=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var Y=(n,e,t)=>e in n?$e(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,H=(n,e)=>{for(var t in e||(e={}))Z.call(e,t)&&Y(n,t,e[t]);if(G)for(var t of G(e))A.call(e,t)&&Y(n,t,e[t]);return n},x=(n,e)=>we(n,ve(e));var ee=(n,e)=>{var t={};for(var s in n)Z.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&G)for(var s of G(n))e.indexOf(s)<0&&A.call(n,s)&&(t[s]=n[s]);return t};import{aH as ke,aI as be,S as M,i as V,s as B,P as ye,e as j,w as I,c as P,a as C,x as O,d as g,b,U as T,g as N,y as S,W as Ee,q as $,o as w,B as R,I as le,ah as Ie,aJ as Oe,T as _,K as ce,M as fe,N as ie,O as ue,r as Se,ak as te,al as Re,t as me,k as J,h as pe,m as q,L as E,aK as je,aL as Pe,aM as Ce}from"../../../../../../../chunks/vendor-b58bb848.js";import{h as Ne,b as U,r as de,a as ge}from"../../../../../../../chunks/route-for-api-aac03509.js";import{s as z,d as Je,a as qe}from"../../../../../../../chunks/data-converter-config-851e08df.js";import{f as De}from"../../../../../../../chunks/is-event-type-6f6767d3.js";import{r as F}from"../../../../../../../chunks/route-for-11851a4f.js";import{p as he}from"../../../../../../../chunks/stores-71c7b9ff.js";import{a as ne}from"../../../../../../../chunks/append-query-parameters-b8619cc0.js";import{g as Te}from"../../../../../../../chunks/get-context-1ac24eef.js";import{C as se}from"../../../../../../../chunks/code-block-a24f68a3.js";import"../../../../../../../chunks/notifications-c07f99ce.js";import"../../../../../../../chunks/is-network-error-ac7c8caf.js";const _e=(n={},e={})=>{const t=H({},n);for(const s of Object.keys(e)){const r=t[s];Array.isArray(r)?t[s]=t[s].concat(e[s]):typeof r=="object"&&!Array.isArray(r)?t[s]=_e(t[s],e[s]):t[s]=e[s]}return t},X=async(n,{onStart:e,onUpdate:t,onComplete:s,onError:r=Ne,token:a,previousProps:c}={})=>{!c&&U(e)&&e();try{const o=await n(a),{nextPageToken:l}=o,m=ee(o,["nextPageToken"]),u=_e(c,m);return U(t)&&t(u,m),l?X(n,{onStart:e,onUpdate:t,onComplete:s,token:l,previousProps:u}):(U(s)&&s(u),u)}catch(f){r(f)}},Fe=(n,e)=>{if(!n)return{hasWebsocket:!1,websocket:null,closeSocket:function(){return null}};try{L=new be(`ws://localhost:${n}/`,H({packMessage:t=>JSON.stringify(t),unpackMessage:t=>JSON.parse(t),attachRequestId:(t,s)=>Object.assign({requestId:s},t),extractRequestId:t=>t&&t.requestId},e)),L.onError(()=>{console.log("oh snap")})}catch{z()}return L.open(),{hasWebsocket:!0,websocket:L,closeSocket:function(){return L.close()}}};let L=null;var ae;const He=(ae=ke(Je))!=null?ae:null,Le=Fe(He);async function We(n,e){if(!e.isOpened)try{await e.open()}catch{z()}return e.isOpened?e.sendRequest({payload:JSON.stringify(n)}).then(s=>{qe();try{return JSON.parse(s.content)}catch{return s.content}}).catch(()=>{z()}):Promise.resolve(n)}const re=window.atob;function W(n){const e=re(String(n.metadata.encoding));switch(n.metadata.encodingDecoded=e,e){case"json/plain":case"json/protobuf":try{return JSON.parse(re(String(n.data)))}catch{}}return n}const Me=async(n,e)=>{var r,a,c,o,f,l,m,u,v,k,y,d;const t=n,s=(o=(c=(r=t==null?void 0:t.input)==null?void 0:r.payloads)!=null?c:(a=t==null?void 0:t.result)==null?void 0:a.payloads)!=null?o:null;if(s){let i;const p=e!=null?e:Le;(e==null?void 0:e.hasWebsocket)?i=await Promise.all((s!=null?s:[]).map(async D=>await We(D,p.websocket))):i=s.map(W),((f=t==null?void 0:t.input)==null?void 0:f.payloads)&&(t.input.payloads=i),((l=t==null?void 0:t.result)==null?void 0:l.payloads)&&(t.result.payloads=i)}if((m=t==null?void 0:t.searchAttributes)==null?void 0:m.indexedFields){const i=(u=t==null?void 0:t.searchAttributes)==null?void 0:u.indexedFields;Object.entries(i).forEach(([p,h])=>{i[p]=W(h)})}if((v=t==null?void 0:t.memo)==null?void 0:v.fields){const i=(k=t==null?void 0:t.memo)==null?void 0:k.fields;Object.entries(i).forEach(([p,h])=>{i[p]=W(h)})}if((y=t==null?void 0:t.header)==null?void 0:y.fields){const i=(d=t==null?void 0:t.header)==null?void 0:d.fields;Object.entries(i).forEach(([p,h])=>{i[p]=W(h)})}if(t==null?void 0:t.queryResult){const i=t==null?void 0:t.queryResult;Object.entries(i).forEach(([p,h])=>{i[p]=W(h)})}return t};async function Ve(n){const{key:e,attributes:t}=De(n),s=await Me(t);return H({type:e},s)}const Be=async n=>Promise.all(n.history.events.map(async e=>x(H({},e),{id:String(e.eventId),eventType:e.eventType,attributes:await Ve(e)}))),Ke=async({namespace:n,executionId:e,runId:t,onStart:s,onUpdate:r,onComplete:a},c=fetch)=>await X(async f=>de(ge("events",{namespace:n,executionId:e,runId:t}),{token:f,request:c}),{onStart:s,onUpdate:r,onComplete:a}).then(Be),Ge=async({namespace:n,executionId:e,runId:t,onStart:s,onUpdate:r,onComplete:a},c=fetch)=>(await X(async f=>de(ge("events",{namespace:n,executionId:e,runId:t}),{token:f,request:c}),{onStart:s,onUpdate:r,onComplete:a})).history.events;function Qe(n){let e,t,s,r,a,c;return t=new ye({props:{icon:n[0],scale:n[2]}}),{c(){e=j("a"),I(t.$$.fragment),this.h()},l(o){e=P(o,"A",{class:!0,href:!0});var f=C(e);O(t.$$.fragment,f),f.forEach(g),this.h()},h(){b(e,"class","border-2 py-2 px-4 hover:text-white hover:bg-gray-600 flex items-center justify-center svelte-1orl6nd"),b(e,"href",s=ne(n[3],n[4].url.searchParams)),T(e,"rounded-lg",!n[1]),T(e,"active",n[4].url.pathname.includes(n[3])),T(e,"group",n[1])},m(o,f){N(o,e,f),S(t,e,null),r=!0,a||(c=Ee(e,"click",n[5]),a=!0)},p(o,[f]){const l={};f&1&&(l.icon=o[0]),f&4&&(l.scale=o[2]),t.$set(l),(!r||f&24&&s!==(s=ne(o[3],o[4].url.searchParams)))&&b(e,"href",s),f&2&&T(e,"rounded-lg",!o[1]),f&24&&T(e,"active",o[4].url.pathname.includes(o[3])),f&2&&T(e,"group",o[1])},i(o){r||($(t.$$.fragment,o),r=!0)},o(o){w(t.$$.fragment,o),r=!1},d(o){o&&g(e),R(t),a=!1,c()}}}function Ue(n,e,t){let s;le(n,he,l=>t(4,s=l));let{icon:r}=e,{group:a=Te("group")}=e,{scale:c=1}=e,{href:o="#"}=e;function f(l){Ie.call(this,n,l)}return n.$$set=l=>{"icon"in l&&t(0,r=l.icon),"group"in l&&t(1,a=l.group),"scale"in l&&t(2,c=l.scale),"href"in l&&t(3,o=l.href)},[r,a,c,o,s,f]}class Q extends M{constructor(e){super();V(this,e,Ue,Qe,B,{icon:0,group:1,scale:2,href:3})}}function ze(n){let e,t;return e=new Q({props:{icon:Oe}}),e.$on("click",n[0]),{c(){I(e.$$.fragment)},l(s){O(e.$$.fragment,s)},m(s,r){S(e,s,r),t=!0},p:_,i(s){t||($(e.$$.fragment,s),t=!0)},o(s){w(e.$$.fragment,s),t=!1},d(s){R(e,s)}}}function Xe(n,e,t){let s;le(n,he,f=>t(1,s=f));const{workflow:r,run:a,namespace:c}=s.params;return[async()=>{const f=await Ge({namespace:c,executionId:r,runId:a}),l=JSON.stringify(f,null,2);m(l,`${a}/events.json`,"text/plain");function m(u,v,k){const y=document.createElement("a"),d=new Blob([u],{type:k});y.href=URL.createObjectURL(d),y.download=v,y.click()}}]}class Ye extends M{constructor(e){super();V(this,e,Xe,ze,B,{})}}function Ze(n){let e,t;const s=n[1].default,r=ce(s,n,n[0],null);return{c(){e=j("div"),r&&r.c(),this.h()},l(a){e=P(a,"DIV",{class:!0});var c=C(e);r&&r.l(c),c.forEach(g),this.h()},h(){b(e,"class","flex")},m(a,c){N(a,e,c),r&&r.m(e,null),t=!0},p(a,[c]){r&&r.p&&(!t||c&1)&&fe(r,s,a,a[0],t?ue(s,a[0],c,null):ie(a[0]),null)},i(a){t||($(r,a),t=!0)},o(a){w(r,a),t=!1},d(a){a&&g(e),r&&r.d(a)}}}function Ae(n,e,t){let{$$slots:s={},$$scope:r}=e;return Se("group",!0),n.$$set=a=>{"$$scope"in a&&t(0,r=a.$$scope)},[r,s]}class xe extends M{constructor(e){super();V(this,e,Ae,Ze,B,{})}}const et=async n=>{var a,c,o,f,l,m;n=await n;let e,t;const s=n==null?void 0:n.find(u=>!!u.workflowExecutionStartedEventAttributes),r=n==null?void 0:n.find(u=>!!u.workflowExecutionCompletedEventAttributes);return s&&(e=JSON.stringify((o=(c=(a=s==null?void 0:s.workflowExecutionStartedEventAttributes)==null?void 0:a.input)==null?void 0:c.payloads)!=null?o:"")),r&&(t=JSON.stringify((m=(l=(f=r==null?void 0:r.workflowExecutionCompletedEventAttributes)==null?void 0:f.result)==null?void 0:l.payloads)!=null?m:"")),{input:e,result:t}};function oe(n){n[2]=n[4].input,n[3]=n[4].result}function tt(n){return{c:_,l:_,m:_,p:_,i:_,o:_,d:_}}function nt(n){oe(n);let e,t,s,r,a,c,o,f;return a=new se({props:{heading:"Input",content:n[2],framed:!0}}),o=new se({props:{heading:"Result",content:n[3],framed:!0}}),{c(){e=j("h3"),t=me("Input & Results"),s=J(),r=j("div"),I(a.$$.fragment),c=J(),I(o.$$.fragment),this.h()},l(l){e=P(l,"H3",{class:!0});var m=C(e);t=pe(m,"Input & Results"),m.forEach(g),s=q(l),r=P(l,"DIV",{class:!0});var u=C(r);O(a.$$.fragment,u),c=q(u),O(o.$$.fragment,u),u.forEach(g),this.h()},h(){b(e,"class","text-lg font-medium"),b(r,"class","flex gap-4")},m(l,m){N(l,e,m),E(e,t),N(l,s,m),N(l,r,m),S(a,r,null),E(r,c),S(o,r,null),f=!0},p(l,m){oe(l);const u={};m&1&&(u.content=l[2]),a.$set(u);const v={};m&1&&(v.content=l[3]),o.$set(v)},i(l){f||($(a.$$.fragment,l),$(o.$$.fragment,l),f=!0)},o(l){w(a.$$.fragment,l),w(o.$$.fragment,l),f=!1},d(l){l&&g(e),l&&g(s),l&&g(r),R(a),R(o)}}}function st(n){return{c:_,l:_,m:_,p:_,i:_,o:_,d:_}}function rt(n){let e,t,s,r={ctx:n,current:null,token:null,hasCatch:!1,pending:st,then:nt,catch:tt,value:4,blocks:[,,,]};return te(t=n[0],r),{c(){e=j("section"),r.block.c(),this.h()},l(a){e=P(a,"SECTION",{class:!0});var c=C(e);r.block.l(c),c.forEach(g),this.h()},h(){b(e,"class","flex flex-col gap-4")},m(a,c){N(a,e,c),r.block.m(e,r.anchor=null),r.mount=()=>e,r.anchor=null,s=!0},p(a,[c]){n=a,r.ctx=n,c&1&&t!==(t=n[0])&&te(t,r)||Re(r,n,c)},i(a){s||($(r.block),s=!0)},o(a){for(let c=0;c<3;c+=1){const o=r.blocks[c];w(o)}s=!1},d(a){a&&g(e),r.block.d(),r.token=null,r=null}}}function ot(n,e,t){let s,{events:r}=e;return n.$$set=a=>{"events"in a&&t(1,r=a.events)},n.$$.update=()=>{n.$$.dirty&2&&t(0,s=et(r))},[s,r]}class at extends M{constructor(e){super();V(this,e,ot,rt,B,{events:1})}}function lt(n){let e,t,s,r,a,c;return e=new Q({props:{icon:je,href:F("workflow.events.full",n[0])}}),s=new Q({props:{icon:Pe,href:F("workflow.events.compact",n[0])}}),a=new Q({props:{icon:Ce,href:F("workflow.events.json",n[0])}}),{c(){I(e.$$.fragment),t=J(),I(s.$$.fragment),r=J(),I(a.$$.fragment)},l(o){O(e.$$.fragment,o),t=q(o),O(s.$$.fragment,o),r=q(o),O(a.$$.fragment,o)},m(o,f){S(e,o,f),N(o,t,f),S(s,o,f),N(o,r,f),S(a,o,f),c=!0},p(o,f){const l={};f&1&&(l.href=F("workflow.events.full",o[0])),e.$set(l);const m={};f&1&&(m.href=F("workflow.events.compact",o[0])),s.$set(m);const u={};f&1&&(u.href=F("workflow.events.json",o[0])),a.$set(u)},i(o){c||($(e.$$.fragment,o),$(s.$$.fragment,o),$(a.$$.fragment,o),c=!0)},o(o){w(e.$$.fragment,o),w(s.$$.fragment,o),w(a.$$.fragment,o),c=!1},d(o){R(e,o),o&&g(t),R(s,o),o&&g(r),R(a,o)}}}function ct(n){let e,t,s,r,a,c,o,f,l,m,u,v,k;t=new at({props:{events:n[1]}}),l=new xe({props:{$$slots:{default:[lt]},$$scope:{ctx:n}}}),u=new Ye({});const y=n[2].default,d=ce(y,n,n[3],null);return{c(){e=j("section"),I(t.$$.fragment),s=J(),r=j("nav"),a=j("h3"),c=me("Event History"),o=J(),f=j("div"),I(l.$$.fragment),m=J(),I(u.$$.fragment),v=J(),d&&d.c(),this.h()},l(i){e=P(i,"SECTION",{class:!0});var p=C(e);O(t.$$.fragment,p),s=q(p),r=P(p,"NAV",{class:!0});var h=C(r);a=P(h,"H3",{class:!0});var D=C(a);c=pe(D,"Event History"),D.forEach(g),o=q(h),f=P(h,"DIV",{class:!0});var K=C(f);O(l.$$.fragment,K),m=q(K),O(u.$$.fragment,K),K.forEach(g),h.forEach(g),v=q(p),d&&d.l(p),p.forEach(g),this.h()},h(){b(a,"class","text-lg font-medium"),b(f,"class","flex gap-4"),b(r,"class","flex gap-4 justify-between items-end"),b(e,"class","flex flex-col gap-4")},m(i,p){N(i,e,p),S(t,e,null),E(e,s),E(e,r),E(r,a),E(a,c),E(r,o),E(r,f),S(l,f,null),E(f,m),S(u,f,null),E(e,v),d&&d.m(e,null),k=!0},p(i,[p]){const h={};p&2&&(h.events=i[1]),t.$set(h);const D={};p&9&&(D.$$scope={dirty:p,ctx:i}),l.$set(D),d&&d.p&&(!k||p&8)&&fe(d,y,i,i[3],k?ue(y,i[3],p,null):ie(i[3]),null)},i(i){k||($(t.$$.fragment,i),$(l.$$.fragment,i),$(u.$$.fragment,i),$(d,i),k=!0)},o(i){w(t.$$.fragment,i),w(l.$$.fragment,i),w(u.$$.fragment,i),w(d,i),k=!1},d(i){i&&g(e),R(t),R(l),R(u),d&&d.d(i)}}}const bt=async function({params:n}){const{workflow:e,run:t,namespace:s}=n,a=await Ke({namespace:s,executionId:e,runId:t});return{props:{workflow:{workflowId:e,runId:t,namespace:s},events:a},stuff:{events:a}}};function ft(n,e,t){let{$$slots:s={},$$scope:r}=e,{workflow:a}=e,{events:c}=e;return n.$$set=o=>{"workflow"in o&&t(0,a=o.workflow),"events"in o&&t(1,c=o.events),"$$scope"in o&&t(3,r=o.$$scope)},[a,c,s,r]}class yt extends M{constructor(e){super();V(this,e,ft,ct,B,{workflow:0,events:1})}}export{yt as default,bt as load};