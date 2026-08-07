import{j as a}from"./jsx-runtime-B22yQkQ1.js";import{c as se}from"./utils-BriokOL4.js";import"./index-CIdkRTUq.js";import"./bundle-mjs-D43wmME5.js";const Q=({size:r="16",color:e="currentColor",...t})=>a.jsxs("svg",{className:"animate-spin",width:r,height:r,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",...t,children:[a.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:e,strokeWidth:"4"}),a.jsx("path",{className:"opacity-75",fill:e,d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]});Q.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"currentColor"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:'"16"',computed:!1}}}};function U({children:r,variant:e="filled",size:t="small",loading:v=!1,disabled:X=!1,className:Y,"data-testid":Z,...ee}){const ae="text-md button-text rounded-sm disabled:bg-disabled disabled:text-disabled dark:bg-action-tertiary dark:hover:bg-action-tertiary-hover dark:active:bg-action-tertiary-pressed dark:disabled:bg-disabled",re={filled:`bg-action text-action-on-primary hover:bg-action-hover active:bg-action-pressed ${v&&"button-text-filled"}`,tonal:"bg-action-secondary hover:bg-action-secondary-hover active:bg-action-secondary-pressed text-action-on-secondary",text:"bg-primary dark:bg-primary hover:bg-action-secondary-hover active:bg-action-secondary-pressed text-primary",destructive:`text-negative-on-primary bg-negative hover:bg-negative-hover active:bg-negative-pressed ${v&&"button-text-filled"}`},te={small:"px-[16px] py-[8px]",large:"px-[24px] py-[8px]"};return a.jsx("button",{disabled:X,className:se(re[e],te[t],ae,Y),"data-testid":Z??`button-${e}-${t}`,...ee,children:v?a.jsx(Q,{}):r})}U.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"filled" | "tonal" | "text" | "destructive"',elements:[{name:"literal",value:'"filled"'},{name:"literal",value:'"tonal"'},{name:"literal",value:'"text"'},{name:"literal",value:'"destructive"'}]},description:"",defaultValue:{value:'"filled"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"small"',computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const de={title:"B2C/Atoms/Button",component:U,tags:["autodocs"],argTypes:{variant:{control:"select",options:["filled","tonal","text","destructive"]},size:{control:"select",options:["small","large"]},loading:{control:"boolean"},disabled:{control:"boolean"}}},s={args:{children:"Button"}},n={args:{children:"Filled",variant:"filled"}},o={args:{children:"Tonal",variant:"tonal"}},l={args:{children:"Text",variant:"text"}},i={args:{children:"Delete",variant:"destructive"}},d={args:{children:"Large Button",size:"large"}},c={args:{children:"Large Tonal",variant:"tonal",size:"large"}},u={args:{children:"Loading",loading:!0}},p={args:{children:"Deleting...",variant:"destructive",loading:!0}},m={args:{children:"Disabled",disabled:!0}},g={args:{children:"Disabled Tonal",variant:"tonal",disabled:!0}};var b,f,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,y,T;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Filled',
    variant: 'filled'
  }
}`,...(T=(y=n.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var D,L,S;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: 'Tonal',
    variant: 'tonal'
  }
}`,...(S=(L=o.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var w,B,z;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Text',
    variant: 'text'
  }
}`,...(z=(B=l.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var j,k,q;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Delete',
    variant: 'destructive'
  }
}`,...(q=(k=i.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var C,V,N;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: 'Large Button',
    size: 'large'
  }
}`,...(N=(V=d.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var _,F,$;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'Large Tonal',
    variant: 'tonal',
    size: 'large'
  }
}`,...($=(F=c.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var A,E,I;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'Loading',
    loading: true
  }
}`,...(I=(E=u.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var H,M,O;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: 'Deleting...',
    variant: 'destructive',
    loading: true
  }
}`,...(O=(M=p.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var R,W,G;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: 'Disabled',
    disabled: true
  }
}`,...(G=(W=m.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var J,K,P;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Tonal',
    variant: 'tonal',
    disabled: true
  }
}`,...(P=(K=g.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};const ce=["Default","Filled","Tonal","Text","Destructive","Large","LargeTonal","Loading","LoadingDestructive","Disabled","DisabledTonal"];export{s as Default,i as Destructive,m as Disabled,g as DisabledTonal,n as Filled,d as Large,c as LargeTonal,u as Loading,p as LoadingDestructive,l as Text,o as Tonal,ce as __namedExportsOrder,de as default};
