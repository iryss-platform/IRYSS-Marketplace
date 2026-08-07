import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{u as F}from"./useTranslation-D8qDtbam.js";import{B as u}from"./badge-CWQUphHF.js";import{T as G}from"./tooltip-COW0t6El.js";import{c as P}from"./clx-ypaMnjOU.js";import"./index-CIdkRTUq.js";import"./index-6gKHwO9i.js";import"./index-ByqT07yD.js";import"./index-BzyXaVL0.js";import"./index-JBlh9YZm.js";import"./index-COjQfkKY.js";import"./index-DhYkYC9J.js";import"./index-CHbZemxA.js";import"./floating-ui.dom-Cc2GnI-s.js";import"./index-Cfm_U0qX.js";import"./index-CWCmOpDM.js";import"./bundle-mjs-D43wmME5.js";const C=({list:r,className:c,inline:d,rounded:p=!1,n:s=2})=>{const{t:D}=F(),E=D("general.plusCount",{count:r.length-s});return e.jsxs("div",{className:P("text-ui-fg-subtle txt-compact-small gap-x-2 overflow-hidden",{"inline-flex":d,flex:!d},c),children:[r.slice(0,s).map(a=>e.jsx(u,{rounded:p?"full":"base",size:"2xsmall",children:a},a)),r.length>s&&e.jsx("div",{className:"whitespace-nowrap",children:e.jsx(G,{content:e.jsx("ul",{children:r.slice(s).map(a=>e.jsx("li",{children:a},a))}),children:e.jsx(u,{rounded:p?"full":"base",size:"2xsmall",className:"cursor-default whitespace-nowrap",children:E})})})]})};C.__docgenInfo={description:"",methods:[],displayName:"BadgeListSummary",props:{n:{required:!1,tsType:{name:"number"},description:`Number of initial items to display\r
@default 2`,defaultValue:{value:"2",computed:!1}},list:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"List of strings to display as abbreviated list"},inline:{required:!1,tsType:{name:"boolean"},description:`Is the summary displayed inline.\r
Determines whether the center text is truncated if there is no space in the container`},rounded:{required:!1,tsType:{name:"boolean"},description:"Whether the badges should be rounded",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const re={title:"Admin/Common/BadgeListSummary",component:C,tags:["autodocs"],argTypes:{n:{control:{type:"number",min:1,max:10}},inline:{control:"boolean"},rounded:{control:"boolean"}},parameters:{docs:{description:{component:`BadgeListSummary uses react-i18next for the "+N" overflow label.\r
If i18n is not configured in Storybook, the fallback key\r
"general.plusCount" will be displayed for the overflow badge.`}}}},t={args:{list:["United States","Germany","France","Japan","Australia"],n:2}},n={args:{list:["US","GB"],n:3}},o={args:{list:["Shirts","Pants","Hats"],n:2}},i={args:{list:["Active","Published","Featured","Sale"],n:2,rounded:!0}},l={args:{list:["Tag A","Tag B","Tag C","Tag D","Tag E"],n:2,inline:!0}},m={args:{list:Array.from({length:20},(r,c)=>`Item ${c+1}`),n:3}};var g,f,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    list: ["United States", "Germany", "France", "Japan", "Australia"],
    n: 2
  }
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var y,S,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    list: ["US", "GB"],
    n: 3
  }
}`,...(x=(S=n.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var b,T,w;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    list: ["Shirts", "Pants", "Hats"],
    n: 2
  }
}`,...(w=(T=o.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var v,A,B;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    list: ["Active", "Published", "Featured", "Sale"],
    n: 2,
    rounded: true
  }
}`,...(B=(A=i.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var j,L,I;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    list: ["Tag A", "Tag B", "Tag C", "Tag D", "Tag E"],
    n: 2,
    inline: true
  }
}`,...(I=(L=l.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var N,_,q;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    list: Array.from({
      length: 20
    }, (_, i) => \`Item \${i + 1}\`),
    n: 3
  }
}`,...(q=(_=m.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const ae=["Default","ShowAll","SingleOverflow","Rounded","Inline","LargeList"];export{t as Default,l as Inline,m as LargeList,i as Rounded,n as ShowAll,o as SingleOverflow,ae as __namedExportsOrder,re as default};
