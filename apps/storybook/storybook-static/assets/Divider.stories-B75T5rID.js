import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{c as A}from"./utils-BriokOL4.js";import"./index-CIdkRTUq.js";import"./bundle-mjs-D43wmME5.js";function r({orientation:c="horizontal",variant:w="primary",square:D=!1,className:N,"data-testid":V}){const T=w==="primary"?"border-t border-l":"border border-t-secondary border-l-secondary",H=c==="horizontal"?"w-full h-1px border-l-0":"h-full w-1px border-t-0",_=D?"!w-[4px] !h-[4px] lg:!w-[4px] lg:!h-[4px] !border-0 bg-tertiary/50 rotate-45":"";return e.jsx("div",{role:"separator",className:A(T,H,_,N),"data-testid":V??"divider"})}r.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},square:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:'"primary"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""}}};const k={title:"B2C/Atoms/Divider",component:r,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},variant:{control:"select",options:["primary","secondary"]},square:{control:"boolean"}}},a={args:{orientation:"horizontal"}},t={args:{orientation:"horizontal",variant:"secondary"}},o={args:{orientation:"vertical"},decorators:[c=>e.jsx("div",{style:{height:"100px",display:"flex"},children:e.jsx(c,{})})]},n={args:{square:!0}},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-64",children:[e.jsx("p",{children:"Section A"}),e.jsx(r,{}),e.jsx("p",{children:"Section B"}),e.jsx(r,{variant:"secondary"}),e.jsx("p",{children:"Section C"})]})},i={render:()=>e.jsxs("div",{className:"flex items-center gap-4 h-6",children:[e.jsx("span",{children:"Item 1"}),e.jsx(r,{orientation:"vertical"}),e.jsx("span",{children:"Item 2"}),e.jsx(r,{orientation:"vertical"}),e.jsx("span",{children:"Item 3"})]})};var l,d,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,v;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    variant: 'secondary'
  }
}`,...(v=(u=t.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var x,y,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  decorators: [Story => <div style={{
    height: '100px',
    display: 'flex'
  }}>\r
        <Story />\r
      </div>]
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var f,g,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    square: true
  }
}`,...(S=(g=n.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var j,z,b;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-64">\r
      <p>Section A</p>\r
      <Divider />\r
      <p>Section B</p>\r
      <Divider variant="secondary" />\r
      <p>Section C</p>\r
    </div>
}`,...(b=(z=s.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};var q,I,C;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4 h-6">\r
      <span>Item 1</span>\r
      <Divider orientation="vertical" />\r
      <span>Item 2</span>\r
      <Divider orientation="vertical" />\r
      <span>Item 3</span>\r
    </div>
}`,...(C=(I=i.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};const F=["Horizontal","HorizontalSecondary","Vertical","Square","InContext","VerticalInContext"];export{a as Horizontal,t as HorizontalSecondary,s as InContext,n as Square,o as Vertical,i as VerticalInContext,F as __namedExportsOrder,k as default};
