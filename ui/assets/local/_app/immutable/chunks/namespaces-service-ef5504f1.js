import{t as c}from"./toaster-e341d18b.js";import{n as o}from"./namespaces-f9986fb4.js";import{p as i}from"./paginated-384a9d8f.js";import{r as p,a as f}from"./route-for-api-3af3eac8.js";const u={namespaces:[]};async function E(r,s=fetch){if(r.runtimeEnvironment.isCloud){o.set([]);return}try{const t=p("namespaces"),e=await i(async a=>f(t,{request:s,token:a,onError:()=>c.push({variant:"error",message:"Unable to fetch namespaces"})})),{showTemporalSystemNamespace:n}=r,m=((e==null?void 0:e.namespaces)??[]).filter(a=>n||a.namespaceInfo.name!=="temporal-system");o.set(m)}catch{o.set([])}}async function N(r,s,t=fetch){var a;const[e]=u.namespaces;if((a=s==null?void 0:s.runtimeEnvironment)!=null&&a.isCloud)return e;const n=p("namespace",{namespace:r});return await f(n,{request:t,onError:()=>c.push({variant:"error",message:"Unable to fetch namespaces"})})??e}export{N as a,E as f};
