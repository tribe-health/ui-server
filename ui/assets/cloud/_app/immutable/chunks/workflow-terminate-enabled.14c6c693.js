import{d as c,r as d,w as a}from"./index.fd755237.js";import{p as w}from"./stores.eafd35a1.js";import{a as m,b as k}from"./workflow-service.e9a19192.js";import{s as h}from"./list-workflow-query.f0640175.js";import{t as n}from"./workflow-status.7246687d.js";const b=300,p=async(r,o,e)=>{o.set(!0);try{await e()}catch(s){console.error(s)}r.set(!1),setTimeout(()=>{o.set(!1)},b)},C=a(0),g=c([w],([r])=>r.params.namespace),v=c([w],([r])=>r.url.searchParams.get("query")),A=c([g,v,C,h],([r,o,e,s])=>({namespace:r,query:o,refresh:e,supportsAdvancedVisibility:s})),W=r=>{S.set(r)},q=r=>A.subscribe(({namespace:o,query:e,supportsAdvancedVisibility:s})=>{p(E,P,async()=>{const{workflows:f,error:l}=await m(o,{query:e});if(r(f),s){const u=await k(o,e);W(u)}l?i.set(l):i.set("")})}),Q=a(""),P=a(!0),E=a(!0),S=a({count:0,totalCount:0}),i=a(""),z=d([],q),B=a("");var T=(r=>(r[r.Unspecified=0]="Unspecified",r[r.Signal=1]="Signal",r[r.None=2]="None",r))(T||{}),t=(r=>(r[r.Cancel=0]="Cancel",r[r.Reset=1]="Reset",r[r.Terminate=2]="Terminate",r))(t||{});function U(r){console.error("Unhandled action:",r)}const V=r=>{switch(r){case t.Cancel:return"canceled";case t.Reset:return"reset";case t.Terminate:return"terminated";default:U(r)}},x=(r,o)=>{const e=n("workflows",V(r));return o?n("workflows","workflow-action-reason-placeholder-with-email",{action:e,email:o}):n("workflows","workflow-action-reason-placeholder",{action:e})},F=({action:r,reason:o,email:e})=>{const s=x(r,e);return o?[o.trim(),s].join(" "):s},G=r=>!r.disableWriteActions&&!r.workflowCancelDisabled,H=r=>!r.disableWriteActions&&!r.workflowTerminateDisabled;export{t as A,T as R,H as a,Q as b,z as c,i as d,B as e,F as f,x as g,S as h,E as l,C as r,P as u,G as w};
