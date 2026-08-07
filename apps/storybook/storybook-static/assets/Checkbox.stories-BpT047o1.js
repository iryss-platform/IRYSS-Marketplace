import{j as r}from"./jsx-runtime-B22yQkQ1.js";import{c as p}from"./utils-BriokOL4.js";import{M as F,T as G}from"./index-BlYTR7gl.js";import"./index-CIdkRTUq.js";import"./bundle-mjs-D43wmME5.js";function z({label:M,indeterminate:m,error:B,className:H,checked:l,"data-testid":O,...e}){return r.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[r.jsxs("span",{className:p("checkbox-wrapper",l&&"!bg-action",B&&"!border-negative",m&&"!bg-action",e.disabled&&"!bg-disabled !border-disabled !cursor-default",H),children:[m&&!l&&!e.disabled&&r.jsx(F,{size:20}),l&&!e.disabled&&r.jsx(G,{size:20}),r.jsx("input",{type:"checkbox",className:p("w-[20px] h-[20px] opacity-0 cursor-pointer",e.disabled&&"cursor-default"),"data-testid":O??"checkbox",...e})]}),M]})}z.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{indeterminate:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""}}};const V={title:"B2C/Atoms/Checkbox",component:z,tags:["autodocs"],argTypes:{checked:{control:"boolean"},indeterminate:{control:"boolean"},error:{control:"boolean"},disabled:{control:"boolean"}}},a={args:{}},s={args:{checked:!0}},t={args:{label:"I agree to the terms and conditions"}},o={args:{checked:!0,label:"Remember me"}},c={args:{indeterminate:!0}},n={args:{error:!0,label:"Accept terms (required)"}},d={args:{disabled:!0,label:"Disabled option"}},i={args:{disabled:!0,checked:!0,label:"Disabled checked"}};var u,b,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {}
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,k,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(x=(k=s.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var f,C,D;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'I agree to the terms and conditions'
  }
}`,...(D=(C=t.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,S,T;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: 'Remember me'
  }
}`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var j,I,q;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...(q=(I=c.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var W,E,L;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    error: true,
    label: 'Accept terms (required)'
  }
}`,...(L=(E=n.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var N,_,A;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Disabled option'
  }
}`,...(A=(_=d.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var R,v,w;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: true,
    label: 'Disabled checked'
  }
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const X=["Default","Checked","WithLabel","CheckedWithLabel","Indeterminate","WithError","Disabled","DisabledChecked"];export{s as Checked,o as CheckedWithLabel,a as Default,d as Disabled,i as DisabledChecked,c as Indeterminate,n as WithError,t as WithLabel,X as __namedExportsOrder,V as default};
