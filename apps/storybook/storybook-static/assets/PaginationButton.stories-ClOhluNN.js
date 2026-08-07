import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{c as T}from"./utils-BriokOL4.js";import"./index-CIdkRTUq.js";import"./bundle-mjs-D43wmME5.js";const t=({children:y,className:A="",isActive:N=!1,disabled:i=!1,"data-testid":R,...w})=>e.jsx("button",{className:T("border w-10 h-10 rounded-sm label-md flex items-center justify-center hover:bg-component-hover cursor-pointer",N&&"border-primary",i&&"border text-disabled bg-primary hover:bg-primary cursor-default",A),disabled:i,"data-testid":R??"pagination-button",...w,children:y});t.__docgenInfo={description:"",methods:[],displayName:"PaginationButton",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},isActive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:""}}};const V={title:"B2C/Atoms/PaginationButton",component:t,tags:["autodocs"],argTypes:{isActive:{control:"boolean"},disabled:{control:"boolean"}}},r={args:{children:"1"}},a={args:{children:"3",isActive:!0}},n={args:{children:"5",disabled:!0}},o={args:{children:">"}},s={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{children:"<"}),e.jsx(t,{isActive:!0,children:"1"}),e.jsx(t,{children:"2"}),e.jsx(t,{children:"3"}),e.jsx(t,{children:"4"}),e.jsx(t,{children:"5"}),e.jsx(t,{children:">"})]})};var c,d,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: '1'
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,m,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: '3',
    isActive: true
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,f,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: '5',
    disabled: true
  }
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,P,B;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: '>'
  }
}`,...(B=(P=o.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var v,x,j;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">\r
      <PaginationButton>&lt;</PaginationButton>\r
      <PaginationButton isActive>1</PaginationButton>\r
      <PaginationButton>2</PaginationButton>\r
      <PaginationButton>3</PaginationButton>\r
      <PaginationButton>4</PaginationButton>\r
      <PaginationButton>5</PaginationButton>\r
      <PaginationButton>&gt;</PaginationButton>\r
    </div>
}`,...(j=(x=s.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const E=["Default","Active","Disabled","WithArrow","PaginationRow"];export{a as Active,r as Default,n as Disabled,s as PaginationRow,o as WithArrow,E as __namedExportsOrder,V as default};
