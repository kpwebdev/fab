import{u as f,r as c,A as b,a as j,b as w,j as e,L as N,s as y,Q as r,d as v,e as S}from"./index-a5b5f57a.js";import{F as C,a as d}from"./formik.esm-1686ef52.js";import{l as F}from"./index-5de7a07b.js";import{u as m}from"./useMutation-b8516a97.js";import"./index-e8e5dbb3.js";import"./utils-73056672.js";const I={email:"",password:""},K=()=>{const n=f(),{currentUser:u}=c.useContext(b),{webAdminEmail:l}=c.useContext(j),o=w(),{mutate:g,isPending:t,error:i,data:L}=m({mutationFn:y,onSuccess:()=>{r.success("Successfully loggedIn."),n.invalidateQueries({queryKey:["user"]}),console.log("current user",u),console.log("web admin email",l),v.currentUser.email===l?o("/web-admin"):o("/nfc/dashboard")},onError:()=>{r.error("Something went wrong. Please contact admin for support.")}}),{isPending:a,error:E,data:P,mutate:x}=m({mutationFn:S,onSuccess:()=>{r.success("Successfully logged in with google."),n.invalidateQueries({queryKey:["user"]}),o("/nfc/dashboard")},onError:()=>{r.error("Something went wrong. Please contact admin for support.")}});return e.jsxs("div",{className:"t-flex t-flex-col t-gap-f-32 t-text-f-md",children:[e.jsxs("header",{children:[e.jsx("h2",{className:"t-text-f-4xl",children:"Welcome back!"}),e.jsx("h3",{className:"t-text-f-md",children:"Your Platform awaits."})]}),e.jsx(C,{initialValues:I,validationSchema:F,onSubmit:s=>{const{email:h,password:p}=s;g({email:h,password:p})},children:s=>e.jsxs("form",{onSubmit:s.handleSubmit,className:"t-flex t-flex-col t-gap-f-24",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"t-mb-f-8",children:"Email*"}),e.jsx(d,{type:"email",id:"email",name:"email",value:s.values.email,onChange:s.handleChange,required:!0,className:"form-control form-control-lg"}),s.errors.email&&s.touched.email&&e.jsx("p",{className:"t-text-red-500 t-text-f-xs t-mt-f-8",children:s.errors.email})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"t-mb-f-8",children:"Password*"}),e.jsx(d,{type:"password",id:"password",name:"password",value:s.values.password,onChange:s.handleChange,required:!0,className:"form-control form-control-lg"}),s.errors.password&&s.touched.password&&e.jsx("p",{className:"t-text-red-500 t-text-f-xs t-mt-f-8",children:s.errors.password})]}),i&&e.jsx("p",{className:"t-text-red-500 t-bg-red-100 t-py-f-8 t-px-f-2",children:i.message}),e.jsxs("div",{className:"t-flex t-flex-col t-gap-f-16",children:[e.jsx("button",{type:"submit",className:`f-btn-lg f-btn-primary t-text-center${t||a?" t-cursor-not-allowed":""}`,disabled:t||a,children:t?"Logging in...":"Login"}),e.jsxs("div",{className:"t-flex t-gap-f-24 t-items-center",children:[e.jsx("div",{className:"t-h-f-2 t-grow t-bg-f-primary-20"}),e.jsx("span",{children:"or"}),e.jsx("div",{className:"t-h-f-2 t-grow t-bg-f-primary-20"})]}),e.jsx("button",{type:"button",className:`f-btn-lg f-btn-primary-outline${t||a?" t-cursor-not-allowed":""}`,disabled:t||a,onClick:x,children:a?"Logging with google...":"Login with Google"})]})]})}),e.jsxs("p",{children:["Newbie? Your account is just a"," ",e.jsx(N,{to:"/nfc/authentication/sign-up",className:"t-text-f-primary-30",children:"sign-up"})," ","away!"]})]})};export{K as default};
