import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{A as C}from"./index-BlYTR7gl.js";import{c as p}from"./utils-BriokOL4.js";import"./index-CIdkRTUq.js";import"./bundle-mjs-D43wmME5.js";const F={base:{container:"bg-component-primary border border-primary",text:"text-primary",icon:"#090909"},"base-inverse":{container:"bg-tertiary border border-secondary",text:"text-tertiary",icon:"#fff"},brand:{container:"bg-action-secondary",text:"text-action-on-secondary",icon:"#090909"}},r=({variant:D="base",icon:a,title:d,className:E,"data-testid":k})=>{const m=F[D],z=a&&!d;return e.jsxs("div",{role:"status",className:p("inline-flex items-center justify-center gap-1 px-3 py-2 rounded-sm",m.container,E,z&&"p-2.5"),"data-testid":k??"alert",children:[a&&e.jsx("div",{className:"flex-shrink-0",children:typeof a=="boolean"||a===void 0?e.jsx(C,{color:m.icon,size:16}):a}),d&&e.jsx("p",{className:p("label-sm",m.text),children:d})]})};r.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{variant:{required:!1,tsType:{name:"union",raw:"'base' | 'base-inverse' | 'brand'",elements:[{name:"literal",value:"'base'"},{name:"literal",value:"'base-inverse'"},{name:"literal",value:"'brand'"}]},description:"",defaultValue:{value:"'base'",computed:!1}},icon:{required:!1,tsType:{name:"union",raw:"React.ReactNode | boolean",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"boolean"}]},description:""},title:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""}}};const M={title:"B2C/Atoms/Alert",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["base","base-inverse","brand"]},icon:{control:"boolean"}}},t={args:{title:"This is an alert message"}},s={args:{variant:"base",title:"Base alert",icon:!0}},n={args:{variant:"base-inverse",title:"Base inverse alert",icon:!0}},i={args:{variant:"brand",title:"Brand alert",icon:!0}},o={args:{variant:"base",icon:!0}},c={args:{title:"Alert without icon"}},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{variant:"base",title:"Base variant",icon:!0}),e.jsx(r,{variant:"base-inverse",title:"Base inverse variant",icon:!0}),e.jsx(r,{variant:"brand",title:"Brand variant",icon:!0})]})};var u,v,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'This is an alert message'
  }
}`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var g,x,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'base',
    title: 'Base alert',
    icon: true
  }
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var y,B,A;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'base-inverse',
    title: 'Base inverse alert',
    icon: true
  }
}`,...(A=(B=n.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var j,h,N;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'brand',
    title: 'Brand alert',
    icon: true
  }
}`,...(N=(h=i.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var T,S,R;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'base',
    icon: true
  }
}`,...(R=(S=o.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var I,O,q;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: 'Alert without icon'
  }
}`,...(q=(O=c.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var w,_,V;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">\r
      <Alert variant="base" title="Base variant" icon={true} />\r
      <Alert variant="base-inverse" title="Base inverse variant" icon={true} />\r
      <Alert variant="brand" title="Brand variant" icon={true} />\r
    </div>
}`,...(V=(_=l.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};const P=["Default","Base","BaseInverse","Brand","IconOnly","TitleOnly","AllVariants"];export{l as AllVariants,s as Base,n as BaseInverse,i as Brand,t as Default,o as IconOnly,c as TitleOnly,P as __namedExportsOrder,M as default};
