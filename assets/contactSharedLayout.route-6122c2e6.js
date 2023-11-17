import{u as M,r as P,j as t,O as G,o as R,Q as S,i as z}from"./index-78c3eb9e.js";import{c as K}from"./index.esm-bf715849.js";import{G as Q}from"./iconBase-ba412146.js";import{F as V,a as $,b as N}from"./formik.esm-c3f751fe.js";import{P as W}from"./lib-b78f4b15.js";import{u as X}from"./useQuery-9453d533.js";import{u as Y}from"./useMutation-2e12c772.js";import{c as Z}from"./index-c76eee91.js";import"./index-e8e5dbb3.js";import"./utils-73056672.js";var _={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},J=`\r
`,A="\uFEFF",v=e=>Object.assign({},_,e);class ee extends Error{constructor(a){super(a),this.name="CsvGenerationError"}}class te extends Error{constructor(a){super(a),this.name="EmptyHeadersError"}}class ae extends Error{constructor(a){super(a),this.name="CsvDownloadEnvironmentError"}}var h=e=>e,i=e=>e,p=h,f=h,F=h,E=h,se=e=>F(typeof e=="object"?e.key:e),re=e=>E(typeof e=="object"?e.displayLabel:e),ne=(e,...a)=>a.reduce((s,r)=>r(s),e),oe=e=>a=>e.useBom?p(i(a)+A):a,le=e=>a=>e.showTitle?p(i(a)+e.title):a,B=e=>a=>p(i(e)+i(a)+J),L=e=>(a,s)=>ie(e)(f(a+s)),ie=e=>a=>h(i(a)+e.fieldSeparator),ce=(e,a)=>s=>{if(!e.showColumnHeaders)return s;if(a.length<1)throw new te("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let r=f("");for(let n=0;n<a.length;n++){const c=re(a[n]);r=L(e)(r,O(e,c))}return r=f(i(r).slice(0,-1)),B(s)(r)},de=(e,a,s)=>r=>{let n=r;for(var c=0;c<s.length;c++){let m=f("");for(let l=0;l<a.length;l++){const b=se(a[l]),x=typeof s[c][i(b)]>"u"?e.replaceUndefinedWith:s[c][i(b)];m=L(e)(m,O(e,x))}m=f(i(m).slice(0,-1)),n=B(n)(m)}return n},I=e=>+e===e&&(!isFinite(e)||!!(e%1)),O=(e,a)=>{if(e.decimalSeparator==="locale"&&I(a))return a.toLocaleString();if(e.decimalSeparator!=="."&&I(a))return a.toString().replace(".",e.decimalSeparator);if(typeof a=="string"){let s=a;return(e.quoteStrings||e.fieldSeparator&&a.indexOf(e.fieldSeparator)>-1||a.indexOf(`
`)>-1||a.indexOf("\r")>-1)&&(s=e.quoteCharacter+a+e.quoteCharacter),s}if(typeof a=="boolean"&&e.boolDisplay){const s=a?"true":"false";return e.boolDisplay[s]}return a},me=e=>a=>{const s=v(e),r=s.useKeysAsHeaders?Object.keys(a[0]):s.columnHeaders;let n=ne(p(""),oe(s),le(s),ce(s,r),de(s,r,a));if(i(n).length<1)throw new ee("Output is empty. Is your data formatted correctly?");return n},ue=e=>a=>{if(!window)throw new ae("Downloading only supported in a browser environment.");const s=v(e),r=i(a),n=s.useTextFile?"plain":"csv",c=s.useTextFile?"txt":"csv";let m=new Blob([r],{type:`text/${n};charset=utf8;`}),l=document.createElement("a");l.download=`${s.filename}.${c}`,l.href=URL.createObjectURL(m),l.setAttribute("visibility","hidden"),document.body.appendChild(l),l.click(),document.body.removeChild(l)};function fe(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M3,3 L21,21 M3,21 L21,3"}}]})(e)}const he={search:"",sortBy:""},k=v({useKeysAsHeaders:!0}),Fe=()=>{M();const{data:e,error:a,isError:s,isPending:r}=X({queryKey:["user"],queryFn:z}),{contacts:n}=e,{mutate:c,isPending:m,isError:l,error:b}=Y({mutationFn:R,onSuccess:()=>S.success("Contacts has been updated successfully."),onError:()=>{S.error("Something went wrong while updating the contacts. Please contact the web admin"),console.log(a)}}),x=n.map((o,d)=>{const{favorite:u,name:j,mobileNum:C,emailId:w}=o;return{"sl. No.":d,Name:j,"Mobile Number":C,"Email ID":w,favorite:u?"yes":"no"}}),[y,U]=P.useState(he),{search:q,sortBy:H}=y,T=me(k)(x),g=o=>{const d=o.target.name,u=o.target.value;U({...y,[d]:u})};return r?t.jsx("div",{className:"t-flex t-justify-center t-py-f-48",children:t.jsx("span",{className:"custom-loader"})}):t.jsxs("section",{children:[t.jsxs("header",{className:"t-flex t-justify-between",children:[t.jsx("h3",{className:"t-text-f-3xl",children:"Contacts"}),t.jsxs("p",{children:["Total Members: ",t.jsx("span",{className:"t-text-f-primary-40",children:"2000"})]})]}),t.jsxs("div",{className:"t-flex t-justify-between t-my-f-24",children:[t.jsxs("div",{className:"t-flex t-gap-f-8",children:[t.jsx("button",{type:"button",className:"f-btn-lg f-btn-primary","data-bs-toggle":"modal","data-bs-target":"#addContact",children:"+Add new"}),t.jsx("button",{type:"button",className:"f-btn-lg f-btn-primary-outline",onClick:()=>ue(k)(T),children:"Export as CSV"})]}),t.jsxs("form",{className:"t-text-f-md t-flex t-gap-f-8",children:[t.jsxs("div",{className:"t-flex t-items-center t-gap-f-8 t-px-f-8 t-border t-rounded-f-8",children:[t.jsx(K,{}),t.jsx("input",{type:"search",name:"search",value:q,onChange:g,placeholder:"Search...",className:"t-p-f-8 t-outline-none"})]}),t.jsxs("select",{name:"sortBy",id:"sortBy",value:H,onChange:g,className:"t-p-f-8 t-rounded-f-8",children:[t.jsx("option",{value:"",children:"Sort By"}),t.jsx("option",{value:"name",children:"Name"})]})]})]}),t.jsx("div",{children:t.jsx(G,{context:{formInput:y,contacts:n}})}),t.jsx("div",{className:"modal fade",id:"addContact",tabIndex:"-1","aria-labelledby":"addContactLabel","aria-hidden":"true",children:t.jsx("div",{className:"modal-dialog",children:t.jsxs("div",{className:"modal-content",children:[t.jsxs("div",{className:"modal-header",children:[t.jsx("h1",{className:"modal-title fs-5",id:"addContactLabel",children:"Add Contact"}),t.jsx("button",{type:"button",className:"","data-bs-dismiss":"modal","aria-label":"Close",children:t.jsx(fe,{})})]}),t.jsx("div",{className:"modal-body",children:t.jsx(V,{initialValues:{favorite:!1,profilePic:"",name:"",mobileNum:"",emailId:""},validationSchema:Z,onSubmit:o=>{const d=[...n,{...o}];c(d)},children:({errors:o,touched:d,values:u,handleChange:j})=>t.jsxs($,{children:[t.jsxs("div",{className:"form-check t-mb-f-16",children:[t.jsx(N,{type:"checkbox",className:"form-check-input",id:"favorite",name:"favorite"}),t.jsx("label",{htmlFor:"favorite",className:"form-check-label",children:"Favourite"}),o.favorite&&d.favorite&&t.jsx("p",{className:"t-text-red-500 t-py-f-8 t-text-f-sm",children:o.favorite})]}),t.jsxs("div",{className:"t-mb-f-16",children:[t.jsx("label",{htmlFor:"name",className:"form-label",children:"Name"}),t.jsx(N,{type:"text",id:"name",name:"name",className:"form-control"}),o.name&&d.name&&t.jsx("p",{className:"t-text-red-500 t-py-f-8 t-text-f-sm",children:o.name})]}),t.jsxs("div",{className:"t-mb-f-16",children:[t.jsx("label",{htmlFor:"mobileNum",className:"form-label",children:"Number"}),t.jsx(W,{type:"tel",name:"mobileNum",country:"in",inputProps:{id:"mobileNum",name:"mobileNum"},value:u.mobileNum,onChange:(C,w,D,pe)=>j(D)}),o.mobileNum&&d.mobileNum&&t.jsx("p",{className:"t-text-red-500 t-py-f-8 t-text-f-sm",children:o.mobileNum})]}),t.jsxs("div",{className:"t-mb-f-16",children:[t.jsx("label",{htmlFor:"emailId",className:"form-label",children:"Email"}),t.jsx(N,{type:"email",className:"form-control",name:"emailId"}),o.emailId&&d.emailId&&t.jsx("p",{className:"t-text-red-500 t-py-f-8 t-text-f-sm",children:o.emailId})]}),t.jsxs("div",{className:"t-flex t-gap-f-16 t-justify-end",children:[t.jsx("button",{type:"button",className:"f-btn-sm f-btn-danger-outline","data-bs-dismiss":"modal",children:"Close"}),t.jsx("button",{type:"submit",className:"f-btn-sm f-btn-primary",children:m?"Adding the contact":"+Add Contact"})]})]})})})]})})})]})};export{Fe as default};
