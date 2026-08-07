import{j as r}from"./jsx-runtime-B22yQkQ1.js";import{r as j}from"./index-CIdkRTUq.js";import{i as A,t as B}from"./index-1thL5hK0.js";import{u as F}from"./useTranslation-D8qDtbam.js";import{T as H}from"./tooltip-COW0t6El.js";import{c as N}from"./clx-ypaMnjOU.js";import"./index-COjQfkKY.js";import"./spinner-UC_H4VgD.js";import"./icon-button-vC0JyWE_.js";import"./index-6gKHwO9i.js";import"./index-ByqT07yD.js";import"./index-BzyXaVL0.js";import"./index-JBlh9YZm.js";import"./index-DhYkYC9J.js";import"./index-CHbZemxA.js";import"./floating-ui.dom-Cc2GnI-s.js";import"./index-Cfm_U0qX.js";import"./index-CWCmOpDM.js";import"./bundle-mjs-D43wmME5.js";function e({id:s,className:_}){const{t:y}=F(),[I,h]=j.useState(!1),E=()=>{A(s),B.success(y("actions.idCopiedToClipboard"))};return r.jsx(H,{maxWidth:260,content:s,open:I,onOpenChange:h,children:r.jsxs("span",{onClick:E,className:N("cursor-pointer",_),children:["#",s.slice(-7)]})})}e.__docgenInfo={description:"",methods:[],displayName:"DisplayId",props:{id:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const z={title:"Dashboard/Common/DisplayId",component:e,tags:["autodocs"],decorators:[s=>r.jsx("div",{style:{padding:20},children:r.jsx(s,{})})]},o={args:{id:"ord_01HXYZ1234567890ABCDEF"}},t={args:{id:"prod_ABC1234"}},a={args:{id:"order_01HXYZ9876543210FEDCBA",className:"text-ui-fg-interactive"}},i={render:()=>r.jsxs("div",{style:{display:"flex",gap:16},children:[r.jsx(e,{id:"ord_01HXYZ1234567890ABCDEF"}),r.jsx(e,{id:"prod_01ABCD5678901234EFGH"}),r.jsx(e,{id:"cust_01IJKL9012345678MNOP"})]})};var d,n,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    id: "ord_01HXYZ1234567890ABCDEF"
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    id: "prod_ABC1234"
  }
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,g,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: "order_01HXYZ9876543210FEDCBA",
    className: "text-ui-fg-interactive"
  }
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var C,f,D;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 16
  }}>\r
      <DisplayId id="ord_01HXYZ1234567890ABCDEF" />\r
      <DisplayId id="prod_01ABCD5678901234EFGH" />\r
      <DisplayId id="cust_01IJKL9012345678MNOP" />\r
    </div>
}`,...(D=(f=i.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};const Q=["Default","ShortId","WithCustomClass","MultipleIds"];export{o as Default,i as MultipleIds,t as ShortId,a as WithCustomClass,Q as __namedExportsOrder,z as default};
