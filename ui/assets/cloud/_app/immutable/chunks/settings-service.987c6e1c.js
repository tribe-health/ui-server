import{s as b}from"./settings.34723850.js";import{r as w,a as k,g as D}from"./route-for-api.d60a2f44.js";function A(){return"cloud"}const C=/(tmprl\.cloud|tmprl-test\.cloud)$/,e=async(f=fetch)=>{var c,o,d,i,u;const m=w("settings"),a=await k(m,{request:f}),r=A(),l={auth:{enabled:!!((c=a==null?void 0:a.Auth)!=null&&c.Enabled),options:(o=a==null?void 0:a.Auth)==null?void 0:o.Options},baseUrl:D(),codec:{endpoint:(d=a==null?void 0:a.Codec)==null?void 0:d.Endpoint,passAccessToken:(i=a==null?void 0:a.Codec)==null?void 0:i.PassAccessToken,includeCredentials:(u=a==null?void 0:a.Codec)==null?void 0:u.IncludeCredentials},defaultNamespace:(a==null?void 0:a.DefaultNamespace)||"default",disableWriteActions:!!(a!=null&&a.DisableWriteActions)||!1,workflowTerminateDisabled:!!(a!=null&&a.WorkflowTerminateDisabled),workflowCancelDisabled:!!(a!=null&&a.WorkflowCancelDisabled),workflowSignalDisabled:!!(a!=null&&a.WorkflowSignalDisabled),workflowResetDisabled:!!(a!=null&&a.WorkflowResetDisabled),batchActionsDisabled:!!(a!=null&&a.BatchActionsDisabled),showTemporalSystemNamespace:a==null?void 0:a.ShowTemporalSystemNamespace,notifyOnNewVersion:a==null?void 0:a.NotifyOnNewVersion,feedbackURL:a==null?void 0:a.FeedbackURL,runtimeEnvironment:{get isCloud(){return r==="cloud"},get isLocal(){return r==="local"},envOverride:Boolean(r)},version:a==null?void 0:a.Version};return b.set(l),l};export{e as f,C as i};
