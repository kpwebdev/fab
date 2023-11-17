import{u as Q,r as $,a1 as K,b as k,j as e,Z as j,a2 as H,Q as D,i as M}from"./index-78c3eb9e.js";import{u as O}from"./useQuery-9453d533.js";import{u as Z}from"./useMutation-2e12c772.js";import{a as y}from"./index.esm-6a3c759f.js";import{D as z,a as G,b as J}from"./digitalProfileTemplate3.component-4abcbd3c.js";import{F as T,a as w,b as s}from"./formik.esm-c3f751fe.js";import"./html2canvas.esm-85f1a6b6.js";import"./utils-73056672.js";import"./iconBase-ba412146.js";import"./index.esm-1a1dfb4c.js";import"./index.esm-42cea3f9.js";import"./index-0bf2432a.js";import"./index.esm-7afb4e76.js";import"./index-e8e5dbb3.js";const ge=()=>{const E=Q(),{profileTemplate:N}=$.useContext(K),A=k(),{name:F,colors:L}=N,{data:a,isError:W,error:X,isPending:q}=O({queryKey:["user"],queryFn:M}),{mutate:I,isError:Y,error:_,isPending:h}=Z({mutationFn:H,onSuccess:()=>{D.success("Saved Profile details successfully"),E.invalidateQueries({queryKey:["users"]}),A(`/profiles/${a.userName}`)},onError:()=>D.error("Something went wrong. Please contact web admin")});if(q)return e.jsx("div",{className:"t-flex t-justify-center t-my-f-24",children:e.jsx("span",{className:"custom-loader"})});if(F==="template-1")return e.jsx(T,{initialValues:{...L,profileLogo:"",profileImage:"",profileLogoFile:null,profileImageFile:null},onSubmit:async(m,r)=>{var o,v,R,B,U,P,S;r.setSubmitting(!0);const{profileLogoFile:i,profileImageFile:b,profileLogo:n,profileImage:f,bodyTextColor:c,themeColor:p,metaBandBgColor:g,metaRoleTextColor:d,metaUserNameColor:x,metaFullNameColor:u,grayTextColor:C}=m,t=await j("profile",n,"profile-logo"),l=await j("profile",f,"profile-image");r.setSubmitting(!1),I({...N,colors:{bodyTextColor:c,themeColor:p,metaBandBgColor:g,metaRoleTextColor:d,metaUserNameColor:x,metaFullNameColor:u,grayTextColor:C},images:{profileLogo:(t||((R=(v=(o=a==null?void 0:a.card)==null?void 0:o.frontSettings)==null?void 0:v.frontLogoImage)==null?void 0:R.logo)||((U=(B=a==null?void 0:a.profile)==null?void 0:B.images)==null?void 0:U.profileLogo))??"",profileImage:(l||(a==null?void 0:a.profilePic)||((S=(P=a==null?void 0:a.profile)==null?void 0:P.images)==null?void 0:S.profileImage))??""}})},children:({values:m,setFieldValue:r,isSubmitting:i,setSubmitting:b})=>{const{bodyTextColor:n,themeColor:f,metaBandBgColor:c,metaRoleTextColor:p,metaUserNameColor:g,metaFullNameColor:d,grayTextColor:x,profileLogo:u,profileImage:C}=m;return e.jsxs(e.Fragment,{children:[e.jsx(z,{data:a,colors:{bodyTextColor:n,themeColor:f,metaBandBgColor:c,metaRoleTextColor:p,metaUserNameColor:g,metaFullNameColor:d,grayTextColor:x},images:{profileLogo:u,profileImage:C},isEditing:!0}),e.jsxs(w,{className:"t-max-w-[450px] t-mx-auto t-flex t-items-center t-justify-between t-gap-f-8 t-mb-f-16 t-p-f-8 t-rounded-f-8 t-shadow-lg",children:[e.jsxs("div",{className:"t-flex t-flex-col t-gap-f-16",children:[e.jsxs("div",{className:"t-flex t-gap-f-8 t-flex-wrap",children:[e.jsx(s,{type:"color",className:"form-control form-control-color",id:"bodyTextColor",name:"bodyTextColor"}),e.jsx(s,{type:"color",className:"form-control form-control-color",id:"themeColor",name:"themeColor"}),e.jsx(s,{type:"color",className:"form-control form-control-color",id:"metaBandBgColor",name:"metaBandBgColor"}),e.jsx(s,{type:"color",className:"form-control form-control-color",id:"grayTextColor",name:"grayTextColor"})]}),e.jsxs("div",{className:"t-flex t-gap-f-8 t-items-center",children:[e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"profileLogoFile",className:"f-btn-sm f-btn-primary t-flex t-gap-f-8 t-items-center t-cursor-pointer",children:[e.jsx(y,{})," ",e.jsx("span",{children:"Logo"})]}),e.jsx("input",{type:"file",id:"profileLogoFile",name:"profileLogoFile",className:"t-hidden",onChange:t=>{const l=t.target.files[0],o=new FileReader;o.readAsDataURL(l),o.onload=()=>{r("profileLogo",o.result),r("profileLogoFile",l)}}})]}),e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"profileImageFile",className:"f-btn-sm f-btn-primary t-flex t-gap-f-8 t-items-center t-cursor-pointer",children:[e.jsx(y,{})," ",e.jsx("span",{children:"Profile"})]}),e.jsx("input",{type:"file",id:"profileImageFile",name:"profileImageFile",className:"t-hidden",onChange:t=>{const l=t.target.files[0],o=new FileReader;o.readAsDataURL(l),o.onload=()=>{r("profileImage",o.result),r("profileImageFile",l)}}})]})]})]}),e.jsx("button",{type:"submit",className:`f-btn-sm f-btn-primary${i||h?" t-cursor-not-allowed":""}`,disabled:i||h,children:i||h?"Saving...":"Save"})]})]})}});if(F==="template-2")return e.jsx(T,{initialValues:{...L,profileLogo:"",profileImage:"",profileLogoFile:null,profileImageFile:null},onSubmit:async(m,r)=>{r.setSubmitting(!0);const{profileLogoFile:i,profileImageFile:b,profileLogo:n,profileImage:f,bodyTextColor:c,themeColor:p,metaBandBgColor:g,metaRoleTextColor:d,metaUserNameColor:x,metaFullNameColor:u,grayTextColor:C}=m,t=await j("profile",n,"profile-logo"),l=await j("profile",f,"profile-image");r.setSubmitting(!1),I({...N,colors:{bodyTextColor:c,themeColor:p,metaBandBgColor:g,metaRoleTextColor:d,metaUserNameColor:x,metaFullNameColor:u,grayTextColor:C},images:{profileLogo:t??"",profileImage:l??""}})},children:({values:m,setFieldValue:r,isSubmitting:i,setSubmitting:b})=>{const{bodyTextColor:n,themeColor:f,metaBandBgColor:c,metaRoleTextColor:p,metaUserNameColor:g,metaFullNameColor:d,grayTextColor:x,profileLogo:u,profileImage:C}=m;return e.jsxs(e.Fragment,{children:[e.jsx(G,{data:a,colors:{bodyTextColor:n,themeColor:f,metaBandBgColor:c,metaRoleTextColor:p,metaUserNameColor:g,metaFullNameColor:d,grayTextColor:x},images:{profileLogo:u,profileImage:C},isEditing:!0}),e.jsxs(w,{className:"t-max-w-[450px] t-mx-auto t-flex t-items-center t-justify-between t-gap-f-8 t-mb-f-16 t-p-f-8 t-rounded-f-8 t-shadow-lg",children:[e.jsxs("div",{className:"t-flex t-flex-col t-gap-f-16",children:[e.jsxs("div",{className:"t-flex t-gap-f-8 t-flex-wrap",children:[e.jsx(s,{type:"color",className:"form-control form-control-color",id:"bodyTextColor",name:"bodyTextColor"}),e.jsx(s,{type:"color",className:"form-control form-control-color",id:"themeColor",name:"themeColor"}),e.jsx(s,{type:"color",className:"form-control form-control-color",id:"metaBandBgColor",name:"metaBandBgColor"}),e.jsx(s,{type:"color",className:"form-control form-control-color",id:"grayTextColor",name:"grayTextColor"})]}),e.jsxs("div",{className:"t-flex t-gap-f-8 t-items-center",children:[e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"profileLogoFile",className:"f-btn-sm f-btn-primary t-flex t-gap-f-8 t-items-center t-cursor-pointer",children:[e.jsx(y,{})," ",e.jsx("span",{children:"Logo"})]}),e.jsx("input",{type:"file",id:"profileLogoFile",name:"profileLogoFile",className:"t-hidden",onChange:t=>{const l=t.target.files[0],o=new FileReader;o.readAsDataURL(l),o.onload=()=>{r("profileLogo",o.result),r("profileLogoFile",l)}}})]}),e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"profileImageFile",className:"f-btn-sm f-btn-primary t-flex t-gap-f-8 t-items-center t-cursor-pointer",children:[e.jsx(y,{})," ",e.jsx("span",{children:"Profile"})]}),e.jsx("input",{type:"file",id:"profileImageFile",name:"profileImageFile",className:"t-hidden",onChange:t=>{const l=t.target.files[0],o=new FileReader;o.readAsDataURL(l),o.onload=()=>{r("profileImage",o.result),r("profileImageFile",l)}}})]})]})]}),e.jsx("button",{type:"submit",className:`f-btn-sm f-btn-primary${i||h?" t-cursor-not-allowed":""}`,disabled:i||h,children:i||h?"Saving...":"Save"})]})]})}});if(F==="template-3")return e.jsx(T,{initialValues:{...L,profileLogo:"",profileImage:"",profileLogoFile:null,profileImageFile:null},onSubmit:async(m,r)=>{r.setSubmitting(!0);const{profileLogoFile:i,profileImageFile:b,profileLogo:n,profileImage:f,bodyTextColor:c,themeColor:p,metaBandBgColor:g,metaRoleTextColor:d,metaUserNameColor:x,metaFullNameColor:u,grayTextColor:C}=m,t=await j("profile",n,"profile-logo"),l=await j("profile",f,"profile-image");r.setSubmitting(!1),I({...N,colors:{bodyTextColor:c,themeColor:p,metaBandBgColor:g,metaRoleTextColor:d,metaUserNameColor:x,metaFullNameColor:u,grayTextColor:C},images:{profileLogo:t??"",profileImage:l??""}})},children:({values:m,setFieldValue:r,isSubmitting:i,setSubmitting:b})=>{const{bodyTextColor:n,themeColor:f,metaBandBgColor:c,metaRoleTextColor:p,metaUserNameColor:g,metaFullNameColor:d,grayTextColor:x,profileLogo:u,profileImage:C}=m;return e.jsxs(e.Fragment,{children:[e.jsx(J,{data:a,colors:{bodyTextColor:n,themeColor:f,metaBandBgColor:c,metaRoleTextColor:p,metaUserNameColor:g,metaFullNameColor:d,grayTextColor:x},images:{profileLogo:u,profileImage:C},isEditing:!0}),e.jsxs(w,{className:"t-max-w-[450px] t-mx-auto t-flex t-items-center t-justify-between t-gap-f-8 t-mb-f-16 t-p-f-8 t-rounded-f-8 t-shadow-lg",children:[e.jsxs("div",{className:"t-flex t-flex-col t-gap-f-16",children:[e.jsxs("div",{className:"t-flex t-gap-f-8 t-flex-wrap",children:[e.jsx(s,{type:"color",className:"form-control form-control-color",id:"bodyTextColor",name:"bodyTextColor"}),e.jsx(s,{type:"color",className:"form-control form-control-color",id:"themeColor",name:"themeColor"}),e.jsx(s,{type:"color",className:"form-control form-control-color",id:"metaBandBgColor",name:"metaBandBgColor"}),e.jsx(s,{type:"color",className:"form-control form-control-color",id:"grayTextColor",name:"grayTextColor"})]}),e.jsxs("div",{className:"t-flex t-gap-f-8 t-items-center",children:[e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"profileLogoFile",className:"f-btn-sm f-btn-primary t-flex t-gap-f-8 t-items-center t-cursor-pointer",children:[e.jsx(y,{})," ",e.jsx("span",{children:"Logo"})]}),e.jsx("input",{type:"file",id:"profileLogoFile",name:"profileLogoFile",className:"t-hidden",onChange:t=>{const l=t.target.files[0],o=new FileReader;o.readAsDataURL(l),o.onload=()=>{r("profileLogo",o.result),r("profileLogoFile",l)}}})]}),e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"profileImageFile",className:"f-btn-sm f-btn-primary t-flex t-gap-f-8 t-items-center t-cursor-pointer",children:[e.jsx(y,{})," ",e.jsx("span",{children:"Profile"})]}),e.jsx("input",{type:"file",id:"profileImageFile",name:"profileImageFile",className:"t-hidden",onChange:t=>{const l=t.target.files[0],o=new FileReader;o.readAsDataURL(l),o.onload=()=>{r("profileImage",o.result),r("profileImageFile",l)}}})]})]})]}),e.jsx("button",{type:"submit",className:`f-btn-sm f-btn-primary${i||h?" t-cursor-not-allowed":""}`,disabled:i||h,children:i||h?"Saving...":"Save"})]})]})}})};export{ge as default};
