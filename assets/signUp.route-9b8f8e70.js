import{b as v,j as s,L as P,f as S,Q as r,h as F,e as U}from"./index-78c3eb9e.js";import{F as E,b as c}from"./formik.esm-c3f751fe.js";import{s as L}from"./index-c76eee91.js";import{u as d}from"./useMutation-2e12c772.js";import{k as u}from"./data-d6a3f8bd.js";import"./index-e8e5dbb3.js";import"./utils-73056672.js";import"./fab-log-blue-trasparent-5aa59d48.js";import"./banner-image-b9731e16.js";import"./index.esm-6a3c759f.js";import"./iconBase-ba412146.js";import"./index.esm-7e038133.js";import"./index.esm-7afb4e76.js";const C={email:"",password:"",confirmPassword:""},K=()=>{const x=v(),{mutate:f,isError:I,error:g,isPending:o}=d({mutationFn:S,onError:()=>{r.error(`Something went wrong: ${g.message}`),console.log(g)},onSuccess:()=>{x("/nfc/dashboard"),r.success("User initiated successfully!")}}),{isPending:t,error:p,isError:k,mutate:h,data:A}=d({mutationFn:F,onSuccess:()=>{f(u),r.success("Successfully registered")},onError:()=>r.error("Something went wrong. Please contact web admin.")}),{isPending:a,error:q,data:G,mutate:w}=d({mutationFn:U,onSuccess:()=>{f(u),r.success("Successfully logged in with google.")},onError:()=>{r.error("Something went wrong. Please contact admin for support.")}});return s.jsxs("div",{className:"t-flex t-flex-col t-gap-f-32 t-text-f-md",children:[s.jsxs("header",{children:[s.jsx("h2",{className:"t-text-f-4xl",children:"Welcome back!"}),s.jsx("h3",{className:"t-text-f-md",children:"Let's get started!"})]}),s.jsx(E,{initialValues:C,validationSchema:L,onSubmit:i=>{const{email:n,password:e}=i;h({email:n,password:e})},children:i=>{const{values:n,errors:e,touched:l,handleChange:m,handleSubmit:b}=i,{email:j,password:N,confirmPassword:y,rememberMe:M}=n;return s.jsxs("form",{onSubmit:b,className:"t-flex t-flex-col t-gap-f-24",children:[s.jsxs("div",{children:[s.jsx("label",{htmlFor:"email",className:"t-mb-f-8",children:"Email*"}),s.jsx(c,{type:"email",id:"email",name:"email",value:j,onChange:m,required:!0,className:"form-control form-control-lg"}),e.email&&l.email&&s.jsx("p",{className:"t-text-red-500 t-text-f-xs t-mt-f-8",children:e.email})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"password",className:"t-mb-f-8",children:"Password*"}),s.jsx(c,{type:"password",id:"password",name:"password",value:N,onChange:m,required:!0,className:"form-control form-control-lg"}),e.password&&l.password&&s.jsx("p",{className:"t-text-red-500 t-text-f-xs t-mt-f-8",children:e.password})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"confirmPassword",className:"t-mb-f-8",children:"Confirm Password*"}),s.jsx(c,{type:"password",id:"confirmPassword",name:"confirmPassword",value:y,onChange:m,required:!0,className:"form-control form-control-lg"}),e.confirmPassword&&l.confirmPassword&&s.jsx("p",{className:"t-text-red-500 t-text-f-xs t-mt-f-8",children:e.confirmPassword})]}),p&&s.jsx("p",{className:"t-text-red-500 t-bg-red-100 t-py-f-8 t-px-f-2",children:p.message}),s.jsxs("div",{className:"t-flex t-flex-col t-gap-f-16",children:[s.jsx("button",{type:"submit",className:`f-btn-lg f-btn-primary t-text-center${t||a||o?" t-cursor-not-allowed t-bg-f-primary-20":""}`,disabled:t||a||o,children:t?"Creating an account...":"Create Account"}),s.jsxs("div",{className:"t-flex t-gap-f-24 t-items-center",children:[s.jsx("div",{className:"t-h-f-2 t-grow t-bg-f-primary-20"}),s.jsx("span",{children:"or"}),s.jsx("div",{className:"t-h-f-2 t-grow t-bg-f-primary-20"})]}),s.jsx("button",{type:"button",className:`f-btn-lg f-btn-primary-outline${t||a||o?" t-cursor-not-allowed t-bg-f-primary-20":""}`,disabled:t||a||o,onClick:w,children:a?"Logging with Google":"Login with Google"})]})]})}}),s.jsxs("p",{children:["Already part of our family?"," ",s.jsx(P,{to:"/nfc/authentication/login",className:"t-text-f-primary-30",children:"Login"})]})]})};export{K as default};