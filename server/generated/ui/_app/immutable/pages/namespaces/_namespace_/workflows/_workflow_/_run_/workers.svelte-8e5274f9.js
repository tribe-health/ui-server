import{S as w,i as _,s as g,x as a,y as f,z as u,F as W,f as l,t as $,C as c,O as k,a as b,c as h,b as v,h as y}from"../../../../../../chunks/index-0b369c75.js";import{p as C}from"../../../../../../chunks/stores-5674b937.js";import{w as E}from"../../../../../../chunks/events-d1f5b625.js";import{W as P}from"../../../../../../chunks/workers-list-4f10d8f2.js";import{P as Q}from"../../../../../../chunks/page-title-2518fdab.js";import{W as R}from"../../../../../../chunks/workflow-run-layout-0f8ffc3f.js";import"../../../../../../chunks/index-8c6be68a.js";import"../../../../../../chunks/paginated-2ccc4012.js";import"../../../../../../chunks/route-for-api-a6afbdc8.js";import"../../../../../../chunks/route-for-8f480fc8.js";import"../../../../../../chunks/auth-user-07f174b2.js";import"../../../../../../chunks/persist-store-d7e52d7e.js";import"../../../../../../chunks/parse-with-big-int-9f27148a.js";import"../../../../../../chunks/notifications-64e4d8bf.js";import"../../../../../../chunks/is-network-error-5f9e2367.js";import"../../../../../../chunks/index-283d3fa1.js";import"../../../../../../chunks/is-http-4617a131.js";import"../../../../../../chunks/data-converter-config-7d1f5f99.js";import"../../../../../../chunks/atob-c428af82.js";import"../../../../../../chunks/format-date-3df06bf1.js";import"../../../../../../chunks/format-time-f99a8c6f.js";import"../../../../../../chunks/is-b4c8f655.js";import"../../../../../../chunks/has-68876cdc.js";import"../../../../../../chunks/simplify-attributes-e5d3109a.js";import"../../../../../../chunks/event-view-049f8eb1.js";import"../../../../../../chunks/settings-be4fa165.js";import"../../../../../../chunks/versions-02c70e25.js";import"../../../../../../chunks/version-check-0f5c0d26.js";import"../../../../../../chunks/with-loading-f07bedaf.js";import"../../../../../../chunks/workflow-service-4046df16.js";import"../../../../../../chunks/pollers-service-cc36469c.js";import"../../../../../../chunks/previous-events-a7f0213c.js";import"../../../../../../chunks/icon-7d330c0b.js";import"../../../../../../chunks/time-format-d69ce7b0.js";import"../../../../../../chunks/empty-state-0322ba06.js";import"../../../../../../chunks/index-8a8c6b93.js";import"../../../../../../chunks/workflows-16b18cc3.js";import"../../../../../../chunks/workflow-status-4a0b82d2.js";import"../../../../../../chunks/modal-58682d62.js";import"../../../../../../chunks/button-ca5c6c86.js";import"../../../../../../chunks/core-user-a1ba6fc9.js";import"../../../../../../chunks/tooltip-d45064b8.js";import"../../../../../../chunks/copy-to-clipboard-2eb414b9.js";import"../../../../../../chunks/split-button-83dcdc9b.js";import"../../../../../../chunks/menu-3bdbd175.js";import"../../../../../../chunks/menu-item-7d491ac7.js";import"../../../../../../chunks/toaster-18495b6a.js";import"../../../../../../chunks/icon-button-43682765.js";import"../../../../../../chunks/v4-43adb29c.js";import"../../../../../../chunks/input-e1d72b9e.js";import"../../../../../../chunks/feature-guard-dd07df03.js";import"../../../../../../chunks/tab-5fcbe899.js";import"../../../../../../chunks/loading-54a8cebb.js";function S(m){let t,e;return t=new P({props:{taskQueue:m[1].taskQueue,workers:m[0]}}),{c(){a(t.$$.fragment)},l(r){f(t.$$.fragment,r)},m(r,i){u(t,r,i),e=!0},p:W,i(r){e||(l(t.$$.fragment,r),e=!0)},o(r){$(t.$$.fragment,r),e=!1},d(r){c(t,r)}}}function q(m,t,e){let r;k(m,E,n=>e(2,r=n));const{workers:i,workflow:o}=r;return[i,o]}class z extends w{constructor(t){super(),_(this,t,q,S,g,{})}}function F(m){let t,e;return t=new z({}),{c(){a(t.$$.fragment)},l(r){f(t.$$.fragment,r)},m(r,i){u(t,r,i),e=!0},i(r){e||(l(t.$$.fragment,r),e=!0)},o(r){$(t.$$.fragment,r),e=!1},d(r){c(t,r)}}}function O(m){let t,e,r,i;return t=new Q({props:{title:`Workers | ${m[2]}`,url:m[0].url.href}}),r=new R({props:{cancelEnabled:!m[1],$$slots:{default:[F]},$$scope:{ctx:m}}}),{c(){a(t.$$.fragment),e=b(),a(r.$$.fragment)},l(o){f(t.$$.fragment,o),e=h(o),f(r.$$.fragment,o)},m(o,n){u(t,o,n),v(o,e,n),u(r,o,n),i=!0},p(o,[n]){const p={};n&1&&(p.url=o[0].url.href),t.$set(p);const s={};n&2&&(s.cancelEnabled=!o[1]),n&64&&(s.$$scope={dirty:n,ctx:o}),r.$set(s)},i(o){i||(l(t.$$.fragment,o),l(r.$$.fragment,o),i=!0)},o(o){$(t.$$.fragment,o),$(r.$$.fragment,o),i=!1},d(o){c(t,o),o&&y(e),c(r,o)}}}function j(m,t,e){let r,i;k(m,C,d=>e(0,i=d));var o,n,p;const s=i.params.workflow;return m.$$.update=()=>{m.$$.dirty&57&&e(1,r=e(5,p=e(4,n=e(3,o=i.stuff)===null||o===void 0?void 0:o.settings)===null||n===void 0?void 0:n.runtimeEnvironment)===null||p===void 0?void 0:p.isCloud)},[i,r,s,o,n,p]}class jr extends w{constructor(t){super(),_(this,t,j,O,g,{})}}export{jr as default};