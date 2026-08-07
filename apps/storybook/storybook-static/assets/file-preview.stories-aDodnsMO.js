import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{A as C}from"./action-menu-xZwejfKu.js";import{T as c}from"./text-v69jHjT5.js";import{S as k}from"./spinner-UC_H4VgD.js";import{I as U}from"./icon-button-vC0JyWE_.js";import{A as q}from"./arrow-down-tray-DHDPm9gJ.js";import"./index-CIdkRTUq.js";import"./tooltip-COW0t6El.js";import"./clx-ypaMnjOU.js";import"./bundle-mjs-D43wmME5.js";import"./index-BzyXaVL0.js";import"./index-JBlh9YZm.js";import"./index-COjQfkKY.js";import"./index-ByqT07yD.js";import"./index-DhYkYC9J.js";import"./index-CHbZemxA.js";import"./floating-ui.dom-Cc2GnI-s.js";import"./index-Cfm_U0qX.js";import"./index-CWCmOpDM.js";import"./dropdown-menu-DjjVi6wj.js";import"./ellipse-mini-solid-3zxHimHt.js";import"./index-CuHOFxEL.js";import"./index-DYKGYn3L.js";import"./chunk-62JRHF6Z-cTfXawhh.js";import"./index-6gKHwO9i.js";const V=({filename:r,url:l,loading:n,activity:p,actions:d,hideThumbnail:A})=>e.jsx("div",{className:"shadow-elevation-card-rest bg-ui-bg-component transition-fg rounded-md px-3 py-2",children:e.jsxs("div",{className:"flex flex-row items-center justify-between gap-2",children:[e.jsxs("div",{className:"flex flex-row items-center gap-3",children:[!A&&e.jsx(S,{}),e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx(c,{size:"small",leading:"compact",className:"truncate max-w-[260px]",children:r}),n&&!!p&&e.jsx(c,{leading:"compact",size:"xsmall",className:"text-ui-fg-interactive",children:p})]})]}),n&&e.jsx(k,{className:"animate-spin"}),!n&&d&&e.jsx(C,{groups:d}),!n&&l&&e.jsx(U,{variant:"transparent",asChild:!0,children:e.jsx("a",{href:l,download:r??`${Date.now()}`,children:e.jsx(q,{})})})]})}),S=()=>e.jsxs("svg",{width:"24",height:"32",viewBox:"0 0 24 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M20 31.75H4C1.92893 31.75 0.25 30.0711 0.25 28V4C0.25 1.92893 1.92893 0.25 4 0.25H15.9431C16.9377 0.25 17.8915 0.645088 18.5948 1.34835L22.6516 5.4052C23.3549 6.10847 23.75 7.06229 23.75 8.05685V28C23.75 30.0711 22.0711 31.75 20 31.75Z",fill:"url(#paint0_linear_6594_388107)",stroke:"url(#paint1_linear_6594_388107)","stroke-width":"0.5"}),e.jsx("path",{opacity:"0.4",d:"M17.7857 12.8125V13.5357H10.3393V10.9643H15.9375C16.9569 10.9643 17.7857 11.7931 17.7857 12.8125ZM6.21429 16.9107V15.0893H8.78571V16.9107H6.21429ZM10.3393 16.9107V15.0893H17.7857V16.9107H10.3393ZM15.9375 21.0357H10.3393V18.4643H17.7857V19.1875C17.7857 20.2069 16.9569 21.0357 15.9375 21.0357ZM6.21429 19.1875V18.4643H8.78571V21.0357H8.0625C7.0431 21.0357 6.21429 20.2069 6.21429 19.1875ZM8.0625 10.9643H8.78571V13.5357H6.21429V12.8125C6.21429 11.7931 7.0431 10.9643 8.0625 10.9643Z",fill:"url(#paint2_linear_6594_388107)",stroke:"url(#paint3_linear_6594_388107)","stroke-width":"0.428571"}),e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"paint0_linear_6594_388107",x1:"12",y1:"0",x2:"12",y2:"32",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{"stop-color":"#F4F4F5"}),e.jsx("stop",{offset:"1","stop-color":"#E4E4E7"})]}),e.jsxs("linearGradient",{id:"paint1_linear_6594_388107",x1:"12",y1:"0",x2:"12",y2:"32",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{"stop-color":"#E4E4E7"}),e.jsx("stop",{offset:"1","stop-color":"#D4D4D8"})]}),e.jsxs("linearGradient",{id:"paint2_linear_6594_388107",x1:"12",y1:"10.75",x2:"12",y2:"21.25",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{"stop-color":"#52525B"}),e.jsx("stop",{offset:"1","stop-color":"#A1A1AA"})]}),e.jsxs("linearGradient",{id:"paint3_linear_6594_388107",x1:"12",y1:"10.75",x2:"12",y2:"21.25",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{"stop-color":"#18181B"}),e.jsx("stop",{offset:"1","stop-color":"#52525B"})]})]})]});V.__docgenInfo={description:"",methods:[],displayName:"FilePreview",props:{filename:{required:!0,tsType:{name:"string"},description:""},url:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},activity:{required:!1,tsType:{name:"string"},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  actions: Action[]\r
}`,signature:{properties:[{key:"actions",value:{name:"Array",elements:[{name:"intersection",raw:`{\r
  icon: ReactNode\r
  label: string\r
  disabled?: boolean\r
  /**\r
   * Optional tooltip to display when a disabled action is hovered.\r
   */\r
  disabledTooltip?: string | ReactNode\r
} & (\r
  | {\r
      to: string\r
      onClick?: never\r
    }\r
  | {\r
      onClick: () => void\r
      to?: never\r
    }\r
)`,elements:[{name:"signature",type:"object",raw:`{\r
  icon: ReactNode\r
  label: string\r
  disabled?: boolean\r
  /**\r
   * Optional tooltip to display when a disabled action is hovered.\r
   */\r
  disabledTooltip?: string | ReactNode\r
}`,signature:{properties:[{key:"icon",value:{name:"ReactNode",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"disabledTooltip",value:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}],required:!1},description:"Optional tooltip to display when a disabled action is hovered."}]}},{name:"unknown"}]}],raw:"Action[]",required:!0}}]}}],raw:"ActionGroup[]"},description:""},hideThumbnail:{required:!1,tsType:{name:"boolean"},description:""}}};const te={title:"Dashboard/Common/FilePreview",component:V,tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{maxWidth:400,padding:20},children:e.jsx(r,{})})]},i={args:{filename:"product-image.png"}},a={args:{filename:"invoice-2024-001.pdf",url:"https://example.com/files/invoice.pdf"}},t={args:{filename:"uploading-file.jpg",loading:!0,activity:"Uploading..."}},s={args:{filename:"data-export.csv",hideThumbnail:!0}},o={args:{filename:"very-long-filename-that-should-be-truncated-in-the-preview-component.xlsx",url:"https://example.com/files/export.xlsx"}};var m,u,x;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    filename: "product-image.png"
  }
}`,...(x=(u=i.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var g,f,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    filename: "invoice-2024-001.pdf",
    url: "https://example.com/files/invoice.pdf"
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var j,v,y;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    filename: "uploading-file.jpg",
    loading: true,
    activity: "Uploading..."
  }
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var w,b,_;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    filename: "data-export.csv",
    hideThumbnail: true
  }
}`,...(_=(b=s.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var T,H,N;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    filename: "very-long-filename-that-should-be-truncated-in-the-preview-component.xlsx",
    url: "https://example.com/files/export.xlsx"
  }
}`,...(N=(H=o.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};const se=["Default","WithDownloadUrl","Loading","HiddenThumbnail","LongFilename"];export{i as Default,s as HiddenThumbnail,t as Loading,o as LongFilename,a as WithDownloadUrl,se as __namedExportsOrder,te as default};
