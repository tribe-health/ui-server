import{S as m,i as p,s as u,w as c,x as f,y as _,f as g,t as l,z as $,J as d}from"../../chunks/index-a4b23632.js";/* empty css                       */import{p as E}from"../../chunks/stores-bfb28fb9.js";import{E as h}from"../../chunks/error-fe34165f.js";import{i as y}from"../../chunks/is-network-error-6c5b2a35.js";import{p as w}from"../../chunks/parse-with-big-int-118e25d3.js";function b(e){let t,o;return t=new h({props:{error:e[1],status:e[0]}}),{c(){c(t.$$.fragment)},l(r){f(t.$$.fragment,r)},m(r,s){_(t,r,s),o=!0},p(r,[s]){const a={};s&2&&(a.error=r[1]),s&1&&(a.status=r[0]),t.$set(a)},i(r){o||(g(t.$$.fragment,r),o=!0)},o(r){l(t.$$.fragment,r),o=!1},d(r){$(t,r)}}}function q(e,t,o){let r,s,a;d(e,E,i=>o(2,a=i));let n;try{n=w(r.message),y(n)&&(s=n.statusCode)}catch{}return e.$$.update=()=>{e.$$.dirty&4&&o(1,r=a.error),e.$$.dirty&4&&o(0,s=a.status)},[s,r,a]}class A extends m{constructor(t){super(),p(this,t,q,b,u,{})}}export{A as default};
