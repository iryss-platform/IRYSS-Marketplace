import{j as a}from"./jsx-runtime-B22yQkQ1.js";import{r as m}from"./index-CIdkRTUq.js";import{A as Z}from"./arrow-down-tray-DHDPm9gJ.js";import{T as x}from"./text-v69jHjT5.js";import{c as H}from"./clx-ypaMnjOU.js";import"./index-6gKHwO9i.js";import"./index-ByqT07yD.js";import"./bundle-mjs-D43wmME5.js";const G=({label:r,hint:u,multiple:I=!0,hasError:V,formats:O,onUploaded:R,uploadedImage:g=""})=>{const[W,p]=m.useState(!1),f=m.useRef(null),c=m.useRef(null),L=()=>{var e;(e=f.current)==null||e.click()},A=e=>{var s;e.preventDefault(),e.stopPropagation(),(s=e.dataTransfer)!=null&&s.files&&p(!0)},B=e=>{e.preventDefault(),e.stopPropagation(),!(!c.current||c.current.contains(e.relatedTarget))&&p(!1)},h=e=>{if(!e)return;const s=Array.from(e).map(b=>{const J=Math.random().toString(36).substring(7),z=URL.createObjectURL(b);return{id:J,url:z,file:b}});R(s)},_=e=>{var o;e.preventDefault(),e.stopPropagation(),p(!1),h((o=e.dataTransfer)==null?void 0:o.files)},k=async e=>{h(e.target.files)};return a.jsxs("div",{children:[a.jsx("button",{ref:c,type:"button",onClick:L,onDrop:_,onDragOver:e=>e.preventDefault(),onDragEnter:A,onDragLeave:B,className:H("bg-ui-bg-component border-ui-border-strong transition-fg group flex w-full flex-col items-center gap-y-2 rounded-lg border border-dashed p-8","hover:border-ui-border-interactive focus:border-ui-border-interactive","focus:shadow-borders-focus outline-none focus:border-solid",{"!border-ui-border-error":V,"!border-ui-border-interactive":W}),children:g?a.jsx("div",{children:a.jsx("img",{src:g,alt:"",className:"w-32 h-32 rounded-md"})}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"text-ui-fg-subtle group-disabled:text-ui-fg-disabled flex items-center gap-x-2",children:[a.jsx(Z,{}),a.jsx(x,{children:r})]}),!!u&&a.jsx(x,{size:"small",leading:"compact",className:"text-ui-fg-muted group-disabled:text-ui-fg-disabled",children:u})]})}),a.jsx("input",{hidden:!0,"aria-label":"File upload",ref:f,onChange:k,type:"file",accept:O.join(","),multiple:I})]})};G.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{label:{required:!0,tsType:{name:"string"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},hint:{required:!1,tsType:{name:"string"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},formats:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onUploaded:{required:!0,tsType:{name:"signature",type:"function",raw:"(files: FileType[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"FileType"}],raw:"FileType[]"},name:"files"}],return:{name:"void"}}},description:""},uploadedImage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:'""',computed:!1}}}};const oe={title:"Dashboard/Common/FileUpload",component:G,tags:["autodocs"],decorators:[r=>a.jsx("div",{style:{maxWidth:500,padding:20},children:a.jsx(r,{})})]},l={args:{label:"Upload files",formats:["image/png","image/jpeg","image/webp"],hint:"PNG, JPG, or WebP. Max 10MB.",onUploaded:r=>console.log("Uploaded:",r)}},t={args:{label:"Upload a document",multiple:!1,formats:["application/pdf"],hint:"PDF only. Max 5MB.",onUploaded:r=>console.log("Uploaded:",r)}},n={args:{label:"Upload image",formats:["image/png","image/jpeg"],hasError:!0,hint:"File is required",onUploaded:r=>console.log("Uploaded:",r)}},i={args:{label:"Upload logo",formats:["image/png","image/svg+xml"],hint:"PNG or SVG.",uploadedImage:"https://picsum.photos/seed/logo/128/128",onUploaded:r=>console.log("Uploaded:",r)}},d={args:{label:"Import data",multiple:!1,formats:[".csv",".xlsx"],hint:"CSV or Excel spreadsheet.",onUploaded:r=>console.log("Uploaded:",r)}};var U,y,j;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: "Upload files",
    formats: ["image/png", "image/jpeg", "image/webp"],
    hint: "PNG, JPG, or WebP. Max 10MB.",
    onUploaded: files => console.log("Uploaded:", files)
  }
}`,...(j=(y=l.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var v,D,F;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Upload a document",
    multiple: false,
    formats: ["application/pdf"],
    hint: "PDF only. Max 5MB.",
    onUploaded: files => console.log("Uploaded:", files)
  }
}`,...(F=(D=t.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var S,T,P;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "Upload image",
    formats: ["image/png", "image/jpeg"],
    hasError: true,
    hint: "File is required",
    onUploaded: files => console.log("Uploaded:", files)
  }
}`,...(P=(T=n.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var w,E,q;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Upload logo",
    formats: ["image/png", "image/svg+xml"],
    hint: "PNG or SVG.",
    uploadedImage: "https://picsum.photos/seed/logo/128/128",
    onUploaded: files => console.log("Uploaded:", files)
  }
}`,...(q=(E=i.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var M,N,C;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: "Import data",
    multiple: false,
    formats: [".csv", ".xlsx"],
    hint: "CSV or Excel spreadsheet.",
    onUploaded: files => console.log("Uploaded:", files)
  }
}`,...(C=(N=d.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};const se=["Default","SingleFile","WithError","WithUploadedImage","CSVUpload"];export{d as CSVUpload,l as Default,t as SingleFile,n as WithError,i as WithUploadedImage,se as __namedExportsOrder,oe as default};
