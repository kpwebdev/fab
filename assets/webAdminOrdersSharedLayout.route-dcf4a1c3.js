import{j as r,N as t,O as a,a5 as o}from"./index-a5b5f57a.js";import{u as i}from"./useQuery-1ddb8325.js";import"./utils-73056672.js";const c=()=>{const{data:s,isError:l,error:n,isPending:d}=i({queryKey:["users"],queryFn:o});return d?r.jsx("div",{className:"t-flex t-justify-center t-py-f-48",children:r.jsx("span",{className:"custom-loader"})}):(console.log("data",s),r.jsxs("div",{children:[r.jsx("header",{children:r.jsx("h2",{className:"t-text-f-3xl",children:"Orders"})}),r.jsxs("ul",{className:"t-flex t-gap-f-24 t-py-f-16",children:[r.jsx("li",{children:r.jsx(t,{to:"/web-admin/orders/all",className:({isActive:e})=>e?"t-border-b-2 t-border-f-primary-40 t-py-f-8":"t-border-b-2 t-border-transparent t-py-f-8 hover:t-border-f-primary-70",children:"All Orders"})}),r.jsx("li",{children:r.jsx(t,{to:"/web-admin/orders/pending",className:({isActive:e})=>e?"t-border-b-2 t-border-f-primary-40 t-py-f-8":"t-border-b-2 t-border-transparent t-py-f-8 hover:t-border-f-primary-70",children:"Pending Orders"})}),r.jsx("li",{children:r.jsx(t,{to:"/web-admin/orders/completed",className:({isActive:e})=>e?"t-border-b-2 t-border-f-primary-40 t-py-f-8":"t-border-b-2 t-border-transparent t-py-f-8 hover:t-border-f-primary-70",children:"Completed Orders"})})]}),r.jsx(a,{context:{data:s}})]}))};export{c as default};
