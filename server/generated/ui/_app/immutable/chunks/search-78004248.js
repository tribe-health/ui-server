import{S as we,i as ke,s as ie,w as j,x as z,y as K,f as E,t as W,z as M,F as Ge,G as Je,H as Xe,I as Ye,k as T,q as N,a as C,l as y,m as F,r as B,h as c,c as q,n as k,b as g,K as w,B as ve,e as Be,g as fe,d as ue,J as Me,R as L,U as ge,ap as ce,E as Ze,u as Z,D as Ve,O as Le}from"./index-a4b23632.js";import{T as $e,a as xe}from"./table-header-row-8218e867.js";import{p as et}from"./stores-bfb28fb9.js";import{f as Y}from"./format-date-5354f0e8.js";import{o as tt,q as lt,s as st,u as Ue}from"./format-time-892da4a9.js";import{i as rt}from"./route-for-a6a4e2f3.js";import{u as at}from"./pagination-403823fd.js";import{t as Ae}from"./list-workflow-query-f8e30f34.js";import{b as ot,c as Ee,d as nt,e as ft,f as ut}from"./is-512a721f.js";import{W as it}from"./workflow-status-63ab6342.js";import{I as Se}from"./icon-c842d82b.js";import{c as ct}from"./copy-to-clipboard-cf0a678d.js";import{T as mt}from"./table-row-1985de25.js";import{B as _t}from"./button-6025b0ce.js";function dt(r){let e;const s=r[1].default,t=Ge(s,r,r[2],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,o){t&&t.m(l,o),e=!0},p(l,o){t&&t.p&&(!e||o&4)&&Je(t,s,l,l[2],e?Ye(s,l[2],o,null):Xe(l[2]),null)},i(l){e||(E(t,l),e=!0)},o(l){W(t,l),e=!1},d(l){t&&t.d(l)}}}function ht(r){let e,s,t,l,o,a,n,f,i,d,p,P,b,m,_,D,U;return{c(){e=T("th"),s=N("Status"),t=C(),l=T("th"),o=N("Workflow ID"),a=C(),n=T("th"),f=N("Type"),i=C(),d=T("th"),p=N("Start"),P=C(),b=T("th"),m=N("End"),_=C(),D=T("th"),U=N("Summary"),this.h()},l(h){e=y(h,"TH",{class:!0});var S=F(e);s=B(S,"Status"),S.forEach(c),t=q(h),l=y(h,"TH",{class:!0});var I=F(l);o=B(I,"Workflow ID"),I.forEach(c),a=q(h),n=y(h,"TH",{class:!0});var V=F(n);f=B(V,"Type"),V.forEach(c),i=q(h),d=y(h,"TH",{class:!0});var R=F(d);p=B(R,"Start"),R.forEach(c),P=q(h),b=y(h,"TH",{class:!0});var H=F(b);m=B(H,"End"),H.forEach(c),_=q(h),D=y(h,"TH",{class:!0,colspan:!0});var G=F(D);U=B(G,"Summary"),G.forEach(c),this.h()},h(){k(e,"class","hidden w-32 md:table-cell"),k(l,"class","hidden md:table-cell md:w-auto"),k(n,"class","hidden md:table-cell xl:w-60"),k(d,"class","hidden xl:table-cell xl:w-60"),k(b,"class","hidden xl:table-cell xl:w-60"),k(D,"class","table-cell md:hidden"),k(D,"colspan","3")},m(h,S){g(h,e,S),w(e,s),g(h,t,S),g(h,l,S),w(l,o),g(h,a,S),g(h,n,S),w(n,f),g(h,i,S),g(h,d,S),w(d,p),g(h,P,S),g(h,b,S),w(b,m),g(h,_,S),g(h,D,S),w(D,U)},p:ve,d(h){h&&c(e),h&&c(t),h&&c(l),h&&c(a),h&&c(n),h&&c(i),h&&c(d),h&&c(P),h&&c(b),h&&c(_),h&&c(D)}}}function pt(r){let e,s;return e=new xe({props:{slot:"headers",$$slots:{default:[ht]},$$scope:{ctx:r}}}),{c(){j(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,l){K(e,t,l),s=!0},p(t,l){const o={};l&4&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){W(e.$$.fragment,t),s=!1},d(t){M(e,t)}}}function bt(r){let e,s;return e=new $e({props:{class:"w-full md:table-fixed",updating:r[0],$$slots:{headers:[pt],default:[dt]},$$scope:{ctx:r}}}),{c(){j(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,l){K(e,t,l),s=!0},p(t,[l]){const o={};l&1&&(o.updating=t[0]),l&4&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){W(e.$$.fragment,t),s=!1},d(t){M(e,t)}}}function wt(r,e,s){let{$$slots:t={},$$scope:l}=e,{updating:o=!1}=e;return r.$$set=a=>{"updating"in a&&s(0,o=a.updating),"$$scope"in a&&s(2,l=a.$$scope)},[o,t,l]}class Xt extends we{constructor(e){super(),ke(this,e,wt,bt,ie,{updating:0})}}const kt=r=>{const e=[],s=()=>{t&&(e.push(t),t="")};let t="",l=0;for(;l<r.length;){const o=r[l];if(ot(o)){t+=o,s(),l++;continue}if(Ee(o)){const a=`${r[l]}${r[l+1]}`,n=`${r[l]}${r[l+1]}${r[l+2]}`;if(Ee(n)){s(),t+=n,l+=3;continue}else if(Ee(a)){s(),t+=a,l+=2;continue}else{s(),t+=o,l++;continue}}if(nt(o)||ft(o)){s(),l++;continue}t+=o,l++}return s(),e},Te=r=>e=>e.toLowerCase()===r.toLowerCase(),be=(r,e)=>r[e+2],vt=r=>{if(r){for(const e of st)if(r[e])return{[e]:r[e]}}},gt=Te("WorkflowType"),Tt=Te("WorkflowId"),yt=Te("StartTime"),Et=Te("ExecutionStatus"),St=r=>{const e=kt(r),s={workflowId:"",workflowType:"",executionStatus:null,timeRange:null};return e.forEach((t,l)=>{if(Tt(t)&&(s.workflowId=be(e,l)),gt(t)&&(s.workflowType=be(e,l)),Et(t)){const o=be(e,l);ut(o)&&(s.executionStatus=o)}if(yt(t)){const o=be(e,l);try{const a=tt(o),n=vt(a);s.timeRange=lt(n)}catch(a){console.error("Error parsing StartTime from query",a)}}}),s};function Re(r){let e,s,t,l,o,a,n=r[1]&&Oe(r),f=r[2]&&je(r);return{c(){e=T("div"),n&&n.c(),s=C(),f&&f.c(),this.h()},l(i){e=y(i,"DIV",{class:!0});var d=F(e);n&&n.l(d),s=q(d),f&&f.l(d),d.forEach(c),this.h()},h(){k(e,"class",t="copy-or-filter "+r[6]+" svelte-kisf2b")},m(i,d){g(i,e,d),n&&n.m(e,null),w(e,s),f&&f.m(e,null),l=!0,o||(a=L(e,"click",ge(ce(ve))),o=!0)},p(i,d){i[1]?n?(n.p(i,d),d&2&&E(n,1)):(n=Oe(i),n.c(),E(n,1),n.m(e,s)):n&&(fe(),W(n,1,1,()=>{n=null}),ue()),i[2]?f?(f.p(i,d),d&4&&E(f,1)):(f=je(i),f.c(),E(f,1),f.m(e,null)):f&&(fe(),W(f,1,1,()=>{f=null}),ue()),(!l||d&64&&t!==(t="copy-or-filter "+i[6]+" svelte-kisf2b"))&&k(e,"class",t)},i(i){l||(E(n),E(f),l=!0)},o(i){W(n),W(f),l=!1},d(i){i&&c(e),n&&n.d(),f&&f.d(),o=!1,a()}}}function Oe(r){let e,s=r[5],t,l,o,a=Qe(r);return{c(){e=T("button"),a.c()},l(n){e=y(n,"BUTTON",{});var f=F(e);a.l(f),f.forEach(c)},m(n,f){g(n,e,f),a.m(e,null),t=!0,l||(o=L(e,"click",ge(ce(function(){Ze(r[4])&&r[4].apply(this,arguments)}))),l=!0)},p(n,f){r=n,f&32&&ie(s,s=r[5])?(fe(),W(a,1,1,ve),ue(),a=Qe(r),a.c(),E(a,1),a.m(e,null)):a.p(r,f)},i(n){t||(E(a),t=!0)},o(n){W(a),t=!1},d(n){n&&c(e),a.d(n),l=!1,o()}}}function Qe(r){let e,s;return e=new Se({props:{name:"filter",class:"h-4 w-4 rounded-sm "+(r[5]?"bg-gray-900 text-white":"")}}),{c(){j(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,l){K(e,t,l),s=!0},p(t,l){const o={};l&32&&(o.class="h-4 w-4 rounded-sm "+(t[5]?"bg-gray-900 text-white":"")),e.$set(o)},i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){W(e.$$.fragment,t),s=!1},d(t){M(e,t)}}}function je(r){let e,s,t,l,o;return s=new Se({props:{name:r[7]?"checkmark":"copy",stroke:"#000"}}),{c(){e=T("button"),j(s.$$.fragment)},l(a){e=y(a,"BUTTON",{});var n=F(e);z(s.$$.fragment,n),n.forEach(c)},m(a,n){g(a,e,n),K(s,e,null),t=!0,l||(o=L(e,"click",ge(ce(r[10]))),l=!0)},p(a,n){const f={};n&128&&(f.name=a[7]?"checkmark":"copy"),s.$set(f)},i(a){t||(E(s.$$.fragment,a),t=!0)},o(a){W(s.$$.fragment,a),t=!1},d(a){a&&c(e),M(s),l=!1,o()}}}function Ft(r){let e,s,t=r[0]&&Re(r);return{c(){t&&t.c(),e=Be()},l(l){t&&t.l(l),e=Be()},m(l,o){t&&t.m(l,o),g(l,e,o),s=!0},p(l,[o]){l[0]?t?(t.p(l,o),o&1&&E(t,1)):(t=Re(l),t.c(),E(t,1),t.m(e.parentNode,e)):t&&(fe(),W(t,1,1,()=>{t=null}),ue())},i(l){s||(E(t),s=!0)},o(l){W(t),s=!1},d(l){t&&t.d(l),l&&c(e)}}}function Dt(r,e,s){let t,{show:l=!1}=e,{filterable:o=!0}=e,{copyable:a=!0}=e,{content:n}=e,{onFilter:f=ve}=e,{filtered:i=!1}=e,{class:d=""}=e;const{copy:p,copied:P}=ct(700);Me(r,P,m=>s(7,t=m));const b=m=>p(m,n);return r.$$set=m=>{"show"in m&&s(0,l=m.show),"filterable"in m&&s(1,o=m.filterable),"copyable"in m&&s(2,a=m.copyable),"content"in m&&s(3,n=m.content),"onFilter"in m&&s(4,f=m.onFilter),"filtered"in m&&s(5,i=m.filtered),"class"in m&&s(6,d=m.class)},[l,o,a,n,f,i,d,t,p,P,b]}class ze extends we{constructor(e){super(),ke(this,e,Dt,Ft,ie,{show:0,filterable:1,copyable:2,content:3,onFilter:4,filtered:5,class:6})}}function Wt(r){var De,We,Ie;let e,s,t,l,o,a=r[0].id+"",n,f,i,d,p,P=Y(r[0].startTime,r[1])+"",b,m,_,D,U,h,S,I=r[0].name+"",V,R,H,G,J,te=Y(r[0].endTime,r[1])+"",me,_e,$,le,se=Y(r[0].startTime,r[1])+"",de,he,x,re,ae=Y(r[0].endTime,r[1])+"",pe,O,ye,Fe;return s=new it({props:{status:r[0].status,delay:Ue(r[0].startTime)}}),i=new ze({props:{show:r[2],content:r[0].id,filterable:!1,class:"bg-gradient-to-b from-blue-100 to-purple-100"}}),H=new ze({props:{show:r[2],content:r[0].name,onFilter:r[12],filtered:(Ie=(We=(De=r[4].url)==null?void 0:De.searchParams)==null?void 0:We.get("query"))==null?void 0:Ie.includes(r[0].name),class:"bg-gradient-to-b from-blue-100 to-purple-100"}}),{c(){e=T("td"),j(s.$$.fragment),t=C(),l=T("td"),o=T("span"),n=N(a),f=C(),j(i.$$.fragment),d=C(),p=T("p"),b=N(P),m=C(),_=T("td"),D=T("h3"),U=N("Workflow Name:"),h=C(),S=T("span"),V=N(I),R=C(),j(H.$$.fragment),G=C(),J=T("p"),me=N(te),_e=C(),$=T("td"),le=T("p"),de=N(se),he=C(),x=T("td"),re=T("p"),pe=N(ae),this.h()},l(u){e=y(u,"TD",{});var v=F(e);z(s.$$.fragment,v),v.forEach(c),t=q(u),l=y(u,"TD",{class:!0});var Q=F(l);o=y(Q,"SPAN",{class:!0});var ee=F(o);n=B(ee,a),ee.forEach(c),f=q(Q),z(i.$$.fragment,Q),d=q(Q),p=y(Q,"P",{class:!0});var X=F(p);b=B(X,P),X.forEach(c),Q.forEach(c),m=q(u),_=y(u,"TD",{class:!0});var A=F(_);D=y(A,"H3",{class:!0});var oe=F(D);U=B(oe,"Workflow Name:"),oe.forEach(c),h=q(A),S=y(A,"SPAN",{class:!0});var ne=F(S);V=B(ne,I),ne.forEach(c),R=q(A),z(H.$$.fragment,A),G=q(A),J=y(A,"P",{class:!0});var Pe=F(J);me=B(Pe,te),Pe.forEach(c),A.forEach(c),_e=q(u),$=y(u,"TD",{class:!0});var Ce=F($);le=y(Ce,"P",{});var qe=F(le);de=B(qe,se),qe.forEach(c),Ce.forEach(c),he=q(u),x=y(u,"TD",{class:!0});var He=F(x);re=y(He,"P",{});var Ne=F(re);pe=B(Ne,ae),Ne.forEach(c),He.forEach(c),this.h()},h(){k(o,"class","table-link svelte-126d7un"),k(p,"class","inline-time-cell svelte-126d7un"),k(l,"class","relative break-words pr-4"),k(D,"class","md:hidden"),k(S,"class","table-link svelte-126d7un"),k(J,"class","inline-time-cell svelte-126d7un"),k(_,"class","relative truncate"),k($,"class","time-cell svelte-126d7un"),k(x,"class","time-cell svelte-126d7un")},m(u,v){g(u,e,v),K(s,e,null),g(u,t,v),g(u,l,v),w(l,o),w(o,n),w(l,f),K(i,l,null),w(l,d),w(l,p),w(p,b),g(u,m,v),g(u,_,v),w(_,D),w(D,U),w(_,h),w(_,S),w(S,V),w(_,R),K(H,_,null),w(_,G),w(_,J),w(J,me),g(u,_e,v),g(u,$,v),w($,le),w(le,de),g(u,he,v),g(u,x,v),w(x,re),w(re,pe),O=!0,ye||(Fe=[L(l,"mouseover",r[7]),L(l,"focus",r[8]),L(l,"mouseleave",r[9]),L(l,"blur",r[10]),L(S,"click",ge(ce(r[11]))),L(_,"mouseover",r[13]),L(_,"focus",r[14]),L(_,"mouseleave",r[15]),L(_,"blur",r[16])],ye=!0)},p(u,v){var A,oe,ne;const Q={};v&1&&(Q.status=u[0].status),v&1&&(Q.delay=Ue(u[0].startTime)),s.$set(Q),(!O||v&1)&&a!==(a=u[0].id+"")&&Z(n,a);const ee={};v&4&&(ee.show=u[2]),v&1&&(ee.content=u[0].id),i.$set(ee),(!O||v&3)&&P!==(P=Y(u[0].startTime,u[1])+"")&&Z(b,P),(!O||v&1)&&I!==(I=u[0].name+"")&&Z(V,I);const X={};v&4&&(X.show=u[2]),v&1&&(X.content=u[0].name),v&1&&(X.onFilter=u[12]),v&17&&(X.filtered=(ne=(oe=(A=u[4].url)==null?void 0:A.searchParams)==null?void 0:oe.get("query"))==null?void 0:ne.includes(u[0].name)),H.$set(X),(!O||v&3)&&te!==(te=Y(u[0].endTime,u[1])+"")&&Z(me,te),(!O||v&3)&&se!==(se=Y(u[0].startTime,u[1])+"")&&Z(de,se),(!O||v&3)&&ae!==(ae=Y(u[0].endTime,u[1])+"")&&Z(pe,ae)},i(u){O||(E(s.$$.fragment,u),E(i.$$.fragment,u),E(H.$$.fragment,u),O=!0)},o(u){W(s.$$.fragment,u),W(i.$$.fragment,u),W(H.$$.fragment,u),O=!1},d(u){u&&c(e),M(s),u&&c(t),u&&c(l),M(i),u&&c(m),u&&c(_),M(H),u&&c(_e),u&&c($),u&&c(he),u&&c(x),ye=!1,Ve(Fe)}}}function It(r){let e,s;return e=new mt({props:{href:r[3],class:"workflow-summary-row",$$slots:{default:[Wt]},$$scope:{ctx:r}}}),{c(){j(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,l){K(e,t,l),s=!0},p(t,[l]){const o={};l&8&&(o.href=t[3]),l&131095&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){W(e.$$.fragment,t),s=!1},d(t){M(e,t)}}}function Pt(r,e,s){let t,l;Me(r,et,I=>s(4,l=I));let{namespace:o}=e,{workflow:a}=e,{timeFormat:n}=e,f=!1;const i=I=>{const V=Ae({timeRange:"All"}),R=l.url.searchParams.get("query"),H=St(R??V),G=(H==null?void 0:H.workflowType)===I?"":I,J=Ae({...H,workflowType:G});at({url:l.url,parameter:"query",value:J,allowEmpty:!0})},d=()=>s(2,f=!0),p=()=>s(2,f=!0),P=()=>s(2,f=!1),b=()=>s(2,f=!1),m=()=>i(a.name),_=()=>i(a.name),D=()=>s(2,f=!0),U=()=>s(2,f=!0),h=()=>s(2,f=!1),S=()=>s(2,f=!1);return r.$$set=I=>{"namespace"in I&&s(6,o=I.namespace),"workflow"in I&&s(0,a=I.workflow),"timeFormat"in I&&s(1,n=I.timeFormat)},r.$$.update=()=>{r.$$.dirty&65&&s(3,t=rt({namespace:o,workflow:a.id,run:a.runId}))},[a,n,f,t,l,i,o,d,p,P,b,m,_,D,U,h,S]}class Yt extends we{constructor(e){super(),ke(this,e,Pt,It,ie,{namespace:6,workflow:0,timeFormat:1})}}var Zt=Ct;function Ct(r,e,s,t){var l,o,a;return function(){if(a=this,o=Array.prototype.slice.call(arguments),l&&(s||t))return;if(!s)return i(),l=setTimeout(f,e),l;l=setTimeout(i,e),r.apply(a,o);function f(){i(),r.apply(a,o)}function i(){clearTimeout(l),l=null}}}function Ke(r){let e,s;return e=new Se({props:{name:"search",class:"ml-4 flex items-center text-gray-700"}}),{c(){j(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,l){K(e,t,l),s=!0},i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){W(e.$$.fragment,t),s=!1},d(t){M(e,t)}}}function qt(r){let e;return{c(){e=N(r[2])},l(s){e=B(s,r[2])},m(s,t){g(s,e,t)},p(s,t){t&4&&Z(e,s[2])},d(s){s&&c(e)}}}function Ht(r){let e,s,t,l,o,a,n,f,i,d,p,P,b=r[4]&&Ke();return i=new _t({props:{class:"m-2",type:"submit",$$slots:{default:[qt]},$$scope:{ctx:r}}}),{c(){e=T("form"),b&&b.c(),s=C(),t=T("label"),l=N(r[2]),o=C(),a=T("input"),n=C(),f=T("div"),j(i.$$.fragment),this.h()},l(m){e=y(m,"FORM",{class:!0});var _=F(e);b&&b.l(_),s=q(_),t=y(_,"LABEL",{for:!0,class:!0});var D=F(t);l=B(D,r[2]),D.forEach(c),o=q(_),a=y(_,"INPUT",{id:!0,type:!0,class:!0,name:!0,placeholder:!0,autocomplete:!0}),n=q(_),f=y(_,"DIV",{});var U=F(f);z(i.$$.fragment,U),U.forEach(c),_.forEach(c),this.h()},h(){k(t,"for",r[5]),k(t,"class","hidden"),k(a,"id",r[5]),k(a,"type","text"),k(a,"class","w-full rounded-l-lg px-4 focus:outline-none"),k(a,"name",r[3]),a.value=r[1],k(a,"placeholder",r[0]),k(a,"autocomplete","off"),k(e,"class","relative flex items-center rounded-lg border-2 transition-colors focus-within:border-blue-700")},m(m,_){g(m,e,_),b&&b.m(e,null),w(e,s),w(e,t),w(t,l),w(e,o),w(e,a),w(e,n),w(e,f),K(i,f,null),d=!0,p||(P=[L(a,"input",r[7]),L(e,"submit",ce(r[6]))],p=!0)},p(m,[_]){m[4]?b?_&16&&E(b,1):(b=Ke(),b.c(),E(b,1),b.m(e,s)):b&&(fe(),W(b,1,1,()=>{b=null}),ue()),(!d||_&4)&&Z(l,m[2]),(!d||_&32)&&k(t,"for",m[5]),(!d||_&32)&&k(a,"id",m[5]),(!d||_&8)&&k(a,"name",m[3]),(!d||_&2&&a.value!==m[1])&&(a.value=m[1]),(!d||_&1)&&k(a,"placeholder",m[0]);const D={};_&260&&(D.$$scope={dirty:_,ctx:m}),i.$set(D)},i(m){d||(E(b),E(i.$$.fragment,m),d=!0)},o(m){W(b),W(i.$$.fragment,m),d=!1},d(m){m&&c(e),b&&b.d(),M(i),p=!1,Ve(P)}}}function Nt(r,e,s){let{placeholder:t=""}=e,{value:l=""}=e,{label:o="Search"}=e,{name:a="query"}=e,{icon:n=!1}=e,{id:f=`${o.toLocaleUpperCase()}-input`}=e;function i(p){Le.call(this,r,p)}function d(p){Le.call(this,r,p)}return r.$$set=p=>{"placeholder"in p&&s(0,t=p.placeholder),"value"in p&&s(1,l=p.value),"label"in p&&s(2,o=p.label),"name"in p&&s(3,a=p.name),"icon"in p&&s(4,n=p.icon),"id"in p&&s(5,f=p.id)},[t,l,o,a,n,f,i,d]}class $t extends we{constructor(e){super(),ke(this,e,Nt,Ht,ie,{placeholder:0,value:1,label:2,name:3,icon:4,id:5})}}export{ze as F,$t as S,Xt as W,Yt as a,kt as b,Zt as j,St as t};
