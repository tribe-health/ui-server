import{S as i,i as m,s as u,w as f,x as c,y as p,f as _,t as l,B as g}from"../chunks/index-de024f11.js";/* empty css                    */import{E as d}from"../chunks/error-d81b317c.js";import{i as h}from"../chunks/is-network-error-5f9e2367.js";import{p as E}from"../chunks/parse-with-big-int-561ccb8b.js";import"../chunks/navigation-fbe70647.js";import"../chunks/singletons-eca981c1.js";import"../chunks/stores-d8da1c6f.js";import"../chunks/link-9547edb3.js";function w(o){let t,s;return t=new d({props:{error:o[1],status:o[0]}}),{c(){f(t.$$.fragment)},l(r){c(t.$$.fragment,r)},m(r,e){p(t,r,e),s=!0},p(r,[e]){const n={};e&2&&(n.error=r[1]),e&1&&(n.status=r[0]),t.$set(n)},i(r){s||(_(t.$$.fragment,r),s=!0)},o(r){l(t.$$.fragment,r),s=!1},d(r){g(t,r)}}}const N=async function({error:o,status:t}){return{props:{error:o,status:t}}};function y(o,t,s){let{error:r}=t,{status:e}=t,n;try{n=E(r.message),h(n)&&(e=n.statusCode)}catch{}return o.$$set=a=>{"error"in a&&s(1,r=a.error),"status"in a&&s(0,e=a.status)},[e,r]}class P extends i{constructor(t){super(),m(this,t,y,w,u,{error:1,status:0})}}export{P as default,N as load};
