import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{r as a}from"./index-CIdkRTUq.js";import{T as L}from"./text-v69jHjT5.js";import{I as T}from"./input-C1pN4sZs.js";import"./index-6gKHwO9i.js";import"./clx-ypaMnjOU.js";import"./bundle-mjs-D43wmME5.js";import"./index-ByqT07yD.js";import"./eye-BqWlHDH4.js";const r=a.forwardRef(({prefix:s="/",style:N,...E},R)=>{const c=a.useRef(null),[_,w]=a.useState(s==="/"?40:0);a.useLayoutEffect(()=>{c.current&&w(c.current.offsetWidth+8)},[s]);const A={...N,paddingLeft:_};return e.jsxs("div",{className:"relative",children:[e.jsx("div",{ref:c,className:"absolute inset-y-0 left-0 z-10 flex min-w-8 items-center justify-center border-r px-2.5",children:e.jsx(L,{className:"text-ui-fg-muted",size:"small",leading:"compact",weight:"plus",children:s})}),e.jsx(T,{ref:R,...E,style:A})]})});r.displayName="HandleInput";r.__docgenInfo={description:"",methods:[],displayName:"HandleInput",props:{prefix:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"/"',computed:!1}}}};const K={title:"Admin/Inputs/HandleInput",component:r,tags:["autodocs"],decorators:[s=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(s,{})})]},t={args:{placeholder:"my-product"}},o={args:{prefix:"/",placeholder:"my-product-handle"}},l={args:{prefix:"https://store.com/",placeholder:"product-slug"}},n={args:{prefix:"/",defaultValue:"summer-sale-2024"}},d={args:{prefix:"/",defaultValue:"locked-handle",disabled:!0}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"400px"},children:[e.jsx(r,{prefix:"/",placeholder:"default-handle"}),e.jsx(r,{prefix:"https://iryss.com/",placeholder:"product-slug"}),e.jsx(r,{prefix:"#",placeholder:"anchor-id"}),e.jsx(r,{prefix:"@",placeholder:"username"})]})};var i,u,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: "my-product"
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var f,x,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    prefix: "/",
    placeholder: "my-product-handle"
  }
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var g,y,j;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    prefix: "https://store.com/",
    placeholder: "product-slug"
  }
}`,...(j=(y=l.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var I,S,W;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    prefix: "/",
    defaultValue: "summer-sale-2024"
  }
}`,...(W=(S=n.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var v,H,P;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    prefix: "/",
    defaultValue: "locked-handle",
    disabled: true
  }
}`,...(P=(H=d.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var V,b,D;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    maxWidth: "400px"
  }}>\r
      <HandleInput prefix="/" placeholder="default-handle" />\r
      <HandleInput prefix="https://iryss.com/" placeholder="product-slug" />\r
      <HandleInput prefix="#" placeholder="anchor-id" />\r
      <HandleInput prefix="@" placeholder="username" />\r
    </div>
}`,...(D=(b=p.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};const M=["Default","WithSlashPrefix","WithCustomPrefix","WithValue","Disabled","AllPrefixes"];export{p as AllPrefixes,t as Default,d as Disabled,l as WithCustomPrefix,o as WithSlashPrefix,n as WithValue,M as __namedExportsOrder,K as default};
