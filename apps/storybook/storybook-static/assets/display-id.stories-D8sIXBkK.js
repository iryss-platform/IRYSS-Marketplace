import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{r as F}from"./index-CIdkRTUq.js";import{i as S,t as _}from"./index-1thL5hK0.js";import{u as X}from"./useTranslation-D8qDtbam.js";import{T as B}from"./tooltip-COW0t6El.js";import{c as T}from"./clx-ypaMnjOU.js";import"./index-COjQfkKY.js";import"./spinner-UC_H4VgD.js";import"./icon-button-vC0JyWE_.js";import"./index-6gKHwO9i.js";import"./index-ByqT07yD.js";import"./index-BzyXaVL0.js";import"./index-JBlh9YZm.js";import"./index-DhYkYC9J.js";import"./index-CHbZemxA.js";import"./floating-ui.dom-Cc2GnI-s.js";import"./index-Cfm_U0qX.js";import"./index-CWCmOpDM.js";import"./bundle-mjs-D43wmME5.js";function r({id:s,className:I}){const{t:C}=X(),[D,j]=F.useState(!1),v=()=>{S(s),_.success(C("actions.idCopiedToClipboard"))};return e.jsx(B,{maxWidth:260,content:s,open:D,onOpenChange:j,children:e.jsxs("span",{onClick:v,className:T("cursor-pointer",I),children:["#",s.slice(-7)]})})}r.__docgenInfo={description:"",methods:[],displayName:"DisplayId",props:{id:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Q={title:"Vendor/Common/DisplayId",component:r,tags:["autodocs"],decorators:[s=>e.jsx("div",{style:{padding:"40px",display:"flex",justifyContent:"center"},children:e.jsx(s,{})})]},n={args:{id:"ord_01H9M2YXAVF3R1BXFBPCTNWRFD"}},t={args:{id:"abc1234"}},i={args:{id:"prod_01JABC123456DEFGH789XYZ",className:"text-ui-fg-interactive"}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"flex-start"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{style:{fontSize:"14px",color:"#666",width:"60px"},children:"Order:"}),e.jsx(r,{id:"ord_01H9M2YXAVF3R1BXFBPCTNWRFD"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{style:{fontSize:"14px",color:"#666",width:"60px"},children:"Product:"}),e.jsx(r,{id:"prod_01JABC123456DEFGH789XYZ"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{style:{fontSize:"14px",color:"#666",width:"60px"},children:"Vendor:"}),e.jsx(r,{id:"vendor_01K8N3PQRS4567TUVWX890"})]})]})};var a,p,d;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    id: "ord_01H9M2YXAVF3R1BXFBPCTNWRFD"
  }
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,c,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    id: "abc1234"
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var x,u,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: "prod_01JABC123456DEFGH789XYZ",
    className: "text-ui-fg-interactive"
  }
}`,...(f=(u=i.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,y,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    alignItems: "flex-start"
  }}>\r
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }}>\r
        <span style={{
        fontSize: "14px",
        color: "#666",
        width: "60px"
      }}>Order:</span>\r
        <DisplayId id="ord_01H9M2YXAVF3R1BXFBPCTNWRFD" />\r
      </div>\r
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }}>\r
        <span style={{
        fontSize: "14px",
        color: "#666",
        width: "60px"
      }}>Product:</span>\r
        <DisplayId id="prod_01JABC123456DEFGH789XYZ" />\r
      </div>\r
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }}>\r
        <span style={{
        fontSize: "14px",
        color: "#666",
        width: "60px"
      }}>Vendor:</span>\r
        <DisplayId id="vendor_01K8N3PQRS4567TUVWX890" />\r
      </div>\r
    </div>
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const U=["Default","ShortId","WithCustomClass","MultipleIds"];export{n as Default,o as MultipleIds,t as ShortId,i as WithCustomClass,U as __namedExportsOrder,Q as default};
