import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{A as C}from"./action-menu-CvazXu4o.js";import{T as m}from"./text-v69jHjT5.js";import{S as k}from"./spinner-UC_H4VgD.js";import{I as F}from"./icon-button-vC0JyWE_.js";import{A as U}from"./arrow-down-tray-DHDPm9gJ.js";import"./index-CIdkRTUq.js";import"./conditional-tooltip-DRL11-MB.js";import"./tooltip-COW0t6El.js";import"./clx-ypaMnjOU.js";import"./bundle-mjs-D43wmME5.js";import"./index-BzyXaVL0.js";import"./index-JBlh9YZm.js";import"./index-COjQfkKY.js";import"./index-ByqT07yD.js";import"./index-DhYkYC9J.js";import"./index-CHbZemxA.js";import"./floating-ui.dom-Cc2GnI-s.js";import"./index-Cfm_U0qX.js";import"./index-CWCmOpDM.js";import"./dropdown-menu-DjjVi6wj.js";import"./ellipse-mini-solid-3zxHimHt.js";import"./index-CuHOFxEL.js";import"./index-DYKGYn3L.js";import"./chunk-62JRHF6Z-cTfXawhh.js";import"./index-6gKHwO9i.js";const r=({filename:i,url:p,loading:n,activity:d,actions:c,hideThumbnail:A})=>e.jsx("div",{className:"shadow-elevation-card-rest bg-ui-bg-component transition-fg rounded-md px-3 py-2",children:e.jsxs("div",{className:"flex flex-row items-center justify-between gap-2",children:[e.jsxs("div",{className:"flex flex-row items-center gap-3",children:[!A&&e.jsx(q,{}),e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx(m,{size:"small",leading:"compact",className:"truncate max-w-[260px]",children:i}),n&&!!d&&e.jsx(m,{leading:"compact",size:"xsmall",className:"text-ui-fg-interactive",children:d})]})]}),n&&e.jsx(k,{className:"animate-spin"}),!n&&c&&e.jsx(C,{groups:c}),!n&&p&&e.jsx(F,{variant:"transparent",asChild:!0,children:e.jsx("a",{href:p,download:i??`${Date.now()}`,children:e.jsx(U,{})})})]})}),q=()=>e.jsxs("svg",{width:"24",height:"32",viewBox:"0 0 24 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M20 31.75H4C1.92893 31.75 0.25 30.0711 0.25 28V4C0.25 1.92893 1.92893 0.25 4 0.25H15.9431C16.9377 0.25 17.8915 0.645088 18.5948 1.34835L22.6516 5.4052C23.3549 6.10847 23.75 7.06229 23.75 8.05685V28C23.75 30.0711 22.0711 31.75 20 31.75Z",fill:"url(#paint0_linear_6594_388107)",stroke:"url(#paint1_linear_6594_388107)","stroke-width":"0.5"}),e.jsx("path",{opacity:"0.4",d:"M17.7857 12.8125V13.5357H10.3393V10.9643H15.9375C16.9569 10.9643 17.7857 11.7931 17.7857 12.8125ZM6.21429 16.9107V15.0893H8.78571V16.9107H6.21429ZM10.3393 16.9107V15.0893H17.7857V16.9107H10.3393ZM15.9375 21.0357H10.3393V18.4643H17.7857V19.1875C17.7857 20.2069 16.9569 21.0357 15.9375 21.0357ZM6.21429 19.1875V18.4643H8.78571V21.0357H8.0625C7.0431 21.0357 6.21429 20.2069 6.21429 19.1875ZM8.0625 10.9643H8.78571V13.5357H6.21429V12.8125C6.21429 11.7931 7.0431 10.9643 8.0625 10.9643Z",fill:"url(#paint2_linear_6594_388107)",stroke:"url(#paint3_linear_6594_388107)","stroke-width":"0.428571"}),e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"paint0_linear_6594_388107",x1:"12",y1:"0",x2:"12",y2:"32",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{"stop-color":"#F4F4F5"}),e.jsx("stop",{offset:"1","stop-color":"#E4E4E7"})]}),e.jsxs("linearGradient",{id:"paint1_linear_6594_388107",x1:"12",y1:"0",x2:"12",y2:"32",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{"stop-color":"#E4E4E7"}),e.jsx("stop",{offset:"1","stop-color":"#D4D4D8"})]}),e.jsxs("linearGradient",{id:"paint2_linear_6594_388107",x1:"12",y1:"10.75",x2:"12",y2:"21.25",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{"stop-color":"#52525B"}),e.jsx("stop",{offset:"1","stop-color":"#A1A1AA"})]}),e.jsxs("linearGradient",{id:"paint3_linear_6594_388107",x1:"12",y1:"10.75",x2:"12",y2:"21.25",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{"stop-color":"#18181B"}),e.jsx("stop",{offset:"1","stop-color":"#52525B"})]})]})]});r.__docgenInfo={description:"",methods:[],displayName:"FilePreview",props:{filename:{required:!0,tsType:{name:"string"},description:""},url:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},activity:{required:!1,tsType:{name:"string"},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
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
}`,signature:{properties:[{key:"icon",value:{name:"ReactNode",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"disabledTooltip",value:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}],required:!1},description:"Optional tooltip to display when a disabled action is hovered."}]}},{name:"unknown"}]}],raw:"Action[]",required:!0}}]}}],raw:"ActionGroup[]"},description:""},hideThumbnail:{required:!1,tsType:{name:"boolean"},description:""}}};const ae={title:"Vendor/Common/FilePreview",component:r,tags:["autodocs"],decorators:[i=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(i,{})})]},s={args:{filename:"product-catalog.csv"}},t={args:{filename:"inventory-report-2024.xlsx",url:"#"}},a={args:{filename:"large-import-file.csv",loading:!0,activity:"Uploading... 45%"}},o={args:{filename:"order-export.pdf",url:"#",hideThumbnail:!0}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(r,{filename:"product-images.zip",url:"#"}),e.jsx(r,{filename:"uploading-file.csv",loading:!0,activity:"Processing..."}),e.jsx(r,{filename:"completed-import.xlsx",url:"#"})]})};var u,x,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    filename: "product-catalog.csv"
  }
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,h,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    filename: "inventory-report-2024.xlsx",
    url: "#"
  }
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,j,w;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    filename: "large-import-file.csv",
    loading: true,
    activity: "Uploading... 45%"
  }
}`,...(w=(j=a.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var b,_,T;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    filename: "order-export.pdf",
    url: "#",
    hideThumbnail: true
  }
}`,...(T=(_=o.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var H,N,V;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  }}>\r
      <FilePreview filename="product-images.zip" url="#" />\r
      <FilePreview filename="uploading-file.csv" loading activity="Processing..." />\r
      <FilePreview filename="completed-import.xlsx" url="#" />\r
    </div>
}`,...(V=(N=l.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};const oe=["Default","WithDownloadUrl","Loading","HiddenThumbnail","MultipleFiles"];export{s as Default,o as HiddenThumbnail,a as Loading,l as MultipleFiles,t as WithDownloadUrl,oe as __namedExportsOrder,ae as default};
