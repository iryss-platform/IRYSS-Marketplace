import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{c as x}from"./utils-BriokOL4.js";import"./index-CIdkRTUq.js";import"./bundle-mjs-D43wmME5.js";const r=({children:f,isActive:A,"data-testid":h})=>e.jsx("p",{className:x("capitalize cursor-pointer px-2 pb-2",A&&"border-b border-primary font-bold"),"data-testid":h??"tabs-trigger",children:f});r.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isActive:{required:!0,tsType:{name:"boolean"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""}}};const S={title:"B2C/Atoms/TabsTrigger",component:r,tags:["autodocs"],argTypes:{isActive:{control:"boolean"}}},s={args:{children:"Description",isActive:!1}},i={args:{children:"Description",isActive:!0}},a={render:()=>e.jsxs("div",{className:"flex items-center gap-4 border-b",children:[e.jsx(r,{isActive:!0,children:"Description"}),e.jsx(r,{isActive:!1,children:"Reviews"}),e.jsx(r,{isActive:!1,children:"Shipping"})]})},t={render:()=>e.jsxs("div",{className:"flex items-center gap-4 border-b",children:[e.jsx(r,{isActive:!1,children:"Product Details"}),e.jsx(r,{isActive:!0,children:"Customer Reviews"}),e.jsx(r,{isActive:!1,children:"Shipping Information"})]})};var c,n,o;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Description',
    isActive: false
  }
}`,...(o=(n=s.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var d,p,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Description',
    isActive: true
  }
}`,...(g=(p=i.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var l,m,T;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4 border-b">\r
      <TabsTrigger isActive={true}>Description</TabsTrigger>\r
      <TabsTrigger isActive={false}>Reviews</TabsTrigger>\r
      <TabsTrigger isActive={false}>Shipping</TabsTrigger>\r
    </div>
}`,...(T=(m=a.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};var b,u,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4 border-b">\r
      <TabsTrigger isActive={false}>Product Details</TabsTrigger>\r
      <TabsTrigger isActive={true}>Customer Reviews</TabsTrigger>\r
      <TabsTrigger isActive={false}>Shipping Information</TabsTrigger>\r
    </div>
}`,...(v=(u=t.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const w=["Inactive","Active","TabsRow","LongLabels"];export{i as Active,s as Inactive,t as LongLabels,a as TabsRow,w as __namedExportsOrder,S as default};
