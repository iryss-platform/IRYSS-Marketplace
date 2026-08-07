import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{r as u}from"./index-CIdkRTUq.js";import{u as $}from"./useTranslation-D8qDtbam.js";import{B as W}from"./button-DVvAtRte.js";import{c as m}from"./clx-ypaMnjOU.js";import{X as k}from"./x-mark-mini-B5MKf9lu.js";import"./index-6gKHwO9i.js";import"./spinner-UC_H4VgD.js";import"./index-ByqT07yD.js";import"./bundle-mjs-D43wmME5.js";const E=u.createContext(null),V=()=>{const r=u.useContext(E);if(!r)throw new Error("useGroupContext must be used within a ChipGroup component");return r},N=({onClearAll:r,onRemove:o,variant:s="component",className:t,children:n})=>{const{t:p}=$(),C=!!r&&u.Children.count(n)>0;return e.jsx(E.Provider,{value:{onRemove:o,variant:s},children:e.jsxs("ul",{role:"application",className:m("flex flex-wrap items-center gap-2",t),children:[n,C&&e.jsx("li",{children:e.jsx(W,{size:"small",variant:"transparent",type:"button",onClick:r,className:"text-ui-fg-muted active:text-ui-fg-subtle",children:p("actions.clearAll")})})]})})},z=({index:r,className:o,children:s})=>{const{onRemove:t,variant:n}=V();return e.jsxs("li",{className:m("bg-ui-bg-component shadow-borders-base flex items-stretch divide-x overflow-hidden rounded-md",{"bg-ui-bg-component":n==="component","bg-ui-bg-base-":n==="base"},o),children:[e.jsx("span",{className:"txt-compact-small-plus text-ui-fg-subtle flex items-center justify-center px-2 py-1",children:s}),!!t&&e.jsx("button",{onClick:()=>t(r),type:"button",className:m("text-ui-fg-muted active:text-ui-fg-subtle transition-fg flex items-center justify-center p-1",{"hover:bg-ui-bg-component-hover active:bg-ui-bg-component-pressed":n==="component","hover:bg-ui-bg-base-hover active:bg-ui-bg-base-pressed":n==="base"}),children:e.jsx(k,{})})]})},i=Object.assign(N,{Chip:z});N.__docgenInfo={description:"",methods:[],displayName:"Group",props:{variant:{defaultValue:{value:'"component"',computed:!1},required:!1}}};const K={title:"Vendor/Common/ChipGroup",component:i,tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{maxWidth:"500px"},children:e.jsx(r,{})})],argTypes:{variant:{control:"select",options:["base","component"]}}},a={render:()=>e.jsxs(i,{children:[e.jsx(i.Chip,{index:0,children:"Electronics"}),e.jsx(i.Chip,{index:1,children:"Fashion"}),e.jsx(i.Chip,{index:2,children:"Home Goods"})]})},l={render:()=>e.jsxs(i,{onRemove:r=>alert(`Remove chip at index ${r}`),children:[e.jsx(i.Chip,{index:0,children:"Tag A"}),e.jsx(i.Chip,{index:1,children:"Tag B"}),e.jsx(i.Chip,{index:2,children:"Tag C"})]})},c={render:()=>e.jsxs(i,{onRemove:r=>alert(`Remove ${r}`),onClearAll:()=>alert("Clear all"),children:[e.jsx(i.Chip,{index:0,children:"Filter 1"}),e.jsx(i.Chip,{index:1,children:"Filter 2"}),e.jsx(i.Chip,{index:2,children:"Filter 3"})]})},h={render:()=>e.jsxs(i,{variant:"base",onRemove:r=>alert(`Remove ${r}`),children:[e.jsx(i.Chip,{index:0,children:"Base Style 1"}),e.jsx(i.Chip,{index:1,children:"Base Style 2"})]})},d={render:()=>{const[r,o]=u.useState(["Red","Green","Blue","Yellow"]),s=n=>{o(p=>p.filter((C,_)=>_!==n))},t=()=>{o([])};return e.jsxs("div",{children:[e.jsx(i,{onRemove:s,onClearAll:t,children:r.map((n,p)=>e.jsx(i.Chip,{index:p,children:n},n))}),r.length===0&&e.jsx("p",{style:{marginTop:"8px",fontSize:"14px",color:"#999"},children:"All chips removed. Refresh to reset."})]})}};var x,v,G;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <ChipGroup>\r
      <ChipGroup.Chip index={0}>Electronics</ChipGroup.Chip>\r
      <ChipGroup.Chip index={1}>Fashion</ChipGroup.Chip>\r
      <ChipGroup.Chip index={2}>Home Goods</ChipGroup.Chip>\r
    </ChipGroup>
}`,...(G=(v=a.parameters)==null?void 0:v.docs)==null?void 0:G.source}}};var g,f,j;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <ChipGroup onRemove={index => alert(\`Remove chip at index \${index}\`)}>\r
      <ChipGroup.Chip index={0}>Tag A</ChipGroup.Chip>\r
      <ChipGroup.Chip index={1}>Tag B</ChipGroup.Chip>\r
      <ChipGroup.Chip index={2}>Tag C</ChipGroup.Chip>\r
    </ChipGroup>
}`,...(j=(f=l.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var b,R,y;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <ChipGroup onRemove={index => alert(\`Remove \${index}\`)} onClearAll={() => alert("Clear all")}>\r
      <ChipGroup.Chip index={0}>Filter 1</ChipGroup.Chip>\r
      <ChipGroup.Chip index={1}>Filter 2</ChipGroup.Chip>\r
      <ChipGroup.Chip index={2}>Filter 3</ChipGroup.Chip>\r
    </ChipGroup>
}`,...(y=(R=c.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var A,S,B;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <ChipGroup variant="base" onRemove={index => alert(\`Remove \${index}\`)}>\r
      <ChipGroup.Chip index={0}>Base Style 1</ChipGroup.Chip>\r
      <ChipGroup.Chip index={1}>Base Style 2</ChipGroup.Chip>\r
    </ChipGroup>
}`,...(B=(S=h.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var T,w,F;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [chips, setChips] = useState(["Red", "Green", "Blue", "Yellow"]);
    const handleRemove = (index: number) => {
      setChips(prev => prev.filter((_, i) => i !== index));
    };
    const handleClearAll = () => {
      setChips([]);
    };
    return <div>\r
        <ChipGroup onRemove={handleRemove} onClearAll={handleClearAll}>\r
          {chips.map((chip, index) => <ChipGroup.Chip key={chip} index={index}>\r
              {chip}\r
            </ChipGroup.Chip>)}\r
        </ChipGroup>\r
        {chips.length === 0 && <p style={{
        marginTop: "8px",
        fontSize: "14px",
        color: "#999"
      }}>\r
            All chips removed. Refresh to reset.\r
          </p>}\r
      </div>;
  }
}`,...(F=(w=d.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};const L=["Default","WithRemove","WithClearAll","BaseVariant","Interactive"];export{h as BaseVariant,a as Default,d as Interactive,c as WithClearAll,l as WithRemove,L as __namedExportsOrder,K as default};
