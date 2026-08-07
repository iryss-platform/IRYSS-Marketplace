import{j as p}from"./jsx-runtime-B22yQkQ1.js";import{c as u}from"./utils-BriokOL4.js";import{r as a}from"./index-CIdkRTUq.js";import"./bundle-mjs-D43wmME5.js";function D({variant:r="light",size:I="medium",step:M,maxStep:d,className:V,"data-testid":_}){const[l,c]=a.useState(0),e=a.useRef(null),R={light:"rounded-md bg-tertiary/10 relative",dark:"rounded-md bg-primary/10 relative"},L={small:"w-full h-1",medium:"w-full h-1",large:"w-full h-1"};return a.useEffect(()=>(window.addEventListener("resize",()=>{c(e.current?e.current.offsetWidth:0)}),()=>window.removeEventListener("resize",()=>null)),[]),a.useEffect(()=>{c(e.current?e.current.offsetWidth:0)},[e]),p.jsx("div",{ref:e,className:u(R[r],L[I],V),"data-testid":_??"indicator",children:p.jsx("div",{className:u("h-full rounded-sm absolute transition-all duration-300",r==="light"?"bg-tertiary":"bg-white"),style:{width:l/d,left:l/d*(M-1)}})})}D.__docgenInfo={description:"",methods:[],displayName:"Indicator",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},step:{required:!0,tsType:{name:"number"},description:""},maxStep:{required:!0,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"",defaultValue:{value:"'light'",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:""}}};const F={title:"B2C/Atoms/Indicator",component:D,tags:["autodocs"],argTypes:{variant:{control:"select",options:["light","dark"]},size:{control:"select",options:["small","medium","large"]},step:{control:{type:"range",min:1,max:5}},maxStep:{control:{type:"range",min:1,max:10}}}},t={args:{step:1,maxStep:5}},s={args:{step:3,maxStep:5}},n={args:{step:5,maxStep:5}},o={args:{step:2,maxStep:4,variant:"dark"},decorators:[r=>p.jsx("div",{className:"bg-gray-800 p-4 rounded",children:p.jsx(r,{})})]},i={args:{step:2,maxStep:3}},m={args:{step:4,maxStep:10}};var g,f,S;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    step: 1,
    maxStep: 5
  }
}`,...(S=(f=t.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var x,h,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    step: 3,
    maxStep: 5
  }
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,w,b;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    step: 5,
    maxStep: 5
  }
}`,...(b=(w=n.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var T,k,E;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    step: 2,
    maxStep: 4,
    variant: 'dark'
  },
  decorators: [Story => <div className="bg-gray-800 p-4 rounded">\r
        <Story />\r
      </div>]
}`,...(E=(k=o.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var j,q,N;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    step: 2,
    maxStep: 3
  }
}`,...(N=(q=i.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var z,C,W;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    step: 4,
    maxStep: 10
  }
}`,...(W=(C=m.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};const G=["Default","MidProgress","Complete","DarkVariant","ThreeSteps","ManySteps"];export{n as Complete,o as DarkVariant,t as Default,m as ManySteps,s as MidProgress,i as ThreeSteps,G as __namedExportsOrder,F as default};
