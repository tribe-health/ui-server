import{r as m,a as p}from"./route-for-api.604bf051.js";import{s as g}from"./parse-with-big-int.02af2f95.js";import{v as b}from"./toaster.fda31b2d.js";import{S as N,b as j,a as B,m as S,p as $,q as _,k as h,u as v,f as y,n as E,O as I,P as C,w as O,c as U,x as M,d as V,M as D,y as z}from"./index.d29c66be.js";import{g as G,w,m as F}from"./calendar.81d1e381.js";const ht=async(n,t=fetch)=>{let s="";const o=l=>{var a;return s=((a=l==null?void 0:l.body)==null?void 0:a.message)??`Error fetching schedules: ${l.status}: ${l.statusText}`},e=m("schedules",{namespace:n}),{schedules:i,nextPageToken:r}=await p(e,{params:{},onError:o,request:t})??{schedules:[],nextPageToken:""};return{schedules:i,nextPageToken:String(r),error:s}};async function dt(n,t=fetch){const s=m("schedule",n);return p(s,{request:t})}async function mt(n,t=fetch){const s=m("schedule.delete",n);return p(s,{request:t,options:{method:"DELETE"}})}async function pt({namespace:n,body:t}){let s="";const o=r=>{var l;return s=((l=r==null?void 0:r.body)==null?void 0:l.message)??`Error creating schedule: ${r.status}: ${r.statusText}`},e=m("schedules",{namespace:n}),{conflictToken:i}=await p(e,{options:{method:"POST",body:g({request_id:b(),...t})},onError:o});return{conflictToken:i,error:s}}async function yt({namespace:n,scheduleId:t,body:s}){let o="";const e=r=>{var l;return o=((l=r==null?void 0:r.body)==null?void 0:l.message)??`Error editing schedule: ${r.status}: ${r.statusText}`},i=m("schedule",{namespace:n,scheduleId:t});return await p(i,{options:{method:"POST",body:g({request_id:b(),...s})},onError:e}),{error:o}}async function vt({namespace:n,scheduleId:t,reason:s}){const o={patch:{pause:s}},e=m("schedule",{namespace:n,scheduleId:t});return await p(e,{options:{method:"PATCH",body:g({...o,request_id:b()})},onError:i=>console.error(i)})}async function St({namespace:n,scheduleId:t,reason:s}){const o={patch:{unpause:s}},e=m("schedule",{namespace:n,scheduleId:t});return await p(e,{options:{method:"PATCH",body:g({...o,request_id:b()})}})}const $t=({preset:n,month:t,dayOfMonth:s,dayOfWeek:o,hour:e,minute:i})=>{let r="";const l=!e||!parseInt(e)||parseInt(e)<12?"am":"pm",c=`${(!e||!parseInt(e)?"12":parseInt(e)<=12?e:(parseInt(e)-12).toString()).padStart(2,"0")}:${i?i.padStart(2,"0"):"00"}${l}`;if(n==="week"){const u=G.find(f=>f.value===o);u?r=`${u.label} at ${c}`:r=`${o.split(",").map(x=>w.find(H=>H.value===x).label).join(", ")} at ${c}`}else if(n==="month")if(t==="*")r=`Every ${s} of the month at ${c}`;else{const f=t.split(",").map(d=>F.find(W=>W.value===d).label).join(", ");r=`Every ${s} of ${f} at ${c}`}return r},A=(n="",t=!1)=>{let s="";if(!n)return s;const o=parseInt(n.slice(0,-1)),e=Math.floor(o/(60*60*24));let i=o-(e>0?e*60*60*24:0);const r=Math.floor(i/(60*60));i=i-(r>0?r*60*60:0);const l=Math.floor(i/60),a=l>0?i-l*60:i,c=`${r?r.toString().padStart(2,"0"):"00"}hrs`,u=`${l?l.toString().padStart(2,"0"):"00"}min`,f=`${a?a.toString().padStart(2,"0"):"00"}sec`,d=t?"Offset":"Every";return e?s=`${d} ${e}days:${c}:${u}:${f}`:r?s=`${d} ${c}:${u}:${f}`:l?s=`${d} ${u}:${f}`:a&&(s=`${d} ${f}`),s},q=n=>{var t,s,o;return((t=n.dayOfMonth)==null?void 0:t.length)===1&&((s=n.dayOfMonth[0])==null?void 0:s.start)===1&&((o=n.dayOfMonth[0])==null?void 0:o.end)===31},P=n=>{var t,s,o;return((t=n.dayOfWeek)==null?void 0:t.length)===1&&((s=n.dayOfWeek[0])==null?void 0:s.start)===0&&((o=n.dayOfWeek[0])==null?void 0:o.end)===6},J=n=>{var t,s;return(n==null?void 0:n.month.length)===1&&((t=n==null?void 0:n.month[0])==null?void 0:t.start)===1&&((s=n==null?void 0:n.month[0])==null?void 0:s.end)===12},K=n=>P(n)&&q(n),Q=n=>!P(n)&&q(n),X=n=>P(n)&&!q(n),T=n=>{const t=w.find(s=>n===0?s.value==="7":s.value===n.toString());return t==null?void 0:t.label},Y=n=>{const t=n.dayOfWeek;let s="";if(t.length)for(let o=0;o<t.length;o++){const e=t[o];if((e==null?void 0:e.start)===(e==null?void 0:e.end)){const i=T(e.start);s?s+=`, ${i}`:s=i}else{const i=T(e.start),r=T(e.end);s?s+=`, ${i} - ${r}`:s=`${i} - ${r}`}}return s},Z=n=>{const t=n.dayOfMonth;let s="";if(t.length)for(let o=0;o<t.length;o++){const e=t[o];(e==null?void 0:e.start)===(e==null?void 0:e.end)&&(s?s+=`, ${e==null?void 0:e.start}`:s=e==null?void 0:e.start.toString())}return s},k=n=>{const t=F.find(s=>s.value===n.toString());return t==null?void 0:t.label},R=n=>{const t=n.month;let s="";if(J(n))s="the month";else if(t!=null&&t.length)for(let o=0;o<t.length;o++){const e=t[o];if((e==null?void 0:e.start)===(e==null?void 0:e.end)){const i=k(e.start);s?s+=`, ${i}`:s=i}else{const i=k(e.start),r=k(e.end);s?s+=`, ${i} - ${r}`:s=`${i} - ${r}`}}return s},tt=n=>{const t=n.hour;let s=12,o="am";if(t!=null&&t.length){const e=t[0];(e==null?void 0:e.start)===(e==null?void 0:e.end)&&(e.start<12?(s=e.start===0?12:e.start,o="am"):e.start===12?(s=e.start,o="pm"):(s=e.start-12,o="pm"))}return{hour:s.toString().padStart(2,"0"),amOrpm:o}},et=n=>{const t=n.minute;let s=0;if(t!=null&&t.length){const o=t[0];(o==null?void 0:o.start)===(o==null?void 0:o.end)&&(s=o.start)}return s.toString().padStart(2,"0")},st=n=>{const{hour:t,amOrpm:s}=tt(n),o=et(n);if(t)return`${t}:${o}${s} UTC`},L=n=>{const t=st(n);return K(n)?`Daily at ${t}`:Q(n)?`${Y(n)} at ${t}`:X(n)?`Every ${Z(n)} of ${R(n)} at ${t}`:(n==null?void 0:n.comment)||""};function nt(n){let t,s=A(n[1])+"",o,e,i,r=A(n[2],!0)+"",l;return{c(){t=S("p"),o=O(s),e=U(),i=S("p"),l=O(r),this.h()},l(a){t=$(a,"P",{"data-testid":!0});var c=_(t);o=M(c,s),c.forEach(h),e=V(a),i=$(a,"P",{"data-testid":!0});var u=_(i);l=M(u,r),u.forEach(h),this.h()},h(){v(t,"data-testid","schedule-interval-frequency"),v(i,"data-testid","schedule-phase-frequency")},m(a,c){y(a,t,c),D(t,o),y(a,e,c),y(a,i,c),D(i,l)},p:E,d(a){a&&h(t),a&&h(e),a&&h(i)}}}function ot(n){let t,s=L(n[0])+"",o;return{c(){t=S("p"),o=O(s),this.h()},l(e){t=$(e,"P",{"data-testid":!0});var i=_(t);o=M(i,s),i.forEach(h),this.h()},h(){v(t,"data-testid","schedule-calendar-frequency")},m(e,i){y(e,t,i),D(t,o)},p(e,i){i&1&&s!==(s=L(e[0])+"")&&z(o,s)},d(e){e&&h(t)}}}function it(n){let t,s;function o(r,l){return r[0]?ot:nt}let e=o(n),i=e(n);return{c(){t=S("div"),i.c(),this.h()},l(r){t=$(r,"DIV",{class:!0});var l=_(t);i.l(l),l.forEach(h),this.h()},h(){v(t,"class",s="flex flex-col "+n[3].class)},m(r,l){y(r,t,l),i.m(t,null)},p(r,[l]){e===(e=o(r))&&i?i.p(r,l):(i.d(1),i=e(r),i&&(i.c(),i.m(t,null))),l&8&&s!==(s="flex flex-col "+r[3].class)&&v(t,"class",s)},i:E,o:E,d(r){r&&h(t),i.d()}}}function rt(n,t,s){let{calendar:o=void 0}=t,{interval:e=void 0}=t;const i=e==null?void 0:e.interval,r=e==null?void 0:e.phase;return n.$$set=l=>{s(3,t=I(I({},t),C(l))),"calendar"in l&&s(0,o=l.calendar),"interval"in l&&s(4,e=l.interval)},t=C(t),[o,i,r,t,e]}class _t extends N{constructor(t){super(),j(this,t,rt,it,B,{calendar:0,interval:4})}}export{_t as S,dt as a,$t as b,pt as c,mt as d,yt as e,ht as f,vt as p,St as u};
