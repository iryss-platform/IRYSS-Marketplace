import{j as e}from"./jsx-runtime-B22yQkQ1.js";import"./index-CIdkRTUq.js";const s=({src:T,size:r=6,rounded:p=!1})=>e.jsx("img",{src:T,alt:"avatar",className:`w-${r} h-${r} border rounded-md object-cover ${p?"rounded-full":""}`,style:{width:`${r*4}px`,height:`${r*4}px`,borderRadius:p?"9999px":"6px",objectFit:"cover",border:"1px solid #e5e7eb"}}),V={title:"Admin/Common/ImageAvatar",component:s,tags:["autodocs"],argTypes:{size:{control:{type:"number",min:4,max:20,step:1}},rounded:{control:"boolean"}}},t={args:{src:"https://picsum.photos/seed/avatar1/100/100",size:8}},n={args:{src:"https://picsum.photos/seed/avatar2/100/100",size:8,rounded:!0}},a={args:{src:"https://picsum.photos/seed/avatar3/100/100",size:5}},o={args:{src:"https://picsum.photos/seed/avatar4/100/100",size:12}},i={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(s,{src:"https://picsum.photos/seed/a1/100/100",size:5}),e.jsx("div",{style:{fontSize:"11px",color:"#666",marginTop:"4px"},children:"Size 5"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(s,{src:"https://picsum.photos/seed/a2/100/100",size:8}),e.jsx("div",{style:{fontSize:"11px",color:"#666",marginTop:"4px"},children:"Size 8"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(s,{src:"https://picsum.photos/seed/a3/100/100",size:12}),e.jsx("div",{style:{fontSize:"11px",color:"#666",marginTop:"4px"},children:"Size 12"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(s,{src:"https://picsum.photos/seed/a4/100/100",size:8,rounded:!0}),e.jsx("div",{style:{fontSize:"11px",color:"#666",marginTop:"4px"},children:"Rounded"})]})]})};var c,d,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/seed/avatar1/100/100",
    size: 8
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,u,x;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/seed/avatar2/100/100",
    size: 8,
    rounded: true
  }
}`,...(x=(u=n.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var g,h,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/seed/avatar3/100/100",
    size: 5
  }
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var z,y,S;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/seed/avatar4/100/100",
    size: 12
  }
}`,...(S=(y=o.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var j,A,f;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "16px"
  }}>\r
      <div style={{
      textAlign: "center"
    }}>\r
        <ImageAvatarVisual src="https://picsum.photos/seed/a1/100/100" size={5} />\r
        <div style={{
        fontSize: "11px",
        color: "#666",
        marginTop: "4px"
      }}>Size 5</div>\r
      </div>\r
      <div style={{
      textAlign: "center"
    }}>\r
        <ImageAvatarVisual src="https://picsum.photos/seed/a2/100/100" size={8} />\r
        <div style={{
        fontSize: "11px",
        color: "#666",
        marginTop: "4px"
      }}>Size 8</div>\r
      </div>\r
      <div style={{
      textAlign: "center"
    }}>\r
        <ImageAvatarVisual src="https://picsum.photos/seed/a3/100/100" size={12} />\r
        <div style={{
        fontSize: "11px",
        color: "#666",
        marginTop: "4px"
      }}>Size 12</div>\r
      </div>\r
      <div style={{
      textAlign: "center"
    }}>\r
        <ImageAvatarVisual src="https://picsum.photos/seed/a4/100/100" size={8} rounded />\r
        <div style={{
        fontSize: "11px",
        color: "#666",
        marginTop: "4px"
      }}>Rounded</div>\r
      </div>\r
    </div>
}`,...(f=(A=i.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};const R=["Default","Rounded","Small","Large","AllVariants"];export{i as AllVariants,t as Default,o as Large,n as Rounded,a as Small,R as __namedExportsOrder,V as default};
