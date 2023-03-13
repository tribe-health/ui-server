import{S as D,i as R,s as V,e as N,b as z,f as b,g as P,t as E,d as T,h as _,J as W,M as B,N as O,k as v,a as q,l as k,m as y,c as K,n as m,Q as S,K as C,w as M,x as Q,y as U,R as j,z as A,a2 as F}from"./index-b87195f7.js";import{I as G}from"./icon-7a5b5d81.js";import{c as H}from"./copy-to-clipboard-876e400d.js";import{p as X,s as Y}from"./parse-with-big-int-0036a80a.js";function J(s){let e,l,t,a,r,n,d,h,g,f,i=s[2]&&L(s);return{c(){e=v("div"),l=v("div"),t=v("pre"),a=v("code"),d=q(),i&&i.c(),this.h()},l(o){e=k(o,"DIV",{class:!0,"data-testid":!0});var u=y(e);l=k(u,"DIV",{class:!0});var p=y(l);t=k(p,"PRE",{class:!0});var I=y(t);a=k(I,"CODE",{class:!0,"data-testid":!0}),y(a).forEach(_),I.forEach(_),d=K(p),i&&i.l(p),p.forEach(_),u.forEach(_),this.h()},h(){m(a,"class",r="language-"+s[1]+" svelte-1xzf3cb"),m(a,"data-testid",n=s[8]["data-testid"]),m(t,"class","w-full overflow-x-scroll rounded-lg p-4"),S(t,"h-full",!s[0]),m(l,"class","relative h-full"),m(e,"class",h="w-full rounded-lg "+(s[0]?"h-auto overflow-auto":"h-full")+" "+s[8].class+" svelte-1xzf3cb"),m(e,"data-testid",g=s[8].testId)},m(o,u){z(o,e,u),C(e,l),C(l,t),C(t,a),s[11](a),C(l,d),i&&i.m(l,null),f=!0},p(o,u){(!f||u&2&&r!==(r="language-"+o[1]+" svelte-1xzf3cb"))&&m(a,"class",r),(!f||u&256&&n!==(n=o[8]["data-testid"]))&&m(a,"data-testid",n),(!f||u&1)&&S(t,"h-full",!o[0]),o[2]?i?(i.p(o,u),u&4&&b(i,1)):(i=L(o),i.c(),b(i,1),i.m(l,null)):i&&(P(),E(i,1,1,()=>{i=null}),T()),(!f||u&257&&h!==(h="w-full rounded-lg "+(o[0]?"h-auto overflow-auto":"h-full")+" "+o[8].class+" svelte-1xzf3cb"))&&m(e,"class",h),(!f||u&256&&g!==(g=o[8].testId))&&m(e,"data-testid",g)},i(o){f||(b(i),f=!0)},o(o){E(i),f=!1},d(o){o&&_(e),s[11](null),i&&i.d()}}}function L(s){let e,l,t,a,r;return l=new G({props:{name:s[5]?"checkmark":"copy",class:"text-white hover:text-gray-900"}}),{c(){e=v("button"),M(l.$$.fragment),this.h()},l(n){e=k(n,"BUTTON",{class:!0});var d=y(e);Q(l.$$.fragment,d),d.forEach(_),this.h()},h(){m(e,"class","absolute top-2.5 right-2.5 rounded-md bg-gray-900 opacity-90 hover:bg-white")},m(n,d){z(n,e,d),U(l,e,null),t=!0,a||(r=j(e,"click",s[12]),a=!0)},p(n,d){const h={};d&32&&(h.name=n[5]?"checkmark":"copy"),l.$set(h)},i(n){t||(b(l.$$.fragment,n),t=!0)},o(n){E(l.$$.fragment,n),t=!1},d(n){n&&_(e),A(l),a=!1,r()}}}function Z(s){let e,l,t=(s[4]||s[4]===null)&&J(s);return{c(){t&&t.c(),e=N()},l(a){t&&t.l(a),e=N()},m(a,r){t&&t.m(a,r),z(a,e,r),l=!0},p(a,[r]){a[4]||a[4]===null?t?(t.p(a,r),r&16&&b(t,1)):(t=J(a),t.c(),b(t,1),t.m(e.parentNode,e)):t&&(P(),E(t,1,1,()=>{t=null}),T())},i(a){l||(b(t),l=!0)},o(a){E(t),l=!1},d(a){t&&t.d(a),a&&_(e)}}}function x(s,e,l){s.textContent=l,s.classList.forEach(t=>s.classList.remove(t)),e&&s.classList.add(`language-${e}`),window.Prism.highlightElement(s)}function $(s,e,l){let t,a,r,{content:n}=e,{inline:d=!1}=e,{language:h="json"}=e,{copyable:g=!0}=e,f;const i=c=>{if(!c)return;let w;try{w=X(c)}catch{w=c}return Y(w,void 0,d?0:2)},{copy:o,copied:u}=H();W(s,u,c=>l(5,r=c));function p(c){F[c?"unshift":"push"](()=>{f=c,l(3,f)})}const I=c=>o(c,a);return s.$$set=c=>{l(8,e=B(B({},e),O(c))),"content"in c&&l(9,n=c.content),"inline"in c&&l(0,d=c.inline),"language"in c&&l(1,h=c.language),"copyable"in c&&l(2,g=c.copyable)},s.$$.update=()=>{s.$$.dirty&2&&l(10,t=h==="json"),s.$$.dirty&1536&&l(4,a=t?i(n):n),s.$$.dirty&26&&f&&window.Prism&&x(f,h,a)},e=O(e),[d,h,g,f,a,r,o,u,e,n,t,p,I]}class ie extends D{constructor(e){super(),R(this,e,$,Z,V,{content:9,inline:0,language:1,copyable:2})}}export{ie as C};
