import{d as i,r as w,w as u}from"./index-71be9f1c.js";import{p as d}from"./stores-8ff78576.js";import{w as A}from"./with-loading-f07bedaf.js";import{f as y}from"./workflow-service-9d1a524c.js";import{g as b}from"./pollers-service-029109cc.js";import{m as g}from"./route-for-62d7d3b1.js";import{a6 as h}from"./index-8e660855.js";import{d as f}from"./is-http-3997fe58.js";import{c as k,a as P,d as W}from"./decode-payload-10bb3631.js";const R=(t,o=f)=>{var e;return h(o)||((e=t==null?void 0:t.codec)==null?void 0:e.endpoint)||""};async function E({activity:t,namespace:o,settings:e},{convertWithCodec:n=k,convertWithWebsocket:r=P,decodeAttributes:s=W,encoderEndpoint:c=f}={}){const a=R(e,c),l={...e,codec:{...e==null?void 0:e.codec,endpoint:a}},v=a?await n({attributes:t,namespace:o,settings:l}):await r(t);return s(v)}const I=async({activity:t,namespace:o,settings:e})=>await E({activity:t,namespace:o,settings:e}),_=async(t,o,e)=>{var s;const n=(s=t==null?void 0:t.pendingActivities)!=null?s:[],r=[];for(const c of n){const a=await I({activity:c,namespace:o,settings:e});r.push(a)}return r},J=u(0),T=i([d],([t])=>t.params.namespace),q=i([d],([t])=>t.params.workflow),x=i([d],([t])=>t.params.run),C=i([d],([t])=>t.stuff.settings),D=i([T,q,x,C,J],([t,o,e,n,r])=>({namespace:t,workflowId:g(o!=null?o:""),runId:e,settings:n,refresh:r})),F={workflow:null,workers:null},L=t=>D.subscribe(({namespace:o,workflowId:e,runId:n,settings:r})=>{o&&e&&n?A(m,p,async()=>{const s=await y({namespace:o,workflowId:e,runId:n}),{taskQueue:c}=s,a=await b({queue:c,namespace:o});s.pendingActivities=await _(s,o,r),t({workflow:s,workers:a})}):(m.set(!0),p.set(!1))}),p=u(!0),m=u(!0),N=w(F,L);export{m as l,J as r,N as w};
