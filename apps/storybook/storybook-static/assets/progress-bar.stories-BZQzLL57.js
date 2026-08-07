import{j as o}from"./jsx-runtime-B22yQkQ1.js";import{m as f}from"./proxy-WTNRuLrC.js";import"./index-CIdkRTUq.js";const g=({duration:s=2})=>o.jsx(f.div,{className:"bg-ui-fg-subtle size-full",initial:{width:"0%"},transition:{delay:.2,duration:s,ease:"linear"},animate:{width:"90%"},exit:{width:"100%",transition:{duration:.2,ease:"linear"}}});g.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{duration:{required:!1,tsType:{name:"number"},description:`The duration of the animation in seconds.\r
\r
@default 2`,defaultValue:{value:"2",computed:!1}}}};const w={title:"Dashboard/Common/ProgressBar",component:g,tags:["autodocs"],decorators:[s=>o.jsx("div",{style:{width:400,height:4,borderRadius:4,overflow:"hidden",backgroundColor:"var(--bg-subtle, #f3f4f6)"},children:o.jsx(s,{})})]},r={args:{duration:2}},e={args:{duration:.5}},a={args:{duration:5}};var t,n,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    duration: 2
  }
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var d,u,c;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    duration: 0.5
  }
}`,...(c=(u=e.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,l,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    duration: 5
  }
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const j=["Default","Fast","Slow"];export{r as Default,e as Fast,a as Slow,j as __namedExportsOrder,w as default};
