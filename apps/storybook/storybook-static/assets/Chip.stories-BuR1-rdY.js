import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{c as v}from"./utils-BriokOL4.js";import"./index-CIdkRTUq.js";import"./bundle-mjs-D43wmME5.js";function r({value:u,selected:p,disabled:s,color:m,onSelect:P,className:V,"data-testid":X}){const A="chip-wrapper",O=p?"border-primary":"",G=!s&&!p?"hover:bg-gray-200":"",H=s?"bg-component border-disabled/50 hover:bg-component cursor-not-allowed text-disabled":"cursor-pointer",J=m?"w-[40px] h-[40px] border":"";return e.jsx("div",{"data-disabled":s,className:v(A,J,O,G,H,V),onClick:s?void 0:P,role:"button",tabIndex:s?-1:0,"data-testid":X??"chip",children:m?e.jsx("span",{className:v("w-[32px] h-[32px] bg-action absolute top-[3px] left-[3px] rounded-xs",s&&"bg-disabled"),style:{backgroundColor:(u||"").toString()}}):u})}r.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{value:{required:!1,tsType:{name:"union",raw:"React.ReactNode | string",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"string"}]},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},color:{required:!1,tsType:{name:"boolean"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""}}};const Y={title:"B2C/Atoms/Chip",component:r,tags:["autodocs"],argTypes:{selected:{control:"boolean"},disabled:{control:"boolean"},color:{control:"boolean"}}},a={args:{value:"Chip"}},o={args:{value:"Selected",selected:!0}},t={args:{value:"Disabled",disabled:!0}},n={args:{value:"#3B82F6",color:!0}},c={args:{value:"#EF4444",color:!0,selected:!0}},l={args:{value:"#10B981",color:!0,disabled:!0}},i={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{value:"S"}),e.jsx(r,{value:"M",selected:!0}),e.jsx(r,{value:"L"}),e.jsx(r,{value:"XL"})]})},d={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{value:"#000000",color:!0}),e.jsx(r,{value:"#EF4444",color:!0,selected:!0}),e.jsx(r,{value:"#3B82F6",color:!0}),e.jsx(r,{value:"#10B981",color:!0}),e.jsx(r,{value:"#F59E0B",color:!0})]})};var g,C,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: 'Chip'
  }
}`,...(b=(C=a.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var h,x,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: 'Selected',
    selected: true
  }
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var S,j,y;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: 'Disabled',
    disabled: true
  }
}`,...(y=(j=t.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var B,N,F;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    value: '#3B82F6',
    color: true
  }
}`,...(F=(N=n.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var D,E,T;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    value: '#EF4444',
    color: true,
    selected: true
  }
}`,...(T=(E=c.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var q,w,R;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    value: '#10B981',
    color: true,
    disabled: true
  }
}`,...(R=(w=l.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var L,_,k;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">\r
      <Chip value="S" />\r
      <Chip value="M" selected />\r
      <Chip value="L" />\r
      <Chip value="XL" />\r
    </div>
}`,...(k=(_=i.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var z,I,M;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">\r
      <Chip value="#000000" color />\r
      <Chip value="#EF4444" color selected />\r
      <Chip value="#3B82F6" color />\r
      <Chip value="#10B981" color />\r
      <Chip value="#F59E0B" color />\r
    </div>
}`,...(M=(I=d.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};const Z=["Default","Selected","Disabled","ColorChip","ColorChipSelected","ColorChipDisabled","SizeVariants","ColorPalette"];export{n as ColorChip,l as ColorChipDisabled,c as ColorChipSelected,d as ColorPalette,a as Default,t as Disabled,o as Selected,i as SizeVariants,Z as __namedExportsOrder,Y as default};
