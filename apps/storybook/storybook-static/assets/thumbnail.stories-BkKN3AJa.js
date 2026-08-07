import{j as s}from"./jsx-runtime-B22yQkQ1.js";import{P}from"./photo-CIx8MOc_.js";import{c as W}from"./clx-ypaMnjOU.js";import"./index-CIdkRTUq.js";import"./bundle-mjs-D43wmME5.js";const e=({src:m,alt:B,size:i="base"})=>s.jsx("div",{className:W("bg-ui-bg-component border-ui-border-base flex items-center justify-center overflow-hidden rounded border",{"h-8 w-6":i==="base","h-5 w-4":i==="small"}),children:m?s.jsx("img",{src:m,alt:B,className:"h-full w-full object-cover object-center"}):s.jsx(P,{className:"text-ui-fg-subtle"})});e.__docgenInfo={description:"",methods:[],displayName:"Thumbnail",props:{src:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},alt:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "base"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"base"'}]},description:"",defaultValue:{value:'"base"',computed:!1}}}};const C={title:"Dashboard/Common/Thumbnail",component:e,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","base"]}}},a={args:{}},r={args:{src:"https://picsum.photos/seed/product/200/300",alt:"Product image"}},t={args:{size:"small"}},o={args:{size:"small",src:"https://picsum.photos/seed/small/100/150",alt:"Small product"}},l={args:{src:null,alt:"Missing image"}},n={render:()=>s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[s.jsx(e,{size:"small"}),s.jsx(e,{size:"base"}),s.jsx(e,{size:"small",src:"https://picsum.photos/seed/a/100/150",alt:"Small"}),s.jsx(e,{size:"base",src:"https://picsum.photos/seed/b/200/300",alt:"Base"})]})};var c,p,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {}
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,g,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/seed/product/200/300",
    alt: "Product image"
  }
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,f,x;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: "small"
  }
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var S,z,j;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: "small",
    src: "https://picsum.photos/seed/small/100/150",
    alt: "Small product"
  }
}`,...(j=(z=o.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var T,y,v;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    src: null,
    alt: "Missing image"
  }
}`,...(v=(y=l.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var I,w,N;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: 16
  }}>\r
      <Thumbnail size="small" />\r
      <Thumbnail size="base" />\r
      <Thumbnail size="small" src="https://picsum.photos/seed/a/100/150" alt="Small" />\r
      <Thumbnail size="base" src="https://picsum.photos/seed/b/200/300" alt="Base" />\r
    </div>
}`,...(N=(w=n.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};const O=["Default","WithImage","Small","SmallWithImage","NoImage","BothSizes"];export{n as BothSizes,a as Default,l as NoImage,t as Small,o as SmallWithImage,r as WithImage,O as __namedExportsOrder,C as default};
