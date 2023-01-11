import{h as O}from"./has-5f7acf44.js";import{i as f,a as m,b as F,c as G,d as L,e as $,h as N,j as B,k as M,l as k,m as T,n as R,o as q,p as j,q as g,r as z,s as D,t as K,u as _,v as H,w as J,x as h,y as v,z as w,A,B as S,C as x,D as C}from"./get-event-categorization-47e7dac9.js";const I=t=>f(t)||m(t)||F(t)||G(t)||L(t)||$(t)||N(t)||B(t)||M(t),Y=t=>c(t)?t.isFailureOrTimedOut:I(t),b=t=>k(t)||T(t)||R(t)||q(t),Z=t=>c(t)?t.isCanceled:b(t),y=t=>j(t)||g(t),tt=t=>c(t)?t.isTerminated:y(t),W=t=>z(t)?String(t.activityTaskStartedEventAttributes.scheduledEventId):k(t)?String(t.activityTaskCanceledEventAttributes.scheduledEventId):D(t)?String(t.activityTaskCancelRequestedEventAttributes.scheduledEventId):m(t)?String(t.activityTaskFailedEventAttributes.scheduledEventId):f(t)?String(t.activityTaskTimedOutEventAttributes.scheduledEventId):K(t)?String(t.activityTaskCompletedEventAttributes.scheduledEventId):_(t)?String(t.childWorkflowExecutionStartedEventAttributes.initiatedEventId):g(t)?String(t.childWorkflowExecutionTerminatedEventAttributes.initiatedEventId):H(t)?String(t.childWorkflowExecutionCompletedEventAttributes.initiatedEventId):J(t)?String(t.timerFiredEventAttributes.startedEventId):T(t)?String(t.timerCanceledEventAttributes.startedEventId):t.id,P=t=>{var i,r,s,e,u,l,o,d,n;if(t){if(h(t))return(r=(i=t.activityTaskScheduledEventAttributes)==null?void 0:i.activityType)==null?void 0:r.name;if(v(t))return`Timer ${(s=t.timerStartedEventAttributes)==null?void 0:s.timerId} (${(e=t.timerStartedEventAttributes)==null?void 0:e.startToFireTimeout})`;if(w(t))return`Signal: ${(u=t.signalExternalWorkflowExecutionInitiatedEventAttributes)==null?void 0:u.signalName}`;if(A(t))return`Signal received: ${(l=t.workflowExecutionSignaledEventAttributes)==null?void 0:l.signalName}`;if(S(t))return x(t)?"Local Activity":`Marker: ${(o=t.markerRecordedEventAttributes)==null?void 0:o.markerName}`;if(C(t))return`Child Workflow: ${(n=(d=t.startChildWorkflowExecutionInitiatedEventAttributes)==null?void 0:d.workflowType)==null?void 0:n.name}`}},E=({events:t})=>{let i=0,r;for(const s of t.values()){const e=Number(s.id);e>=i&&(i=e,r=s)}return r},a=t=>{const i=W(t),r=P(t),{timestamp:s,category:e,classification:u}=t,l=t,o=new Map,d=new Set;return o.set(t.id,t),d.add(t.id),{id:i,name:r,events:o,eventIds:d,initialEvent:l,timestamp:s,category:e,classification:u,get eventTime(){var n;return(n=this.lastEvent)==null?void 0:n.eventTime},get attributes(){var n;return(n=E(this))==null?void 0:n.attributes},get eventList(){return Array.from(this.events,([n,p])=>p)},get lastEvent(){return E(this)},get isFailureOrTimedOut(){return Boolean(this.eventList.find(I))},get isCanceled(){return Boolean(this.eventList.find(b))},get isTerminated(){return Boolean(this.eventList.find(y))}}},Q=t=>{if(h(t)||C(t)||v(t)||w(t)||A(t))return a(t);if(S(t))return x(t),a(t)},U=(t,i)=>{t&&(t.events.set(i.id,i),t.eventIds.add(i.id),t.timestamp=i.timestamp)},it=t=>{const i={};for(const r of t){const s=W(r),e=Q(r);e?i[e.id]=e:U(i[s],r)}return Object.values(i)},c=t=>t==null?!1:O(t,"events");export{Z as a,tt as b,Y as e,it as g,c as i};
