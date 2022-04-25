var je=Object.defineProperty;var ce=Object.getOwnPropertySymbols;var Me=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var ue=(n,e,t)=>e in n?je(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,se=(n,e)=>{for(var t in e||(e={}))Me.call(e,t)&&ue(n,t,e[t]);if(ce)for(var t of ce(e))Ce.call(e,t)&&ue(n,t,e[t]);return n};import{r as De,a as Le,n as te}from"./route-for-api-34e668a1.js";import{S as j,i as M,s as C,I as R,e as y,c as E,a as $,d as v,b,X as fe,g as S,J as U,K as z,L as G,q as B,o as L,O as Z,t as T,h as V,Y as ne,M as k,N as W,l as O,E as A,n as x,p as ee,w as K,x as J,y as Q,B as X,k as q,m as F,Z as Se,_ as Ae,$ as Oe,H as Pe,j as re,a0 as He,a1 as Re,a2 as Ue,a3 as ze,a4 as Ge,a5 as _e,F as le,a6 as de}from"./index-733079a8.js";import{p as Te}from"./stores-1e95b62c.js";import{g as Ve}from"./navigation-3f1ea447.js";import{c as Ke}from"./route-for-46a9c4b7.js";import{F as Je,f as me,a as he}from"./index.es-b93730d8.js";import{f as pe,c as Qe,a as Xe,q as Ye}from"./index-3578a8fa.js";import{D as Ze,F as We}from"./navigation-header-5bb85921.js";import{n as ve}from"./notifications-7ffcc78e.js";import{p as xe}from"./persist-store-bb92bb0b.js";import{E as et}from"./error-b33e0d4c.js";import{w as ge}from"./index-d95e2ca5.js";const Yt=async(n,e=fetch)=>{if(!n.runtimeEnvironment.isCloud)return await De(Le("cluster"),{request:e})},Zt=async(n=fetch)=>{const e=await De(Le("user"),{request:n});return{name:e==null?void 0:e.Name,email:e==null?void 0:e.Email,picture:e==null?void 0:e.Picture}},be=n=>{const e=n==null?void 0:n.indexOf("?");return e>-1?n.slice(0,e):n},tt=(n,e,t=!1)=>{const r=be(n).split("/"),s=be(e).split("/");if(t&&r.length!==s.length)return!1;for(let o=0;o<r.length;o++){const i=r[o],a=s[o];if(i!==a)return!1}return!0};function rt(n){let e,t;const r=n[4].default,s=R(r,n,n[3],null);return{c(){e=y("a"),s&&s.c(),this.h()},l(o){e=E(o,"A",{href:!0,class:!0});var i=$(e);s&&s.l(i),i.forEach(v),this.h()},h(){b(e,"href",n[0]),b(e,"class","relative svelte-1hldide"),fe(e,"active",n[1])},m(o,i){S(o,e,i),s&&s.m(e,null),t=!0},p(o,[i]){s&&s.p&&(!t||i&8)&&U(s,r,o,o[3],t?G(r,o[3],i,null):z(o[3]),null),(!t||i&1)&&b(e,"href",o[0]),i&2&&fe(e,"active",o[1])},i(o){t||(B(s,o),t=!0)},o(o){L(s,o),t=!1},d(o){o&&v(e),s&&s.d(o)}}}function st(n,e,t){let r,s;Z(n,Te,l=>t(2,s=l));let{$$slots:o={},$$scope:i}=e,{href:a}=e;return n.$$set=l=>{"href"in l&&t(0,a=l.href),"$$scope"in l&&t(3,i=l.$$scope)},n.$$.update=()=>{n.$$.dirty&5&&t(1,r=tt(a,s.url.pathname))},[a,r,s,i,o]}class Wt extends j{constructor(e){super(),M(this,e,st,rt,C,{href:0})}}function ke(n){let e,t,r,s,o,i;return{c(){e=y("button"),t=y("img"),s=T(`
    Logout`),this.h()},l(a){e=E(a,"BUTTON",{class:!0});var l=$(e);t=E(l,"IMG",{src:!0,alt:!0,class:!0}),s=V(l,`
    Logout`),l.forEach(v),this.h()},h(){ne(t.src,r=n[0].picture)||b(t,"src",r),b(t,"alt","User Avatar"),b(t,"class","rounded-full h-6 w-6 mr-2.5"),b(e,"class","logout-button min-w-min svelte-1h3dttc")},m(a,l){S(a,e,l),k(e,t),k(e,s),o||(i=W(e,"click",n[1]),o=!0)},p(a,l){l&1&&!ne(t.src,r=a[0].picture)&&b(t,"src",r)},d(a){a&&v(e),o=!1,i()}}}function nt(n){var r;let e,t=((r=n[0])==null?void 0:r.email)&&ke(n);return{c(){t&&t.c(),e=O()},l(s){t&&t.l(s),e=O()},m(s,o){t&&t.m(s,o),S(s,e,o)},p(s,[o]){var i;(i=s[0])!=null&&i.email?t?t.p(s,o):(t=ke(s),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:A,o:A,d(s){t&&t.d(s),s&&v(e)}}}function lt(n,e,t){let{user:r}=e;const s=()=>Ve("/auth/logout");return n.$$set=o=>{"user"in o&&t(0,r=o.user)},[r,s]}class ot extends j{constructor(e){super(),M(this,e,lt,nt,C,{user:0})}}function it(n){let e,t,r,s;return{c(){e=y("button"),t=T("Login"),this.h()},l(o){e=E(o,"BUTTON",{class:!0});var i=$(e);t=V(i,"Login"),i.forEach(v),this.h()},h(){b(e,"class","login-button min-w-min svelte-1cuuqym")},m(o,i){S(o,e,i),k(e,t),r||(s=W(e,"click",n[0]),r=!0)},p:A,i:A,o:A,d(o){o&&v(e),r=!1,s()}}}function at(n){return[()=>Ve(Ke())]}class ct extends j{constructor(e){super(),M(this,e,at,it,C,{})}}function ut(n){let e,t;return e=new ct({}),{c(){K(e.$$.fragment)},l(r){J(e.$$.fragment,r)},m(r,s){Q(e,r,s),t=!0},p:A,i(r){t||(B(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){X(e,r)}}}function ft(n){let e,t;return e=new ot({props:{user:n[0]}}),{c(){K(e.$$.fragment)},l(r){J(e.$$.fragment,r)},m(r,s){Q(e,r,s),t=!0},p(r,s){const o={};s&1&&(o.user=r[0]),e.$set(o)},i(r){t||(B(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){X(e,r)}}}function _t(n){let e,t,r,s;const o=[ft,ut],i=[];function a(l,c){var m,_;return(m=l[0])!=null&&m.email?0:(_=l[1].stuff)!=null&&_.settings.auth.enabled?1:-1}return~(e=a(n))&&(t=i[e]=o[e](n)),{c(){t&&t.c(),r=O()},l(l){t&&t.l(l),r=O()},m(l,c){~e&&i[e].m(l,c),S(l,r,c),s=!0},p(l,[c]){let m=e;e=a(l),e===m?~e&&i[e].p(l,c):(t&&(x(),L(i[m],1,1,()=>{i[m]=null}),ee()),~e?(t=i[e],t?t.p(l,c):(t=i[e]=o[e](l),t.c()),B(t,1),t.m(r.parentNode,r)):t=null)},i(l){s||(B(t),s=!0)},o(l){L(t),s=!1},d(l){~e&&i[e].d(l),l&&v(r)}}}function dt(n,e,t){let r;Z(n,Te,o=>t(1,r=o));let{user:s}=e;return n.$$set=o=>{"user"in o&&t(0,s=o.user)},[s,r]}class xt extends j{constructor(e){super(),M(this,e,dt,_t,C,{user:0})}}const mt=n=>({}),ye=n=>({}),ht=n=>({}),Ee=n=>({}),pt=n=>({}),$e=n=>({});function we(n){let e,t,r,s,o,i,a,l,c,m,_,u;const p=n[3].action,f=R(p,n,n[2],$e),w=n[3].links,h=R(w,n,n[2],Ee);l=new We({});const I=n[3].user,D=R(I,n,n[2],ye);return{c(){e=y("section"),t=y("div"),r=y("div"),f&&f.c(),s=q(),o=y("div"),h&&h.c(),i=q(),a=y("div"),K(l.$$.fragment),c=q(),D&&D.c(),this.h()},l(d){e=E(d,"SECTION",{class:!0});var g=$(e);t=E(g,"DIV",{class:!0});var N=$(t);r=E(N,"DIV",{class:!0});var P=$(r);f&&f.l(P),P.forEach(v),s=F(N),o=E(N,"DIV",{class:!0});var Y=$(o);h&&h.l(Y),Y.forEach(v),i=F(N),a=E(N,"DIV",{class:!0});var H=$(a);J(l.$$.fragment,H),c=F(H),D&&D.l(H),H.forEach(v),N.forEach(v),g.forEach(v),this.h()},h(){b(r,"class","w-5/6 md:w-2/3 lg:w-1/2 action"),b(o,"class","mt-4 inline-block links"),b(a,"class","absolute left-0 bottom-24"),b(t,"class","relative h-full"),b(e,"class","hamburger-menu svelte-11vmru5")},m(d,g){S(d,e,g),k(e,t),k(t,r),f&&f.m(r,null),k(t,s),k(t,o),h&&h.m(o,null),k(t,i),k(t,a),Q(l,a,null),k(a,c),D&&D.m(a,null),u=!0},p(d,g){f&&f.p&&(!u||g&4)&&U(f,p,d,d[2],u?G(p,d[2],g,pt):z(d[2]),$e),h&&h.p&&(!u||g&4)&&U(h,w,d,d[2],u?G(w,d[2],g,ht):z(d[2]),Ee),D&&D.p&&(!u||g&4)&&U(D,I,d,d[2],u?G(I,d[2],g,mt):z(d[2]),ye)},i(d){u||(B(f,d),B(h,d),B(l.$$.fragment,d),B(D,d),Se(()=>{_&&_.end(1),m=Ae(e,pe,{x:-50,duration:250}),m.start()}),u=!0)},o(d){L(f,d),L(h,d),L(l.$$.fragment,d),L(D,d),m&&m.invalidate(),_=Oe(e,pe,{x:-50,duration:250,delay:100}),u=!1},d(d){d&&v(e),f&&f.d(d),h&&h.d(d),X(l),D&&D.d(d),d&&_&&_.end()}}}function vt(n){let e,t,r,s,o,i,a,l,c,m,_,u,p,f,w,h,I,D;s=new Je({props:{class:"cursor-pointer",icon:n[1]?me:he,color:"white"}}),p=new Ze({});let d=n[1]&&we(n);return{c(){e=y("header"),t=y("div"),r=y("div"),K(s.$$.fragment),o=q(),i=y("div"),a=y("a"),l=y("img"),m=q(),_=y("div"),u=y("div"),K(p.$$.fragment),f=q(),d&&d.c(),w=O(),this.h()},l(g){e=E(g,"HEADER",{class:!0});var N=$(e);t=E(N,"DIV",{class:!0});var P=$(t);r=E(P,"DIV",{"data-cy":!0});var Y=$(r);J(s.$$.fragment,Y),Y.forEach(v),P.forEach(v),o=F(N),i=E(N,"DIV",{class:!0});var H=$(i);a=E(H,"A",{href:!0,class:!0});var oe=$(a);l=E(oe,"IMG",{src:!0,alt:!0,class:!0}),oe.forEach(v),H.forEach(v),m=F(N),_=E(N,"DIV",{class:!0});var ie=$(_);u=E(ie,"DIV",{class:!0});var ae=$(u);J(p.$$.fragment,ae),ae.forEach(v),ie.forEach(v),N.forEach(v),f=F(g),d&&d.l(g),w=O(),this.h()},h(){b(r,"data-cy","hamburger-icon"),b(t,"class","flex gap-4 col-span-4 justify-start"),ne(l.src,c="/logo.svg")||b(l,"src",c),b(l,"alt","Temporal Logo"),b(l,"class","max-h-10 svelte-11vmru5"),b(a,"href",n[0]),b(a,"class","block"),b(i,"class","flex gap-4 col-span-4 justify-center"),b(u,"class","text-right"),b(_,"class","flex gap-4 col-span-4 justify-end items-center"),b(e,"class","hamburger-header svelte-11vmru5")},m(g,N){S(g,e,N),k(e,t),k(t,r),Q(s,r,null),k(e,o),k(e,i),k(i,a),k(a,l),k(e,m),k(e,_),k(_,u),Q(p,u,null),S(g,f,N),d&&d.m(g,N),S(g,w,N),h=!0,I||(D=W(r,"click",n[4]),I=!0)},p(g,[N]){const P={};N&2&&(P.icon=g[1]?me:he),s.$set(P),(!h||N&1)&&b(a,"href",g[0]),g[1]?d?(d.p(g,N),N&2&&B(d,1)):(d=we(g),d.c(),B(d,1),d.m(w.parentNode,w)):d&&(x(),L(d,1,1,()=>{d=null}),ee())},i(g){h||(B(s.$$.fragment,g),B(p.$$.fragment,g),B(d),h=!0)},o(g){L(s.$$.fragment,g),L(p.$$.fragment,g),L(d),h=!1},d(g){g&&v(e),X(s),X(p),g&&v(f),d&&d.d(g),g&&v(w),I=!1,D()}}}function gt(n,e,t){let r,{$$slots:s={},$$scope:o}=e,{href:i}=e;const a=()=>t(1,r=!r);return n.$$set=l=>{"href"in l&&t(0,i=l.href),"$$scope"in l&&t(2,o=l.$$scope)},t(1,r=!1),[i,r,o,s,a]}class er extends j{constructor(e){super(),M(this,e,gt,vt,C,{href:0})}}function bt(n,{from:e,to:t},r={}){const s=getComputedStyle(n),o=s.transform==="none"?"":s.transform,[i,a]=s.transformOrigin.split(" ").map(parseFloat),l=e.left+e.width*i/t.width-(t.left+i),c=e.top+e.height*a/t.height-(t.top+a),{delay:m=0,duration:_=p=>Math.sqrt(p)*120,easing:u=Qe}=r;return{delay:m,duration:Pe(_)?_(Math.sqrt(l*l+c*c)):_,easing:u,css:(p,f)=>{const w=f*l,h=f*c,I=p+f*e.width/t.width,D=p+f*e.height/t.height;return`transform: ${o} translate(${w}px, ${h}px) scale(${I}, ${D});`}}}function Ie(n,e,t){const r=n.slice();return r[4]=e[t],r}function Ne(n,e){let t,r,s=e[4].message+"",o,i,a,l,c,m,_=A,u,p,f;function w(){return e[3](e[4])}return{key:n,first:null,c(){t=y("article"),r=y("p"),o=T(s),i=q(),this.h()},l(h){t=E(h,"ARTICLE",{class:!0});var I=$(t);r=E(I,"P",{});var D=$(r);o=V(D,s),D.forEach(v),i=F(I),I.forEach(v),this.h()},h(){b(t,"class",a="px-8 py-6 mb-4 opacity-90 shadow-lg "+e[4].type+" svelte-2zx94o"),this.first=t},m(h,I){S(h,t,I),k(t,r),k(r,o),k(t,i),u=!0,p||(f=W(t,"click",w),p=!0)},p(h,I){e=h,(!u||I&1)&&s!==(s=e[4].message+"")&&re(o,s),(!u||I&1&&a!==(a="px-8 py-6 mb-4 opacity-90 shadow-lg "+e[4].type+" svelte-2zx94o"))&&b(t,"class",a)},r(){m=t.getBoundingClientRect()},f(){He(t),_(),Re(t,m)},a(){_(),_=Ue(t,m,bt,{})},i(h){u||(Se(()=>{c&&c.end(1),l=Ae(t,e[2],{key:e[4].id}),l.start()}),u=!0)},o(h){l&&l.invalidate(),c=Oe(t,e[1],{key:e[4].id}),u=!1},d(h){h&&v(t),h&&c&&c.end(),p=!1,f()}}}function kt(n){let e,t=[],r=new Map,s,o=n[0];const i=a=>a[4].id;for(let a=0;a<o.length;a+=1){let l=Ie(n,o,a),c=i(l);r.set(c,t[a]=Ne(c,l))}return{c(){e=y("section");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=E(a,"SECTION",{class:!0});var l=$(e);for(let c=0;c<t.length;c+=1)t[c].l(l);l.forEach(v),this.h()},h(){b(e,"class","flex flex-col justify-center absolute w-1/3 top-20 right-4 z-40")},m(a,l){S(a,e,l);for(let c=0;c<t.length;c+=1)t[c].m(e,null);s=!0},p(a,[l]){if(l&1){o=a[0],x();for(let c=0;c<t.length;c+=1)t[c].r();t=ze(t,l,i,1,a,o,r,e,Ge,Ne,null,Ie);for(let c=0;c<t.length;c+=1)t[c].a();ee()}},i(a){if(!s){for(let l=0;l<o.length;l+=1)B(t[l]);s=!0}},o(a){for(let l=0;l<t.length;l+=1)L(t[l]);s=!1},d(a){a&&v(e);for(let l=0;l<t.length;l+=1)t[l].d()}}}function yt(n,e,t){let r;Z(n,ve,a=>t(0,r=a));const[s,o]=Xe({duration:a=>Math.sqrt(a*100),fallback(a){const l=getComputedStyle(a),c=l.transform==="none"?"":l.transform;return{duration:600,easing:Ye,css:m=>`transform: ${c} scale(${m}); opacity: ${m}`}}});return[r,s,o,a=>ve.dismiss(a.id)]}class tr extends j{constructor(e){super(),M(this,e,yt,kt,C,{})}}const qe=xe("closedBannerId",null),Et=n=>{qe.set(n)},$t=(n,e)=>{if(!n||!e)return!1;const[t,r,s]=n.split(".").map(Number),[o,i,a]=e.split(".").map(Number);return t!==o?t>o:r!==i?r>i:s>a};function Be(n){let e,t,r,s,o,i,a,l,c,m;return{c(){e=y("section"),t=y("a"),r=T(n[3]),o=q(),i=y("button"),a=T("\u2715"),this.h()},l(_){e=E(_,"SECTION",{class:!0});var u=$(e);t=E(u,"A",{href:!0,target:!0});var p=$(t);r=V(p,n[3]),p.forEach(v),o=F(u),i=E(u,"BUTTON",{class:!0});var f=$(i);a=V(f,"\u2715"),f.forEach(v),u.forEach(v),this.h()},h(){var _,u,p;b(t,"href",s="https://github.com/temporalio/temporal/releases/tag/v"+((p=(u=(_=n[0])==null?void 0:_.versionInfo)==null?void 0:u.recommended)==null?void 0:p.version)),b(t,"target","_blank"),b(i,"class","absolute top-0 right-0 mr-5 text-black-600"),b(e,"class",l=_e(`block leading-10 text-center ${n[1]}`)+" svelte-1xgik0j")},m(_,u){S(_,e,u),k(e,t),k(t,r),k(e,o),k(e,i),k(i,a),c||(m=W(i,"click",n[12]),c=!0)},p(_,u){var p,f,w;u&8&&re(r,_[3]),u&1&&s!==(s="https://github.com/temporalio/temporal/releases/tag/v"+((w=(f=(p=_[0])==null?void 0:p.versionInfo)==null?void 0:f.recommended)==null?void 0:w.version))&&b(t,"href",s),u&2&&l!==(l=_e(`block leading-10 text-center ${_[1]}`)+" svelte-1xgik0j")&&b(e,"class",l)},d(_){_&&v(e),c=!1,m()}}}function wt(n){let e,t=n[4]&&Be(n);return{c(){t&&t.c(),e=O()},l(r){t&&t.l(r),e=O()},m(r,s){t&&t.m(r,s),S(r,e,s)},p(r,[s]){r[4]?t?t.p(r,s):(t=Be(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:A,o:A,d(r){t&&t.d(r),r&&v(e)}}}function It(n,e,t){let r,s,o,i,a,l,c;Z(n,qe,I=>t(11,c=I));var m,_,u,p;let{cluster:f}=e;const w={High:"high",Medium:"medium",Low:"low"},h=()=>Et(s.version);return n.$$set=I=>{"cluster"in I&&t(0,f=I.cluster)},n.$$.update=()=>{n.$$.dirty&33&&t(10,r=t(5,m=f==null?void 0:f.versionInfo)===null||m===void 0?void 0:m.recommended),n.$$.dirty&65&&t(2,s=t(6,_=f==null?void 0:f.versionInfo)===null||_===void 0?void 0:_.current),n.$$.dirty&385&&t(9,o=t(8,p=t(7,u=f==null?void 0:f.versionInfo)===null||u===void 0?void 0:u.alerts)===null||p===void 0?void 0:p[0]),n.$$.dirty&512&&t(1,i=o?w[o.severity]:w.Low),n.$$.dirty&3076&&t(4,a=(s==null?void 0:s.version)&&s.version!=c&&$t(r==null?void 0:r.version,s.version)),n.$$.dirty&1538&&t(3,l=i==w.Low?`\u{1F4E5} v${r==null?void 0:r.version} version is available`:`\u{1F4E5} ${o==null?void 0:o.message}`)},[f,i,s,l,a,m,_,u,p,o,r,c,h]}class rr extends j{constructor(e){super(),M(this,e,It,wt,C,{cluster:0})}}function Nt(n){let e;const t=n[8].default,r=R(t,n,n[7],null);return{c(){r&&r.c()},l(s){r&&r.l(s)},m(s,o){r&&r.m(s,o),e=!0},p(s,o){r&&r.p&&(!e||o&128)&&U(r,t,s,s[7],e?G(t,s[7],o,null):z(s[7]),null)},i(s){e||(B(r,s),e=!0)},o(s){L(r,s),e=!1},d(s){r&&r.d(s)}}}function Bt(n){let e,t;return e=new et({props:{error:n[2]}}),e.$on("clearError",n[3]),{c(){K(e.$$.fragment)},l(r){J(e.$$.fragment,r)},m(r,s){Q(e,r,s),t=!0},p(r,s){const o={};s&4&&(o.error=r[2]),e.$set(o)},i(r){t||(B(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){X(e,r)}}}function Dt(n){let e,t,r,s;const o=[Bt,Nt],i=[];function a(l,c){return l[1]&&l[2]?0:1}return e=a(n),t=i[e]=o[e](n),{c(){t.c(),r=O()},l(l){t.l(l),r=O()},m(l,c){i[e].m(l,c),S(l,r,c),s=!0},p(l,[c]){let m=e;e=a(l),e===m?i[e].p(l,c):(x(),L(i[m],1,1,()=>{i[m]=null}),ee(),t=i[e],t?t.p(l,c):(t=i[e]=o[e](l),t.c()),B(t,1),t.m(r.parentNode,r))},i(l){s||(B(t),s=!0)},o(l){L(t),s=!1},d(l){i[e].d(l),l&&v(r)}}}function Lt(n,e,t){let r,s,o=A,i=()=>(o(),o=le(u,h=>t(6,s=h)),u),a,l=A,c=()=>(l(),l=le(f,h=>t(2,a=h)),f);Z(n,te,h=>t(5,r=h)),n.$$.on_destroy.push(()=>o()),n.$$.on_destroy.push(()=>l());let{$$slots:m={},$$scope:_}=e,{error:u=null}=e;i();let{onError:p=null}=e,f;function w(){de(u,s=null,s),t(4,p=null),c(t(1,f=null)),de(te,r=null,r)}return n.$$set=h=>{"error"in h&&i(t(0,u=h.error)),"onError"in h&&t(4,p=h.onError),"$$scope"in h&&t(7,_=h.$$scope)},n.$$.update=()=>{n.$$.dirty&115&&(u&&s&&c(t(1,f=u)),te&&r&&c(t(1,f=te)),p&&f&&p(f))},[u,f,a,w,p,r,s,_,m]}class St extends j{constructor(e){super(),M(this,e,Lt,Dt,C,{error:0,onError:4})}}function At(n){let e;const t=n[5].default,r=R(t,n,n[4],null);return{c(){r&&r.c()},l(s){r&&r.l(s)},m(s,o){r&&r.m(s,o),e=!0},p(s,o){r&&r.p&&(!e||o&16)&&U(r,t,s,s[4],e?G(t,s[4],o,null):z(s[4]),null)},i(s){e||(B(r,s),e=!0)},o(s){L(r,s),e=!1},d(s){r&&r.d(s)}}}function Ot(n){let e,t,r=n[1].message+"",s,o,i,a,l=(n[2]?n[1].stack:"")+"",c,m;return{c(){e=y("div"),t=y("b"),s=T(r),o=q(),i=y("pre"),a=T(`
      `),c=T(l),m=T(`
    `),this.h()},l(_){e=E(_,"DIV",{class:!0});var u=$(e);t=E(u,"B",{});var p=$(t);s=V(p,r),p.forEach(v),o=F(u),i=E(u,"PRE",{class:!0});var f=$(i);a=V(f,`
      `),c=V(f,l),m=V(f,`
    `),f.forEach(v),u.forEach(v),this.h()},h(){b(i,"class","trace svelte-urrl06"),b(e,"class","error svelte-urrl06")},m(_,u){S(_,e,u),k(e,t),k(t,s),k(e,o),k(e,i),k(i,a),k(i,c),k(i,m)},p(_,u){u&2&&r!==(r=_[1].message+"")&&re(s,r),u&2&&l!==(l=(_[2]?_[1].stack:"")+"")&&re(c,l)},i:A,o:A,d(_){_&&v(e)}}}function Tt(n){let e,t,r,s;const o=[Ot,At],i=[];function a(l,c){return l[1]?0:1}return e=a(n),t=i[e]=o[e](n),{c(){t.c(),r=O()},l(l){t.l(l),r=O()},m(l,c){i[e].m(l,c),S(l,r,c),s=!0},p(l,[c]){let m=e;e=a(l),e===m?i[e].p(l,c):(x(),L(i[m],1,1,()=>{i[m]=null}),ee(),t=i[e],t?t.p(l,c):(t=i[e]=o[e](l),t.c()),B(t,1),t.m(r.parentNode,r))},i(l){s||(B(t),s=!0)},o(l){L(t),s=!1},d(l){i[e].d(l),l&&v(r)}}}function Vt(n,e,t){let r,s=A,o=()=>(s(),s=le(l,u=>t(1,r=u)),l);n.$$.on_destroy.push(()=>s());let{$$slots:i={},$$scope:a}=e,{error:l=null}=e;o();let{onError:c=null}=e,_=(typeof process!="undefined"&&process.env&&"production")!=="production";return n.$$set=u=>{"error"in u&&o(t(0,l=u.error)),"onError"in u&&t(3,c=u.onError),"$$scope"in u&&t(4,a=u.$$scope)},n.$$.update=()=>{n.$$.dirty&10&&r&&c&&c(r)},[l,r,_,c,a,i]}class qt extends j{constructor(e){super(),M(this,e,Vt,Tt,C,{error:0,onError:3})}}const Ft=["c","l","h","m","p","a","i","o","d"];function Fe(n){if(n.$$render){let t=n.$$render;return n.$$render=(r,s,o,i)=>{const a=ge(void 0);try{return t(r,se({error:a},s),o,i)}catch(l){return a.set(l),t(r,se({error:a},s),o,{})}},n}function e(t,r){return function(...o){try{return t(...o)}catch(i){r(i)}}}return class extends n{constructor(r){const s=ge(void 0);r.props.$$slots.default=r.props.$$slots.default.map(o=>(...i)=>{let l=e(o,s.set)(...i);if(l)for(let c of Ft)l[c]&&(l[c]=e(l[c],s.set));return l}),super(r),this.$$set({error:s})}}}Fe(qt);const nr=Fe(St);export{xt as A,rr as B,nr as E,er as H,Wt as N,Yt as a,tr as b,Zt as f};
