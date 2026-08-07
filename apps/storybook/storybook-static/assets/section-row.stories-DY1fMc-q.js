import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{T as p}from"./text-v69jHjT5.js";import{c as T}from"./clx-ypaMnjOU.js";import"./index-CIdkRTUq.js";import"./index-6gKHwO9i.js";import"./index-ByqT07yD.js";import"./bundle-mjs-D43wmME5.js";const r=({title:d,value:n,actions:l})=>{const E=typeof n=="string"||!n;return e.jsxs("div",{className:T("text-ui-fg-subtle grid w-full grid-cols-2 items-center gap-4 px-6 py-4",{"grid-cols-[1fr_1fr_28px]":!!l}),children:[e.jsx(p,{size:"small",weight:"plus",leading:"compact",children:d}),E?e.jsx(p,{size:"small",leading:"compact",className:"whitespace-pre-line text-pretty",children:n??"-"}):e.jsx("div",{className:"flex flex-wrap gap-1",children:n}),l&&e.jsx("div",{children:l})]})};r.__docgenInfo={description:"",methods:[],displayName:"SectionRow",props:{title:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"union",raw:"ReactNode | string | null",elements:[{name:"ReactNode"},{name:"string"},{name:"null"}]},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""}}};const A={title:"Vendor/Common/SectionRow",component:r,tags:["autodocs"],decorators:[d=>e.jsx("div",{style:{maxWidth:"600px",border:"1px solid #e5e7eb",borderRadius:"8px"},children:e.jsx(d,{})})]},t={args:{title:"Name",value:"John Doe"}},s={args:{title:"Description",value:null}},o={args:{title:"Email",value:"vendor@example.com",actions:e.jsx("button",{style:{background:"none",border:"1px solid #d1d5db",borderRadius:"4px",padding:"2px 8px",cursor:"pointer",fontSize:"12px"},children:"Edit"})}},a={args:{title:"Tags",value:e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{background:"#e5e7eb",borderRadius:"4px",padding:"2px 8px",fontSize:"12px"},children:"Electronics"}),e.jsx("span",{style:{background:"#e5e7eb",borderRadius:"4px",padding:"2px 8px",fontSize:"12px"},children:"Premium"})]})}},i={render:()=>e.jsxs("div",{style:{maxWidth:"600px",border:"1px solid #e5e7eb",borderRadius:"8px"},children:[e.jsx(r,{title:"Store Name",value:"Acme Electronics"}),e.jsx("div",{style:{borderTop:"1px solid #e5e7eb"}}),e.jsx(r,{title:"Contact Email",value:"info@acme.com"}),e.jsx("div",{style:{borderTop:"1px solid #e5e7eb"}}),e.jsx(r,{title:"Country",value:"United States"})]})};var c,m,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: "Name",
    value: "John Doe"
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,g,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: "Description",
    value: null
  }
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,v,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: "Email",
    value: "vendor@example.com",
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
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var R,y,S;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: "Tags",
    value: <>\r
        <span style={{
        background: "#e5e7eb",
        borderRadius: "4px",
        padding: "2px 8px",
        fontSize: "12px"
      }}>\r
          Electronics\r
        </span>\r
        <span style={{
        background: "#e5e7eb",
        borderRadius: "4px",
        padding: "2px 8px",
        fontSize: "12px"
      }}>\r
          Premium\r
        </span>\r
      </>
  }
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var j,N,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: "600px",
    border: "1px solid #e5e7eb",
    borderRadius: "8px"
  }}>\r
      <SectionRow title="Store Name" value="Acme Electronics" />\r
      <div style={{
      borderTop: "1px solid #e5e7eb"
    }} />\r
      <SectionRow title="Contact Email" value="info@acme.com" />\r
      <div style={{
      borderTop: "1px solid #e5e7eb"
    }} />\r
      <SectionRow title="Country" value="United States" />\r
    </div>
}`,...(w=(N=i.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};const q=["Default","WithNullValue","WithActions","WithReactNodeValue","MultipleRows"];export{t as Default,i as MultipleRows,o as WithActions,s as WithNullValue,a as WithReactNodeValue,q as __namedExportsOrder,A as default};
