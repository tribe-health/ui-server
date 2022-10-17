import{r,a as d}from"./route-for-api-aeedb213.js";import{s as p}from"./parse-with-big-int-561ccb8b.js";var l,w=new Uint8Array(16);function v(){if(!l&&(l=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!l))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return l(w)}const x=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function E(t){return typeof t=="string"&&x.test(t)}var n=[];for(var h=0;h<256;++h)n.push((h+256).toString(16).substr(1));function T(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=(n[t[e+0]]+n[t[e+1]]+n[t[e+2]]+n[t[e+3]]+"-"+n[t[e+4]]+n[t[e+5]]+"-"+n[t[e+6]]+n[t[e+7]]+"-"+n[t[e+8]]+n[t[e+9]]+"-"+n[t[e+10]]+n[t[e+11]]+n[t[e+12]]+n[t[e+13]]+n[t[e+14]]+n[t[e+15]]).toLowerCase();if(!E(o))throw TypeError("Stringified UUID is invalid");return o}function y(t,e,o){t=t||{};var s=t.random||(t.rng||v)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,e){o=o||0;for(var u=0;u<16;++u)e[o+u]=s[u];return e}return T(s)}const b=async(t,e=fetch)=>{var f;let o="";const s=a=>{var g,m;return o=(m=(g=a==null?void 0:a.body)==null?void 0:g.message)!=null?m:`Error fetching schedules: ${a.status}: ${a.statusText}`},u=await r("schedules",{namespace:t}),{schedules:i,nextPageToken:c}=(f=await d(u,{params:{},onError:s,request:e}))!=null?f:{schedules:[],nextPageToken:""};return{schedules:i,nextPageToken:String(c),error:o}};async function C(t,e=fetch){const o=await r("schedule",t);return d(o,{request:e})}async function P(t,e=fetch){const o=await r("schedule.delete",t);return d(o,{request:e,options:{method:"DELETE"}})}async function A({namespace:t,body:e}){let o="";const s=c=>{var f,a;return o=(a=(f=c==null?void 0:c.body)==null?void 0:f.message)!=null?a:`Error creating schedule: ${c.status}: ${c.statusText}`},u=await r("schedules",{namespace:t}),{conflictToken:i}=await d(u,{options:{method:"POST",body:p({request_id:y(),...e})},shouldRetry:!1,onError:s});return{conflictToken:i,error:o}}async function V({namespace:t,scheduleId:e,reason:o}){const s={patch:{pause:o}},u=await r("schedule",{namespace:t,scheduleId:e});return await d(u,{options:{method:"PATCH",body:p({...s,request_id:y()})},shouldRetry:!1,onError:i=>console.error(i)})}async function $({namespace:t,scheduleId:e,reason:o}){const s={patch:{unpause:o}},u=await r("schedule",{namespace:t,scheduleId:e});return await d(u,{options:{method:"PATCH",body:p({...s,request_id:y()})},shouldRetry:!1})}export{b as a,A as c,P as d,C as f,V as p,$ as u};
