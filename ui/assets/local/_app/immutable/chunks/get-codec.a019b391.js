import{K as c}from"./index.d29c66be.js";import{c as u,o as C,p as l,i as E}from"./is-http.91300684.js";const O=(o,d=u,e=C)=>{var r;return c(e)&&c(d)||((r=o==null?void 0:o.codec)==null?void 0:r.endpoint)||c(d)||""},f=(o,d=l,e=u,p=C)=>{var n,a;const r=c(p)&&c(e),v=(n=o==null?void 0:o.codec)!=null&&n.endpoint?!!((a=o==null?void 0:o.codec)!=null&&a.passAccessToken):!!c(d);return r?!!c(d):v},A=(o,d=E,e=u,p=C)=>{var n,a;const r=c(p)&&c(e),v=(n=o==null?void 0:o.codec)!=null&&n.endpoint?!!((a=o==null?void 0:o.codec)!=null&&a.includeCredentials):!!c(d);return r?!!c(d):v};export{f as a,A as b,O as g};
