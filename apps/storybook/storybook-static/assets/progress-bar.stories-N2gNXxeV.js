import{j as o}from"./jsx-runtime-B22yQkQ1.js";import{m as f}from"./proxy-WTNRuLrC.js";import"./index-CIdkRTUq.js";const g=({duration:s=2})=>o.jsx(f.div,{className:"bg-ui-fg-subtle size-full",initial:{width:"0%"},transition:{delay:.2,duration:s,ease:"linear"},animate:{width:"90%"},exit:{width:"100%",transition:{duration:.2,ease:"linear"}}});g.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{duration:{required:!1,tsType:{name:"number"},description:`The duration of the animation in seconds.\r
\r
@default 2`,defaultValue:{value:"2",computed:!1}}}};const w={title:"Admin/Common/ProgressBar",component:g,tags:["autodocs"],decorators:[s=>o.jsx("div",{style:{height:"4px",width:"100%",background:"#e5e7eb",borderRadius:"2px",overflow:"hidden"},children:o.jsx(s,{})})],argTypes:{duration:{control:{type:"number",min:.5,max:10,step:.5}}}},r={args:{duration:2}},e={args:{duration:5}},a={args:{duration:.5}};var t,n,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    duration: 2
  }
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var d,u,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    duration: 5
  }
}`,...(m=(u=e.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var c,p,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    duration: 0.5
  }
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const y=["Default","Slow","Fast"];export{r as Default,a as Fast,e as Slow,y as __namedExportsOrder,w as default};
