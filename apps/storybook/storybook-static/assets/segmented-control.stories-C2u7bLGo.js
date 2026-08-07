import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{r as w}from"./index-CIdkRTUq.js";import{B as O}from"./button-DVvAtRte.js";import{c as p}from"./clx-ypaMnjOU.js";import"./index-6gKHwO9i.js";import"./spinner-UC_H4VgD.js";import"./index-ByqT07yD.js";import"./bundle-mjs-D43wmME5.js";const c=({value:a,onValueChange:d,options:r,className:t})=>e.jsx("div",{className:p("bg-ui-bg-disabled grid items-center gap-x-[1px] rounded-md p-[1px]",t),style:{gridTemplateColumns:`repeat(${r.length}, 1fr)`},children:r.map(n=>{const m=a===n.value;return e.jsx(O,{size:"small",onClick:()=>d(n.value),variant:m?"secondary":"transparent",type:"button",className:p("w-auto",!m&&"hover:text-ui-fg-base text-ui-fg-muted"),children:n.label},n.value)})});c.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{value:{required:!0,tsType:{name:"string"},description:""},onValueChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  value: string\r
  label: ReactNode\r
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactNode",required:!0}}]}}],raw:"SegmentedControlOption[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const R={title:"Admin/Common/SegmentedControl",component:c,tags:["autodocs"],decorators:[a=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(a,{})})]},u=a=>{var t;const[d,r]=w.useState(a.defaultValue||((t=a.options[0])==null?void 0:t.value)||"");return e.jsx(c,{value:d,onValueChange:r,options:a.options})},l={render:()=>e.jsx(u,{options:[{value:"list",label:"List"},{value:"grid",label:"Grid"}]})},o={render:()=>e.jsx(u,{options:[{value:"all",label:"All"},{value:"active",label:"Active"},{value:"draft",label:"Draft"}]})},s={render:()=>e.jsx(u,{options:[{value:"day",label:"Day"},{value:"week",label:"Week"},{value:"month",label:"Month"},{value:"year",label:"Year"}]})},i={render:()=>e.jsx(u,{defaultValue:"active",options:[{value:"all",label:"All"},{value:"active",label:"Active"},{value:"archived",label:"Archived"}]})};var v,g,b;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <ControlledSegmentedControl options={[{
    value: "list",
    label: "List"
  }, {
    value: "grid",
    label: "Grid"
  }]} />
}`,...(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,h,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <ControlledSegmentedControl options={[{
    value: "all",
    label: "All"
  }, {
    value: "active",
    label: "Active"
  }, {
    value: "draft",
    label: "Draft"
  }]} />
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,C,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <ControlledSegmentedControl options={[{
    value: "day",
    label: "Day"
  }, {
    value: "week",
    label: "Week"
  }, {
    value: "month",
    label: "Month"
  }, {
    value: "year",
    label: "Year"
  }]} />
}`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var j,A,T;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <ControlledSegmentedControl defaultValue="active" options={[{
    value: "all",
    label: "All"
  }, {
    value: "active",
    label: "Active"
  }, {
    value: "archived",
    label: "Archived"
  }]} />
}`,...(T=(A=i.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};const B=["TwoOptions","ThreeOptions","FourOptions","WithDefaultSelected"];export{s as FourOptions,o as ThreeOptions,l as TwoOptions,i as WithDefaultSelected,B as __namedExportsOrder,R as default};
