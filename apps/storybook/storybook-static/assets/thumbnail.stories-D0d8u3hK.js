import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{P as A}from"./photo-CIx8MOc_.js";import{c as w}from"./clx-ypaMnjOU.js";import"./index-CIdkRTUq.js";import"./bundle-mjs-D43wmME5.js";const s=({src:l,alt:T,size:o="base"})=>e.jsx("div",{className:w("bg-ui-bg-component border-ui-border-base flex shrink-0 items-center justify-center overflow-hidden rounded border",{"h-8 w-6":o==="base","h-5 w-4":o==="small"}),children:l?e.jsx("img",{src:l,alt:T,className:"h-full w-full object-cover object-center"}):e.jsx(A,{className:"text-ui-fg-subtle"})});s.__docgenInfo={description:"",methods:[],displayName:"Thumbnail",props:{src:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},alt:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "base"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"base"'}]},description:"",defaultValue:{value:'"base"',computed:!1}}}};const _={title:"Admin/Common/Thumbnail",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","base"]}}},r={args:{}},t={args:{src:"https://picsum.photos/seed/product/200/300",alt:"Product image"}},n={args:{size:"small"}},a={args:{size:"small",src:"https://picsum.photos/seed/thumb/100/150",alt:"Small product image"}},i={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(s,{size:"small"}),e.jsx("div",{style:{fontSize:"11px",color:"#666",marginTop:"4px"},children:"Small empty"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(s,{size:"base"}),e.jsx("div",{style:{fontSize:"11px",color:"#666",marginTop:"4px"},children:"Base empty"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(s,{size:"small",src:"https://picsum.photos/seed/a/100/150",alt:"Product"}),e.jsx("div",{style:{fontSize:"11px",color:"#666",marginTop:"4px"},children:"Small with img"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(s,{size:"base",src:"https://picsum.photos/seed/b/200/300",alt:"Product"}),e.jsx("div",{style:{fontSize:"11px",color:"#666",marginTop:"4px"},children:"Base with img"})]})]})};var m,c,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {}
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,u,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/seed/product/200/300",
    alt: "Product image"
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,h,v;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: "small"
  }
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var b,y,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: "small",
    src: "https://picsum.photos/seed/thumb/100/150",
    alt: "Small product image"
  }
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var S,z,j;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "16px"
  }}>\r
      <div style={{
      textAlign: "center"
    }}>\r
        <Thumbnail size="small" />\r
        <div style={{
        fontSize: "11px",
        color: "#666",
        marginTop: "4px"
      }}>Small empty</div>\r
      </div>\r
      <div style={{
      textAlign: "center"
    }}>\r
        <Thumbnail size="base" />\r
        <div style={{
        fontSize: "11px",
        color: "#666",
        marginTop: "4px"
      }}>Base empty</div>\r
      </div>\r
      <div style={{
      textAlign: "center"
    }}>\r
        <Thumbnail size="small" src="https://picsum.photos/seed/a/100/150" alt="Product" />\r
        <div style={{
        fontSize: "11px",
        color: "#666",
        marginTop: "4px"
      }}>Small with img</div>\r
      </div>\r
      <div style={{
      textAlign: "center"
    }}>\r
        <Thumbnail size="base" src="https://picsum.photos/seed/b/200/300" alt="Product" />\r
        <div style={{
        fontSize: "11px",
        color: "#666",
        marginTop: "4px"
      }}>Base with img</div>\r
      </div>\r
    </div>
}`,...(j=(z=i.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};const q=["Default","WithImage","SmallSize","SmallWithImage","AllVariants"];export{i as AllVariants,r as Default,n as SmallSize,a as SmallWithImage,t as WithImage,q as __namedExportsOrder,_ as default};
