import{S as K,i as L,s as B,F as M,k as E,q as O,a as V,w as j,l as I,m as N,r as q,h as c,c as J,x as H,n as g,b as C,K as d,y as S,G as P,H as Q,I as R,f as v,t as h,z as y,J as W}from"../../../../../../../../../chunks/index-b87195f7.js";import{d as T}from"../../../../../../../../../chunks/route-for-0206cbc8.js";import{T as X,a as F}from"../../../../../../../../../chunks/toggle-buttons-95a0ab97.js";import{E as Y}from"../../../../../../../../../chunks/event-history-file-import-5e503a47.js";import{l as Z}from"../../../../../../../../../chunks/namespaces-f9986fb4.js";function x(o){let e;return{c(){e=O("Timeline")},l(s){e=q(s,"Timeline")},m(s,t){C(s,e,t)},d(s){s&&c(e)}}}function ee(o){let e;return{c(){e=O("Compact")},l(s){e=q(s,"Compact")},m(s,t){C(s,e,t)},d(s){s&&c(e)}}}function te(o){let e;return{c(){e=O("JSON")},l(s){e=q(s,"JSON")},m(s,t){C(s,e,t)},d(s){s&&c(e)}}}function se(o){let e,s,t,a,r,i;return e=new F({props:{icon:"feed",href:T(o[0],"feed"),$$slots:{default:[x]},$$scope:{ctx:o}}}),t=new F({props:{icon:"compact",href:T(o[0],"compact"),$$slots:{default:[ee]},$$scope:{ctx:o}}}),r=new F({props:{icon:"json",href:T(o[0],"json"),$$slots:{default:[te]},$$scope:{ctx:o}}}),{c(){j(e.$$.fragment),s=V(),j(t.$$.fragment),a=V(),j(r.$$.fragment)},l(n){H(e.$$.fragment,n),s=J(n),H(t.$$.fragment,n),a=J(n),H(r.$$.fragment,n)},m(n,f){S(e,n,f),C(n,s,f),S(t,n,f),C(n,a,f),S(r,n,f),i=!0},p(n,f){const p={};f&1&&(p.href=T(n[0],"feed")),f&4&&(p.$$scope={dirty:f,ctx:n}),e.$set(p);const _={};f&1&&(_.href=T(n[0],"compact")),f&4&&(_.$$scope={dirty:f,ctx:n}),t.$set(_);const m={};f&1&&(m.href=T(n[0],"json")),f&4&&(m.$$scope={dirty:f,ctx:n}),r.$set(m)},i(n){i||(v(e.$$.fragment,n),v(t.$$.fragment,n),v(r.$$.fragment,n),i=!0)},o(n){h(e.$$.fragment,n),h(t.$$.fragment,n),h(r.$$.fragment,n),i=!1},d(n){y(e,n),n&&c(s),y(t,n),n&&c(a),y(r,n)}}}function ne(o){let e,s,t,a,r,i,n,f,p,_,m,A,w;n=new Y({}),m=new X({props:{$$slots:{default:[se]},$$scope:{ctx:o}}});const D=o[1].default,$=M(D,o,o[2],null);return{c(){e=E("section"),s=E("nav"),t=E("h3"),a=O("Import Event History"),r=V(),i=E("div"),j(n.$$.fragment),f=V(),p=E("nav"),_=E("div"),j(m.$$.fragment),A=V(),$&&$.c(),this.h()},l(l){e=I(l,"SECTION",{id:!0});var u=N(e);s=I(u,"NAV",{class:!0,"aria-label":!0});var b=N(s);t=I(b,"H3",{class:!0});var U=N(t);a=q(U,"Import Event History"),U.forEach(c),r=J(b),i=I(b,"DIV",{class:!0});var k=N(i);H(n.$$.fragment,k),k.forEach(c),b.forEach(c),f=J(u),p=I(u,"NAV",{class:!0,"aria-label":!0});var z=N(p);_=I(z,"DIV",{id:!0,class:!0});var G=N(_);H(m.$$.fragment,G),G.forEach(c),z.forEach(c),A=J(u),$&&$.l(u),u.forEach(c),this.h()},h(){g(t,"class","text-lg font-medium"),g(i,"class","flex gap-4"),g(s,"class","flex items-end justify-between gap-4 pb-4"),g(s,"aria-label","import event history"),g(_,"id","event-view-toggle"),g(_,"class","flex gap-4 bg-white"),g(p,"class","my-4 flex items-end justify-end gap-4"),g(p,"aria-label","event history view"),g(e,"id","event-history")},m(l,u){C(l,e,u),d(e,s),d(s,t),d(t,a),d(s,r),d(s,i),S(n,i,null),d(e,f),d(e,p),d(p,_),S(m,_,null),d(e,A),$&&$.m(e,null),w=!0},p(l,[u]){const b={};u&5&&(b.$$scope={dirty:u,ctx:l}),m.$set(b),$&&$.p&&(!w||u&4)&&P($,D,l,l[2],w?R(D,l[2],u,null):Q(l[2]),null)},i(l){w||(v(n.$$.fragment,l),v(m.$$.fragment,l),v($,l),w=!0)},o(l){h(n.$$.fragment,l),h(m.$$.fragment,l),h($,l),w=!1},d(l){l&&c(e),y(n),y(m),$&&$.d(l)}}}function ae(o,e,s){let t;W(o,Z,i=>s(0,t=i));let{$$slots:a={},$$scope:r}=e;return o.$$set=i=>{"$$scope"in i&&s(2,r=i.$$scope)},[t,a,r]}class oe extends K{constructor(e){super(),L(this,e,ae,ne,B,{})}}function re(o){let e;const s=o[0].default,t=M(s,o,o[1],null);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,r){t&&t.m(a,r),e=!0},p(a,r){t&&t.p&&(!e||r&2)&&P(t,s,a,a[1],e?R(s,a[1],r,null):Q(a[1]),null)},i(a){e||(v(t,a),e=!0)},o(a){h(t,a),e=!1},d(a){t&&t.d(a)}}}function le(o){let e,s;return e=new oe({props:{$$slots:{default:[re]},$$scope:{ctx:o}}}),{c(){j(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,a){S(e,t,a),s=!0},p(t,[a]){const r={};a&2&&(r.$$scope={dirty:a,ctx:t}),e.$set(r)},i(t){s||(v(e.$$.fragment,t),s=!0)},o(t){h(e.$$.fragment,t),s=!1},d(t){y(e,t)}}}function fe(o,e,s){let{$$slots:t={},$$scope:a}=e;return o.$$set=r=>{"$$scope"in r&&s(1,a=r.$$scope)},[t,a]}class pe extends K{constructor(e){super(),L(this,e,fe,le,B,{})}}export{pe as default};
