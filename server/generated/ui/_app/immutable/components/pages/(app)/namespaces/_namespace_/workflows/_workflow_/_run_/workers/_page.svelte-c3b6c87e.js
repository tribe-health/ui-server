import{S as _,i as d,s as b,w as l,x as u,y as i,f as m,t as $,z as p,J as E,a as h,c as W,b as Q,h as P}from"../../../../../../../../../chunks/index-6bdaee4d.js";import{p as S}from"../../../../../../../../../chunks/stores-de421f88.js";import{w as C,W as R,a as c}from"../../../../../../../../../chunks/workflow-signal-enabled-4231f9f6.js";import{W as q}from"../../../../../../../../../chunks/workers-list-4204b13b.js";import{P as y}from"../../../../../../../../../chunks/page-title-87d93540.js";import{e as g,f as k}from"../../../../../../../../../chunks/workflow-terminate-enabled-8d536b96.js";function z(n){let r,a;return r=new q({props:{taskQueue:n[0].taskQueue,workers:n[1]}}),{c(){l(r.$$.fragment)},l(e){u(r.$$.fragment,e)},m(e,s){i(r,e,s),a=!0},p(e,[s]){const t={};s&1&&(t.taskQueue=e[0].taskQueue),s&2&&(t.workers=e[1]),r.$set(t)},i(e){a||(m(r.$$.fragment,e),a=!0)},o(e){$(r.$$.fragment,e),a=!1},d(e){p(r,e)}}}function J(n,r,a){let e,s,t;return E(n,C,o=>a(2,t=o)),n.$$.update=()=>{n.$$.dirty&4&&a(1,{workers:e,workflow:s}=t,e,(a(0,s),a(2,t)))},[s,e,t]}class T extends _{constructor(r){super(),d(this,r,J,z,b,{})}}function j(n){let r,a;return r=new T({}),{c(){l(r.$$.fragment)},l(e){u(r.$$.fragment,e)},m(e,s){i(r,e,s),a=!0},i(e){a||(m(r.$$.fragment,e),a=!0)},o(e){$(r.$$.fragment,e),a=!1},d(e){p(r,e)}}}function A(n){let r,a,e,s;return r=new y({props:{title:`Workers | ${n[1]}`,url:n[0].url.href}}),e=new R({props:{cancelEnabled:g(n[0].data.settings),signalEnabled:c(n[0].data.settings),terminateEnabled:k(n[0].data.settings),$$slots:{default:[j]},$$scope:{ctx:n}}}),{c(){l(r.$$.fragment),a=h(),l(e.$$.fragment)},l(t){u(r.$$.fragment,t),a=W(t),u(e.$$.fragment,t)},m(t,o){i(r,t,o),Q(t,a,o),i(e,t,o),s=!0},p(t,[o]){const w={};o&1&&(w.url=t[0].url.href),r.$set(w);const f={};o&1&&(f.cancelEnabled=g(t[0].data.settings)),o&1&&(f.signalEnabled=c(t[0].data.settings)),o&1&&(f.terminateEnabled=k(t[0].data.settings)),o&4&&(f.$$scope={dirty:o,ctx:t}),e.$set(f)},i(t){s||(m(r.$$.fragment,t),m(e.$$.fragment,t),s=!0)},o(t){$(r.$$.fragment,t),$(e.$$.fragment,t),s=!1},d(t){p(r,t),t&&P(a),p(e,t)}}}function B(n,r,a){let e;E(n,S,t=>a(0,e=t));const s=e.params.workflow;return[e,s]}class L extends _{constructor(r){super(),d(this,r,B,A,b,{})}}export{L as default};