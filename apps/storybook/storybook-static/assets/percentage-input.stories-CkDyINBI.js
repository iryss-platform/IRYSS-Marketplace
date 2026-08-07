import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{r as M}from"./index-CIdkRTUq.js";import{$ as R}from"./index-DsZdvzq1.js";import{c as W}from"./clx-ypaMnjOU.js";import{T as z}from"./text-v69jHjT5.js";import{I as A}from"./input-C1pN4sZs.js";import"./bundle-mjs-D43wmME5.js";import"./index-6gKHwO9i.js";import"./index-ByqT07yD.js";import"./eye-BqWlHDH4.js";function T(r){const a=r.toString();return a.indexOf(".")===-1?0:a.split(".")[1].length}const f=2;function O(r){return r==null||Array.isArray(r)?f:Math.max(T(parseFloat(r.toString())),f)}const u=M.forwardRef(({min:r=0,max:a=100,step:d=1e-4,...c},t)=>e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 z-10 flex w-8 items-center justify-center border-r",children:e.jsx(z,{className:"text-ui-fg-muted",size:"small",leading:"compact",weight:"plus",children:"%"})}),e.jsx(A,{ref:t,type:"number",min:r,max:a,step:d,...c,className:"pl-10"})]}));u.displayName="PercentageInput";const m=M.forwardRef(({min:r=0,max:a=100,decimalScale:d,decimalsLimit:c,value:t,className:L,...q},C)=>{const p=d??O(t),E=c??p;return e.jsxs("div",{className:"relative",children:[e.jsx(R,{ref:C,min:r,max:a,autoComplete:"off",decimalScale:p,decimalsLimit:E,value:t,...q,className:W("caret-ui-fg-base bg-ui-bg-field shadow-buttons-neutral transition-fg txt-compact-small flex w-full select-none appearance-none items-center justify-between rounded-md px-2 py-1.5 pl-10 text-left outline-none","placeholder:text-ui-fg-muted text-ui-fg-base","hover:bg-ui-bg-field-hover","focus-visible:shadow-borders-interactive-with-active data-[state=open]:!shadow-borders-interactive-with-active","aria-[invalid=true]:border-ui-border-error aria-[invalid=true]:shadow-borders-error","invalid::border-ui-border-error invalid:shadow-borders-error","disabled:!bg-ui-bg-disabled disabled:!text-ui-fg-disabled",L)}),e.jsx("div",{className:"absolute inset-y-0 left-0 z-10 flex w-8 items-center justify-center border-r",children:e.jsx(z,{className:"text-ui-fg-muted",size:"small",leading:"compact",weight:"plus",children:"%"})})]})});m.displayName="PercentageInput";u.__docgenInfo={description:"",methods:[],displayName:"PercentageInput",props:{min:{defaultValue:{value:"0",computed:!1},required:!1},max:{defaultValue:{value:"100",computed:!1},required:!1},step:{defaultValue:{value:"0.0001",computed:!1},required:!1}}};m.__docgenInfo={description:"",methods:[],displayName:"PercentageInput",props:{min:{defaultValue:{value:"0",computed:!1},required:!1},max:{defaultValue:{value:"100",computed:!1},required:!1}}};const X={title:"Vendor/Inputs/PercentageInput",component:m,tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{maxWidth:"300px"},children:e.jsx(r,{})})]},s={args:{placeholder:"0.00"}},n={args:{value:"25.50"}},o={args:{value:"10.00",disabled:!0}},i={args:{min:0,max:50,placeholder:"Max 50%"}},l={render:()=>e.jsxs("div",{style:{maxWidth:"300px"},children:[e.jsx("p",{style:{marginBottom:"8px",fontSize:"12px",color:"#999"},children:"Deprecated HTML number input variant:"}),e.jsx(u,{placeholder:"0.00"})]}),name:"Deprecated Variant"};var g,x,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: "0.00"
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var b,v,j;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: "25.50"
  }
}`,...(j=(v=n.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var y,D,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    value: "10.00",
    disabled: true
  }
}`,...(w=(D=o.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var I,N,S;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 50,
    placeholder: "Max 50%"
  }
}`,...(S=(N=i.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var V,P,_;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: "300px"
  }}>\r
      <p style={{
      marginBottom: "8px",
      fontSize: "12px",
      color: "#999"
    }}>\r
        Deprecated HTML number input variant:\r
      </p>\r
      <DeprecatedPercentageInput placeholder="0.00" />\r
    </div>,
  name: "Deprecated Variant"
}`,...(_=(P=l.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const Y=["Default","WithValue","Disabled","CustomRange","DeprecatedVariant"];export{i as CustomRange,s as Default,l as DeprecatedVariant,o as Disabled,n as WithValue,Y as __namedExportsOrder,X as default};
