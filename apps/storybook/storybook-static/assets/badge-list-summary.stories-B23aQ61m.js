import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{u as N}from"./useTranslation-D8qDtbam.js";import{B as p}from"./badge-CWQUphHF.js";import{T as q}from"./tooltip-COW0t6El.js";import{c as z}from"./clx-ypaMnjOU.js";import"./index-CIdkRTUq.js";import"./index-6gKHwO9i.js";import"./index-ByqT07yD.js";import"./index-BzyXaVL0.js";import"./index-JBlh9YZm.js";import"./index-COjQfkKY.js";import"./index-DhYkYC9J.js";import"./index-CHbZemxA.js";import"./floating-ui.dom-Cc2GnI-s.js";import"./index-Cfm_U0qX.js";import"./index-CWCmOpDM.js";import"./bundle-mjs-D43wmME5.js";const M=({list:r,className:U,inline:d,rounded:c=!1,n:a=2})=>{const{t:v}=N(),A=v("general.plusCount",{count:r.length-a});return e.jsxs("div",{className:z("text-ui-fg-subtle txt-compact-small gap-x-2 overflow-hidden",{"inline-flex":d,flex:!d},U),children:[r.slice(0,a).map(s=>e.jsx(p,{rounded:c?"full":"base",size:"2xsmall",children:s},s)),r.length>a&&e.jsx("div",{className:"whitespace-nowrap",children:e.jsx(q,{content:e.jsx("ul",{children:r.slice(a).map(s=>e.jsx("li",{children:s},s))}),children:e.jsx(p,{rounded:c?"full":"base",size:"2xsmall",className:"cursor-default whitespace-nowrap",children:A})})})]})};M.__docgenInfo={description:"",methods:[],displayName:"BadgeListSummary",props:{n:{required:!1,tsType:{name:"number"},description:`Number of initial items to display\r
@default 2`,defaultValue:{value:"2",computed:!1}},list:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"List of strings to display as abbreviated list"},inline:{required:!1,tsType:{name:"boolean"},description:`Is the summary displayed inline.\r
Determines whether the center text is truncated if there is no space in the container`},rounded:{required:!1,tsType:{name:"boolean"},description:"Whether the badges should be rounded",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const re={title:"Dashboard/Common/BadgeListSummary",component:M,tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{maxWidth:400,padding:20},children:e.jsx(r,{})})]},t={args:{list:["United States","Canada","Mexico","Brazil","Argentina"]}},n={args:{list:["USD","EUR"]}},o={args:{list:["English"]}},i={args:{list:["US","CA","MX","BR","AR","CL","CO","PE","GB","FR","DE"],n:3}},l={args:{list:["Tag 1","Tag 2","Tag 3","Tag 4"],rounded:!0}},m={args:{list:["Small","Medium","Large","XL"],inline:!0}};var u,g,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    list: ["United States", "Canada", "Mexico", "Brazil", "Argentina"]
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,x,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    list: ["USD", "EUR"]
  }
}`,...(S=(x=n.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var y,T,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    list: ["English"]
  }
}`,...(b=(T=o.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var j,B,R;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    list: ["US", "CA", "MX", "BR", "AR", "CL", "CO", "PE", "GB", "FR", "DE"],
    n: 3
  }
}`,...(R=(B=i.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var C,E,I;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    list: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
    rounded: true
  }
}`,...(I=(E=l.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var L,w,D;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    list: ["Small", "Medium", "Large", "XL"],
    inline: true
  }
}`,...(D=(w=m.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const se=["Default","FewItems","SingleItem","ManyItems","Rounded","Inline"];export{t as Default,n as FewItems,m as Inline,i as ManyItems,l as Rounded,o as SingleItem,se as __namedExportsOrder,re as default};
