import{r as x,a1 as d,j as e,L as r,V as f,a3 as h,i as j}from"./index-78c3eb9e.js";import{f as u}from"./index.esm-7e038133.js";import{u as N}from"./useQuery-9453d533.js";import{D as g,a as b,b as T}from"./digitalProfileTemplate3.component-4abcbd3c.js";import"./iconBase-ba412146.js";import"./utils-73056672.js";import"./index.esm-1a1dfb4c.js";import"./index.esm-42cea3f9.js";import"./index-0bf2432a.js";import"./index.esm-7afb4e76.js";function I(){const{profileTemplate:c,profileTemplates:t,dispatch:i}=x.useContext(d),{name:a,id:y}=c,l=o=>{const n=o.target.value,p=f(h.UPDATE_PROFILE_TEMPLATE,n);i(p)},{data:s,isError:v,isPending:m}=N({queryKey:["user"],queryFn:j});return m?e.jsx("div",{className:"t-flex t-justify-center t-my-f-24",children:e.jsx("span",{className:"custom-loader"})}):e.jsxs("section",{children:[e.jsxs(r,{to:"/nfc/dashboard",className:"t-flex t-items-center t-gap-f-8 t-p-f-16",children:[e.jsx(u,{}),"Dashboard"]}),e.jsxs("div",{className:"container t-flex t-flex-col t-gap-f-48",children:[e.jsx("header",{className:"",children:e.jsx("div",{className:"t-flex t-items-center t-justify-between",children:e.jsx("h2",{className:"t-text-f-2xl",children:"Choose from Templates"})})}),e.jsxs("div",{className:"t-grid t-grid-cols-3 t-gap-f-48",children:[e.jsxs("div",{className:"t-flex t-flex-col",children:[e.jsxs("header",{className:"t-flex t-justify-between t-text-2xl",children:[e.jsx("label",{htmlFor:"template-1",className:"form-check-label",children:"Template 1"}),e.jsx("input",{type:"radio",name:"template",id:"template-1",value:"template-1",checked:a==="template-1",className:"form-check-input",onChange:l})]}),e.jsx("label",{htmlFor:"template-1",className:"t-grow t-scale-75",children:e.jsx(g,{data:s,colors:t[0].colors})})]}),e.jsxs("div",{className:"t-flex t-flex-col",children:[e.jsxs("header",{className:"t-flex t-justify-between t-text-2xl",children:[e.jsx("label",{htmlFor:"template-2",className:"form-check-label",children:"Template 2"}),e.jsx("input",{type:"radio",name:"template",id:"template-2",value:"template-2",checked:a==="template-2",className:"form-check-input",onChange:l})]}),e.jsx("label",{htmlFor:"template-2",className:"t-grow t-scale-75",children:e.jsx(b,{data:s,colors:t[1].colors})})]}),e.jsxs("div",{className:"t-flex t-flex-col",children:[e.jsxs("header",{className:"t-flex t-justify-between t-text-2xl",children:[e.jsx("label",{htmlFor:"template-3",className:"form-check-label",children:"Template 3"}),e.jsx("input",{type:"radio",name:"template",id:"template-3",value:"template-3",checked:a==="template-3",className:"form-check-input",onChange:l})]}),e.jsx("label",{htmlFor:"template-3",className:"t-grow t-scale-75",children:e.jsx(T,{data:s,colors:t[2].colors})})]})]}),e.jsx("div",{className:"t-text-end",children:e.jsx(r,{className:"f-btn-lg f-btn-primary t-mb-f-16",to:"/nfc/creation/digital-profile",children:"Continue"})})]})]})}export{I as default};
