import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{c as x}from"./utils-BriokOL4.js";import{I as O}from"./next-image-BwaR5r-i.js";import{P as R}from"./index-BlYTR7gl.js";import"./index-CIdkRTUq.js";import"./bundle-mjs-D43wmME5.js";function a({src:m,alt:E,initials:P,size:p="small",className:d,"data-testid":g}){const u="inline-flex items-center justify-center rounded-sm text-primary font-medium border",f={small:"w-8 h-8 text-sm",large:"w-12 h-12 text-lg !font-semibold"};return m?e.jsx(O,{width:150,height:150,src:m,alt:E||"Avatar",className:x(u,f[p],"object-cover",d),"data-testid":g??"avatar"}):e.jsx("div",{className:x(u,f[p],d),"data-testid":g??"avatar",children:P||e.jsx(R,{})})}a.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},initials:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"small"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""}}};const Y={title:"B2C/Atoms/Avatar",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","large"]}}},s={args:{}},r={args:{initials:"JS"}},t={args:{initials:"AB",size:"large"}},i={args:{src:"https://placehold.co/150x150/e2e8f0/475569?text=AV",alt:"User avatar"}},n={args:{src:"https://placehold.co/150x150/e2e8f0/475569?text=AV",alt:"User avatar",size:"large"}},o={args:{size:"small"}},l={args:{size:"large"}},c={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{size:"small"}),e.jsx(a,{initials:"JS",size:"small"}),e.jsx(a,{size:"large"}),e.jsx(a,{initials:"AB",size:"large"})]})};var h,v,A;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {}
}`,...(A=(v=s.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var z,I,j;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    initials: 'JS'
  }
}`,...(j=(I=r.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var S,y,b;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    initials: 'AB',
    size: 'large'
  }
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var W,V,q;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    src: 'https://placehold.co/150x150/e2e8f0/475569?text=AV',
    alt: 'User avatar'
  }
}`,...(q=(V=i.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var L,T,B;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    src: 'https://placehold.co/150x150/e2e8f0/475569?text=AV',
    alt: 'User avatar',
    size: 'large'
  }
}`,...(B=(T=n.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var N,k,w;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(w=(k=o.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var F,J,U;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(U=(J=l.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var _,C,D;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">\r
      <Avatar size="small" />\r
      <Avatar initials="JS" size="small" />\r
      <Avatar size="large" />\r
      <Avatar initials="AB" size="large" />\r
    </div>
}`,...(D=(C=c.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const Z=["Default","WithInitials","WithInitialsLarge","WithImage","WithImageLarge","FallbackIcon","FallbackIconLarge","AllVariants"];export{c as AllVariants,s as Default,o as FallbackIcon,l as FallbackIconLarge,i as WithImage,n as WithImageLarge,r as WithInitials,t as WithInitialsLarge,Z as __namedExportsOrder,Y as default};
