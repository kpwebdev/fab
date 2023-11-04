import{b as x,u as p,l as m,Q as o,j as t,N as s,i as g,O as u}from"./index-a5b5f57a.js";import{F as h}from"./fab-log-blue-trasparent-5aa59d48.js";import{u as y}from"./useQuery-1ddb8325.js";import{u as j}from"./useMutation-b8516a97.js";import{M as b}from"./index.esm-a24a8163.js";import{G as v}from"./iconBase-8553e80e.js";import{H as N}from"./index.esm-3bbc0206.js";import{b as S}from"./index.esm-c6a81813.js";import{A as M}from"./index.esm-5159fb20.js";import"./utils-73056672.js";function D(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"User"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M17.438,21.937H6.562a2.5,2.5,0,0,1-2.5-2.5V18.61c0-3.969,3.561-7.2,7.938-7.2s7.938,3.229,7.938,7.2v.827A2.5,2.5,0,0,1,17.438,21.937ZM12,12.412c-3.826,0-6.938,2.78-6.938,6.2v.827a1.5,1.5,0,0,0,1.5,1.5H17.438a1.5,1.5,0,0,0,1.5-1.5V18.61C18.938,15.192,15.826,12.412,12,12.412Z"}},{tag:"path",attr:{d:"M12,9.911a3.924,3.924,0,1,1,3.923-3.924A3.927,3.927,0,0,1,12,9.911Zm0-6.847a2.924,2.924,0,1,0,2.923,2.923A2.926,2.926,0,0,0,12,3.064Z"}}]}]}]})(e)}const L=()=>{const e=x(),f=p(),{data:i,isPending:l,isError:w,error:C}=y({queryKey:["user"],queryFn:g}),{isPending:n,error:d,isError:F,mutate:c}=j({mutationFn:m,onSuccess:()=>{o.success("Successfully logged out."),f.invalidateQueries({queryKey:["users"]}),e("/nfc/authentication/login")},onError:()=>{o.error("Failed to logout."),console.log(d)}});if(n||l)return t.jsx("div",{className:"t-flex t-justify-center t-py-f-48",children:t.jsx("span",{className:"custom-loader"})});const{card:r}=i;return t.jsxs("div",{className:"offcanvas offcanvas-start show t-h-screen t-w-1/3 t-sticky t-top-0","data-bs-scroll":"true","data-bs-backdrop":"false",tabIndex:"-1",id:"offcanvasScrolling","aria-labelledby":"offcanvasScrollingLabel",children:[t.jsxs("header",{className:"offcanvas-header t-flex t-items-start t-flex-col t-gap-f-16",children:[t.jsx("img",{src:h,alt:"Fab Digital Marketing Logo",className:"t-w-f-120"}),t.jsx("h5",{className:"t-text-f-l",children:"Dashboard"})]}),t.jsxs("div",{className:"offcanvas-body t-flex t-flex-col t-justify-between",children:[t.jsxs("ul",{className:"t-flex t-flex-col",children:[t.jsx("li",{children:t.jsxs(s,{to:"/nfc/dashboard/my-profile",className:({isActive:a})=>a?"t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 t-text-f-primary-99 t-bg-f-primary-30":"t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 hover:t-bg-f-primary-90",children:[t.jsx(D,{})," ",t.jsx("span",{children:"My Profile"})]})}),!r&&t.jsx("li",{children:t.jsxs(s,{to:"/nfc/dashboard/shop",className:({isActive:a})=>a?"t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 t-text-f-primary-99 t-bg-f-primary-30":"t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 hover:t-bg-f-primary-90",children:[t.jsx(N,{})," ",t.jsx("span",{children:"Shop"})]})}),t.jsx("li",{children:r&&t.jsxs(s,{to:"/nfc/dashboard/orders",className:({isActive:a})=>a?"t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 t-text-f-primary-99 t-bg-f-primary-30":"t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 hover:t-bg-f-primary-90",children:[t.jsx(S,{})," ",t.jsx("span",{children:"Orders"})]})}),t.jsx("li",{children:t.jsxs(s,{to:"/nfc/dashboard/settings",className:({isActive:a})=>a?"t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 t-text-f-primary-99 t-bg-f-primary-30":"t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 hover:t-bg-f-primary-90",children:[t.jsx(M,{})," ",t.jsx("span",{children:"Settings"})]})})]}),t.jsxs("button",{className:"t-flex t-gap-f-8 t-text-f-md",onClick:c,children:[t.jsx(b,{})," ",t.jsx("span",{children:"Logout"})]})]})]})},B=()=>t.jsxs("section",{className:"t-flex",children:[t.jsx(L,{}),t.jsx("div",{className:"t-p-f-24 t-w-2/3",children:t.jsx(u,{})})]});export{B as default};
