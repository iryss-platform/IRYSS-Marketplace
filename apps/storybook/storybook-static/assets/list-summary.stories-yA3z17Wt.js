import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{u as q}from"./useTranslation-D8qDtbam.js";import{T as F}from"./tooltip-COW0t6El.js";import{c as X}from"./clx-ypaMnjOU.js";import"./index-CIdkRTUq.js";import"./index-BzyXaVL0.js";import"./index-JBlh9YZm.js";import"./index-COjQfkKY.js";import"./index-ByqT07yD.js";import"./index-DhYkYC9J.js";import"./index-CHbZemxA.js";import"./floating-ui.dom-Cc2GnI-s.js";import"./index-Cfm_U0qX.js";import"./index-CWCmOpDM.js";import"./bundle-mjs-D43wmME5.js";const N=({list:r,className:T,variant:l="compact",inline:d,n:a=2})=>{const{t:U}=q(),V=U("general.plusCountMore",{count:r.length-a});return e.jsxs("div",{className:X("text-ui-fg-subtle gap-x-1 overflow-hidden",{"inline-flex":d,flex:!d,"txt-compact-small":l==="compact","txt-small":l==="base"},T),children:[e.jsx("div",{className:"flex-1 truncate",children:e.jsx("span",{className:"truncate",children:r.slice(0,a).join(", ")})}),r.length>a&&e.jsx("div",{className:"whitespace-nowrap",children:e.jsx(F,{content:e.jsx("ul",{children:r.slice(a).map(p=>e.jsx("li",{children:p},p))}),children:e.jsx("span",{className:"cursor-default whitespace-nowrap",children:V})})})]})};N.__docgenInfo={description:"",methods:[],displayName:"ListSummary",props:{n:{required:!1,tsType:{name:"number"},description:`Number of initial items to display\r
@default 2`,defaultValue:{value:"2",computed:!1}},list:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"List of strings to display as abbreviated list"},inline:{required:!1,tsType:{name:"boolean"},description:`Is the summary displayed inline.\r
Determines whether the center text is truncated if there is no space in the container`},variant:{required:!1,tsType:{name:"union",raw:'"base" | "compact"',elements:[{name:"literal",value:'"base"'},{name:"literal",value:'"compact"'}]},description:"",defaultValue:{value:'"compact"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const ae={title:"Dashboard/Common/ListSummary",component:N,tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{maxWidth:400,padding:20},children:e.jsx(r,{})})]},s={args:{list:["United States","Canada","Mexico","Brazil","Argentina"]}},t={args:{list:["USD","EUR"]}},n={args:{list:["English"]}},o={args:{list:["US","CA","MX","BR","AR","CL","CO","PE","GB","FR","DE"],n:3}},i={args:{list:["Small","Medium","Large","XL"],inline:!0}},c={args:{list:["Product A","Product B","Product C","Product D"],variant:"base"}},m={args:{list:["Product A","Product B","Product C","Product D"],variant:"compact"}};var u,g,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    list: ["United States", "Canada", "Mexico", "Brazil", "Argentina"]
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,h,S;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    list: ["USD", "EUR"]
  }
}`,...(S=(h=t.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var P,y,C;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    list: ["English"]
  }
}`,...(C=(y=n.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var v,j,b;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    list: ["US", "CA", "MX", "BR", "AR", "CL", "CO", "PE", "GB", "FR", "DE"],
    n: 3
  }
}`,...(b=(j=o.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var B,D,A;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    list: ["Small", "Medium", "Large", "XL"],
    inline: true
  }
}`,...(A=(D=i.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var w,E,I;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    list: ["Product A", "Product B", "Product C", "Product D"],
    variant: "base"
  }
}`,...(I=(E=c.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var L,M,R;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    list: ["Product A", "Product B", "Product C", "Product D"],
    variant: "compact"
  }
}`,...(R=(M=m.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};const se=["Default","FewItems","SingleItem","ManyItems","Inline","BaseVariant","CompactVariant"];export{c as BaseVariant,m as CompactVariant,s as Default,t as FewItems,i as Inline,o as ManyItems,n as SingleItem,se as __namedExportsOrder,ae as default};
