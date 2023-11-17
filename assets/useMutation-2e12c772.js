var M=(r,t,e)=>{if(!t.has(r))throw TypeError("Cannot "+e)};var s=(r,t,e)=>(M(r,t,"read from private field"),e?e.call(r):t.get(r)),l=(r,t,e)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,e)},c=(r,t,e,i)=>(M(r,t,"write to private field"),i?i.call(r,e):t.set(r,e),e);var d=(r,t,e)=>(M(r,t,"access private method"),e);import{S as R,E as U,F as k,G as C,u as L,r as f}from"./index-78c3eb9e.js";import{s as j}from"./utils-73056672.js";var a,h,o,u,p,E,v,S,y,q=(y=class extends R{constructor(t,e){super();l(this,p);l(this,v);l(this,a,void 0);l(this,h,void 0);l(this,o,void 0);l(this,u,void 0);c(this,h,void 0),c(this,a,t),this.setOptions(e),this.bindMethods(),d(this,p,E).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var i;const e=this.options;this.options=s(this,a).defaultMutationOptions(t),U(e,this.options)||s(this,a).getMutationCache().notify({type:"observerOptionsUpdated",mutation:s(this,o),observer:this}),(i=s(this,o))==null||i.setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||(t=s(this,o))==null||t.removeObserver(this)}onMutationUpdate(t){d(this,p,E).call(this),d(this,v,S).call(this,t)}getCurrentResult(){return s(this,h)}reset(){c(this,o,void 0),d(this,p,E).call(this),d(this,v,S).call(this)}mutate(t,e){var i;return c(this,u,e),(i=s(this,o))==null||i.removeObserver(this),c(this,o,s(this,a).getMutationCache().build(s(this,a),this.options)),s(this,o).addObserver(this),s(this,o).execute(t)}},a=new WeakMap,h=new WeakMap,o=new WeakMap,u=new WeakMap,p=new WeakSet,E=function(){var e;const t=((e=s(this,o))==null?void 0:e.state)??k();c(this,h,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},v=new WeakSet,S=function(t){C.batch(()=>{var e,i,n,m,b,O,g,x;s(this,u)&&this.hasListeners()&&((t==null?void 0:t.type)==="success"?((i=(e=s(this,u)).onSuccess)==null||i.call(e,t.data,s(this,h).variables,s(this,h).context),(m=(n=s(this,u)).onSettled)==null||m.call(n,t.data,null,s(this,h).variables,s(this,h).context)):(t==null?void 0:t.type)==="error"&&((O=(b=s(this,u)).onError)==null||O.call(b,t.error,s(this,h).variables,s(this,h).context),(x=(g=s(this,u)).onSettled)==null||x.call(g,void 0,t.error,s(this,h).variables,s(this,h).context))),this.listeners.forEach(w=>{w(s(this,h))})})},y);function I(r,t){const e=L(t),[i]=f.useState(()=>new q(e,r));f.useEffect(()=>{i.setOptions(r)},[i,r]);const n=f.useSyncExternalStore(f.useCallback(b=>i.subscribe(C.batchCalls(b)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),m=f.useCallback((b,O)=>{i.mutate(b,O).catch(A)},[i]);if(n.error&&j(i.options.throwOnError,[n.error]))throw n.error;return{...n,mutate:m,mutateAsync:n.mutate}}function A(){}export{I as u};