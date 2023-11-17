import{b as x,u as p,l as m,Q as o,j as t,L as g,N as s,i as u,O as h}from"./index-78c3eb9e.js";import{F as y}from"./fab-log-blue-trasparent-5aa59d48.js";import{u as j}from"./useQuery-9453d533.js";import{u as b}from"./useMutation-2e12c772.js";import{M as v}from"./index.esm-7afb4e76.js";import{G as N}from"./iconBase-ba412146.js";import{H as L}from"./index.esm-6a3c759f.js";import{b as S}from"./index.esm-7e038133.js";import{a as M}from"./index.esm-1a1dfb4c.js";import"./utils-73056672.js";function D(e){return N({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"User"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M17.438,21.937H6.562a2.5,2.5,0,0,1-2.5-2.5V18.61c0-3.969,3.561-7.2,7.938-7.2s7.938,3.229,7.938,7.2v.827A2.5,2.5,0,0,1,17.438,21.937ZM12,12.412c-3.826,0-6.938,2.78-6.938,6.2v.827a1.5,1.5,0,0,0,1.5,1.5H17.438a1.5,1.5,0,0,0,1.5-1.5V18.61C18.938,15.192,15.826,12.412,12,12.412Z"}},{tag:"path",attr:{d:"M12,9.911a3.924,3.924,0,1,1,3.923-3.924A3.927,3.927,0,0,1,12,9.911Zm0-6.847a2.924,2.924,0,1,0,2.923,2.923A2.926,2.926,0,0,0,12,3.064Z"}}]}]}]})(e)}const k=()=>{const e=x(),i=p(),{data:f,isPending:n,isError:w,error:C}=j({queryKey:["user"],queryFn:u}),{isPending:l,error:d,isError:F,mutate:c}=b({mutationFn:m,onSuccess:()=>{o.success("Successfully logged out."),i.invalidateQueries({queryKey:["users"]}),e("/nfc/authentication/login")},onError:()=>{o.error("Failed to logout."),console.log(d)}});if(l||n)return t.jsx("div",{className:"t-flex t-justify-center t-py-f-48",children:t.jsx("span",{className:"custom-loader"})});const{card:r}=f;return t.jsxs("div",{className:"offcanvas offcanvas-start show t-h-screen t-w-1/3 t-sticky t-top-0","data-bs-scroll":"true","data-bs-backdrop":"false",tabIndex:"-1",id:"offcanvasScrolling","aria-labelledby":"offcanvasScrollingLabel",children:[t.jsxs("header",{className:"offcanvas-header t-flex t-items-start t-flex-col t-gap-f-16",children:[t.jsx(g,{to:"/nfc",children:t.jsx("img",{src:y,alt:"Fab Digital Marketing Logo",className:"t-w-f-120"})}),t.jsx("h5",{className:"t-text-f-l",children:"Dashboard"})]}),t.jsxs("div",{className:"offcanvas-body t-flex t-flex-col t-justify-between",children:[t.jsxs("ul",{className:"t-flex t-flex-col",children:[t.jsx("li",{children:t.jsxs(s,{to:"/nfc/dashboard/my-profile",className:({isActive:a})=>a?"t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 t-text-f-primary-99 t-bg-f-primary-30":"t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 hover:t-bg-f-primary-90",children:[t.jsx(D,{})," ",t.jsx("span",{children:"My Profile"})]})}),!r&&t.jsx("li",{children:t.jsxs(s,{to:"/nfc/dashboard/shop",className:({isActive:a})=>a?"t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 t-text-f-primary-99 t-bg-f-primary-30":"t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 hover:t-bg-f-primary-90",children:[t.jsx(L,{})," ",t.jsx("span",{children:"Shop"})]})}),t.jsx("li",{children:r&&t.jsxs(s,{to:"/nfc/dashboard/orders",className:({isActive:a})=>a?"t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 t-text-f-primary-99 t-bg-f-primary-30":"t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 hover:t-bg-f-primary-90",children:[t.jsx(S,{})," ",t.jsx("span",{children:"Orders"})]})}),t.jsx("li",{children:t.jsxs(s,{to:"/nfc/dashboard/settings",className:({isActive:a})=>a?"t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 t-text-f-primary-99 t-bg-f-primary-30":"t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 hover:t-bg-f-primary-90",children:[t.jsx(M,{})," ",t.jsx("span",{children:"Settings"})]})})]}),t.jsxs("button",{className:"t-flex t-gap-f-8 t-text-f-md",onClick:c,children:[t.jsx(v,{})," ",t.jsx("span",{children:"Logout"})]})]})]})},P=()=>t.jsxs("section",{className:"t-flex",children:[t.jsx(k,{}),t.jsx("div",{className:"t-p-f-24 t-w-2/3",children:t.jsx(h,{})})]});export{P as default};