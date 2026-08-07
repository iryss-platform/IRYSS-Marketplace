import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{I as o}from"./icon-avatar-DFmRk6FP.js";import"./index-CIdkRTUq.js";import"./clx-ypaMnjOU.js";import"./bundle-mjs-D43wmME5.js";const j={title:"Dashboard/Common/LogoBox",tags:["autodocs"],decorators:[a=>e.jsx("div",{style:{padding:40,display:"flex",flexDirection:"column",alignItems:"center"},children:e.jsx(a,{})})],parameters:{docs:{description:{component:"AvatarBox depends on `virtual:mercur/config` which is only available at\r\nbuild time. This story shows the visual shape using the underlying\r\nIconAvatar component with a similar layout."}}}},h=({letter:a})=>e.jsxs("svg",{viewBox:"0 0 400 400",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{borderRadius:10},children:[e.jsx("rect",{width:"400",height:"400",rx:"40",fill:"#18181B"}),e.jsx("text",{x:"200",y:"200",textAnchor:"middle",dominantBaseline:"central",fill:"white",fontSize:"200",fontWeight:"bold",fontFamily:"Inter, system-ui, sans-serif",children:a})]}),t={render:()=>e.jsx(o,{size:"xlarge",className:"bg-ui-button-neutral shadow-buttons-neutral relative mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-xl",children:e.jsx(h,{letter:"M"})})},r={render:()=>e.jsx(o,{size:"xlarge",className:"bg-ui-button-neutral shadow-buttons-neutral relative mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-xl",children:e.jsx(h,{letter:"I"})})},s={render:()=>e.jsx(o,{size:"xlarge",className:"bg-ui-button-neutral shadow-buttons-neutral relative mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-xl",children:e.jsx("img",{src:"https://picsum.photos/seed/logo/100/100",alt:"Logo",style:{height:"100%",width:"100%",borderRadius:10,objectFit:"cover"}})})};var n,l,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <IconAvatar size="xlarge" className="bg-ui-button-neutral shadow-buttons-neutral relative mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-xl">\r
      <FallbackLetter letter="M" />\r
    </IconAvatar>
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var c,u,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <IconAvatar size="xlarge" className="bg-ui-button-neutral shadow-buttons-neutral relative mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-xl">\r
      <FallbackLetter letter="I" />\r
    </IconAvatar>
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,x,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <IconAvatar size="xlarge" className="bg-ui-button-neutral shadow-buttons-neutral relative mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-xl">\r
      <img src="https://picsum.photos/seed/logo/100/100" alt="Logo" style={{
      height: "100%",
      width: "100%",
      borderRadius: 10,
      objectFit: "cover"
    }} />\r
    </IconAvatar>
}`,...(p=(x=s.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};const y=["DefaultFallback","CustomLetter","WithImage"];export{r as CustomLetter,t as DefaultFallback,s as WithImage,y as __namedExportsOrder,j as default};
