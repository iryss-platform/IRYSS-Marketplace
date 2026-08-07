import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{r as E}from"./index-CIdkRTUq.js";import{S as M}from"./switch-CFwM_Xg6.js";import{T as n}from"./text-v69jHjT5.js";import"./index-6gKHwO9i.js";import"./clx-ypaMnjOU.js";import"./bundle-mjs-D43wmME5.js";import"./index-BzyXaVL0.js";import"./index-JBlh9YZm.js";import"./index-COjQfkKY.js";import"./index-ByqT07yD.js";import"./index-DqSPkUQg.js";import"./index-Cfm_U0qX.js";const o=({label:r,description:v,checked:w,optional:j=!1})=>{const[k,R]=E.useState(w??!1);return e.jsxs("div",{className:"bg-ui-bg-component shadow-elevation-card-rest flex items-start gap-x-3 rounded-lg p-3",children:[e.jsx(M,{className:"mt-0.5 shrink-0",checked:k,onCheckedChange:R}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-x-1",children:[e.jsx(n,{size:"small",weight:"plus",leading:"compact",children:r}),j&&e.jsx(n,{size:"small",leading:"compact",className:"text-ui-fg-muted",children:"(optional)"})]}),e.jsx(n,{size:"small",leading:"compact",className:"text-ui-fg-subtle",children:v})]})]})},F={title:"Admin/Common/SwitchBox",component:o,tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(r,{})})]},i={args:{label:"Enable notifications",description:"Receive email notifications for new orders"}},s={args:{label:"Enable notifications",description:"Receive email notifications for new orders",checked:!0}},a={args:{label:"Sales channel",description:"Associate this product with a sales channel",optional:!0}},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"400px"},children:[e.jsx(o,{label:"Email notifications",description:"Receive email notifications for new orders",checked:!0}),e.jsx(o,{label:"SMS notifications",description:"Receive SMS notifications for order updates"}),e.jsx(o,{label:"Marketing emails",description:"Receive marketing and promotional emails",optional:!0})]})};var c,l,d;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "Enable notifications",
    description: "Receive email notifications for new orders"
  }
}`,...(d=(l=i.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Enable notifications",
    description: "Receive email notifications for new orders",
    checked: true
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,f,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Sales channel",
    description: "Associate this product with a sales channel",
    optional: true
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var g,S,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    maxWidth: "400px"
  }}>\r
      <SwitchBoxVisual label="Email notifications" description="Receive email notifications for new orders" checked={true} />\r
      <SwitchBoxVisual label="SMS notifications" description="Receive SMS notifications for order updates" />\r
      <SwitchBoxVisual label="Marketing emails" description="Receive marketing and promotional emails" optional />\r
    </div>
}`,...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const G=["Default","Checked","Optional","MultipleSwitches"];export{s as Checked,i as Default,t as MultipleSwitches,a as Optional,G as __namedExportsOrder,F as default};
