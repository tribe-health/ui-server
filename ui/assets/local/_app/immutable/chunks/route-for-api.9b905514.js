import{B as u,e as h,t as C}from"./route-for.0607834c.js";import{g as k}from"./auth-user.ead5c000.js";import{w as q}from"./index.255b7490.js";import{t as R}from"./toaster.fda31b2d.js";import{i as F}from"./is-network-error.3dd5226d.js";import{h as I}from"./has.8da86d13.js";import{i as O}from"./persist-store.bb6871e4.js";import{p as W}from"./stores.5f4fb644.js";import{K as N}from"./index.d29c66be.js";import{b as P}from"./paths.295fa9ab.js";const S=q(null);function _(c=u){const n="",o=!n.startsWith("http");let s="";return o?s=c?window.location.origin+n:"":s=n,s.endsWith("/")&&(s=s.slice(0,-1)),s}const z=(c,n=R,o=S,s=u)=>{throw typeof c=="string"?n.push({variant:"error",message:c}):c.report=!1,c instanceof Error&&n.push({variant:"error",message:c.message}),b(c)&&s&&window.location.assign(h(c==null?void 0:c.message)),y(c)&&s&&window.location.assign(h(c==null?void 0:c.message)),F(c)&&(n.push({variant:"error",message:`${c.statusCode} ${c.statusText}`}),o.set(c)),c},nn=(c,n=u)=>{var s;const o=`${c==null?void 0:c.status} ${(s=c==null?void 0:c.body)==null?void 0:s.message}`;if(b(c)&&n){window.location.assign(h(o));return}if(y(c)&&n){window.location.assign(h(o));return}},b=c=>T(c,401),y=c=>T(c,403),T=(c,n)=>I(c,"statusCode")?c.statusCode===n:I(c,"status")?c.status===n:!1,cn=c=>(c==null?void 0:c.message)!==void 0&&typeof(c==null?void 0:c.message)=="string",on=async(c,n={})=>{const{params:o={},request:s=fetch,token:w,notifyOnError:l=!0,handleError:f=z,onError:$,isBrowser:g=u}=n;let{options:t}=n;const U=w?{next_page_token:w}:{},E=new URLSearchParams({...o,...U}),e=C(c,E);try{t=L(t,g),t=await B(t,g);const i=await s(e,t),d=await i.json(),{status:A,statusText:x}=i;if(!i.ok)if($&&O($))$({status:A,statusText:x,body:d});else throw{statusCode:i.status,statusText:i.statusText,response:i,message:(d==null?void 0:d.message)??i.statusText};return d}catch(i){if(l)f(i);else throw i}},L=(c,n=u)=>{const o={credentials:"include",...c};return o.headers=H(c==null?void 0:c.headers,n),o},B=async(c,n=u)=>(k().accessToken?(c.headers=await v(c==null?void 0:c.headers,async()=>k().accessToken,n),c.headers=K(c==null?void 0:c.headers,k().idToken,n)):globalThis!=null&&globalThis.AccessToken&&(c.headers=await v(c==null?void 0:c.headers,globalThis.AccessToken,n)),c),v=async(c,n,o=u)=>{if(c||(c={}),!o)return c;try{const s=await n();s&&(c.Authorization=`Bearer ${s}`)}catch(s){console.error(s)}return c},K=(c={},n,o=u)=>(o&&n&&(c["Authorization-Extras"]=n),c),H=(c,n=u)=>{if(c||(c={}),!n)return c;const o="_csrf=",s="X-CSRF-TOKEN";try{let l=document.cookie.split(";").find(f=>f.includes(o));l&&!c[s]&&(l=l.trim().slice(o.length),c[s]=l)}catch(w){console.error(w)}return c},X=(c,n)=>c?c.replace("%namespace%",n):"",D=c=>{var l,f;let n="";const o=(l=N(W).data)==null?void 0:l.webUrl,s=o&&c,w=((f=globalThis==null?void 0:globalThis.AppConfig)==null?void 0:f.apiUrl)&&c;return s?n=o:w?(console.warn("Using fallback api url, web url not found"),n=X(globalThis.AppConfig.apiUrl,c)):n=_(),n.endsWith("/")&&(n=n.slice(0,-1)),n=`${n}${P}`,n},G=(c,n)=>(c.startsWith("/")&&(c=c.slice(1)),`${D(n)}/api/v1/${c}`),J=c=>Object.keys(c??{}).reduce((n,o)=>(n[o]=encodeURIComponent(encodeURIComponent(c[o])),n),{namespace:"",workflowId:"",scheduleId:"",runId:"",queue:"",activityId:""});function sn(c,n,o=!0){o&&(n=J(n));const s={cluster:"/cluster","events.ascending":`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}/events`,"events.descending":`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}/events/reverse`,namespaces:"/namespaces",namespace:`/namespaces/${n==null?void 0:n.namespace}`,query:`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}/query`,"schedule.delete":`/namespaces/${n==null?void 0:n.namespace}/schedules/${n==null?void 0:n.scheduleId}`,schedule:`/namespaces/${n==null?void 0:n.namespace}/schedules/${n==null?void 0:n.scheduleId}`,schedules:`/namespaces/${n==null?void 0:n.namespace}/schedules`,"search-attributes":"/search-attributes",settings:"/settings","task-queue":`/namespaces/${n==null?void 0:n.namespace}/task-queues/${n==null?void 0:n.queue}`,user:"/me","workflow.terminate":`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}/terminate`,"workflow.cancel":`/namespaces/${n.namespace}/workflows/${n.workflowId}/runs/${n.runId}/cancel`,"workflow.signal":`/namespaces/${n.namespace}/workflows/${n.workflowId}/runs/${n.runId}/signal`,"workflow.reset":`/namespaces/${n.namespace}/workflows/${n.workflowId}/runs/${n.runId}/reset`,workflow:`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}`,"workflows.archived":`/namespaces/${n==null?void 0:n.namespace}/workflows/archived`,workflows:`/namespaces/${n==null?void 0:n.namespace}/workflows`,"workflows.count":`/namespaces/${n==null?void 0:n.namespace}/workflows/count`,"activity.complete":`/namespaces/${n.namespace}/workflows/${n.workflowId}/runs/${n.runId}/activities/${n.activityId}/complete`,"activity.fail":`/namespaces/${n.namespace}/workflows/${n.workflowId}/runs/${n.runId}/activities/${n.activityId}/fail`,"batch-operations":`/namespaces/${n.namespace}/batch-operations`,"batch-operation.describe":`/namespaces/${n.namespace}/batch-operations/describe`};return G(s[c],n==null?void 0:n.namespace)}export{on as a,nn as b,y as c,cn as d,_ as g,z as h,b as i,S as n,sn as r};