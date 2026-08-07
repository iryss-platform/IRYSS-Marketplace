import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{u as U}from"./useTranslation-D8qDtbam.js";import{B as p}from"./badge-CWQUphHF.js";import{T as q}from"./tooltip-COW0t6El.js";import{c as V}from"./clx-ypaMnjOU.js";import"./index-CIdkRTUq.js";import"./index-6gKHwO9i.js";import"./index-ByqT07yD.js";import"./index-BzyXaVL0.js";import"./index-JBlh9YZm.js";import"./index-COjQfkKY.js";import"./index-DhYkYC9J.js";import"./index-CHbZemxA.js";import"./floating-ui.dom-Cc2GnI-s.js";import"./index-Cfm_U0qX.js";import"./index-CWCmOpDM.js";import"./bundle-mjs-D43wmME5.js";const F=({list:r,className:D,inline:d,rounded:c=!1,n:a=2})=>{const{t:R}=U(),G=R("general.plusCount",{count:r.length-a});return e.jsxs("div",{className:V("text-ui-fg-subtle txt-compact-small gap-x-2 overflow-hidden",{"inline-flex":d,flex:!d},D),children:[r.slice(0,a).map(s=>e.jsx(p,{rounded:c?"full":"base",size:"2xsmall",children:s},s)),r.length>a&&e.jsx("div",{className:"whitespace-nowrap",children:e.jsx(q,{content:e.jsx("ul",{children:r.slice(a).map(s=>e.jsx("li",{children:s},s))}),children:e.jsx(p,{rounded:c?"full":"base",size:"2xsmall",className:"cursor-default whitespace-nowrap",children:G})})})]})};F.__docgenInfo={description:"",methods:[],displayName:"BadgeListSummary",props:{n:{required:!1,tsType:{name:"number"},description:`Number of initial items to display\r
@default 2`,defaultValue:{value:"2",computed:!1}},list:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"List of strings to display as abbreviated list"},inline:{required:!1,tsType:{name:"boolean"},description:`Is the summary displayed inline.\r
Determines whether the center text is truncated if there is no space in the container`},rounded:{required:!1,tsType:{name:"boolean"},description:"Whether the badges should be rounded",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const re={title:"Vendor/Common/BadgeListSummary",component:F,tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(r,{})})]},t={args:{list:["Electronics","Clothing","Home & Garden","Sports","Books"]}},o={args:{list:["United States","Germany"]}},n={args:{list:["US","GB","DE","FR","JP","AU","CA","BR","IN","CN"],n:3}},i={args:{list:["Active","Premium","Verified","Featured"],rounded:!0}},m={args:{list:["Tag 1","Tag 2","Tag 3","Tag 4","Tag 5"],inline:!0,n:2}},l={args:{list:["Category A","Category B","Category C","Category D","Category E"],n:4},name:"Show First 4"};var u,g,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    list: ["Electronics", "Clothing", "Home & Garden", "Sports", "Books"]
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,y,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    list: ["United States", "Germany"]
  }
}`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var C,T,S;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    list: ["US", "GB", "DE", "FR", "JP", "AU", "CA", "BR", "IN", "CN"],
    n: 3
  }
}`,...(S=(T=n.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var B,N,b;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    list: ["Active", "Premium", "Verified", "Featured"],
    rounded: true
  }
}`,...(b=(N=i.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var j,w,I;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    list: ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"],
    inline: true,
    n: 2
  }
}`,...(I=(w=m.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var v,A,E;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    list: ["Category A", "Category B", "Category C", "Category D", "Category E"],
    n: 4
  },
  name: "Show First 4"
}`,...(E=(A=l.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const se=["Default","FewItems","ManyItems","Rounded","Inline","CustomN"];export{l as CustomN,t as Default,o as FewItems,m as Inline,n as ManyItems,i as Rounded,se as __namedExportsOrder,re as default};
