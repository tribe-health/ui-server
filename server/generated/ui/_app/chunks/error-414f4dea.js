import{S as K,i as L,s as W,e as d,t as _,k as N,l as H,c as E,a as v,h as b,d as f,m as A,b as i,g as O,G as s,W as z,j as B,O as I,K as F,ah as J}from"./vendor-c58cc9e7.js";import{p as M}from"./stores-810f7c97.js";import{i as Q}from"./is-network-error-ac7c8caf.js";import{b as R}from"./navigation-093db9e2.js";function V(c){let e,o,h,u,l,m,g,n,t,C,T,p,x,j,y,S,w,P;return{c(){e=d("section"),o=d("h1"),h=_(c[0]),u=N(),l=d("p"),m=_("Uh oh. There's an error."),g=N(),n=d("p"),t=d("a"),C=_("Try a refresh"),T=_(`
    or
    `),p=d("a"),x=_("jump on our Slack Channel"),j=_("."),y=N(),S=H(),this.h()},l(r){e=E(r,"SECTION",{"aria-roledescription":!0,class:!0});var a=v(e);o=E(a,"H1",{class:!0});var U=v(o);h=b(U,c[0]),U.forEach(f),u=A(a),l=E(a,"P",{class:!0});var q=v(l);m=b(q,"Uh oh. There's an error."),q.forEach(f),g=A(a),n=E(a,"P",{class:!0});var k=v(n);t=E(k,"A",{href:!0,target:!0,class:!0});var D=v(t);C=b(D,"Try a refresh"),D.forEach(f),T=b(k,`
    or
    `),p=E(k,"A",{href:!0,class:!0});var G=v(p);x=b(G,"jump on our Slack Channel"),G.forEach(f),j=b(k,"."),k.forEach(f),a.forEach(f),y=A(r),S=H(),this.h()},h(){i(o,"class","text-[12rem] font-semibold "),i(l,"class","-mt-6 mb-5 text-lg"),i(t,"href",c[2]),i(t,"target","_self"),i(t,"class","underline-offset-2 underline"),i(p,"href","https://temporal.io/slack"),i(p,"class","underline-offset-2 underline"),i(n,"class","text-lg"),i(e,"aria-roledescription","error"),i(e,"class","text-center align-middle mt-32")},m(r,a){O(r,e,a),s(e,o),s(o,h),s(e,u),s(e,l),s(l,m),s(e,g),s(e,n),s(n,t),s(t,C),s(n,T),s(n,p),s(p,x),s(n,j),O(r,y,a),O(r,S,a),w||(P=z(t,"click",c[4]),w=!0)},p(r,[a]){a&1&&B(h,r[0]),a&4&&i(t,"href",r[2])},i:I,o:I,d(r){r&&f(e),r&&f(y),r&&f(S),w=!1,P()}}}function X(c,e,o){let h,u;F(c,M,t=>o(3,u=t));let{error:l=null}=e,{status:m=500}=e;Q(l)&&(m=l.statusCode);const g=J();R(()=>{g("clearError",{})});const n=()=>{window.location.reload()};return c.$$set=t=>{"error"in t&&o(1,l=t.error),"status"in t&&o(0,m=t.status)},c.$$.update=()=>{c.$$.dirty&8&&o(2,h=u.url.toString())},[m,l,h,u,n]}class te extends K{constructor(e){super();L(this,e,X,V,W,{error:1,status:0})}}export{te as E};