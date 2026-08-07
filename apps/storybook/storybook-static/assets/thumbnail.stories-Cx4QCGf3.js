import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{P as I}from"./photo-CIx8MOc_.js";import{c as w}from"./clx-ypaMnjOU.js";import"./index-CIdkRTUq.js";import"./bundle-mjs-D43wmME5.js";const s=({src:m,alt:v,size:n="base"})=>e.jsx("div",{className:w("bg-ui-bg-component border-ui-border-base flex items-center justify-center overflow-hidden rounded border",{"h-8 w-6":n==="base","h-5 w-4":n==="small"}),children:m?e.jsx("img",{src:m,alt:v,className:"h-full w-full object-cover object-center"}):e.jsx(I,{className:"text-ui-fg-subtle"})});s.__docgenInfo={description:"",methods:[],displayName:"Thumbnail",props:{src:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},alt:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "base"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"base"'}]},description:"",defaultValue:{value:'"base"',computed:!1}}}};const q={title:"Vendor/Common/Thumbnail",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","base"]}}},a={args:{}},r={args:{src:"https://picsum.photos/seed/product/200/300",alt:"Product image"}},t={args:{size:"small"}},o={args:{src:"https://picsum.photos/seed/thumb/200/300",alt:"Small product image",size:"small"}},l={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx(s,{size:"small"}),e.jsx(s,{size:"base"}),e.jsx(s,{size:"small",src:"https://picsum.photos/seed/a/200/300",alt:"Small"}),e.jsx(s,{size:"base",src:"https://picsum.photos/seed/b/200/300",alt:"Base"})]})};var i,c,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,d,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/seed/product/200/300",
    alt: "Product image"
  }
}`,...(h=(d=r.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var g,b,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: "small"
  }
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var x,z,S;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/seed/thumb/200/300",
    alt: "Small product image",
    size: "small"
  }
}`,...(S=(z=o.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var j,T,y;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "12px"
  }}>\r
      <Thumbnail size="small" />\r
      <Thumbnail size="base" />\r
      <Thumbnail size="small" src="https://picsum.photos/seed/a/200/300" alt="Small" />\r
      <Thumbnail size="base" src="https://picsum.photos/seed/b/200/300" alt="Base" />\r
    </div>
}`,...(y=(T=l.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};const D=["Default","WithImage","SmallSize","SmallWithImage","BothSizes"];export{l as BothSizes,a as Default,t as SmallSize,o as SmallWithImage,r as WithImage,D as __namedExportsOrder,q as default};
