import{S as fa,i as ua,s as da,e as i,t as s,k as u,c,a as p,h as n,d as t,m as d,b as o,g as Je,M as e,j as g,E as pa,O as va}from"../../../../chunks/index-733079a8.js";import{p as ha}from"../../../../chunks/stores-1e95b62c.js";import{h as ma}from"../../../../chunks/format-date-4b1bc9ef.js";function _a(m){var Ke,Le,Qe,We,Xe,Ze,$e,xe,ea,aa,ta,sa,na,la,ra,oa;let v,P,E,N,h,a,_,S,Ee,A,Y,Ne,ge,L=((Le=(Ke=m[0])==null?void 0:Ke.namespaceInfo)==null?void 0:Le.description)+"",pe,Pe,b,j,Se,Ae,Q=(((We=(Qe=m[0])==null?void 0:Qe.namespaceInfo)==null?void 0:We.ownerEmail)||"Unknown")+"",me,be,w,q,we,Ce,W=(Xe=m[0])!=null&&Xe.isGlobalNamespace?"Yes":"No",fe,Ie,C,M,Ve,De,X=ma(($e=(Ze=m[0])==null?void 0:Ze.config)==null?void 0:$e.workflowExecutionRetentionTtl.toString())+"",ue,ke,I,z,He,Ge,Z=((ea=(xe=m[0])==null?void 0:xe.config)==null?void 0:ea.historyArchivalState)+"",de,Oe,V,B,Re,Te,$=((ta=(aa=m[0])==null?void 0:aa.config)==null?void 0:ta.visibilityArchivalState)+"",ve,Fe,D,J,Ue,Ye,x=((sa=m[0])==null?void 0:sa.failoverVersion)+"",he,je,y,K,qe,Me,ee=((la=(na=m[0])==null?void 0:na.replicationConfig)==null?void 0:la.state)+"",_e,ze,ae=((oa=(ra=m[0])==null?void 0:ra.replicationConfig)==null?void 0:oa.activeClusterName)+"",ye,Be;return{c(){v=i("h2"),P=s("Settings: "),E=s(m[1]),N=u(),h=i("div"),a=i("div"),_=i("h1"),S=s("Details"),Ee=u(),A=i("p"),Y=i("span"),Ne=s("Description:"),ge=u(),pe=s(L),Pe=u(),b=i("p"),j=i("span"),Se=s("Owner:"),Ae=u(),me=s(Q),be=u(),w=i("p"),q=i("span"),we=s("Global?"),Ce=u(),fe=s(W),Ie=u(),C=i("p"),M=i("span"),Ve=s("Retention Period:"),De=u(),ue=s(X),ke=u(),I=i("p"),z=i("span"),He=s("History Archival:"),Ge=u(),de=s(Z),Oe=u(),V=i("p"),B=i("span"),Re=s("Visibility Archival:"),Te=u(),ve=s($),Fe=u(),D=i("p"),J=i("span"),Ue=s("Failover Version:"),Ye=u(),he=s(x),je=u(),y=i("p"),K=i("span"),qe=s("Clusters:"),Me=u(),_e=s(ee),ze=s(" ("),ye=s(ae),Be=s(")"),this.h()},l(l){v=c(l,"H2",{class:!0,"data-cy":!0});var f=p(v);P=n(f,"Settings: "),E=n(f,m[1]),f.forEach(t),N=d(l),h=c(l,"DIV",{class:!0});var te=p(h);a=c(te,"DIV",{class:!0});var r=p(a);_=c(r,"H1",{class:!0});var se=p(_);S=n(se,"Details"),se.forEach(t),Ee=d(r),A=c(r,"P",{"data-cy":!0});var k=p(A);Y=c(k,"SPAN",{class:!0});var ne=p(Y);Ne=n(ne,"Description:"),ne.forEach(t),ge=d(k),pe=n(k,L),k.forEach(t),Pe=d(r),b=c(r,"P",{"data-cy":!0});var H=p(b);j=c(H,"SPAN",{class:!0});var le=p(j);Se=n(le,"Owner:"),le.forEach(t),Ae=d(H),me=n(H,Q),H.forEach(t),be=d(r),w=c(r,"P",{"data-cy":!0});var G=p(w);q=c(G,"SPAN",{class:!0});var re=p(q);we=n(re,"Global?"),re.forEach(t),Ce=d(G),fe=n(G,W),G.forEach(t),Ie=d(r),C=c(r,"P",{"data-cy":!0});var O=p(C);M=c(O,"SPAN",{class:!0});var oe=p(M);Ve=n(oe,"Retention Period:"),oe.forEach(t),De=d(O),ue=n(O,X),O.forEach(t),ke=d(r),I=c(r,"P",{"data-cy":!0});var R=p(I);z=c(R,"SPAN",{class:!0});var ie=p(z);He=n(ie,"History Archival:"),ie.forEach(t),Ge=d(R),de=n(R,Z),R.forEach(t),Oe=d(r),V=c(r,"P",{"data-cy":!0});var T=p(V);B=c(T,"SPAN",{class:!0});var ce=p(B);Re=n(ce,"Visibility Archival:"),ce.forEach(t),Te=d(T),ve=n(T,$),T.forEach(t),Fe=d(r),D=c(r,"P",{"data-cy":!0});var F=p(D);J=c(F,"SPAN",{class:!0});var ia=p(J);Ue=n(ia,"Failover Version:"),ia.forEach(t),Ye=d(F),he=n(F,x),F.forEach(t),je=d(r),y=c(r,"P",{"data-cy":!0});var U=p(y);K=c(U,"SPAN",{class:!0});var ca=p(K);qe=n(ca,"Clusters:"),ca.forEach(t),Me=d(U),_e=n(U,ee),ze=n(U," ("),ye=n(U,ae),Be=n(U,")"),U.forEach(t),r.forEach(t),te.forEach(t),this.h()},h(){o(v,"class","text-2xl"),o(v,"data-cy","settings-title"),o(_,"class","text-lg font-medium my-4"),o(Y,"class","font-medium mr-2"),o(A,"data-cy","namespace-description"),o(j,"class","font-medium mr-2"),o(b,"data-cy","namespace-owner"),o(q,"class","font-medium mr-2"),o(w,"data-cy","namespace-global"),o(M,"class","font-medium mr-2"),o(C,"data-cy","namespace-retention"),o(z,"class","font-medium mr-2"),o(I,"data-cy","namespace-history"),o(B,"class","font-medium mr-2"),o(V,"data-cy","namespace-visibility"),o(J,"class","font-medium mr-2"),o(D,"data-cy","namespace-failover"),o(K,"class","font-medium mr-2"),o(y,"data-cy","namespace-clusters"),o(a,"class","namespace-info w-full p-4"),o(h,"class","flex")},m(l,f){Je(l,v,f),e(v,P),e(v,E),Je(l,N,f),Je(l,h,f),e(h,a),e(a,_),e(_,S),e(a,Ee),e(a,A),e(A,Y),e(Y,Ne),e(A,ge),e(A,pe),e(a,Pe),e(a,b),e(b,j),e(j,Se),e(b,Ae),e(b,me),e(a,be),e(a,w),e(w,q),e(q,we),e(w,Ce),e(w,fe),e(a,Ie),e(a,C),e(C,M),e(M,Ve),e(C,De),e(C,ue),e(a,ke),e(a,I),e(I,z),e(z,He),e(I,Ge),e(I,de),e(a,Oe),e(a,V),e(V,B),e(B,Re),e(V,Te),e(V,ve),e(a,Fe),e(a,D),e(D,J),e(J,Ue),e(D,Ye),e(D,he),e(a,je),e(a,y),e(y,K),e(K,qe),e(y,Me),e(y,_e),e(y,ze),e(y,ye),e(y,Be)},p(l,[f]){var te,r,se,k,ne,H,le,G,re,O,oe,R,ie,T,ce,F;f&1&&L!==(L=((r=(te=l[0])==null?void 0:te.namespaceInfo)==null?void 0:r.description)+"")&&g(pe,L),f&1&&Q!==(Q=(((k=(se=l[0])==null?void 0:se.namespaceInfo)==null?void 0:k.ownerEmail)||"Unknown")+"")&&g(me,Q),f&1&&W!==(W=(ne=l[0])!=null&&ne.isGlobalNamespace?"Yes":"No")&&g(fe,W),f&1&&X!==(X=ma((le=(H=l[0])==null?void 0:H.config)==null?void 0:le.workflowExecutionRetentionTtl.toString())+"")&&g(ue,X),f&1&&Z!==(Z=((re=(G=l[0])==null?void 0:G.config)==null?void 0:re.historyArchivalState)+"")&&g(de,Z),f&1&&$!==($=((oe=(O=l[0])==null?void 0:O.config)==null?void 0:oe.visibilityArchivalState)+"")&&g(ve,$),f&1&&x!==(x=((R=l[0])==null?void 0:R.failoverVersion)+"")&&g(he,x),f&1&&ee!==(ee=((T=(ie=l[0])==null?void 0:ie.replicationConfig)==null?void 0:T.state)+"")&&g(_e,ee),f&1&&ae!==(ae=((F=(ce=l[0])==null?void 0:ce.replicationConfig)==null?void 0:F.activeClusterName)+"")&&g(ye,ae)},i:pa,o:pa,d(l){l&&t(v),l&&t(N),l&&t(h)}}}const Pa=async function({params:m,url:v,stuff:P}){const{searchParams:E}=v;E.has("time-range")&&E.delete("time-range");const N=m.namespace;return{props:{currentNamespace:P.namespaces.find(_=>_.namespaceInfo.name===N)}}};function ya(m,v,P){let E;va(m,ha,S=>P(4,E=S));var N,h;let a=E.params.namespace||((h=(N=E.stuff)===null||N===void 0?void 0:N.settings)===null||h===void 0?void 0:h.defaultNamespace),{currentNamespace:_}=v;return m.$$set=S=>{"currentNamespace"in S&&P(0,_=S.currentNamespace)},[_,a]}class Sa extends fa{constructor(v){super(),ua(this,v,ya,_a,da,{currentNamespace:0})}}export{Sa as default,Pa as load};
