import{j as e}from"./jsx-runtime-B22yQkQ1.js";import"./index-CIdkRTUq.js";const s=({checked:d,"data-testid":g})=>e.jsx(e.Fragment,{children:e.jsx("button",{type:"button",role:"radio","aria-checked":"true","data-state":d?"checked":"unchecked",className:"group relative flex h-5 w-5 items-center justify-center outline-none","data-testid":g||"radio-button",children:e.jsx("div",{className:"shadow-borders-base group-hover:shadow-borders-strong-with-shadow bg-ui-bg-base group-data-[state=checked]:bg-ui-bg-interactive group-data-[state=checked]:shadow-borders-interactive group-focus:!shadow-borders-interactive-with-focus group-disabled:!bg-ui-bg-disabled group-disabled:!shadow-borders-base flex h-[14px] w-[14px] items-center justify-center rounded-full transition-all",children:d&&e.jsx("span",{"data-state":d?"checked":"unchecked",className:"group flex items-center justify-center",children:e.jsx("div",{className:"bg-ui-bg-base shadow-details-contrast-on-bg-interactive group-disabled:bg-ui-fg-disabled rounded-full group-disabled:shadow-none h-1.5 w-1.5"})})})})});s.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{checked:{required:!0,tsType:{name:"boolean"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""}}};const b={title:"B2C/Atoms/Radio",component:s,tags:["autodocs"],argTypes:{checked:{control:"boolean"}}},a={args:{checked:!1}},r={args:{checked:!0}},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{checked:!0}),e.jsx("span",{children:"Option A (selected)"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{checked:!1}),e.jsx("span",{children:"Option B"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{checked:!1}),e.jsx("span",{children:"Option C"})]})]})};var c,n,o;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var i,l,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,h,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">\r
      <div className="flex items-center gap-2">\r
        <Radio checked={true} />\r
        <span>Option A (selected)</span>\r
      </div>\r
      <div className="flex items-center gap-2">\r
        <Radio checked={false} />\r
        <span>Option B</span>\r
      </div>\r
      <div className="flex items-center gap-2">\r
        <Radio checked={false} />\r
        <span>Option C</span>\r
      </div>\r
    </div>
}`,...(m=(h=t.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const k=["Unchecked","Checked","RadioGroup"];export{r as Checked,t as RadioGroup,a as Unchecked,k as __namedExportsOrder,b as default};
