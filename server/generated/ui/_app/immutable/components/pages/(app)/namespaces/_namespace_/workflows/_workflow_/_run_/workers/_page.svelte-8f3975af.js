import{S as w,i as g,s as _,w as f,x as i,y as m,B as b,f as $,t as p,z as c,J as k,a as W,c as h,b as v,h as E}from"../../../../../../../../../chunks/index-a4b23632.js";import{p as y}from"../../../../../../../../../chunks/stores-bfb28fb9.js";import{w as C,W as P}from"../../../../../../../../../chunks/workflow-run-layout-3761adc1.js";import{W as Q}from"../../../../../../../../../chunks/workers-list-859949e6.js";import{P as R}from"../../../../../../../../../chunks/page-title-94993ae8.js";function S(o){let r,n;return r=new Q({props:{taskQueue:o[1].taskQueue,workers:o[0]}}),{c(){f(r.$$.fragment)},l(e){i(r.$$.fragment,e)},m(e,a){m(r,e,a),n=!0},p:b,i(e){n||($(r.$$.fragment,e),n=!0)},o(e){p(r.$$.fragment,e),n=!1},d(e){c(r,e)}}}function q(o,r,n){let e;k(o,C,s=>n(2,e=s));const{workers:a,workflow:t}=e;return[a,t]}class z extends w{constructor(r){super(),g(this,r,q,S,_,{})}}function B(o){let r,n;return r=new z({}),{c(){f(r.$$.fragment)},l(e){i(r.$$.fragment,e)},m(e,a){m(r,e,a),n=!0},i(e){n||($(r.$$.fragment,e),n=!0)},o(e){p(r.$$.fragment,e),n=!1},d(e){c(r,e)}}}function J(o){let r,n,e,a;return r=new R({props:{title:`Workers | ${o[2]}`,url:o[0].url.href}}),e=new P({props:{cancelEnabled:!o[1],signalEnabled:!o[1],$$slots:{default:[B]},$$scope:{ctx:o}}}),{c(){f(r.$$.fragment),n=W(),f(e.$$.fragment)},l(t){i(r.$$.fragment,t),n=h(t),i(e.$$.fragment,t)},m(t,s){m(r,t,s),v(t,n,s),m(e,t,s),a=!0},p(t,[s]){const l={};s&1&&(l.url=t[0].url.href),r.$set(l);const u={};s&2&&(u.cancelEnabled=!t[1]),s&2&&(u.signalEnabled=!t[1]),s&64&&(u.$$scope={dirty:s,ctx:t}),e.$set(u)},i(t){a||($(r.$$.fragment,t),$(e.$$.fragment,t),a=!0)},o(t){p(r.$$.fragment,t),p(e.$$.fragment,t),a=!1},d(t){c(r,t),t&&E(n),c(e,t)}}}function j(o,r,n){let e,a;k(o,y,d=>n(0,a=d));var t,s,l;const u=a.params.workflow;return o.$$.update=()=>{o.$$.dirty&57&&n(1,e=n(5,l=n(4,s=n(3,t=a.data)===null||t===void 0?void 0:t.settings)===null||s===void 0?void 0:s.runtimeEnvironment)===null||l===void 0?void 0:l.isCloud)},[a,e,u,t,s,l]}class I extends w{constructor(r){super(),g(this,r,j,J,_,{})}}export{I as default};
