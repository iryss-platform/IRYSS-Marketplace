import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{r as s}from"./index-CIdkRTUq.js";import{m as Ee,f as Be,C as Ue,a as _e,e as Pe,b as $,c as He,d as Fe,S as Ge}from"./match-sorter.esm-nQiz62cj.js";import{u as Ve}from"./useTranslation-D8qDtbam.js";import{X as K}from"./x-mark-mini-B5MKf9lu.js";import{T as S}from"./text-v69jHjT5.js";import{c as p}from"./clx-ypaMnjOU.js";import{T as Je}from"./triangles-mini-CgelsB7W.js";import{C as Xe,E as $e}from"./ellipse-mini-solid-3zxHimHt.js";import{B as Ke}from"./badge-CWQUphHF.js";import{P as Qe}from"./plus-mini-EjKOLCPy.js";import"./index-COjQfkKY.js";import"./floating-ui.dom-Cc2GnI-s.js";import"./index-6gKHwO9i.js";import"./index-ByqT07yD.js";import"./bundle-mjs-D43wmME5.js";function Ye(a){return s.forwardRef(a)}const Q=8,Y=28,ye=({value:a,onChange:v,searchValue:m,onSearchValueChange:R,options:n,className:je,placeholder:Ce,fetchNextPage:y,isFetchingNextPage:z,onCreateOption:b,hideCreateOption:W,noResultsPlaceholder:E,allowClear:Te,forceHideInput:A,...we},Ne)=>{var X;const[g,B]=s.useState(!1),[Oe,ke]=s.useTransition(),{t:I}=Ve(),U=s.useRef(null),ze=s.useRef(null);s.useImperativeHandle(Ne,()=>U.current);const _=a!==void 0,f=m!==void 0,c=Array.isArray(a),P=c?[]:"",[l,M]=s.useState(m||""),H=s.useDeferredValue(l),[Ae,Ie]=s.useState(P),h=f?m:l,r=_?a:Ae,q=t=>{!n.filter(o=>!o.disabled).find(o=>c?t==null?void 0:t.includes(o.value):o.value===t)&&b&&t&&b(t),_||Ie(t||P),v&&v(t),M("")},Me=t=>{M(t),R&&R(t)},F=s.useMemo(()=>f?[]:A?n:Ee(n,H,{keys:["label"]}),[n,H,f,A]),D=s.useRef(new IntersectionObserver(t=>{t[0].isIntersecting&&(y==null||y())},{threshold:1})),qe=s.useCallback(t=>{z||(D.current&&D.current.disconnect(),t&&D.current.observe(t))},[z]),De=t=>{t||(W&&b&&l.trim()&&(n.some(o=>{var u;return((u=o.label)==null?void 0:u.toLowerCase())===l.trim().toLowerCase()})||b(l.trim())),M("")),B(t)},G=(r==null?void 0:r.length)>0,i=G&&c,V=i&&!h&&!g,J=A||!c&&G&&!g,Le=((X=n.find(t=>t.value===r))==null?void 0:X.label)||(typeof r=="string"?r:void 0),Re=V||g,We=s.useMemo(()=>{if(!Array.isArray(r))return Y+Q;const d=r.length.toString().length;return Y+d*Q},[r]),L=s.useMemo(()=>f?n:F,[F,n,f]);return e.jsxs(Be,{open:g,setOpen:De,selectedValue:r,setSelectedValue:t=>q(t),value:l,setValue:t=>{ke(()=>Me(t))},children:[e.jsxs("div",{className:p("relative flex cursor-pointer items-center gap-x-2 overflow-hidden","h-8 w-full rounded-md","bg-ui-bg-field transition-fg shadow-borders-base","has-[input:focus]:shadow-borders-interactive-with-active","has-[:invalid]:shadow-borders-error has-[[aria-invalid=true]]:shadow-borders-error","has-[:disabled]:bg-ui-bg-disabled has-[:disabled]:text-ui-fg-disabled has-[:disabled]:cursor-not-allowed",je),style:{"--tag-width":`${We}px`},children:[i&&e.jsxs("button",{type:"button",onClick:t=>{t.preventDefault(),q(c?[]:void 0)},className:"bg-ui-bg-base hover:bg-ui-bg-base-hover txt-compact-small-plus text-ui-fg-subtle focus-within:border-ui-fg-interactive transition-fg absolute start-0.5 top-0.5 z-[1] flex h-[28px] items-center rounded-[4px] border py-[3px] pe-1 ps-1.5 outline-none",children:[e.jsx("span",{className:"tabular-nums",children:r.length}),e.jsx(K,{className:"text-ui-fg-muted"})]}),e.jsxs("div",{className:"relative flex size-full items-center",children:[V&&e.jsx("div",{className:p("pointer-events-none absolute inset-y-0 flex size-full items-center",{"start-[calc(var(--tag-width)+8px)]":i,"start-2":!i}),children:e.jsx(S,{size:"small",leading:"compact",children:I("general.selected")})}),J&&e.jsx("div",{className:p("pointer-events-none absolute inset-y-0 flex size-full items-center overflow-hidden",{"start-[calc(var(--tag-width)+8px)]":i,"start-2":!i}),children:e.jsx(S,{size:"small",leading:"compact",className:"truncate",children:Le})}),e.jsx(Ue,{autoSelect:!0,ref:U,onFocus:()=>B(!0),className:p("txt-compact-small text-ui-fg-base !placeholder:text-ui-fg-muted transition-fg size-full cursor-pointer bg-transparent pe-8 ps-2 outline-none focus:cursor-text","hover:bg-ui-bg-field-hover",{"opacity-0":J,"ps-2":!i,"ps-[calc(var(--tag-width)+8px)]":i}),placeholder:Re?void 0:Ce,...we})]}),Te&&a&&e.jsx("button",{type:"button",onClick:t=>{t.preventDefault(),q(void 0)},className:"bg-ui-bg-base hover:bg-ui-bg-base-hover txt-compact-small-plus text-ui-fg-subtle focus-within:border-ui-fg-interactive transition-fg absolute end-[28px] top-0.5 z-[1] flex h-[28px] items-center rounded-[4px] border px-1.5 py-[2px] outline-none",children:e.jsx(K,{className:"text-ui-fg-muted"})}),e.jsx(_e,{render:t=>e.jsx("button",{...t,type:"button",className:"text-ui-fg-muted transition-fg hover:bg-ui-bg-field-hover absolute end-0 flex size-8 items-center justify-center rounded-r outline-none",children:e.jsx(Je,{})})})]}),e.jsxs(Pe,{gutter:4,sameWidth:!0,ref:ze,role:"listbox",className:p("shadow-elevation-flyout bg-ui-bg-base z-50 rounded-[8px] p-1","max-h-[200px] overflow-y-auto","data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95","data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95","data-[side=bottom]:slide-in-from-top-2 data-[side=start]:slide-in-from-end-2 data-[side=end]:slide-in-from-start-2 data-[side=top]:slide-in-from-bottom-2"),style:{pointerEvents:g?"auto":"none"},"aria-busy":Oe,children:[L.map(({value:t,label:d,secondaryLabel:o,disabled:u})=>e.jsxs($,{value:t,focusOnHover:!0,setValueOnClick:!1,disabled:u,className:p("transition-fg bg-ui-bg-base data-[active-item=true]:bg-ui-bg-base-hover group flex cursor-pointer items-center gap-x-2 rounded-[4px] px-2 py-1",{"text-ui-fg-disabled":u,"bg-ui-bg-component":u}),children:[e.jsx(He,{className:"flex !size-5 shrink-0 items-center justify-center",children:c?e.jsx(Xe,{}):e.jsx($e,{})}),e.jsx(Fe,{className:"txt-compact-small flex-1 overflow-hidden text-ellipsis whitespace-nowrap",children:d}),o&&e.jsx(Ke,{size:"2xsmall",className:"ml-auto shrink-0",children:o})]},t)),!!y&&e.jsx("div",{ref:qe,className:"w-px"}),z&&e.jsx("div",{className:"transition-fg bg-ui-bg-base flex items-center rounded-[4px] px-2 py-1.5",children:e.jsx("div",{className:"bg-ui-bg-component size-full h-5 w-full animate-pulse rounded-[4px]"})}),!L.length&&(E&&!(h!=null&&h.length)?E:e.jsx("div",{className:"flex items-center gap-x-2 rounded-[4px] px-2 py-1.5",children:e.jsx(S,{size:"small",leading:"compact",className:"text-ui-fg-subtle",children:I("general.noResultsTitle")})})),!L.length&&b&&!W&&e.jsxs(s.Fragment,{children:[e.jsx(Ge,{className:"bg-ui-border-base -mx-1"}),e.jsxs($,{value:l,focusOnHover:!0,setValueOnClick:!1,className:"transition-fg bg-ui-bg-base data-[active-item=true]:bg-ui-bg-base-hover group mt-1 flex cursor-pointer items-center gap-x-2 rounded-[4px] px-2 py-1.5",children:[e.jsx(Qe,{className:"text-ui-fg-subtle"}),e.jsxs(S,{size:"small",leading:"compact",children:[I("actions.create"),' "',h,'"']})]})]})]})]})},Se=Ye(ye);ye.__docgenInfo={description:"",methods:[],displayName:"ComboboxImpl",props:{value:{required:!1,tsType:{name:"T"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value?: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:""},searchValue:{required:!1,tsType:{name:"string"},description:""},onSearchValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  value: string\r
  label: string\r
  secondaryLabel?: string\r
  disabled?: boolean\r
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"secondaryLabel",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"ComboboxOption[]"},description:""},fetchNextPage:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isFetchingNextPage:{required:!1,tsType:{name:"boolean"},description:""},onCreateOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},hideCreateOption:{required:!1,tsType:{name:"boolean"},description:""},noResultsPlaceholder:{required:!1,tsType:{name:"ReactNode"},description:""},allowClear:{required:!1,tsType:{name:"boolean"},description:""},forceHideInput:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const x=[{value:"electronics",label:"Electronics"},{value:"clothing",label:"Clothing"},{value:"home",label:"Home & Garden"},{value:"sports",label:"Sports & Outdoors"},{value:"books",label:"Books"},{value:"toys",label:"Toys & Games"},{value:"beauty",label:"Beauty & Personal Care"},{value:"food",label:"Food & Beverages"}],Ze=[{value:"us",label:"United States",secondaryLabel:"US"},{value:"gb",label:"United Kingdom",secondaryLabel:"GB"},{value:"de",label:"Germany",secondaryLabel:"DE"},{value:"fr",label:"France",secondaryLabel:"FR"},{value:"jp",label:"Japan",secondaryLabel:"JP"},{value:"au",label:"Australia",secondaryLabel:"AU"}],ft={title:"Vendor/Inputs/Combobox",component:Se,tags:["autodocs"],decorators:[a=>e.jsx("div",{style:{maxWidth:"350px",minHeight:"300px"},children:e.jsx(a,{})})]},j={args:{options:x,placeholder:"Select a category..."}},C={args:{value:[],options:x,placeholder:"Select categories..."}},T={args:{options:Ze,placeholder:"Select a country..."}},w={args:{value:["electronics","clothing"],options:x,placeholder:"Select categories..."}},N={args:{options:x,placeholder:"Disabled combobox",disabled:!0}},O={args:{options:[{value:"active",label:"Active Category"},{value:"disabled1",label:"Archived Category",disabled:!0},{value:"another",label:"Another Category"},{value:"disabled2",label:"Deprecated Category",disabled:!0}],placeholder:"Some options are disabled..."}},k={render:()=>{const[a,v]=s.useState([]);return e.jsxs("div",{style:{maxWidth:"350px"},children:[e.jsx(Se,{value:a,onChange:m=>v(m??[]),options:x,placeholder:"Pick categories..."}),e.jsxs("p",{style:{marginTop:"8px",fontSize:"12px",color:"#999"},children:["Selected: ",a.length?a.join(", "):"(none)"]})]})},name:"Interactive (Multi)"};var Z,ee,te;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    placeholder: "Select a category..."
  }
}`,...(te=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var se,ae,re;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    value: [] as string[],
    options: sampleOptions,
    placeholder: "Select categories..."
  }
}`,...(re=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var oe,ne,ie;T.parameters={...T.parameters,docs:{...(oe=T.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    options: countryOptions,
    placeholder: "Select a country..."
  }
}`,...(ie=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var le,ce,de;w.parameters={...w.parameters,docs:{...(le=w.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    value: ["electronics", "clothing"],
    options: sampleOptions,
    placeholder: "Select categories..."
  }
}`,...(de=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,pe,me;N.parameters={...N.parameters,docs:{...(ue=N.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    placeholder: "Disabled combobox",
    disabled: true
  }
}`,...(me=(pe=N.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var be,ge,fe;O.parameters={...O.parameters,docs:{...(be=O.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    options: [{
      value: "active",
      label: "Active Category"
    }, {
      value: "disabled1",
      label: "Archived Category",
      disabled: true
    }, {
      value: "another",
      label: "Another Category"
    }, {
      value: "disabled2",
      label: "Deprecated Category",
      disabled: true
    }],
    placeholder: "Some options are disabled..."
  }
}`,...(fe=(ge=O.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var he,xe,ve;k.parameters={...k.parameters,docs:{...(he=k.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    return <div style={{
      maxWidth: "350px"
    }}>\r
        <Combobox value={selected} onChange={v => setSelected(v ?? [])} options={sampleOptions} placeholder="Pick categories..." />\r
        <p style={{
        marginTop: "8px",
        fontSize: "12px",
        color: "#999"
      }}>\r
          Selected: {selected.length ? selected.join(", ") : "(none)"}\r
        </p>\r
      </div>;
  },
  name: "Interactive (Multi)"
}`,...(ve=(xe=k.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};const ht=["SingleSelect","MultiSelect","WithSecondaryLabels","WithPreselectedValues","Disabled","WithDisabledOptions","InteractiveMulti"];export{N as Disabled,k as InteractiveMulti,C as MultiSelect,j as SingleSelect,O as WithDisabledOptions,w as WithPreselectedValues,T as WithSecondaryLabels,ht as __namedExportsOrder,ft as default};
