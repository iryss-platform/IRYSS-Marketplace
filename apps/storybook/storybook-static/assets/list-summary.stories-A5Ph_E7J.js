import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{u as D}from"./useTranslation-D8qDtbam.js";import{T as B}from"./tooltip-COW0t6El.js";import{c as E}from"./clx-ypaMnjOU.js";import"./index-CIdkRTUq.js";import"./index-BzyXaVL0.js";import"./index-JBlh9YZm.js";import"./index-COjQfkKY.js";import"./index-ByqT07yD.js";import"./index-DhYkYC9J.js";import"./index-CHbZemxA.js";import"./floating-ui.dom-Cc2GnI-s.js";import"./index-Cfm_U0qX.js";import"./index-CWCmOpDM.js";import"./bundle-mjs-D43wmME5.js";const S=({list:a,className:I,variant:c="compact",inline:l,n:r=2})=>{const{t:N}=D(),A=N("general.plusCountMore",{count:a.length-r});return e.jsxs("div",{className:E("text-ui-fg-subtle gap-x-1 overflow-hidden",{"inline-flex":l,flex:!l,"txt-compact-small":c==="compact","txt-small":c==="base"},I),children:[e.jsx("div",{className:"flex-1 truncate",children:e.jsx("span",{className:"truncate",children:a.slice(0,r).join(", ")})}),a.length>r&&e.jsx("div",{className:"whitespace-nowrap",children:e.jsx(B,{content:e.jsx("ul",{children:a.slice(r).map(m=>e.jsx("li",{children:m},m))}),children:e.jsx("span",{className:"cursor-default whitespace-nowrap",children:A})})})]})};S.__docgenInfo={description:"",methods:[],displayName:"ListSummary",props:{n:{required:!1,tsType:{name:"number"},description:`Number of initial items to display\r
@default 2`,defaultValue:{value:"2",computed:!1}},list:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"List of strings to display as abbreviated list"},inline:{required:!1,tsType:{name:"boolean"},description:`Is the summary displayed inline.\r
Determines whether the center text is truncated if there is no space in the container`},variant:{required:!1,tsType:{name:"union",raw:'"base" | "compact"',elements:[{name:"literal",value:'"base"'},{name:"literal",value:'"compact"'}]},description:"",defaultValue:{value:'"compact"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const K={title:"Vendor/Common/ListSummary",component:S,tags:["autodocs"],decorators:[a=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(a,{})})],argTypes:{variant:{control:"select",options:["compact","base"]}}},t={args:{list:["United States","Germany","France","Japan","Australia"]}},s={args:{list:["Electronics","Clothing"]}},o={args:{list:["Product A","Product B","Product C","Product D","Product E","Product F"],n:3}},n={args:{list:["Category 1","Category 2","Category 3","Category 4"],variant:"base"}},i={args:{list:["Tag A","Tag B","Tag C","Tag D"],inline:!0,n:2}};var p,d,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    list: ["United States", "Germany", "France", "Japan", "Australia"]
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,y,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    list: ["Electronics", "Clothing"]
  }
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var x,h,T;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    list: ["Product A", "Product B", "Product C", "Product D", "Product E", "Product F"],
    n: 3
  }
}`,...(T=(h=o.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var C,j,v;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    list: ["Category 1", "Category 2", "Category 3", "Category 4"],
    variant: "base"
  }
}`,...(v=(j=n.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var b,P,w;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    list: ["Tag A", "Tag B", "Tag C", "Tag D"],
    inline: true,
    n: 2
  }
}`,...(w=(P=i.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};const Q=["Default","FewItems","ManyItems","BaseVariant","Inline"];export{n as BaseVariant,t as Default,s as FewItems,i as Inline,o as ManyItems,Q as __namedExportsOrder,K as default};
