import{r as oe}from"./index.b1f5b21f.js";import{c as Q}from"./_commonjsHelpers.28e086c5.js";/* empty css            */import{f as se}from"./settings-service.4f53c304.js";import{s as le,g as ce}from"./auth-user.87e40bc9.js";import{c as ue}from"./cluster.cee08038.js";import{r as Y,a as Z}from"./route-for-api.3a13f80f.js";import{f as ge}from"./namespaces-service.8aa016ce.js";import{s as fe}from"./search-attributes.400199d7.js";import{B as R,e as he}from"./route-for.21d69bef.js";import{p as de}from"./parse-with-big-int.02af2f95.js";import{a as pe}from"./atob.5925dee1.js";var X={},me={get exports(){return X},set exports(f){X=f}};(function(f){var u=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},g=function(c){var d=/\blang(?:uage)?-([\w-]+)\b/i,v=0,h={},o={manual:c.Prism&&c.Prism.manual,disableWorkerMessageHandler:c.Prism&&c.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof w?new w(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++v}),t.__id},clone:function t(e,a){var n,r;switch(a=a||{},o.util.type(e)){case"Object":if(r=o.util.objId(e),a[r])return a[r];for(var s in n={},a[r]=n,e)e.hasOwnProperty(s)&&(n[s]=t(e[s],a));return n;case"Array":return r=o.util.objId(e),a[r]?a[r]:(n=[],a[r]=n,e.forEach(function(i,l){n[l]=t(i,a)}),n);default:return e}},getLanguage:function(t){for(;t&&!d.test(t.className);)t=t.parentElement;return t?(t.className.match(d)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var a in e)if(e[a].src==t)return e[a]}return null}},isActive:function(t,e,a){for(var n="no-"+e;t;){var r=t.classList;if(r.contains(e))return!0;if(r.contains(n))return!1;t=t.parentElement}return!!a}},languages:{plain:h,plaintext:h,text:h,txt:h,extend:function(t,e){var a=o.util.clone(o.languages[t]);for(var n in e)a[n]=e[n];return a},insertBefore:function(t,e,a,n){var r=(n=n||o.languages)[t],s={};for(var i in r)if(r.hasOwnProperty(i)){if(i==e)for(var l in a)a.hasOwnProperty(l)&&(s[l]=a[l]);a.hasOwnProperty(i)||(s[i]=r[i])}var p=n[t];return n[t]=s,o.languages.DFS(o.languages,function(x,N){N===p&&x!=t&&(this[x]=s)}),s},DFS:function t(e,a,n,r){r=r||{};var s=o.util.objId;for(var i in e)if(e.hasOwnProperty(i)){a.call(e,i,e[i],n||i);var l=e[i],p=o.util.type(l);p!=="Object"||r[s(l)]?p!=="Array"||r[s(l)]||(r[s(l)]=!0,t(l,a,i,r)):(r[s(l)]=!0,t(l,a,null,r))}}},plugins:{},highlightAll:function(t,e){o.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,a){var n={callback:a,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),o.hooks.run("before-all-elements-highlight",n);for(var r,s=0;r=n.elements[s++];)o.highlightElement(r,e===!0,n.callback)},highlightElement:function(t,e,a){var n=o.util.getLanguage(t),r=o.languages[n];t.className=t.className.replace(d,"").replace(/\s+/g," ")+" language-"+n;var s=t.parentElement;s&&s.nodeName.toLowerCase()==="pre"&&(s.className=s.className.replace(d,"").replace(/\s+/g," ")+" language-"+n);var i={element:t,language:n,grammar:r,code:t.textContent};function l(x){i.highlightedCode=x,o.hooks.run("before-insert",i),i.element.innerHTML=i.highlightedCode,o.hooks.run("after-highlight",i),o.hooks.run("complete",i),a&&a.call(i.element)}if(o.hooks.run("before-sanity-check",i),(s=i.element.parentElement)&&s.nodeName.toLowerCase()==="pre"&&!s.hasAttribute("tabindex")&&s.setAttribute("tabindex","0"),!i.code)return o.hooks.run("complete",i),void(a&&a.call(i.element));if(o.hooks.run("before-highlight",i),i.grammar)if(e&&c.Worker){const x=o.filename??`${window.location.origin}/src/lib/vendor/prism/prism.cjs`;var p=new Worker(x);p.onerror=function(){l(o.highlight(i.code,i.grammar,i.language))},p.onmessage=function(N){l(N.data)},p.postMessage(JSON.stringify({language:i.language,code:i.code,immediateClose:!0}))}else l(o.highlight(i.code,i.grammar,i.language));else l(o.util.encode(i.code))},highlight:function(t,e,a){var n={code:t,grammar:e,language:a};return o.hooks.run("before-tokenize",n),n.tokens=o.tokenize(n.code,n.grammar),o.hooks.run("after-tokenize",n),w.stringify(o.util.encode(n.tokens),n.language)},tokenize:function(t,e){var a=e.rest;if(a){for(var n in a)e[n]=a[n];delete e.rest}var r=new ee;return P(r,r.head,t),function s(i,l,p,x,N,y){for(var E in p)if(p.hasOwnProperty(E)&&p[E]){var O=p[E];O=Array.isArray(O)?O:[O];for(var _=0;_<O.length;++_){if(y&&y.cause==E+","+_)return;var k=O[_],H=k.inside,G=!!k.lookbehind,V=!!k.greedy,ne=k.alias;if(V&&!k.pattern.global){var re=k.pattern.toString().match(/[imsuy]*$/)[0];k.pattern=RegExp(k.pattern.source,re+"g")}for(var J=k.pattern||k,m=x.next,b=N;m!==l.tail&&!(y&&b>=y.reach);b+=m.value.length,m=m.next){var C=m.value;if(l.length>i.length)return;if(!(C instanceof w)){var A,T=1;if(V){if(!(A=$(J,b,i,G)))break;var W=A.index,ae=A.index+A[0].length,S=b;for(S+=m.value.length;S<=W;)m=m.next,S+=m.value.length;if(S-=m.value.length,b=S,m.value instanceof w)continue;for(var L=m;L!==l.tail&&(S<ae||typeof L.value=="string");L=L.next)T++,S+=L.value.length;T--,C=i.slice(b,S),A.index-=b}else if(!(A=$(J,0,C,G)))continue;var W=A.index,I=A[0],F=C.slice(0,W),K=C.slice(W+I.length),q=b+C.length;y&&q>y.reach&&(y.reach=q);var M=m.prev;F&&(M=P(l,M,F),b+=F.length),te(l,M,T);var ie=new w(E,H?o.tokenize(I,H):I,ne,I);if(m=P(l,M,ie),K&&P(l,m,K),1<T){var U={cause:E+","+_,reach:q};s(i,l,p,m.prev,b,U),y&&U.reach>y.reach&&(y.reach=U.reach)}}}}}}(t,r,e,r.head,0),function(s){for(var i=[],l=s.head.next;l!==s.tail;)i.push(l.value),l=l.next;return i}(r)},hooks:{all:{},add:function(t,e){var a=o.hooks.all;a[t]=a[t]||[],a[t].push(e)},run:function(t,e){var a=o.hooks.all[t];if(a&&a.length)for(var n,r=0;n=a[r++];)n(e)}},Token:w};function w(t,e,a,n){this.type=t,this.content=e,this.alias=a,this.length=0|(n||"").length}function $(t,e,a,n){t.lastIndex=e;var r=t.exec(a);if(r&&n&&r[1]){var s=r[1].length;r.index+=s,r[0]=r[0].slice(s)}return r}function ee(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function P(t,e,a){var n=e.next,r={value:a,prev:e,next:n};return e.next=r,n.prev=r,t.length++,r}function te(t,e,a){for(var n=e.next,r=0;r<a&&n!==t.tail;r++)n=n.next;(e.next=n).prev=e,t.length-=r}if(c.Prism=o,w.stringify=function t(e,a){if(typeof e=="string")return e;if(Array.isArray(e)){var n="";return e.forEach(function(p){n+=t(p,a)}),n}var r={type:e.type,content:t(e.content,a),tag:"span",classes:["token",e.type],attributes:{},language:a},s=e.alias;s&&(Array.isArray(s)?Array.prototype.push.apply(r.classes,s):r.classes.push(s)),o.hooks.run("wrap",r);var i="";for(var l in r.attributes)i+=" "+l+'="'+(r.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+i+">"+r.content+"</"+r.tag+">"},!c.document)return c.addEventListener&&(o.disableWorkerMessageHandler||c.addEventListener("message",function(t){var e=JSON.parse(t.data),a=e.language,n=e.code,r=e.immediateClose;c.postMessage(o.highlight(n,o.languages[a],a)),r&&c.close()},!1)),o;var j=o.util.currentScript();function B(){o.manual||o.highlightAll()}if(j&&(o.filename=j.src,j.hasAttribute("data-manual")&&(o.manual=!0)),!o.manual){var D=document.readyState;D==="loading"||D==="interactive"&&j&&j.defer?document.addEventListener("DOMContentLoaded",B):window.requestAnimationFrame?window.requestAnimationFrame(B):window.setTimeout(B,16)}return o}(u);f.exports&&(f.exports=g),typeof Q<"u"&&(Q.Prism=g),g.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},g.languages.webmanifest=g.languages.json})(me);const ve=async(f,u=fetch)=>{if(f.runtimeEnvironment.isCloud)return;const g=Y("cluster");return await Z(g,{request:u}).then(c=>(ue.set(c),c))},ye=async(f=fetch)=>{try{const u=await f("https://api.github.com/repos/temporalio/ui-server/releases"),g=await u.json();if(!u.ok)return;let c;if(g.length>0){const{tag_name:d}=g[0];c=d.replace("v","")}return c}catch{return""}},ke=async(f,u=fetch)=>{if(f.runtimeEnvironment.isCloud)return;const g=Y("search-attributes");return await Z(g,{request:u}).then(c=>(c!=null&&c.keys&&fe.set(c.keys),c))},be=(f,u)=>!f.auth.enabled||Boolean(u==null?void 0:u.accessToken),z="user",we=(f=R)=>{if(!f)return{};const u=document.cookie.split(";");let g=0,c=u.find(v=>v.includes(z+g)),d="";for(;c;){const[v,h]=c.split("=");d+=h,g++,c=u.find(o=>o.includes(z+g))}if(d)try{const v=pe(d),h=de(v);return{accessToken:h==null?void 0:h.AccessToken,idToken:h==null?void 0:h.IDToken,name:h==null?void 0:h.Name,picture:h==null?void 0:h.Picture,email:h==null?void 0:h.Email}}catch(v){console.error(v)}return{}},xe=(f=R)=>{if(!f)return;const u=document.cookie.split(";");let g=0,c=u.find(d=>d.includes(z+g));for(;c;){const[d]=c.split("=");document.cookie=`${d}=; max-age=-1; path=/`,g++,c=u.find(v=>v.includes(z+g))}},Ae=async function({fetch:f}){const u=await se(f),g=we();g!=null&&g.accessToken&&(le(g),xe());const c=ce();if(!be(u,c))throw oe(302,he());ge(u,f),ke(u,f);const d=await ve(u,f),v={current:u.version,recommended:u.notifyOnNewVersion?await ye(f):void 0};return{user:c,uiVersionInfo:v,settings:u,cluster:d}},Me=Object.freeze(Object.defineProperty({__proto__:null,load:Ae},Symbol.toStringTag,{value:"Module"}));export{Me as _,Ae as l};