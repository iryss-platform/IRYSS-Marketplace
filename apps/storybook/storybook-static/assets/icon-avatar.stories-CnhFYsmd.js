import{j as r}from"./jsx-runtime-B22yQkQ1.js";import{c as T}from"./clx-ypaMnjOU.js";import"./index-CIdkRTUq.js";import"./bundle-mjs-D43wmME5.js";const a=({size:c="small",variant:u="rounded",children:E,className:N})=>r.jsx("div",{className:T("shadow-borders-base flex size-7 items-center justify-center",u==="squared"&&"rounded-md",u==="rounded"&&"rounded-full","[&>div]:bg-ui-bg-field [&>div]:text-ui-fg-subtle [&>div]:flex [&>div]:size-6 [&>div]:items-center [&>div]:justify-center",{"size-7 rounded-md [&>div]:size-6 [&>div]:rounded-[4px]":c==="small","size-10 rounded-lg [&>div]:size-9 [&>div]:rounded-[6px]":c==="large","size-12 rounded-xl [&>div]:size-11 [&>div]:rounded-[10px]":c==="xlarge"},N),children:r.jsx("div",{children:E})});a.__docgenInfo={description:"Use this component when a design calls for an avatar with an icon.\r\n\r\nThe `<Avatar/>` component from `@medusajs/ui` does not support passing an icon as a child.",methods:[],displayName:"IconAvatar",props:{size:{defaultValue:{value:'"small"',computed:!1},required:!1},variant:{defaultValue:{value:'"rounded"',computed:!1},required:!1}}};const e=()=>r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8 1L10 5.5L15 6.5L11.5 10L12.5 15L8 12.5L3.5 15L4.5 10L1 6.5L6 5.5L8 1Z",fill:"currentColor"})}),R={title:"Vendor/Common/IconAvatar",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","large","xlarge"]},variant:{control:"select",options:["squared","rounded"]}}},n={args:{children:r.jsx(e,{})}},s={args:{size:"small",variant:"rounded",children:r.jsx(e,{})}},o={args:{size:"large",variant:"rounded",children:r.jsx(e,{})}},d={args:{size:"xlarge",variant:"rounded",children:r.jsx(e,{})}},t={args:{size:"large",variant:"squared",children:r.jsx(e,{})}},i={render:()=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[r.jsx(a,{size:"small",variant:"rounded",children:r.jsx(e,{})}),r.jsx(a,{size:"large",variant:"rounded",children:r.jsx(e,{})}),r.jsx(a,{size:"xlarge",variant:"rounded",children:r.jsx(e,{})})]})},l={render:()=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[r.jsx(a,{size:"large",variant:"rounded",children:r.jsx(e,{})}),r.jsx(a,{size:"large",variant:"squared",children:r.jsx(e,{})})]})};var m,p,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <StarIcon />
  }
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,x,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: "small",
    variant: "rounded",
    children: <StarIcon />
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var I,z,f;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    size: "large",
    variant: "rounded",
    children: <StarIcon />
  }
}`,...(f=(z=o.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var j,S,A;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: "xlarge",
    variant: "rounded",
    children: <StarIcon />
  }
}`,...(A=(S=d.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var L,y,q;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: "large",
    variant: "squared",
    children: <StarIcon />
  }
}`,...(q=(y=t.parameters)==null?void 0:y.docs)==null?void 0:q.source}}};var w,b,V;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "16px"
  }}>\r
      <IconAvatar size="small" variant="rounded">\r
        <StarIcon />\r
      </IconAvatar>\r
      <IconAvatar size="large" variant="rounded">\r
        <StarIcon />\r
      </IconAvatar>\r
      <IconAvatar size="xlarge" variant="rounded">\r
        <StarIcon />\r
      </IconAvatar>\r
    </div>
}`,...(V=(b=i.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};var _,C,D;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "16px"
  }}>\r
      <IconAvatar size="large" variant="rounded">\r
        <StarIcon />\r
      </IconAvatar>\r
      <IconAvatar size="large" variant="squared">\r
        <StarIcon />\r
      </IconAvatar>\r
    </div>
}`,...(D=(C=l.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const U=["Default","Small","Large","XLarge","Squared","AllSizes","AllVariants"];export{i as AllSizes,l as AllVariants,n as Default,o as Large,s as Small,t as Squared,d as XLarge,U as __namedExportsOrder,R as default};
