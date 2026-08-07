import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{T as a}from"./text-v69jHjT5.js";import"./index-CIdkRTUq.js";import"./index-6gKHwO9i.js";import"./clx-ypaMnjOU.js";import"./bundle-mjs-D43wmME5.js";import"./index-ByqT07yD.js";const s=({labelKey:i,descriptionKey:x,children:v})=>e.jsx("div",{className:"flex flex-col gap-2 px-2 pb-2",children:e.jsx("div",{className:"shadow-elevation-card-rest bg-ui-bg-component transition-fg hover:bg-ui-bg-component-hover active:bg-ui-bg-component-pressed group-focus-visible:shadow-borders-interactive-with-active rounded-md px-4 py-2",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"flex flex-1 flex-col",children:[e.jsx(a,{size:"small",leading:"compact",weight:"plus",children:i}),e.jsx(a,{size:"small",leading:"compact",className:"text-ui-fg-subtle",children:x})]}),e.jsx("div",{className:"flex size-7 items-center justify-center",children:v})]})})});s.__docgenInfo={description:"",methods:[],displayName:"Listicle",props:{labelKey:{required:!0,tsType:{name:"string"},description:""},descriptionKey:{required:!0,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const n=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M3.5 8L6.5 11L12.5 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),I={title:"Vendor/Common/Listicle",component:s,tags:["autodocs"],decorators:[i=>e.jsx("div",{style:{maxWidth:"500px"},children:e.jsx(i,{})})]},r={args:{labelKey:"Product Categories",descriptionKey:"Manage your store product categories"}},t={args:{labelKey:"Inventory Management",descriptionKey:"Track stock levels across warehouses",children:e.jsx(n,{})}},o={render:()=>e.jsxs("div",{children:[e.jsx(s,{labelKey:"Store Settings",descriptionKey:"Configure your vendor store details",children:e.jsx(n,{})}),e.jsx(s,{labelKey:"Shipping Options",descriptionKey:"Set up shipping methods and rates"}),e.jsx(s,{labelKey:"Payment Methods",descriptionKey:"Configure accepted payment methods",children:e.jsx(n,{})})]})};var c,d,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    labelKey: "Product Categories",
    descriptionKey: "Manage your store product categories"
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    labelKey: "Inventory Management",
    descriptionKey: "Track stock levels across warehouses",
    children: <CheckIcon />
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,g,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div>\r
      <Listicle labelKey="Store Settings" descriptionKey="Configure your vendor store details" children={<CheckIcon />} />\r
      <Listicle labelKey="Shipping Options" descriptionKey="Set up shipping methods and rates" />\r
      <Listicle labelKey="Payment Methods" descriptionKey="Configure accepted payment methods" children={<CheckIcon />} />\r
    </div>
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const S=["Default","WithIcon","MultipleItems"];export{r as Default,o as MultipleItems,t as WithIcon,S as __namedExportsOrder,I as default};
