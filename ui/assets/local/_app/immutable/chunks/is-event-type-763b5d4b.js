const o=["workflowExecutionStartedEventAttributes","workflowExecutionCompletedEventAttributes","workflowExecutionFailedEventAttributes","workflowExecutionTimedOutEventAttributes","workflowTaskStartedEventAttributes","workflowTaskScheduledEventAttributes","workflowTaskCompletedEventAttributes","workflowTaskTimedOutEventAttributes","workflowTaskFailedEventAttributes","activityTaskScheduledEventAttributes","activityTaskCompletedEventAttributes","activityTaskStartedEventAttributes","activityTaskFailedEventAttributes","activityTaskTimedOutEventAttributes","timerStartedEventAttributes","timerFiredEventAttributes","activityTaskCancelRequestedEventAttributes","activityTaskCanceledEventAttributes","timerCanceledEventAttributes","markerRecordedEventAttributes","workflowExecutionSignaledEventAttributes","workflowExecutionTerminatedEventAttributes","workflowExecutionCancelRequestedEventAttributes","workflowExecutionCanceledEventAttributes","requestCancelExternalWorkflowExecutionInitiatedEventAttributes","requestCancelExternalWorkflowExecutionFailedEventAttributes","externalWorkflowExecutionCancelRequestedEventAttributes","workflowExecutionContinuedAsNewEventAttributes","startChildWorkflowExecutionInitiatedEventAttributes","startChildWorkflowExecutionFailedEventAttributes","childWorkflowExecutionStartedEventAttributes","childWorkflowExecutionCompletedEventAttributes","childWorkflowExecutionFailedEventAttributes","childWorkflowExecutionCanceledEventAttributes","childWorkflowExecutionTimedOutEventAttributes","childWorkflowExecutionTerminatedEventAttributes","signalExternalWorkflowExecutionInitiatedEventAttributes","signalExternalWorkflowExecutionFailedEventAttributes","externalWorkflowExecutionSignaledEventAttributes","upsertWorkflowSearchAttributesEventAttributes"],s=e=>{for(const i of o)if(i in e)return i},r=(e,i)=>e[i],u=e=>{const i=s(e),n=r(e,i);return{key:i,attributes:n}},t=e=>i=>Boolean(i[e]),E=t("workflowExecutionStartedEventAttributes"),l=t("workflowExecutionCompletedEventAttributes"),c=t("workflowExecutionFailedEventAttributes"),d=t("workflowExecutionTimedOutEventAttributes"),v=t("workflowTaskTimedOutEventAttributes"),k=t("workflowTaskFailedEventAttributes"),w=t("activityTaskScheduledEventAttributes"),A=t("activityTaskStartedEventAttributes"),b=t("activityTaskCompletedEventAttributes"),f=t("activityTaskFailedEventAttributes"),x=t("activityTaskTimedOutEventAttributes"),T=t("timerStartedEventAttributes"),m=t("timerFiredEventAttributes"),C=t("activityTaskCancelRequestedEventAttributes"),W=t("activityTaskCanceledEventAttributes"),h=t("timerCanceledEventAttributes"),a=t("markerRecordedEventAttributes"),y=t("workflowExecutionSignaledEventAttributes"),S=t("workflowExecutionTerminatedEventAttributes"),F=t("workflowExecutionCanceledEventAttributes"),p=t("workflowExecutionContinuedAsNewEventAttributes"),O=t("startChildWorkflowExecutionInitiatedEventAttributes"),g=t("childWorkflowExecutionStartedEventAttributes"),R=t("childWorkflowExecutionCompletedEventAttributes"),q=t("childWorkflowExecutionFailedEventAttributes"),I=t("childWorkflowExecutionCanceledEventAttributes"),N=t("childWorkflowExecutionTimedOutEventAttributes"),K=t("childWorkflowExecutionTerminatedEventAttributes"),B=t("signalExternalWorkflowExecutionInitiatedEventAttributes"),L=t("signalExternalWorkflowExecutionFailedEventAttributes"),M=e=>!(!a(e)||e.markerRecordedEventAttributes.markerName!=="LocalActivity");export{a as A,M as B,O as C,p as D,l as E,E as F,f as a,c as b,d as c,v as d,k as e,u as f,q as g,N as h,x as i,L as j,W as k,h as l,F as m,I as n,S as o,K as p,A as q,C as r,b as s,g as t,R as u,m as v,w,T as x,B as y,y as z};
