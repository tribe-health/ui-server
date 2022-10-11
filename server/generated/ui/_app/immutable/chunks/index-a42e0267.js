import{a6 as v}from"./index-8e660855.js";import{d as m}from"./is-http-b16feb2c.js";import{c as y,a as b,d as C}from"./decode-payload-93899443.js";import{f as A}from"./format-date-2e95557a.js";import{g,f as T}from"./index-9319d41b.js";import{g as w}from"./get-event-categorization-2cfb578f.js";import{s as E}from"./simplify-attributes-34cbbe81.js";const S=["Unspecified","Scheduled","Open","New","Started","Initiated","Running","Completed","Fired","CancelRequested","TimedOut","Signaled","Canceled","Failed","Terminated"],P=t=>{if(t.includes("RequestCancel"))return"CancelRequested";for(const o of S)if(t.includes(o))return o},R=(t,o=m)=>{var e;return v(o)||((e=t==null?void 0:t.codec)==null?void 0:e.endpoint)||""};async function q({historyEvent:t,namespace:o,settings:e,accessToken:c},{convertWithCodec:a=y,convertWithWebsocket:n=b,decodeAttributes:i=C,encoderEndpoint:d=m}={}){const{key:u,attributes:r}=T(t),s=R(e,d),f={...e,codec:{...e==null?void 0:e.codec,endpoint:s}},p=s?await a({attributes:r,namespace:o,settings:f,accessToken:c}):await n(r),l=i(p);return{type:u,...l}}const W=async({historyEvent:t,namespace:o,settings:e,accessToken:c})=>{const a=String(t.eventId),n=t.eventType,i=A(String(t.eventTime)),d=P(n),u=w(n),r=await q({historyEvent:t,namespace:o,settings:e,accessToken:c}).then(s=>E(s));return{...t,attributes:r,eventType:n,classification:d,category:u,id:a,name:n,timestamp:i}},D=async({response:t,namespace:o,settings:e,accessToken:c})=>{const a=await Promise.all(t.map(i=>W({historyEvent:i,namespace:o,settings:e,accessToken:c}))),n=g(a);return{events:a,eventGroups:n}};export{D as t};