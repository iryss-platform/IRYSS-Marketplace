import{j as t}from"./jsx-runtime-B22yQkQ1.js";import{L as y,M as f}from"./chunk-62JRHF6Z-cTfXawhh.js";import{c as h}from"./clx-ypaMnjOU.js";import"./index-CIdkRTUq.js";import"./bundle-mjs-D43wmME5.js";const a=({className:i,variant:s="interactive",...x})=>t.jsx(y,{className:h("transition-fg txt-compact-small-plus rounded-[4px] outline-none","focus-visible:shadow-borders-focus",{"text-ui-fg-interactive hover:text-ui-fg-interactive-hover":s==="interactive","text-ui-fg-base hover:text-ui-fg-subtle":s==="primary"},i),...x});a.__docgenInfo={description:"",methods:[],displayName:"LinkButton",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "interactive"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"interactive"'}]},description:"",defaultValue:{value:'"interactive"',computed:!1}}},composes:["ComponentPropsWithoutRef"]};const P={title:"Admin/Common/LinkButton",component:a,tags:["autodocs"],decorators:[i=>t.jsx(f,{children:t.jsx(i,{})})],argTypes:{variant:{control:"select",options:["primary","interactive"]}}},r={args:{to:"/products",variant:"interactive",children:"View products"}},e={args:{to:"/settings",variant:"primary",children:"Go to settings"}},n={render:()=>t.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[t.jsx(a,{to:"/products",variant:"interactive",children:"Interactive link"}),t.jsx(a,{to:"/settings",variant:"primary",children:"Primary link"})]})};var o,c,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    to: "/products",
    variant: "interactive",
    children: "View products"
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,d,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    to: "/settings",
    variant: "primary",
    children: "Go to settings"
  }
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,v,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>\r
      <LinkButton to="/products" variant="interactive">\r
        Interactive link\r
      </LinkButton>\r
      <LinkButton to="/settings" variant="primary">\r
        Primary link\r
      </LinkButton>\r
    </div>
}`,...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const V=["Interactive","Primary","BothVariants"];export{n as BothVariants,r as Interactive,e as Primary,V as __namedExportsOrder,P as default};
