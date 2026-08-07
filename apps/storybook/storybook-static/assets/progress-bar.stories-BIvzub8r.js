import{j as o}from"./jsx-runtime-B22yQkQ1.js";import{m as f}from"./proxy-WTNRuLrC.js";import"./index-CIdkRTUq.js";const g=({duration:s=2})=>o.jsx(f.div,{className:"bg-ui-fg-subtle size-full",initial:{width:"0%"},transition:{delay:.2,duration:s,ease:"linear"},animate:{width:"90%"},exit:{width:"100%",transition:{duration:.2,ease:"linear"}}});g.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{duration:{required:!1,tsType:{name:"number"},description:`The duration of the animation in seconds.\r
\r
@default 2`,defaultValue:{value:"2",computed:!1}}}};const w={title:"Vendor/Common/ProgressBar",component:g,tags:["autodocs"],decorators:[s=>o.jsx("div",{style:{width:"400px",height:"4px",background:"#e5e7eb",borderRadius:"4px",overflow:"hidden"},children:o.jsx(s,{})})],argTypes:{duration:{control:{type:"number",min:.5,max:10,step:.5}}}},r={args:{duration:2}},e={args:{duration:.5}},a={args:{duration:5}};var t,n,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    duration: 2
  }
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var d,u,c;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    duration: 0.5
  }
}`,...(c=(u=e.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,p,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    duration: 5
  }
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const y=["Default","Fast","Slow"];export{r as Default,e as Fast,a as Slow,y as __namedExportsOrder,w as default};
