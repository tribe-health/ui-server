import{S as O,i as q,s as z,w as k,x as I,y,f as h,t as v,B as E,N as J,a as M,l as $,r as U,c as V,m as d,n as T,u as W,h as f,p as l,b as A,M as p,aj as G,I as H,J as P,K as Q,L as R}from"../../chunks/index-de024f11.js";import{g as X}from"../../chunks/auth-user-88f31028.js";import{f as Y}from"../../chunks/settings-service-d9b9bc8a.js";/* empty css                       */import{p as Z}from"../../chunks/stores-d8da1c6f.js";import{I as x}from"../../chunks/icon-9e859714.js";import{N as tt,a as et,b as rt,E as nt}from"../../chunks/error-boundary-9ac02373.js";import{T as ot}from"../../chunks/tooltip-0d63ba32.js";import{n as st}from"../../chunks/nav-open-264a59df.js";import{r as at,f as it}from"../../chunks/route-for-82ed5238.js";import"../../chunks/persist-store-517b9cd5.js";import"../../chunks/index-e5247e3a.js";import"../../chunks/parse-with-big-int-561ccb8b.js";import"../../chunks/settings-669d336e.js";import"../../chunks/route-for-api-aeedb213.js";import"../../chunks/notifications-00b5eabd.js";import"../../chunks/is-network-error-5f9e2367.js";import"../../chunks/get-public-path-6c4a8950.js";import"../../chunks/index-fe89e29d.js";import"../../chunks/error-d81b317c.js";import"../../chunks/navigation-fbe70647.js";import"../../chunks/singletons-eca981c1.js";import"../../chunks/link-9547edb3.js";import"../../chunks/copyable-163c5f91.js";import"../../chunks/copy-to-clipboard-da829ffe.js";function lt(a){let e,n,t;return n=new x({props:{isCloud:a[0],name:"download"}}),{c(){e=$("div"),k(n.$$.fragment),this.h()},l(r){e=d(r,"DIV",{class:!0});var o=T(e);I(n.$$.fragment,o),o.forEach(f),this.h()},h(){l(e,"class","nav-icon svelte-1ul2a5d")},m(r,o){A(r,e,o),y(n,e,null),t=!0},p(r,o){const s={};o&1&&(s.isCloud=r[0]),n.$set(s)},i(r){t||(h(n.$$.fragment,r),t=!0)},o(r){v(n.$$.fragment,r),t=!1},d(r){r&&f(e),E(n)}}}function ut(a){let e,n,t,r,o;return e=new ot({props:{right:!0,hide:a[2],text:"Import",$$slots:{default:[lt]},$$scope:{ctx:a}}}),{c(){k(e.$$.fragment),n=M(),t=$("div"),r=U("Import"),this.h()},l(s){I(e.$$.fragment,s),n=V(s),t=d(s,"DIV",{class:!0});var i=T(t);r=W(i,"Import"),i.forEach(f),this.h()},h(){l(t,"class","nav-title svelte-1ul2a5d")},m(s,i){y(e,s,i),A(s,n,i),A(s,t,i),p(t,r),o=!0},p(s,i){const m={};i&4&&(m.hide=s[2]),i&9&&(m.$$scope={dirty:i,ctx:s}),e.$set(m)},i(s){o||(h(e.$$.fragment,s),o=!0)},o(s){v(e.$$.fragment,s),o=!1},d(s){E(e,s),s&&f(n),s&&f(t)}}}function ft(a){let e,n;return e=new et({props:{link:a[1].import,isCloud:a[0],$$slots:{default:[ut]},$$scope:{ctx:a}}}),{c(){k(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,r){y(e,t,r),n=!0},p(t,r){const o={};r&2&&(o.link=t[1].import),r&1&&(o.isCloud=t[0]),r&13&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function mt(a){let e,n;return e=new tt({props:{isCloud:a[0],linkList:a[1],$$slots:{top:[ft]},$$scope:{ctx:a}}}),{c(){k(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,r){y(e,t,r),n=!0},p(t,[r]){const o={};r&1&&(o.isCloud=t[0]),r&2&&(o.linkList=t[1]),r&15&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function ct(a,e,n){let t;J(a,st,s=>n(2,t=s));let{isCloud:r}=e,{linkList:o}=e;return a.$$set=s=>{"isCloud"in s&&n(0,r=s.isCloud),"linkList"in s&&n(1,o=s.linkList)},[r,o,t]}class pt extends O{constructor(e){super(),q(this,e,ct,mt,z,{isCloud:0,linkList:1})}}function $t(a){let e,n;return e=new pt({props:{linkList:a[0],isCloud:a[1]}}),{c(){k(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,r){y(e,t,r),n=!0},p(t,[r]){const o={};r&1&&(o.linkList=t[0]),e.$set(o)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function dt(a,e,n){let t,r,o;J(a,Z,_=>n(5,o=_));var s,i;const{isCloud:m}=o.stuff.settings.runtimeEnvironment;return a.$$.update=()=>{a.$$.dirty&44&&n(4,t=n(3,i=n(2,s=o.stuff)===null||s===void 0?void 0:s.settings)===null||i===void 0?void 0:i.defaultNamespace),a.$$.dirty&16&&n(0,r={home:at({namespace:t}),import:it({importType:"events"})})},[r,m,s,i,t,o]}class _t extends O{constructor(e){super(),q(this,e,dt,$t,z,{})}}function gt(a){let e;const n=a[0].default,t=H(n,a,a[1],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,o){t&&t.m(r,o),e=!0},p(r,o){t&&t.p&&(!e||o&2)&&P(t,n,r,r[1],e?R(n,r[1],o,null):Q(r[1]),null)},i(r){e||(h(t,r),e=!0)},o(r){v(t,r),e=!1},d(r){t&&t.d(r)}}}function ht(a){let e,n,t,r,o,s,i,m,_,S,L,C,K,b,N,w,D;return _=new rt({}),C=new _t({}),w=new nt({props:{onError:vt,$$slots:{default:[gt]},$$scope:{ctx:a}}}),{c(){e=$("link"),n=$("link"),t=$("meta"),r=$("meta"),o=$("meta"),s=$("meta"),i=M(),m=$("div"),k(_.$$.fragment),S=M(),L=$("div"),k(C.$$.fragment),K=M(),b=$("section"),N=$("div"),k(w.$$.fragment),this.h()},l(u){const c=G('[data-svelte="svelte-15ltrtv"]',document.head);e=d(c,"LINK",{rel:!0,href:!0}),n=d(c,"LINK",{rel:!0,href:!0}),t=d(c,"META",{property:!0,content:!0}),r=d(c,"META",{property:!0,content:!0}),o=d(c,"META",{property:!0,content:!0}),s=d(c,"META",{property:!0,content:!0}),c.forEach(f),i=V(u),m=d(u,"DIV",{class:!0});var g=T(m);I(_.$$.fragment,g),S=V(g),L=d(g,"DIV",{class:!0});var B=T(L);I(C.$$.fragment,B),B.forEach(f),K=V(g),b=d(g,"SECTION",{id:!0,class:!0});var F=T(b);N=d(F,"DIV",{class:!0});var j=T(N);I(w.$$.fragment,j),j.forEach(f),F.forEach(f),g.forEach(f),this.h()},h(){document.title="Temporal",l(e,"rel","manifest"),l(e,"href","/site.webmanifest"),l(n,"rel","apple-touch-icon"),l(n,"href","/apple-touch-icon.png"),l(t,"property","og:title"),l(t,"content","Temporal"),l(r,"property","og:type"),l(r,"content","website"),l(o,"property","og:url"),l(o,"content","https://temporal.io"),l(s,"property","og:image"),l(s,"content","/banner.png"),l(L,"class","sticky top-0 z-20 h-screen w-auto"),l(N,"class","z-10 flex h-full flex-col gap-4 px-10 pb-10 pt-8"),l(b,"id","content"),l(b,"class","h-screen w-max flex-auto overflow-auto"),l(m,"class","flex h-screen w-screen flex-row")},m(u,c){p(document.head,e),p(document.head,n),p(document.head,t),p(document.head,r),p(document.head,o),p(document.head,s),A(u,i,c),A(u,m,c),y(_,m,null),p(m,S),p(m,L),y(C,L,null),p(m,K),p(m,b),p(b,N),y(w,N,null),D=!0},p(u,[c]){const g={};c&2&&(g.$$scope={dirty:c,ctx:u}),w.$set(g)},i(u){D||(h(_.$$.fragment,u),h(C.$$.fragment,u),h(w.$$.fragment,u),D=!0)},o(u){v(_.$$.fragment,u),v(C.$$.fragment,u),v(w.$$.fragment,u),D=!1},d(u){f(e),f(n),f(t),f(r),f(o),f(s),u&&f(i),u&&f(m),E(_),E(C),E(w)}}}const Ht=async function({fetch:a}){const e=await Y(a);return{props:{user:X()},stuff:{settings:e}}},vt=()=>{};function wt(a,e,n){let{$$slots:t={},$$scope:r}=e;return a.$$set=o=>{"$$scope"in o&&n(1,r=o.$$scope)},[t,r]}class Pt extends O{constructor(e){super(),q(this,e,wt,ht,z,{})}}export{Pt as default,Ht as load};
