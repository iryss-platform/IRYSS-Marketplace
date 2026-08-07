import{j as s}from"./jsx-runtime-B22yQkQ1.js";import{c as i}from"./mercur-config-BF2G2LqY.js";import{c as T}from"./clx-ypaMnjOU.js";import"./index-CIdkRTUq.js";import"./bundle-mjs-D43wmME5.js";function k(e){return e.startsWith("http://localhost:9000")||e.startsWith("https://localhost:9000")?e.replace("http://localhost:9000",i.backendUrl).replace("https://localhost:9000",i.backendUrl):e}function r({src:e,size:d=6,rounded:q=!1}){const D=k(e);return s.jsx("img",{src:D,alt:"avatar",className:T(`w-${d} h-${d} border rounded-md object-cover`,q&&"rounded-full")})}r.__docgenInfo={description:"",methods:[],displayName:"ImageAvatar",props:{src:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"6",computed:!1}},rounded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const V={title:"Dashboard/Common/ImageAvatar",component:r,tags:["autodocs"],decorators:[e=>s.jsx("div",{style:{padding:20},children:s.jsx(e,{})})]},t={args:{src:"https://picsum.photos/seed/avatar1/100/100"}},a={args:{src:"https://picsum.photos/seed/avatar2/100/100",size:4}},o={args:{src:"https://picsum.photos/seed/avatar3/200/200",size:12}},c={args:{src:"https://picsum.photos/seed/avatar4/100/100",rounded:!0}},p={args:{src:"https://picsum.photos/seed/avatar5/200/200",size:12,rounded:!0}},n={render:()=>s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[s.jsx(r,{src:"https://picsum.photos/seed/s1/100/100",size:4}),s.jsx(r,{src:"https://picsum.photos/seed/s2/100/100",size:6}),s.jsx(r,{src:"https://picsum.photos/seed/s3/200/200",size:8}),s.jsx(r,{src:"https://picsum.photos/seed/s4/200/200",size:10}),s.jsx(r,{src:"https://picsum.photos/seed/s5/200/200",size:12})]})};var m,u,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/seed/avatar1/100/100"
  }
}`,...(l=(u=t.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var h,g,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/seed/avatar2/100/100",
    size: 4
  }
}`,...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var f,z,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/seed/avatar3/200/200",
    size: 12
  }
}`,...(x=(z=o.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var j,I,S;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/seed/avatar4/100/100",
    rounded: true
  }
}`,...(S=(I=c.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var y,A,b;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/seed/avatar5/200/200",
    size: 12,
    rounded: true
  }
}`,...(b=(A=p.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var L,R,_;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: 12
  }}>\r
      <ImageAvatar src="https://picsum.photos/seed/s1/100/100" size={4} />\r
      <ImageAvatar src="https://picsum.photos/seed/s2/100/100" size={6} />\r
      <ImageAvatar src="https://picsum.photos/seed/s3/200/200" size={8} />\r
      <ImageAvatar src="https://picsum.photos/seed/s4/200/200" size={10} />\r
      <ImageAvatar src="https://picsum.photos/seed/s5/200/200" size={12} />\r
    </div>
}`,...(_=(R=n.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const W=["Default","Small","Large","Rounded","RoundedLarge","MultipleSizes"];export{t as Default,o as Large,n as MultipleSizes,c as Rounded,p as RoundedLarge,a as Small,W as __namedExportsOrder,V as default};
