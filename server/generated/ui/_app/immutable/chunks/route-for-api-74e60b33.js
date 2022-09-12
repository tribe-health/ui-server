import{d as h,e as w,t as F}from"./route-for-4a4bbbc1.js";import{E as P}from"./index-f283717a.js";import{w as O}from"./index-5dff130b.js";import{n as b}from"./notifications-dddf88f8.js";import{i as z}from"./is-network-error-5f9e2367.js";import{i as L}from"./is-function-45497f08.js";import{g as N}from"./get-api-origin-9f051405.js";import{p as S}from"./get-public-path-6c4a8950.js";const _=O(null),B=(o,n=b,c=_,i=w)=>{if(T(o)&&i){window.location.assign(h());return}if(y(o)&&i){window.location.assign(h());return}if(z(o))throw n.add("error",`${o.statusCode} ${o.statusText}`),c.set(o),o;typeof o=="string"&&n.add("error",o),o instanceof Error&&n.add("error",o.message)},a=(o,n=w)=>{if(T(o)&&n){window.location.assign(h());return}if(y(o)&&n){window.location.assign(h());return}},T=o=>(o==null?void 0:o.statusCode)===401||(o==null?void 0:o.status)===401,y=o=>(o==null?void 0:o.statusCode)===403||(o==null?void 0:o.status)===403,r=o=>(o==null?void 0:o.message)!==void 0&&typeof(o==null?void 0:o.message)=="string",W=async(o,n={},c=10)=>{var I;const{params:i={},request:d=fetch,token:u,shouldRetry:k=!1,notifyOnError:E=!0,handleError:v=B,onRetry:A=P,onError:g,retryInterval:C=5e3,isBrowser:$=w}=n;let{options:l}=n;const U=u?{next_page_token:u}:{},q=new URLSearchParams({...i,...U}),x=F(o,q);try{l=H(l,$),globalThis!=null&&globalThis.AccessToken&&(l.headers=await K(l==null?void 0:l.headers,globalThis.AccessToken,$));const s=await d(x,l),f=await s.json(),{status:t,statusText:R}=s;if(!s.ok)if(g&&L(g))g({status:t,statusText:R,body:f});else throw{statusCode:s.status,statusText:s.statusText,response:s,message:(I=f==null?void 0:f.message)!=null?I:s.statusText};return f}catch(s){if(E){if(v(s),k&&c>0)return new Promise(f=>{const t=c-1;A(t),setTimeout(()=>{f(W(o,n,t))},C)})}else throw s}},H=(o,n=w)=>{const c={credentials:"include",...o};return c.headers=X(o==null?void 0:o.headers,n),c},K=async(o,n,c=w)=>{if(o||(o={}),!c)return o;try{const i=await n();i&&(o.Authorization=`Bearer ${i}`)}catch(i){console.error(i)}return o},X=(o,n=w)=>{if(o||(o={}),!n)return o;const c="_csrf=",i="X-CSRF-TOKEN";try{let u=document.cookie.split(";").find(k=>k.includes(c));u&&!o[i]&&(u=u.trim().slice(c.length),o[i]=u)}catch(d){console.error(d)}return o},D=(o,n)=>o.replace("%namespace%",n),G=o=>{var c;let n="";return((c=globalThis==null?void 0:globalThis.AppConfig)==null?void 0:c.apiUrl)&&o?n=D(globalThis.AppConfig.apiUrl,o):n=N(),n.endsWith("/")&&(n=n.slice(0,-1)),n=`${n}${S}`,n},J=(o,n)=>(o.startsWith("/")&&(o=o.slice(1)),`${G(n)}/api/v1/${o}`),M=o=>Object.keys(o!=null?o:{}).reduce((n,c)=>(n[c]=encodeURIComponent(encodeURIComponent(o[c])),n),{namespace:"",workflowId:"",scheduleId:"",runId:"",queue:""});function nn(o,n,c=!0){c&&(n=M(n));const i={cluster:"/cluster","events.ascending":`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}/events`,"events.descending":`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}/events/reverse`,namespaces:"/namespaces",query:`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}/query`,"schedule.delete":`/namespaces/${n==null?void 0:n.namespace}/schedules/${n==null?void 0:n.scheduleId}`,schedule:`/namespaces/${n==null?void 0:n.namespace}/schedules/${n==null?void 0:n.scheduleId}`,schedules:`/namespaces/${n==null?void 0:n.namespace}/schedules`,"search-attributes":"/search-attributes",settings:"/settings","task-queue":`/namespaces/${n==null?void 0:n.namespace}/task-queues/${n==null?void 0:n.queue}`,user:"/me","workflow.terminate":`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}/terminate`,workflow:`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}`,"workflows.archived":`/namespaces/${n==null?void 0:n.namespace}/workflows/archived`,workflows:`/namespaces/${n==null?void 0:n.namespace}/workflows`};return J(i[o],n==null?void 0:n.namespace)}export{nn as a,a as b,B as h,r as i,_ as n,W as r};
