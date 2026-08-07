import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{r as a}from"./index-CIdkRTUq.js";import{T as L}from"./text-v69jHjT5.js";import{I as T}from"./input-C1pN4sZs.js";import"./index-6gKHwO9i.js";import"./clx-ypaMnjOU.js";import"./bundle-mjs-D43wmME5.js";import"./index-ByqT07yD.js";import"./eye-BqWlHDH4.js";const r=a.forwardRef(({prefix:s="/",style:N,...k},E)=>{const c=a.useRef(null),[R,_]=a.useState(s==="/"?40:0);a.useLayoutEffect(()=>{c.current&&_(c.current.offsetWidth+8)},[s]);const w={...N,paddingLeft:R};return e.jsxs("div",{className:"relative",children:[e.jsx("div",{ref:c,className:"absolute inset-y-0 left-0 z-10 flex min-w-8 items-center justify-center border-r px-2.5",children:e.jsx(L,{className:"text-ui-fg-muted",size:"small",leading:"compact",weight:"plus",children:s})}),e.jsx(T,{ref:E,...k,style:w})]})});r.displayName="HandleInput";r.__docgenInfo={description:"",methods:[],displayName:"HandleInput",props:{prefix:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"/"',computed:!1}}}};const G={title:"Vendor/Inputs/HandleInput",component:r,tags:["autodocs"],decorators:[s=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(s,{})})]},t={args:{placeholder:"my-product-handle"}},o={args:{prefix:"/",placeholder:"product-slug"}},l={args:{prefix:"https://store.com/",placeholder:"my-product"}},n={args:{prefix:"/",defaultValue:"summer-collection-2024"}},p={args:{prefix:"/",defaultValue:"locked-handle",disabled:!0}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"400px"},children:[e.jsx(r,{prefix:"/",placeholder:"slug-handle"}),e.jsx(r,{prefix:"SKU-",placeholder:"product-sku"}),e.jsx(r,{prefix:"https://mystore.com/",placeholder:"page-path"})]})};var i,u,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: "my-product-handle"
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var f,x,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    prefix: "/",
    placeholder: "product-slug"
  }
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var g,y,j;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    prefix: "https://store.com/",
    placeholder: "my-product"
  }
}`,...(j=(y=l.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var S,I,W;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    prefix: "/",
    defaultValue: "summer-collection-2024"
  }
}`,...(W=(I=n.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var v,V,H;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    prefix: "/",
    defaultValue: "locked-handle",
    disabled: true
  }
}`,...(H=(V=p.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var P,b,D;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    maxWidth: "400px"
  }}>\r
      <HandleInput prefix="/" placeholder="slug-handle" />\r
      <HandleInput prefix="SKU-" placeholder="product-sku" />\r
      <HandleInput prefix="https://mystore.com/" placeholder="page-path" />\r
    </div>
}`,...(D=(b=d.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};const J=["Default","WithSlashPrefix","WithCustomPrefix","WithValue","Disabled","AllPrefixes"];export{d as AllPrefixes,t as Default,p as Disabled,l as WithCustomPrefix,o as WithSlashPrefix,n as WithValue,J as __namedExportsOrder,G as default};
