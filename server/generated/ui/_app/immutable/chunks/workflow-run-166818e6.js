import{d as r,r as w,w as p}from"./index-e5247e3a.js";import{p as u}from"./stores-d8da1c6f.js";import{w as A}from"./with-loading-f07bedaf.js";import{f as g}from"./workflow-service-a7ea485e.js";import{g as y}from"./pollers-service-35672e39.js";import{m as b}from"./route-for-82ed5238.js";import{d as k}from"./is-http-0cd19773.js";import{g as P,c as T,a as W,d as h}from"./get-encoder-endpoint-3b2de316.js";import{a as E}from"./auth-user-88f31028.js";async function R({activity:t,namespace:e,settings:o,accessToken:s},{convertWithCodec:c=T,convertWithWebsocket:a=W,decodeAttributes:n=h,encoderEndpoint:d=k}={}){const i=P(o,d),l={...o,codec:{...o==null?void 0:o.codec,endpoint:i}},v=i?await c({attributes:t,namespace:e,settings:l,accessToken:s}):await a(t);return n(v)}const I=async({activity:t,namespace:e,settings:o,accessToken:s})=>await R({activity:t,namespace:e,settings:o,accessToken:s}),J=async(t,e,o,s)=>{var n;const c=(n=t==null?void 0:t.pendingActivities)!=null?n:[],a=[];for(const d of c){const i=await I({activity:d,namespace:e,settings:o,accessToken:s});a.push(i)}return a},q=p(0),x=r([u],([t])=>t.params.namespace),C=r([u],([t])=>t.params.workflow),D=r([u],([t])=>t.params.run),F=r([u],([t])=>t.stuff.settings),L=r([E],([t])=>t==null?void 0:t.accessToken),Q=r([x,C,D,F,L,q],([t,e,o,s,c,a])=>({namespace:t,workflowId:b(e!=null?e:""),runId:o,settings:s,accessToken:c,refresh:a})),S={workflow:null,workers:null},_=t=>Q.subscribe(({namespace:e,workflowId:o,runId:s,settings:c,accessToken:a})=>{e&&o&&s?A(f,m,async()=>{const n=await g({namespace:e,workflowId:o,runId:s}),{taskQueue:d}=n,i=await y({queue:d,namespace:e});n.pendingActivities=await J(n,e,c,a),t({workflow:n,workers:i})}):(f.set(!0),m.set(!1))}),m=p(!0),f=p(!0),X=w(S,_);export{f as l,q as r,X as w};
