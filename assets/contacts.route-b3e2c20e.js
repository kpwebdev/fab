import{p,r as h,j as t,L as f}from"./index-78c3eb9e.js";import{b as u,c as C,d as b}from"./index.esm-c02dd2f1.js";import{c as g}from"./index.esm-42cea3f9.js";import{f as y}from"./index.esm-1a1dfb4c.js";import"./iconBase-ba412146.js";const j=(a,r,n)=>a.filter(e=>e.name.toLowerCase().includes(r.toLowerCase())).sort((e,s)=>e.name.localeCompare(s.name)),L=()=>{const{formInput:a,contacts:r}=p(),{search:n,sortBy:o}=a,[l,e]=h.useState(j(r,n));return h.useEffect(()=>{const s=j(r,n);e(s)},[n,o]),t.jsx("div",{className:"t-rounded-f-8 t-shadow-xl t-p-f-16 t-border t-text-f-md",children:t.jsx("form",{children:t.jsxs("table",{className:"table t-align-middle",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{}),t.jsx("th",{children:"Profile"}),t.jsx("th",{children:"Name"}),t.jsx("th",{children:"Contact Information"}),t.jsx("th",{children:"Operations"})]})}),t.jsx("tbody",{children:l.map(({favorite:s,profilePic:c,name:i,mobileNum:d,emailId:x},m)=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("button",{children:s?t.jsx(u,{}):t.jsx(C,{})})}),t.jsx("td",{children:c?t.jsx("img",{src:c,alt:`Profile picture of ${i}`}):t.jsx(g,{className:"t-bg-f-primary-50 t-text-f-primary-98 t-p-f-8 t-text-f-xl t-rounded-full"})}),t.jsx("td",{children:i}),t.jsxs("td",{className:"t-flex t-gap-f-8 t-flex-col",children:[t.jsx(f,{to:`tel:${d}`,target:"_blank",children:d}),t.jsx(f,{to:`mailto:${x}`,target:"_blank",className:"hover:t-no-underline t-underline t-text-f-primary-30",children:x})]}),t.jsx("td",{children:t.jsxs("div",{className:"t-flex t-gap-f-16",children:[t.jsx("button",{type:"button",children:t.jsx(b,{className:"t-text-green-500 hover:t-text-green-300"})}),t.jsx("button",{type:"button",className:"t-text-red-500 hover:t-text-red-300",children:t.jsx(y,{})})]})})]},m))})]})})})};export{L as default};
