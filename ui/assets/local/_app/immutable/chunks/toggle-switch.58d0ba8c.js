import{S as T,b as E,a as P,m as f,c as q,p as r,q as b,d as A,k as o,u as i,T as g,f as L,M as _,U as m,n as k,r as N,O as v,P as S,Q as U}from"./index.d29c66be.js";function y(l){let a,e,d,c,n,h,u;return{c(){a=f("label"),e=f("input"),c=q(),n=f("span"),this.h()},l(s){a=r(s,"LABEL",{for:!0,class:!0});var t=b(a);e=r(t,"INPUT",{id:!0,type:!0,class:!0,"data-testid":!0}),c=A(t),n=r(t,"SPAN",{class:!0}),b(n).forEach(o),t.forEach(o),this.h()},h(){i(e,"id",l[1]),e.disabled=l[2],i(e,"type","checkbox"),i(e,"class","hidden svelte-1003px1"),i(e,"data-testid",d=l[3]["data-testid"]),g(e,"disabled",l[2]),i(n,"class","slider svelte-1003px1"),i(a,"for",l[1]),i(a,"class","switch svelte-1003px1")},m(s,t){L(s,a,t),_(a,e),e.checked=l[0],_(a,c),_(a,n),h||(u=[m(e,"change",l[4]),m(e,"change",l[5])],h=!0)},p(s,[t]){t&2&&i(e,"id",s[1]),t&4&&(e.disabled=s[2]),t&8&&d!==(d=s[3]["data-testid"])&&i(e,"data-testid",d),t&1&&(e.checked=s[0]),t&4&&g(e,"disabled",s[2]),t&2&&i(a,"for",s[1])},i:k,o:k,d(s){s&&o(a),h=!1,N(u)}}}function B(l,a,e){let{checked:d=!1}=a,{id:c}=a,{disabled:n=!1}=a;function h(s){U.call(this,l,s)}function u(){d=this.checked,e(0,d)}return l.$$set=s=>{e(3,a=v(v({},a),S(s))),"checked"in s&&e(0,d=s.checked),"id"in s&&e(1,c=s.id),"disabled"in s&&e(2,n=s.disabled)},a=S(a),[d,c,n,a,h,u]}class I extends T{constructor(a){super(),E(this,a,B,y,P,{checked:0,id:1,disabled:2})}}export{I as T};
