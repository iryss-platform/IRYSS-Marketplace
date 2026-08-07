import{j as o}from"./jsx-runtime-B22yQkQ1.js";import{S as C}from"./index-BlYTR7gl.js";import{r as W}from"./index-CIdkRTUq.js";import{c as m}from"./utils-BriokOL4.js";import{fn as A}from"./index-DeN4tkzB.js";import"./bundle-mjs-D43wmME5.js";const E=({onChange:j,value:N=0,error:_,"data-testid":n})=>{const[i,c]=W.useState(0);return o.jsx("div",{className:m("flex gap-1",_&&"text-negative"),onMouseLeave:()=>c(0),"data-testid":n,children:[...Array(5)].map((I,u)=>{const e=u+1,q=i?e<=i:e<=N;return o.jsx("button",{type:"button",className:"p-1 hover:scale-110 transition-transform bg-transparent",onMouseEnter:()=>c(e),onClick:()=>j(e),"data-testid":n?`${n}-button`:"interactive-star-rating-button",children:o.jsx(C,{size:24,className:m(q?"[&>path]:fill-secondary":"[&>path]:fill-gray-200")})},u)})})};E.__docgenInfo={description:"",methods:[],displayName:"InteractiveStarRating",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(rating: number) => void",signature:{arguments:[{type:{name:"number"},name:"rating"}],return:{name:"void"}}},description:""},value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""}}};const w={title:"B2C/Atoms/InteractiveStarRating",component:E,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:5}},error:{control:"boolean"}},args:{onChange:A()}},r={args:{value:0}},a={args:{value:3}},t={args:{value:5}},s={args:{value:0,error:!0}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: 0
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,v,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: 3
  }
}`,...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var h,y,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: 5
  }
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var x,S,R;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    value: 0,
    error: true
  }
}`,...(R=(S=s.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};const z=["Default","WithValue","FullRating","WithError"];export{r as Default,t as FullRating,s as WithError,a as WithValue,z as __namedExportsOrder,w as default};
