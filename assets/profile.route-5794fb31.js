import{Y as m,j as e,a4 as l}from"./index-78c3eb9e.js";import{u as n}from"./useQuery-9453d533.js";import{D as f,a as p,b as u}from"./digitalProfileTemplate3.component-4abcbd3c.js";import"./utils-73056672.js";import"./index.esm-1a1dfb4c.js";import"./iconBase-ba412146.js";import"./index.esm-42cea3f9.js";import"./index-0bf2432a.js";import"./index.esm-7afb4e76.js";const q=()=>{const{userName:a}=m(),{data:r,isPending:o,isError:c,error:x}=n({queryKey:["user"],queryFn:()=>l(a)});if(o)return e.jsx("div",{className:"t-flex t-justify-center t-my-f-24",children:e.jsx("span",{className:"custom-loader"})});const{profile:i}=r;if(!i)return e.jsx("div",{className:"t-flex t-justify-center t-my-f-24",children:e.jsx("span",{className:"custom-loader"})});const{name:t,colors:s,id:d}=i;return t==="template-1"?e.jsx(f,{data:r,colors:s}):t==="template-2"?e.jsx(p,{data:r,colors:s}):t==="template-3"?e.jsx(u,{data:r,colors:s}):e.jsx("div",{children:"Profile"})};export{q as default};