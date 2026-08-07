import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{R as M}from"./index-CIdkRTUq.js";import{S as y}from"./switch-CFwM_Xg6.js";import"./index-6gKHwO9i.js";import"./clx-ypaMnjOU.js";import"./bundle-mjs-D43wmME5.js";import"./index-BzyXaVL0.js";import"./index-JBlh9YZm.js";import"./index-COjQfkKY.js";import"./index-ByqT07yD.js";import"./index-DqSPkUQg.js";import"./index-Cfm_U0qX.js";const F={title:"Dashboard/Common/SwitchBox",tags:["autodocs"],decorators:[a=>e.jsx("div",{style:{maxWidth:500,padding:20},children:e.jsx(a,{})})],parameters:{docs:{description:{component:`SwitchBox depends on react-hook-form's Controller and a custom Form\r
component. This story demonstrates the visual shape of the SwitchBox\r
layout using raw @medusajs/ui primitives, so it renders in Storybook\r
without needing a form provider.`}}}},o=({label:a,description:w,checked:v=!1,optional:S=!1})=>{const[k,j]=M.useState(v);return e.jsxs("div",{className:"bg-ui-bg-component shadow-elevation-card-rest flex items-start gap-x-3 rounded-lg p-3",children:[e.jsx(y,{checked:k,onCheckedChange:j}),e.jsxs("div",{children:[e.jsxs("label",{className:"txt-compact-small-plus text-ui-fg-base",children:[a,S&&e.jsx("span",{className:"text-ui-fg-muted ml-1 font-normal",children:"(optional)"})]}),e.jsx("p",{className:"txt-small text-ui-fg-subtle",children:w})]})]})},t={render:()=>e.jsx(o,{label:"Enable notifications",description:"Receive email notifications when new orders are placed."})},s={render:()=>e.jsx(o,{label:"Tax inclusive pricing",description:"All prices include tax by default.",checked:!0})},i={render:()=>e.jsx(o,{label:"Advanced mode",description:"Enable advanced settings for power users.",optional:!0})},r={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(o,{label:"Email notifications",description:"Get notified about new orders via email.",checked:!0}),e.jsx(o,{label:"SMS notifications",description:"Receive text messages for urgent updates."}),e.jsx(o,{label:"Push notifications",description:"Enable browser push notifications.",optional:!0})]})};var n,c,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <SwitchBoxMock label="Enable notifications" description="Receive email notifications when new orders are placed." />
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,p,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <SwitchBoxMock label="Tax inclusive pricing" description="All prices include tax by default." checked />
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,x,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <SwitchBoxMock label="Advanced mode" description="Enable advanced settings for power users." optional />
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var f,b,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12
  }}>\r
      <SwitchBoxMock label="Email notifications" description="Get notified about new orders via email." checked />\r
      <SwitchBoxMock label="SMS notifications" description="Receive text messages for urgent updates." />\r
      <SwitchBoxMock label="Push notifications" description="Enable browser push notifications." optional />\r
    </div>
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const I=["Default","Checked","Optional","MultipleToggles"];export{s as Checked,t as Default,r as MultipleToggles,i as Optional,I as __namedExportsOrder,F as default};
