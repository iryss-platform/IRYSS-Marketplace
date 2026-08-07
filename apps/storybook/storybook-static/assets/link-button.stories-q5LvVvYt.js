import{j as r}from"./jsx-runtime-B22yQkQ1.js";import{L as f,M as h}from"./chunk-62JRHF6Z-cTfXawhh.js";import{c as g}from"./clx-ypaMnjOU.js";import"./index-CIdkRTUq.js";import"./bundle-mjs-D43wmME5.js";const n=({className:i,variant:o="interactive",...y})=>r.jsx(f,{className:g("transition-fg txt-compact-small-plus rounded-[4px] outline-none","focus-visible:shadow-borders-focus",{"text-ui-fg-interactive hover:text-ui-fg-interactive-hover":o==="interactive","text-ui-fg-base hover:text-ui-fg-subtle":o==="primary"},i),...y});n.__docgenInfo={description:"",methods:[],displayName:"LinkButton",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "interactive"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"interactive"'}]},description:"",defaultValue:{value:'"interactive"',computed:!1}}},composes:["ComponentPropsWithoutRef"]};const w={title:"Dashboard/Common/LinkButton",component:n,tags:["autodocs"],decorators:[i=>r.jsx(h,{children:r.jsx("div",{style:{padding:20},children:r.jsx(i,{})})})]},e={args:{to:"/products",variant:"interactive",children:"View all products"}},t={args:{to:"/orders",variant:"primary",children:"View all orders"}},a={render:()=>r.jsxs("div",{style:{display:"flex",gap:16},children:[r.jsx(n,{to:"/products",variant:"interactive",children:"Interactive link"}),r.jsx(n,{to:"/orders",variant:"primary",children:"Primary link"})]})};var s,c,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    to: "/products",
    variant: "interactive",
    children: "View all products"
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,p,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    to: "/orders",
    variant: "primary",
    children: "View all orders"
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,v,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 16
  }}>\r
      <LinkButton to="/products" variant="interactive">\r
        Interactive link\r
      </LinkButton>\r
      <LinkButton to="/orders" variant="primary">\r
        Primary link\r
      </LinkButton>\r
    </div>
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const b=["Interactive","Primary","BothVariants"];export{a as BothVariants,e as Interactive,t as Primary,b as __namedExportsOrder,w as default};
