import{S as a,i as n,s as p,O as i,v as m}from"../../chunks/index-208d16bf.js";import{g as c}from"../../chunks/navigation-3f1ea447.js";import{p as u}from"../../chunks/stores-e98c925f.js";import{n as l}from"../../chunks/notifications-e1f2ba54.js";import{d as f}from"../../chunks/data-converter-config-cbb8411a.js";import"../../chunks/singletons-d1fb5791.js";import"../../chunks/index-b3caf0f7.js";import"../../chunks/persist-store-e22b12b5.js";const h=!1;function d(o,s,r){let e;return i(o,u,t=>r(0,e=t)),m(()=>{let{port:t}=e.params;f.set(t),c("/",{replaceState:!0}),l.add("success","Successfully set decoder")}),[]}class q extends a{constructor(s){super(),n(this,s,d,null,p,{})}}export{q as default,h as ssr};