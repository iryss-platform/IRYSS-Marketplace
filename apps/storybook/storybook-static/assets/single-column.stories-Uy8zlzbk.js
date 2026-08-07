import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{C as h}from"./container-Cr4nqD7r.js";import{H as x}from"./heading-8Larxijo.js";import{T as u}from"./text-v69jHjT5.js";import"./index-CIdkRTUq.js";import"./clx-ypaMnjOU.js";import"./bundle-mjs-D43wmME5.js";import"./index-6gKHwO9i.js";import"./index-ByqT07yD.js";const n=({children:r})=>e.jsx("div",{className:"flex flex-col gap-y-3",children:r});n.__docgenInfo={description:"",methods:[],displayName:"SingleColumnLayout",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const N={title:"Admin/Layout/SingleColumnLayout",component:n,tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{maxWidth:"800px"},children:e.jsx(r,{})})]},t=({title:r,height:p="120px"})=>e.jsx(h,{children:e.jsxs("div",{style:{minHeight:p},children:[e.jsx(x,{level:"h2",children:r}),e.jsx(u,{size:"small",className:"text-ui-fg-subtle",style:{marginTop:"8px"},children:"Section content goes here"})]})}),i={render:()=>e.jsxs(n,{children:[e.jsx(t,{title:"General Information"}),e.jsx(t,{title:"Details",height:"200px"})]})},o={render:()=>e.jsxs(n,{children:[e.jsx(t,{title:"Overview"}),e.jsx(t,{title:"Pricing",height:"160px"}),e.jsx(t,{title:"Variants",height:"240px"}),e.jsx(t,{title:"Metadata",height:"80px"})]})};var a,l,s;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <SingleColumnLayout>\r
      <PlaceholderSection title="General Information" />\r
      <PlaceholderSection title="Details" height="200px" />\r
    </SingleColumnLayout>
}`,...(s=(l=i.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var c,d,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <SingleColumnLayout>\r
      <PlaceholderSection title="Overview" />\r
      <PlaceholderSection title="Pricing" height="160px" />\r
      <PlaceholderSection title="Variants" height="240px" />\r
      <PlaceholderSection title="Metadata" height="80px" />\r
    </SingleColumnLayout>
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const R=["Default","MultipleSections"];export{i as Default,o as MultipleSections,R as __namedExportsOrder,N as default};
