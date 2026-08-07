import{j as t}from"./jsx-runtime-B22yQkQ1.js";import{r as i}from"./index-CIdkRTUq.js";import{A as oe}from"./index-DwarL4oV.js";import{B as ie}from"./badge-CWQUphHF.js";import{m as le}from"./proxy-WTNRuLrC.js";import{X as de}from"./x-mark-mini-B5MKf9lu.js";import{c as l}from"./clx-ypaMnjOU.js";import"./index-6gKHwO9i.js";import"./index-ByqT07yD.js";import"./bundle-mjs-D43wmME5.js";const h=i.forwardRef(({value:o,onChange:s,onBlur:v,disabled:L,name:Q,showRemove:y=!0,variant:b="base",allowDuplicates:Y=!1,placeholder:Z,className:ee},ae)=>{const n=i.useRef(null),x=i.useRef(typeof o<"u").current,[te,T]=i.useState([]);i.useImperativeHandle(ae,()=>n.current);const[w,S]=i.useState(null),r=x?o:te,j=e=>{const a=e.trim();if(a){if(!Y&&r.includes(a)){S(r.indexOf(a)),setTimeout(()=>{S(null)},300);return}s==null||s([...r,a]),x||T([...r,a])}},C=e=>{s==null||s(r.filter(a=>a!==e)),x||T(r.filter(a=>a!==e))},re=e=>{v==null||v(),e.target.value&&(j(e.target.value),e.target.value="")},se=e=>{var a,q,I,D;if(e.key==="Enter"||e.key===","){if(e.preventDefault(),!((a=n.current)!=null&&a.value))return;j(((q=n.current)==null?void 0:q.value)??""),n.current.value="",(I=n.current)==null||I.focus()}e.key==="Backspace"&&((D=n.current)==null?void 0:D.value)===""&&C(r[r.length-1])},ne={x:[0,-2,2,-2,2,0],transition:{duration:.3}};return t.jsxs("div",{className:l("shadow-borders-base flex min-h-8 flex-wrap items-center gap-1 rounded-md px-2 py-1.5","transition-fg focus-within:shadow-borders-interactive-with-active","has-[input:disabled]:bg-ui-bg-disabled has-[input:disabled]:text-ui-fg-disabled has-[input:disabled]:cursor-not-allowed",{"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover":b==="contrast","bg-ui-bg-field hover:bg-ui-bg-field-hover":b==="base"},ee),tabIndex:-1,onClick:()=>{var e;return(e=n.current)==null?void 0:e.focus()},children:[r.map((e,a)=>t.jsx(oe,{children:t.jsx(ie,{size:"2xsmall",className:l("gap-x-0.5 pl-1.5 pr-1.5",{"transition-fg pr-1":y,"shadow-borders-focus":a===w}),asChild:!0,children:t.jsxs(le.div,{animate:a===w?ne:void 0,children:[e,y&&t.jsx("button",{tabIndex:-1,type:"button",onClick:()=>C(e),className:l("text-ui-fg-subtle transition-fg outline-none"),children:t.jsx(de,{})})]})})},`${e}-${a}`)),t.jsx("input",{"aria-label":"Chip input",className:l("caret-ui-fg-base text-ui-fg-base txt-compact-small flex-1 appearance-none bg-transparent","disabled:text-ui-fg-disabled disabled:cursor-not-allowed","focus:outline-none","placeholder:text-ui-fg-muted"),onKeyDown:se,onBlur:re,disabled:L,name:Q,ref:n,placeholder:r.length===0?Z:void 0,autoComplete:"off"})]})});h.displayName="ChipInput";h.__docgenInfo={description:"",methods:[],displayName:"ChipInput",props:{value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},name:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},allowDuplicates:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showRemove:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"base" | "contrast"',elements:[{name:"literal",value:'"base"'},{name:"literal",value:'"contrast"'}]},description:"",defaultValue:{value:'"base"',computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Te={title:"Vendor/Inputs/ChipInput",component:h,tags:["autodocs"],decorators:[o=>t.jsx("div",{style:{maxWidth:"400px"},children:t.jsx(o,{})})],argTypes:{variant:{control:"select",options:["base","contrast"]}}},d={args:{placeholder:"Type and press Enter to add tags..."}},c={args:{value:["electronics","fashion","home-goods"],placeholder:"Add more tags..."}},u={args:{variant:"contrast",value:["tag-1","tag-2"],placeholder:"Contrast variant..."}},p={args:{value:["read-only-tag-1","read-only-tag-2"],showRemove:!1}},m={args:{value:["locked-tag"],disabled:!0}},g={render:()=>{const[o,s]=i.useState(["sample"]);return t.jsxs("div",{style:{maxWidth:"400px"},children:[t.jsx("p",{style:{marginBottom:"8px",fontSize:"14px",color:"#666"},children:"Type a value and press Enter or comma to add. Backspace removes the last tag."}),t.jsx(h,{value:o,onChange:s,placeholder:"Add product tags..."}),t.jsxs("p",{style:{marginTop:"8px",fontSize:"12px",color:"#999"},children:["Current tags: ",JSON.stringify(o)]})]})}},f={args:{value:["unique-tag"],allowDuplicates:!1,placeholder:'Try typing "unique-tag" again...'}};var k,R,N;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    placeholder: "Type and press Enter to add tags..."
  }
}`,...(N=(R=d.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var V,A,B;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    value: ["electronics", "fashion", "home-goods"],
    placeholder: "Add more tags..."
  }
}`,...(B=(A=c.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var E,W,z;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: "contrast",
    value: ["tag-1", "tag-2"],
    placeholder: "Contrast variant..."
  }
}`,...(z=(W=u.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var O,_,P;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    value: ["read-only-tag-1", "read-only-tag-2"],
    showRemove: false
  }
}`,...(P=(_=p.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var J,K,M;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    value: ["locked-tag"],
    disabled: true
  }
}`,...(M=(K=m.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var X,$,H;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<string[]>(["sample"]);
    return <div style={{
      maxWidth: "400px"
    }}>\r
        <p style={{
        marginBottom: "8px",
        fontSize: "14px",
        color: "#666"
      }}>\r
          Type a value and press Enter or comma to add. Backspace removes the last tag.\r
        </p>\r
        <ChipInput value={tags} onChange={setTags} placeholder="Add product tags..." />\r
        <p style={{
        marginTop: "8px",
        fontSize: "12px",
        color: "#999"
      }}>\r
          Current tags: {JSON.stringify(tags)}\r
        </p>\r
      </div>;
  }
}`,...(H=($=g.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var U,F,G;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    value: ["unique-tag"],
    allowDuplicates: false,
    placeholder: 'Try typing "unique-tag" again...'
  }
}`,...(G=(F=f.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const we=["Default","WithPrefilledValues","ContrastVariant","WithoutRemoveButton","Disabled","Interactive","NoDuplicates"];export{u as ContrastVariant,d as Default,m as Disabled,g as Interactive,f as NoDuplicates,c as WithPrefilledValues,p as WithoutRemoveButton,we as __namedExportsOrder,Te as default};
