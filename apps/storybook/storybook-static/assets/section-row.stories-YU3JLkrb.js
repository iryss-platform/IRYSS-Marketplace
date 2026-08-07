import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{T as m}from"./text-v69jHjT5.js";import{c as B}from"./clx-ypaMnjOU.js";import{I as b}from"./icon-button-vC0JyWE_.js";import{P as z}from"./pencil-square-DHVttk8H.js";import{B as A}from"./badge-CWQUphHF.js";import"./index-CIdkRTUq.js";import"./index-6gKHwO9i.js";import"./index-ByqT07yD.js";import"./bundle-mjs-D43wmME5.js";import"./spinner-UC_H4VgD.js";const r=({title:l,value:t,actions:c})=>{const E=typeof t=="string"||!t;return e.jsxs("div",{className:B("text-ui-fg-subtle grid w-full grid-cols-2 items-center gap-4 px-6 py-4",{"grid-cols-[1fr_1fr_28px]":!!c}),children:[e.jsx(m,{size:"small",weight:"plus",leading:"compact",children:l}),E?e.jsx(m,{size:"small",leading:"compact",className:"whitespace-pre-line text-pretty",children:t??"-"}):e.jsx("div",{className:"flex flex-wrap gap-1",children:t}),c&&e.jsx("div",{children:c})]})};r.__docgenInfo={description:"",methods:[],displayName:"SectionRow",props:{title:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"union",raw:"ReactNode | string | null",elements:[{name:"ReactNode"},{name:"string"},{name:"null"}]},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""}}};const k={title:"Dashboard/Common/SectionRow",component:r,tags:["autodocs"],decorators:[l=>e.jsx("div",{style:{maxWidth:600,border:"1px solid var(--border-base)",borderRadius:8},children:e.jsx(l,{})})]},a={args:{title:"Name",value:"John Doe"}},s={args:{title:"Description",value:null}},o={args:{title:"Email",value:"john@example.com",actions:e.jsx(b,{size:"small",variant:"transparent",children:e.jsx(z,{})})}},n={args:{title:"Status",value:e.jsx(A,{color:"green",size:"2xsmall",children:"Active"})}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx(r,{title:"Name",value:"John Doe"}),e.jsx(r,{title:"Email",value:"john@example.com"}),e.jsx(r,{title:"Phone",value:"+1 (555) 123-4567"}),e.jsx(r,{title:"Address",value:null})]})};var d,p,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: "Name",
    value: "John Doe"
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var x,g,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: "Description",
    value: null
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,f,j;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: "Email",
    value: "john@example.com",
    actions: <IconButton size="small" variant="transparent">\r
        <PencilSquare />\r
      </IconButton>
  }
}`,...(j=(f=o.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var S,R,w;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: "Status",
    value: <Badge color="green" size="2xsmall">\r
        Active\r
      </Badge>
  }
}`,...(w=(R=n.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var y,N,D;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column"
  }}>\r
      <SectionRow title="Name" value="John Doe" />\r
      <SectionRow title="Email" value="john@example.com" />\r
      <SectionRow title="Phone" value="+1 (555) 123-4567" />\r
      <SectionRow title="Address" value={null} />\r
    </div>
}`,...(D=(N=i.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};const F=["Default","EmptyValue","WithActions","WithReactNodeValue","MultipleRows"];export{a as Default,s as EmptyValue,i as MultipleRows,o as WithActions,n as WithReactNodeValue,F as __namedExportsOrder,k as default};
