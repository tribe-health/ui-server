import{e as h}from"./workflow-service.1c6f20d2.js";import{a as m}from"./namespaces-service.34b41eb4.js";const b=async function({params:o,url:l}){var r,s;const{searchParams:e}=l;e.has("time-range")||e.set("time-range","1 day");const c=e.get("workflow-id"),f=e.get("workflow-type"),w=e.get("time-range"),g=e.get("status"),d={workflowId:c,workflowType:f,closeTime:w,executionStatus:g},t=await m(o.namespace),a=((r=t==null?void 0:t.config)==null?void 0:r.historyArchivalState)==="Enabled",i=((s=t==null?void 0:t.config)==null?void 0:s.visibilityArchivalState)==="Enabled",n=a&&i?await h(o.namespace,d,fetch):null;return{workflows:n?n.workflows:[],namespace:t,archivalEnabled:a,visibilityArchivalEnabled:i}},p=Object.freeze(Object.defineProperty({__proto__:null,load:b},Symbol.toStringTag,{value:"Module"}));export{p as _,b as l};