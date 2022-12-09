import{S as A,i as T,s as U,x,a as _,l as v,r as L,y as C,c as b,m as y,n as k,u as B,h as m,p as g,z as I,b as P,N as f,f as N,t as O,C as H,O as G,F as J}from"../../chunks/index-0b369c75.js";import{f as K}from"../../chunks/settings-service-45627a78.js";import{p as z,k as M}from"../../chunks/route-for-8f480fc8.js";import{B as Q}from"../../chunks/button-ca5c6c86.js";import{p as R}from"../../chunks/stores-5674b937.js";import{N as X,H as Y}from"../../chunks/hamburger-header-cabaa8bf.js";import{P as Z}from"../../chunks/page-title-2518fdab.js";import"../../chunks/settings-be4fa165.js";import"../../chunks/index-8c6be68a.js";import"../../chunks/route-for-api-60c60c78.js";import"../../chunks/auth-user-8d8472d7.js";import"../../chunks/persist-store-35c981b5.js";import"../../chunks/parse-with-big-int-561ccb8b.js";import"../../chunks/notifications-64e4d8bf.js";import"../../chunks/is-network-error-5f9e2367.js";import"../../chunks/icon-7d330c0b.js";import"../../chunks/has-68876cdc.js";import"../../chunks/is-b4c8f655.js";import"../../chunks/data-encoder-status-cd0f0994.js";import"../../chunks/data-converter-config-d291dbd4.js";import"../../chunks/is-http-ad557a83.js";import"../../chunks/tooltip-d45064b8.js";import"../../chunks/copy-to-clipboard-2eb414b9.js";import"../../chunks/modal-58682d62.js";import"../../chunks/checkbox-80095b67.js";import"../../chunks/index-8a8c6b93.js";function tt(i){let e;return{c(){e=L("Continue to SSO")},l(s){e=B(s,"Continue to SSO")},m(s,a){P(s,e,a)},d(s){s&&m(e)}}}function et(i){let e,s,a;return{c(){e=v("div"),s=v("p"),a=L(i[2]),this.h()},l(l){e=y(l,"DIV",{class:!0});var o=k(e);s=y(o,"P",{class:!0});var p=k(s);a=B(p,i[2]),p.forEach(m),o.forEach(m),this.h()},h(){g(s,"class","rounded-md border-2 border-orange-500 bg-orange-100 p-5 text-center"),g(e,"class","my-12 flex flex-col items-center justify-start gap-2")},m(l,o){P(l,e,o),f(e,s),f(s,a)},p:J,d(l){l&&m(e)}}}function rt(i){let e,s,a,l,o,p,n,$,D,F,d,V,W,h,c,j,E;e=new Z({props:{title:"Login",url:i[1].url.href}}),a=new X({props:{href:z+"/",user:void 0}}),o=new Y({props:{href:z+"/",user:void 0}}),c=new Q({props:{dataCy:"login-button",variant:"login",icon:"lock",$$slots:{default:[tt]},$$scope:{ctx:i}}}),c.$on("click",i[3]);let u=i[2]&&et(i);return{c(){x(e.$$.fragment),s=_(),x(a.$$.fragment),l=_(),x(o.$$.fragment),p=_(),n=v("section"),$=v("h1"),D=L("Welcome back."),F=_(),d=v("p"),V=L("Let's get you signed in."),W=_(),h=v("div"),x(c.$$.fragment),j=_(),u&&u.c(),this.h()},l(t){C(e.$$.fragment,t),s=b(t),C(a.$$.fragment,t),l=b(t),C(o.$$.fragment,t),p=b(t),n=y(t,"SECTION",{class:!0});var r=k(n);$=y(r,"H1",{class:!0,"data-cy":!0});var S=k($);D=B(S,"Welcome back."),S.forEach(m),F=b(r),d=y(r,"P",{class:!0,"data-cy":!0});var w=k(d);V=B(w,"Let's get you signed in."),w.forEach(m),W=b(r),h=y(r,"DIV",{class:!0});var q=k(h);C(c.$$.fragment,q),q.forEach(m),j=b(r),u&&u.l(r),r.forEach(m),this.h()},h(){g($,"class","text-8xl font-semibold"),g($,"data-cy","login-title"),g(d,"class","my-7"),g(d,"data-cy","login-info"),g(h,"class","mx-auto"),g(n,"class","my-[20vh] text-center")},m(t,r){I(e,t,r),P(t,s,r),I(a,t,r),P(t,l,r),I(o,t,r),P(t,p,r),P(t,n,r),f(n,$),f($,D),f(n,F),f(n,d),f(d,V),f(n,W),f(n,h),I(c,h,null),f(n,j),u&&u.m(n,null),E=!0},p(t,[r]){const S={};r&2&&(S.url=t[1].url.href),e.$set(S);const w={};r&16&&(w.$$scope={dirty:r,ctx:t}),c.$set(w),t[2]&&u.p(t,r)},i(t){E||(N(e.$$.fragment,t),N(a.$$.fragment,t),N(o.$$.fragment,t),N(c.$$.fragment,t),E=!0)},o(t){O(e.$$.fragment,t),O(a.$$.fragment,t),O(o.$$.fragment,t),O(c.$$.fragment,t),E=!1},d(t){H(e,t),t&&m(s),H(a,t),t&&m(l),H(o,t),t&&m(p),t&&m(n),H(c),u&&u.d()}}}const Nt=async function({fetch:i}){const e=await K(i);return e.auth.enabled?{props:{settings:e},stuff:{settings:e}}:{status:404}};function st(i,e,s){let a;G(i,R,n=>s(1,a=n));const l=a.url.searchParams.get("error");let{settings:o}=e;const p=()=>{window.location.assign(M({settings:o,searchParams:a.url.searchParams,originUrl:a.url.origin}))};return i.$$set=n=>{"settings"in n&&s(0,o=n.settings)},[o,a,l,p]}class Ot extends A{constructor(e){super(),T(this,e,st,rt,U,{settings:0})}}export{Ot as default,Nt as load};