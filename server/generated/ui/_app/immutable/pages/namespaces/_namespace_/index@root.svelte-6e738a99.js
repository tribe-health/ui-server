import{S as Wt,i as Xt,s as Zt,x as Fe,a as d,l as u,r as E,e as je,y as Ke,c as v,m as _,n as h,u as b,h as f,p as g,z as Le,b as S,N as e,v as T,f as I,t as L,d as Jt,C as Ye,O as ce,o as xt,a4 as ea,g as Qt,a1 as ta,F as aa}from"../../../chunks/index-0b369c75.js";import{p as sa}from"../../../chunks/stores-5674b937.js";import{t as ra,u as la}from"../../../chunks/versions-02c70e25.js";import{s as oa}from"../../../chunks/event-view-8263e942.js";import{l as Yt}from"../../../chunks/namespaces-648ccca7.js";import{s as na}from"../../../chunks/search-attributes-406e1b3c.js";import{v as qt}from"../../../chunks/format-time-f99a8c6f.js";import{P as ia}from"../../../chunks/page-title-2518fdab.js";import{T as ca,a as fa}from"../../../chunks/table-header-row-ec6d26cf.js";import{T as pa}from"../../../chunks/table-row-6a4ec20c.js";import{a as ma}from"../../../chunks/namespaces-service-8ea58760.js";import"../../../chunks/index-8c6be68a.js";import"../../../chunks/version-check-0f5c0d26.js";import"../../../chunks/settings-be4fa165.js";import"../../../chunks/persist-store-35c981b5.js";import"../../../chunks/parse-with-big-int-561ccb8b.js";import"../../../chunks/is-b4c8f655.js";import"../../../chunks/checkbox-80095b67.js";import"../../../chunks/icon-7d330c0b.js";import"../../../chunks/notifications-64e4d8bf.js";import"../../../chunks/paginated-9531a07a.js";import"../../../chunks/route-for-api-60c60c78.js";import"../../../chunks/route-for-8f480fc8.js";import"../../../chunks/auth-user-8d8472d7.js";import"../../../chunks/is-network-error-5f9e2367.js";const ua=o=>{var a,s;const t=(a=o==null?void 0:o.replicationConfig)==null?void 0:a.clusters,n=(s=o==null?void 0:o.replicationConfig)==null?void 0:s.activeClusterName;return t!=null&&t.length?t.map(({clusterName:m})=>m===n?`${m} (active)`:m).join(", "):"Unknown"};function zt(o,t,n){const a=o.slice();return a[8]=t[n][0],a[9]=t[n][1],a}function Bt(o){let t,n,a,s,m,r;return m=new ca({props:{class:"w-full",$$slots:{headers:[va],default:[ha]},$$scope:{ctx:o}}}),{c(){t=u("section"),n=u("h1"),a=E("Search Attributes"),s=d(),Fe(m.$$.fragment),this.h()},l(c){t=_(c,"SECTION",{});var i=h(t);n=_(i,"H1",{class:!0});var l=h(n);a=b(l,"Search Attributes"),l.forEach(f),s=v(i),Ke(m.$$.fragment,i),i.forEach(f),this.h()},h(){g(n,"class","my-4 text-lg font-medium")},m(c,i){S(c,t,i),e(t,n),e(n,a),e(t,s),Le(m,t,null),r=!0},p(c,i){const l={};i&4160&&(l.$$scope={dirty:i,ctx:c}),m.$set(l)},i(c){r||(I(m.$$.fragment,c),r=!0)},o(c){L(m.$$.fragment,c),r=!1},d(c){c&&f(t),Ye(m)}}}function _a(o){let t,n=o[8]+"",a,s,m,r=o[9]+"",c,i;return{c(){t=u("td"),a=E(n),s=d(),m=u("td"),c=E(r),i=d()},l(l){t=_(l,"TD",{});var P=h(t);a=b(P,n),P.forEach(f),s=v(l),m=_(l,"TD",{});var y=h(m);c=b(y,r),y.forEach(f),i=v(l)},m(l,P){S(l,t,P),e(t,a),S(l,s,P),S(l,m,P),e(m,c),S(l,i,P)},p(l,P){P&64&&n!==(n=l[8]+"")&&T(a,n),P&64&&r!==(r=l[9]+"")&&T(c,r)},d(l){l&&f(t),l&&f(s),l&&f(m),l&&f(i)}}}function Mt(o){let t,n;return t=new pa({props:{$$slots:{default:[_a]},$$scope:{ctx:o}}}),{c(){Fe(t.$$.fragment)},l(a){Ke(t.$$.fragment,a)},m(a,s){Le(t,a,s),n=!0},p(a,s){const m={};s&4160&&(m.$$scope={dirty:s,ctx:a}),t.$set(m)},i(a){n||(I(t.$$.fragment,a),n=!0)},o(a){L(t.$$.fragment,a),n=!1},d(a){Ye(t,a)}}}function ha(o){let t,n,a=Object.entries(o[6]),s=[];for(let r=0;r<a.length;r+=1)s[r]=Mt(zt(o,a,r));const m=r=>L(s[r],1,1,()=>{s[r]=null});return{c(){for(let r=0;r<s.length;r+=1)s[r].c();t=je()},l(r){for(let c=0;c<s.length;c+=1)s[c].l(r);t=je()},m(r,c){for(let i=0;i<s.length;i+=1)s[i].m(r,c);S(r,t,c),n=!0},p(r,c){if(c&64){a=Object.entries(r[6]);let i;for(i=0;i<a.length;i+=1){const l=zt(r,a,i);s[i]?(s[i].p(l,c),I(s[i],1)):(s[i]=Mt(l),s[i].c(),I(s[i],1),s[i].m(t.parentNode,t))}for(Qt(),i=a.length;i<s.length;i+=1)m(i);Jt()}},i(r){if(!n){for(let c=0;c<a.length;c+=1)I(s[c]);n=!0}},o(r){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)L(s[c]);n=!1},d(r){ta(s,r),r&&f(t)}}}function da(o){let t,n,a,s,m;return{c(){t=u("th"),n=E("Key"),a=d(),s=u("th"),m=E("Type")},l(r){t=_(r,"TH",{});var c=h(t);n=b(c,"Key"),c.forEach(f),a=v(r),s=_(r,"TH",{});var i=h(s);m=b(i,"Type"),i.forEach(f)},m(r,c){S(r,t,c),e(t,n),S(r,a,c),S(r,s,c),e(s,m)},p:aa,d(r){r&&f(t),r&&f(a),r&&f(s)}}}function va(o){let t,n;return t=new fa({props:{slot:"headers",$$slots:{default:[da]},$$scope:{ctx:o}}}),{c(){Fe(t.$$.fragment)},l(a){Ke(t.$$.fragment,a)},m(a,s){Le(t,a,s),n=!0},p(a,s){const m={};s&4096&&(m.$$scope={dirty:s,ctx:a}),t.$set(m)},i(a){n||(I(t.$$.fragment,a),n=!0)},o(a){L(t.$$.fragment,a),n=!1},d(a){Ye(t,a)}}}function Ea(o){var wt,Pt,At,Nt,St,Tt,Vt,It,Ct,kt,Ht,Ot,Dt,Rt,Ut,Gt;let t,n,a,s,m=((Pt=(wt=o[0])==null?void 0:wt.namespaceInfo)==null?void 0:Pt.name)+"",r,c,i,l,P,y,qe,C,X,ze,Be,fe=((Nt=(At=o[0])==null?void 0:At.namespaceInfo)==null?void 0:Nt.description)+"",Ae,Me,k,Z,Je,Qe,pe=(((Tt=(St=o[0])==null?void 0:St.namespaceInfo)==null?void 0:Tt.ownerEmail)||"Unknown")+"",Ne,We,H,x,Xe,Ze,me=(Vt=o[0])!=null&&Vt.isGlobalNamespace?"Yes":"No",Se,xe,O,ee,et,tt,ue=qt((Ct=(It=o[0])==null?void 0:It.config)==null?void 0:Ct.workflowExecutionRetentionTtl.toString())+"",Te,at,D,te,st,rt,_e=((Ht=(kt=o[0])==null?void 0:kt.config)==null?void 0:Ht.historyArchivalState)+"",Ve,lt,R,ae,ot,nt,he=((Dt=(Ot=o[0])==null?void 0:Ot.config)==null?void 0:Dt.visibilityArchivalState)+"",Ie,it,U,se,ct,ft,de=((Rt=o[0])==null?void 0:Rt.failoverVersion)+"",Ce,pt,G,re,mt,ut,ke,_t,V,le,ht,dt,j,oe,vt,Et,He,bt,F,ne,$t,gt,Oe,yt,De,ie,N;t=new ia({props:{title:`Namespaces | ${(Gt=(Ut=o[0])==null?void 0:Ut.namespaceInfo)==null?void 0:Gt.name}`,url:o[2].url.href}});let A=o[6]&&Bt(o);return{c(){Fe(t.$$.fragment),n=d(),a=u("h2"),s=E("Namespace: "),r=E(m),c=d(),i=u("div"),l=u("article"),P=u("h1"),y=E("Details"),qe=d(),C=u("p"),X=u("span"),ze=E("Description:"),Be=d(),Ae=E(fe),Me=d(),k=u("p"),Z=u("span"),Je=E("Owner:"),Qe=d(),Ne=E(pe),We=d(),H=u("p"),x=u("span"),Xe=E("Global?"),Ze=d(),Se=E(me),xe=d(),O=u("p"),ee=u("span"),et=E("Retention Period:"),tt=d(),Te=E(ue),at=d(),D=u("p"),te=u("span"),st=E("History Archival:"),rt=d(),Ve=E(_e),lt=d(),R=u("p"),ae=u("span"),ot=E("Visibility Archival:"),nt=d(),Ie=E(he),it=d(),U=u("p"),se=u("span"),ct=E("Failover Version:"),ft=d(),Ce=E(de),pt=d(),G=u("p"),re=u("span"),mt=E("Clusters:"),ut=d(),ke=E(o[1]),_t=d(),V=u("article"),le=u("h1"),ht=E("Versions"),dt=d(),j=u("p"),oe=u("span"),vt=E("Temporal Server Version:"),Et=d(),He=E(o[3]),bt=d(),F=u("p"),ne=u("span"),$t=E("Temporal UI Version:"),gt=d(),Oe=E(o[4]),yt=d(),De=d(),A&&A.c(),ie=je(),this.h()},l(p){Ke(t.$$.fragment,p),n=v(p),a=_(p,"H2",{class:!0,"data-cy":!0});var $=h(a);s=b($,"Namespace: "),r=b($,m),$.forEach(f),c=v(p),i=_(p,"DIV",{class:!0});var K=h(i);l=_(K,"ARTICLE",{class:!0});var w=h(l);P=_(w,"H1",{class:!0});var ve=h(P);y=b(ve,"Details"),ve.forEach(f),qe=v(w),C=_(w,"P",{"data-cy":!0});var Y=h(C);X=_(Y,"SPAN",{class:!0});var Ee=h(X);ze=b(Ee,"Description:"),Ee.forEach(f),Be=v(Y),Ae=b(Y,fe),Y.forEach(f),Me=v(w),k=_(w,"P",{"data-cy":!0});var q=h(k);Z=_(q,"SPAN",{class:!0});var be=h(Z);Je=b(be,"Owner:"),be.forEach(f),Qe=v(q),Ne=b(q,pe),q.forEach(f),We=v(w),H=_(w,"P",{"data-cy":!0});var z=h(H);x=_(z,"SPAN",{class:!0});var $e=h(x);Xe=b($e,"Global?"),$e.forEach(f),Ze=v(z),Se=b(z,me),z.forEach(f),xe=v(w),O=_(w,"P",{"data-cy":!0});var B=h(O);ee=_(B,"SPAN",{class:!0});var ge=h(ee);et=b(ge,"Retention Period:"),ge.forEach(f),tt=v(B),Te=b(B,ue),B.forEach(f),at=v(w),D=_(w,"P",{"data-cy":!0});var M=h(D);te=_(M,"SPAN",{class:!0});var ye=h(te);st=b(ye,"History Archival:"),ye.forEach(f),rt=v(M),Ve=b(M,_e),M.forEach(f),lt=v(w),R=_(w,"P",{"data-cy":!0});var J=h(R);ae=_(J,"SPAN",{class:!0});var we=h(ae);ot=b(we,"Visibility Archival:"),we.forEach(f),nt=v(J),Ie=b(J,he),J.forEach(f),it=v(w),U=_(w,"P",{"data-cy":!0});var Q=h(U);se=_(Q,"SPAN",{class:!0});var Pe=h(se);ct=b(Pe,"Failover Version:"),Pe.forEach(f),ft=v(Q),Ce=b(Q,de),Q.forEach(f),pt=v(w),G=_(w,"P",{"data-cy":!0});var Re=h(G);re=_(Re,"SPAN",{class:!0});var jt=h(re);mt=b(jt,"Clusters:"),jt.forEach(f),ut=v(Re),ke=b(Re,o[1]),Re.forEach(f),w.forEach(f),_t=v(K),V=_(K,"ARTICLE",{class:!0});var W=h(V);le=_(W,"H1",{class:!0});var Ft=h(le);ht=b(Ft,"Versions"),Ft.forEach(f),dt=v(W),j=_(W,"P",{"data-cy":!0});var Ue=h(j);oe=_(Ue,"SPAN",{class:!0});var Kt=h(oe);vt=b(Kt,"Temporal Server Version:"),Kt.forEach(f),Et=v(Ue),He=b(Ue,o[3]),Ue.forEach(f),bt=v(W),F=_(W,"P",{"data-cy":!0});var Ge=h(F);ne=_(Ge,"SPAN",{class:!0});var Lt=h(ne);$t=b(Lt,"Temporal UI Version:"),Lt.forEach(f),gt=v(Ge),Oe=b(Ge,o[4]),Ge.forEach(f),yt=v(W),W.forEach(f),K.forEach(f),De=v(p),A&&A.l(p),ie=je(),this.h()},h(){g(a,"class","text-2xl"),g(a,"data-cy","namespace-title"),g(P,"class","my-4 text-lg font-medium"),g(X,"class","mr-2 font-medium"),g(C,"data-cy","namespace-description"),g(Z,"class","mr-2 font-medium"),g(k,"data-cy","namespace-owner"),g(x,"class","mr-2 font-medium"),g(H,"data-cy","namespace-global"),g(ee,"class","mr-2 font-medium"),g(O,"data-cy","namespace-retention"),g(te,"class","mr-2 font-medium"),g(D,"data-cy","namespace-history"),g(ae,"class","mr-2 font-medium"),g(R,"data-cy","namespace-visibility"),g(se,"class","mr-2 font-medium"),g(U,"data-cy","namespace-failover"),g(re,"class","mr-2 font-medium"),g(G,"data-cy","namespace-clusters"),g(l,"class","namespace-info w-full p-4"),g(le,"class","my-4 text-lg font-medium"),g(oe,"class","mr-2 font-medium"),g(j,"data-cy","server-version"),g(ne,"class","mr-2 font-medium"),g(F,"data-cy","ui-version"),g(V,"class","namespace-info w-full p-4"),g(i,"class","flex")},m(p,$){Le(t,p,$),S(p,n,$),S(p,a,$),e(a,s),e(a,r),S(p,c,$),S(p,i,$),e(i,l),e(l,P),e(P,y),e(l,qe),e(l,C),e(C,X),e(X,ze),e(C,Be),e(C,Ae),e(l,Me),e(l,k),e(k,Z),e(Z,Je),e(k,Qe),e(k,Ne),e(l,We),e(l,H),e(H,x),e(x,Xe),e(H,Ze),e(H,Se),e(l,xe),e(l,O),e(O,ee),e(ee,et),e(O,tt),e(O,Te),e(l,at),e(l,D),e(D,te),e(te,st),e(D,rt),e(D,Ve),e(l,lt),e(l,R),e(R,ae),e(ae,ot),e(R,nt),e(R,Ie),e(l,it),e(l,U),e(U,se),e(se,ct),e(U,ft),e(U,Ce),e(l,pt),e(l,G),e(G,re),e(re,mt),e(G,ut),e(G,ke),e(i,_t),e(i,V),e(V,le),e(le,ht),e(V,dt),e(V,j),e(j,oe),e(oe,vt),e(j,Et),e(j,He),e(V,bt),e(V,F),e(F,ne),e(ne,$t),e(F,gt),e(F,Oe),e(V,yt),S(p,De,$),A&&A.m(p,$),S(p,ie,$),N=!0},p(p,[$]){var w,ve,Y,Ee,q,be,z,$e,B,ge,M,ye,J,we,Q,Pe;const K={};$&1&&(K.title=`Namespaces | ${(ve=(w=p[0])==null?void 0:w.namespaceInfo)==null?void 0:ve.name}`),$&4&&(K.url=p[2].url.href),t.$set(K),(!N||$&1)&&m!==(m=((Ee=(Y=p[0])==null?void 0:Y.namespaceInfo)==null?void 0:Ee.name)+"")&&T(r,m),(!N||$&1)&&fe!==(fe=((be=(q=p[0])==null?void 0:q.namespaceInfo)==null?void 0:be.description)+"")&&T(Ae,fe),(!N||$&1)&&pe!==(pe=((($e=(z=p[0])==null?void 0:z.namespaceInfo)==null?void 0:$e.ownerEmail)||"Unknown")+"")&&T(Ne,pe),(!N||$&1)&&me!==(me=(B=p[0])!=null&&B.isGlobalNamespace?"Yes":"No")&&T(Se,me),(!N||$&1)&&ue!==(ue=qt((M=(ge=p[0])==null?void 0:ge.config)==null?void 0:M.workflowExecutionRetentionTtl.toString())+"")&&T(Te,ue),(!N||$&1)&&_e!==(_e=((J=(ye=p[0])==null?void 0:ye.config)==null?void 0:J.historyArchivalState)+"")&&T(Ve,_e),(!N||$&1)&&he!==(he=((Q=(we=p[0])==null?void 0:we.config)==null?void 0:Q.visibilityArchivalState)+"")&&T(Ie,he),(!N||$&1)&&de!==(de=((Pe=p[0])==null?void 0:Pe.failoverVersion)+"")&&T(Ce,de),(!N||$&2)&&T(ke,p[1]),(!N||$&8)&&T(He,p[3]),(!N||$&16)&&T(Oe,p[4]),p[6]?A?(A.p(p,$),$&64&&I(A,1)):(A=Bt(p),A.c(),I(A,1),A.m(ie.parentNode,ie)):A&&(Qt(),L(A,1,1,()=>{A=null}),Jt())},i(p){N||(I(t.$$.fragment,p),I(A),N=!0)},o(p){L(t.$$.fragment,p),L(A),N=!1},d(p){Ye(t,p),p&&f(n),p&&f(a),p&&f(c),p&&f(i),p&&f(De),A&&A.d(p),p&&f(ie)}}}const za=async function({params:o,url:t,stuff:n}){const{searchParams:a}=t;a.has("time-range")&&a.delete("time-range");const s=await ma(o.namespace),m=ua(s);return{props:{namespace:s,clusters:m}}};function ba(o,t,n){let a,s,m,r,c,i;ce(o,Yt,y=>n(7,a=y)),ce(o,sa,y=>n(2,s=y)),ce(o,ra,y=>n(3,m=y)),ce(o,la,y=>n(4,r=y)),ce(o,oa,y=>n(5,c=y)),ce(o,na,y=>n(6,i=y));let{namespace:l}=t,{clusters:P}=t;return xt(()=>{var y;ea(Yt,a=(y=l==null?void 0:l.namespaceInfo)===null||y===void 0?void 0:y.name,a)}),o.$$set=y=>{"namespace"in y&&n(0,l=y.namespace),"clusters"in y&&n(1,P=y.clusters)},[l,P,s,m,r,c,i]}class Ba extends Wt{constructor(t){super(),Xt(this,t,ba,Ea,Zt,{namespace:0,clusters:1})}}export{Ba as default,za as load};