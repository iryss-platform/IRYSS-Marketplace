import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{r as W}from"./index-CIdkRTUq.js";import{$ as T}from"./index-DsZdvzq1.js";import{c as Z}from"./clx-ypaMnjOU.js";import{T as z}from"./text-v69jHjT5.js";import{I as $}from"./input-C1pN4sZs.js";import"./bundle-mjs-D43wmME5.js";import"./index-6gKHwO9i.js";import"./index-ByqT07yD.js";import"./eye-BqWlHDH4.js";function F(r){const a=r.toString();return a.indexOf(".")===-1?0:a.split(".")[1].length}const g=2;function k(r){return r==null||Array.isArray(r)?g:Math.max(F(parseFloat(r.toString())),g)}const m=W.forwardRef(({min:r=0,max:a=100,step:c=1e-4,...u},s)=>e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 z-10 flex w-8 items-center justify-center border-r",children:e.jsx(z,{className:"text-ui-fg-muted",size:"small",leading:"compact",weight:"plus",children:"%"})}),e.jsx($,{ref:s,type:"number",min:r,max:a,step:c,...u,className:"pl-10"})]}));m.displayName="PercentageInput";const p=W.forwardRef(({min:r=0,max:a=100,decimalScale:c,decimalsLimit:u,value:s,className:L,...C},O)=>{const f=c??k(s),R=u??f;return e.jsxs("div",{className:"relative",children:[e.jsx(T,{ref:O,min:r,max:a,autoComplete:"off",decimalScale:f,decimalsLimit:R,value:s,...C,className:Z("caret-ui-fg-base bg-ui-bg-field shadow-buttons-neutral transition-fg txt-compact-small flex w-full select-none appearance-none items-center justify-between rounded-md px-2 py-1.5 pl-10 text-left outline-none","placeholder:text-ui-fg-muted text-ui-fg-base","hover:bg-ui-bg-field-hover","focus-visible:shadow-borders-interactive-with-active data-[state=open]:!shadow-borders-interactive-with-active","aria-[invalid=true]:border-ui-border-error aria-[invalid=true]:shadow-borders-error","invalid::border-ui-border-error invalid:shadow-borders-error","disabled:!bg-ui-bg-disabled disabled:!text-ui-fg-disabled",L)}),e.jsx("div",{className:"absolute inset-y-0 left-0 z-10 flex w-8 items-center justify-center border-r",children:e.jsx(z,{className:"text-ui-fg-muted",size:"small",leading:"compact",weight:"plus",children:"%"})})]})});p.displayName="PercentageInput";m.__docgenInfo={description:"",methods:[],displayName:"PercentageInput",props:{min:{defaultValue:{value:"0",computed:!1},required:!1},max:{defaultValue:{value:"100",computed:!1},required:!1},step:{defaultValue:{value:"0.0001",computed:!1},required:!1}}};p.__docgenInfo={description:"",methods:[],displayName:"PercentageInput",props:{min:{defaultValue:{value:"0",computed:!1},required:!1},max:{defaultValue:{value:"100",computed:!1},required:!1}}};const re={title:"Admin/Inputs/PercentageInput",component:p,tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{maxWidth:"300px"},children:e.jsx(r,{})})]},t={args:{placeholder:"0.00"}},o={args:{value:"25.50"}},i={args:{value:"0.00"}},l={args:{value:"100.00"}},n={args:{value:"15.00",disabled:!0}},d={render:()=>e.jsx("div",{style:{maxWidth:"300px"},children:e.jsx(m,{placeholder:"0.00"})})};var x,v,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: "0.00"
  }
}`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var h,j,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: "25.50"
  }
}`,...(y=(j=o.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var w,I,N;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    value: "0.00"
  }
}`,...(N=(I=i.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var D,V,S;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    value: "100.00"
  }
}`,...(S=(V=l.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var P,_,q;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    value: "15.00",
    disabled: true
  }
}`,...(q=(_=n.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var A,E,M;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: "300px"
  }}>\r
      <DeprecatedPercentageInput placeholder="0.00" />\r
    </div>
}`,...(M=(E=d.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const ae=["Default","WithValue","ZeroValue","MaxValue","Disabled","DeprecatedVersion"];export{t as Default,d as DeprecatedVersion,n as Disabled,l as MaxValue,o as WithValue,i as ZeroValue,ae as __namedExportsOrder,re as default};
