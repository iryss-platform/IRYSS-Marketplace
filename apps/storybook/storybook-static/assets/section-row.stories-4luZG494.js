import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{T as p}from"./text-v69jHjT5.js";import{c as W}from"./clx-ypaMnjOU.js";import"./index-CIdkRTUq.js";import"./index-6gKHwO9i.js";import"./index-ByqT07yD.js";import"./bundle-mjs-D43wmME5.js";const r=({title:d,value:s,actions:l})=>{const T=typeof s=="string"||!s;return e.jsxs("div",{className:W("text-ui-fg-subtle grid w-full grid-cols-2 items-center gap-4 px-6 py-4",{"grid-cols-[1fr_1fr_28px]":!!l}),children:[e.jsx(p,{size:"small",weight:"plus",leading:"compact",children:d}),T?e.jsx(p,{size:"small",leading:"compact",className:"whitespace-pre-line text-pretty",children:s??"-"}):e.jsx("div",{className:"flex flex-wrap gap-1",children:s}),l&&e.jsx("div",{children:l})]})};r.__docgenInfo={description:"",methods:[],displayName:"SectionRow",props:{title:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"union",raw:"ReactNode | string | null",elements:[{name:"ReactNode"},{name:"string"},{name:"null"}]},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""}}};const J={title:"Admin/Common/SectionRow",component:r,tags:["autodocs"],decorators:[d=>e.jsx("div",{style:{maxWidth:"600px",border:"1px solid #e5e7eb",borderRadius:"8px"},children:e.jsx(d,{})})]},n={args:{title:"Name",value:"John Doe"}},t={args:{title:"Description",value:null}},o={args:{title:"Email",value:"user@example.com",actions:e.jsx("button",{style:{background:"none",border:"1px solid #d1d5db",borderRadius:"4px",padding:"2px 8px",cursor:"pointer",fontSize:"12px"},children:"Edit"})}},a={args:{title:"Tags",value:e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{background:"#e5e7eb",borderRadius:"4px",padding:"2px 8px",fontSize:"12px"},children:"VIP"}),e.jsx("span",{style:{background:"#e5e7eb",borderRadius:"4px",padding:"2px 8px",fontSize:"12px"},children:"Wholesale"})]})}},i={render:()=>e.jsxs("div",{style:{maxWidth:"600px",border:"1px solid #e5e7eb",borderRadius:"8px"},children:[e.jsx(r,{title:"Name",value:"Jane Smith"}),e.jsx("div",{style:{borderTop:"1px solid #e5e7eb"}}),e.jsx(r,{title:"Email",value:"jane@example.com"}),e.jsx("div",{style:{borderTop:"1px solid #e5e7eb"}}),e.jsx(r,{title:"Role",value:"Administrator"})]})};var c,m,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: "Name",
    value: "John Doe"
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,g,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: "Description",
    value: null
  }
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,R,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: "Email",
    value: "user@example.com",
    actions: <button style={{
      background: "none",
      border: "1px solid #d1d5db",
      borderRadius: "4px",
      padding: "2px 8px",
      cursor: "pointer",
      fontSize: "12px"
    }}>\r
        Edit\r
      </button>
  }
}`,...(v=(R=o.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var f,j,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: "Tags",
    value: <>\r
        <span style={{
        background: "#e5e7eb",
        borderRadius: "4px",
        padding: "2px 8px",
        fontSize: "12px"
      }}>\r
          VIP\r
        </span>\r
        <span style={{
        background: "#e5e7eb",
        borderRadius: "4px",
        padding: "2px 8px",
        fontSize: "12px"
      }}>\r
          Wholesale\r
        </span>\r
      </>
  }
}`,...(y=(j=a.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var S,N,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: "600px",
    border: "1px solid #e5e7eb",
    borderRadius: "8px"
  }}>\r
      <SectionRow title="Name" value="Jane Smith" />\r
      <div style={{
      borderTop: "1px solid #e5e7eb"
    }} />\r
      <SectionRow title="Email" value="jane@example.com" />\r
      <div style={{
      borderTop: "1px solid #e5e7eb"
    }} />\r
      <SectionRow title="Role" value="Administrator" />\r
    </div>
}`,...(w=(N=i.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};const q=["Default","WithNullValue","WithActions","WithReactNodeValue","MultipleRows"];export{n as Default,i as MultipleRows,o as WithActions,t as WithNullValue,a as WithReactNodeValue,q as __namedExportsOrder,J as default};
