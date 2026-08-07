import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{r as a}from"./index-CIdkRTUq.js";import{u as D}from"./useTranslation-D8qDtbam.js";import{B as V}from"./button-DVvAtRte.js";import{c as x}from"./clx-ypaMnjOU.js";import{X as W}from"./x-mark-mini-B5MKf9lu.js";import"./index-6gKHwO9i.js";import"./spinner-UC_H4VgD.js";import"./index-ByqT07yD.js";import"./bundle-mjs-D43wmME5.js";const A=a.createContext(null),E=()=>{const t=a.useContext(A);if(!t)throw new Error("useGroupContext must be used within a ChipGroup component");return t},F=({onClearAll:t,onRemove:p,variant:o="component",className:s,children:r})=>{const{t:i}=D(),d=!!t&&a.Children.count(r)>0;return e.jsx(A.Provider,{value:{onRemove:p,variant:o},children:e.jsxs("ul",{role:"application",className:x("flex flex-wrap items-center gap-2",s),children:[r,d&&e.jsx("li",{children:e.jsx(V,{size:"small",variant:"transparent",type:"button",onClick:t,className:"text-ui-fg-muted active:text-ui-fg-subtle",children:i("actions.clearAll")})})]})})},M=({index:t,className:p,children:o})=>{const{onRemove:s,variant:r}=E();return e.jsxs("li",{className:x("bg-ui-bg-component shadow-borders-base flex items-stretch divide-x overflow-hidden rounded-md",{"bg-ui-bg-component":r==="component","bg-ui-bg-base-":r==="base"},p),children:[e.jsx("span",{className:"txt-compact-small-plus text-ui-fg-subtle flex items-center justify-center px-2 py-1",children:o}),!!s&&e.jsx("button",{onClick:()=>s(t),type:"button",className:x("text-ui-fg-muted active:text-ui-fg-subtle transition-fg flex items-center justify-center p-1",{"hover:bg-ui-bg-component-hover active:bg-ui-bg-component-pressed":r==="component","hover:bg-ui-bg-base-hover active:bg-ui-bg-base-pressed":r==="base"}),children:e.jsx(W,{})})]})},n=Object.assign(F,{Chip:M});F.__docgenInfo={description:"",methods:[],displayName:"Group",props:{variant:{defaultValue:{value:'"component"',computed:!1},required:!1}}};const L={title:"Dashboard/Common/ChipGroup",component:n,tags:["autodocs"],decorators:[t=>e.jsx("div",{style:{maxWidth:500,padding:20},children:e.jsx(t,{})})]},c={render:()=>e.jsxs(n,{children:[e.jsx(n.Chip,{index:0,children:"Filter 1"}),e.jsx(n.Chip,{index:1,children:"Filter 2"}),e.jsx(n.Chip,{index:2,children:"Filter 3"})]})},m={render:()=>{const t=()=>{const[p,o]=a.useState(["Color: Red","Size: M","Brand: Nike"]),s=r=>{o(i=>i.filter((d,C)=>C!==r))};return e.jsx(n,{onRemove:s,children:p.map((r,i)=>e.jsx(n.Chip,{index:i,children:r},r))})};return e.jsx(t,{})}},h={render:()=>{const t=()=>{const[p,o]=a.useState(["Status: Active","Region: US","Type: Digital"]),s=r=>{o(i=>i.filter((d,C)=>C!==r))};return e.jsx(n,{onRemove:s,onClearAll:()=>o([]),children:p.map((r,i)=>e.jsx(n.Chip,{index:i,children:r},r))})};return e.jsx(t,{})}},u={render:()=>e.jsxs(n,{variant:"base",children:[e.jsx(n.Chip,{index:0,children:"Base Chip 1"}),e.jsx(n.Chip,{index:1,children:"Base Chip 2"})]})},l={render:()=>e.jsxs(n,{variant:"component",children:[e.jsx(n.Chip,{index:0,children:"Component Chip 1"}),e.jsx(n.Chip,{index:1,children:"Component Chip 2"})]})};var v,b,G;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <ChipGroup>\r
      <ChipGroup.Chip index={0}>Filter 1</ChipGroup.Chip>\r
      <ChipGroup.Chip index={1}>Filter 2</ChipGroup.Chip>\r
      <ChipGroup.Chip index={2}>Filter 3</ChipGroup.Chip>\r
    </ChipGroup>
}`,...(G=(b=c.parameters)==null?void 0:b.docs)==null?void 0:G.source}}};var g,f,j;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const RemovableChips = () => {
      const [items, setItems] = useState(["Color: Red", "Size: M", "Brand: Nike"]);
      const handleRemove = (index: number) => {
        setItems(prev => prev.filter((_, i) => i !== index));
      };
      return <ChipGroup onRemove={handleRemove}>\r
          {items.map((item, i) => <ChipGroup.Chip key={item} index={i}>\r
              {item}\r
            </ChipGroup.Chip>)}\r
        </ChipGroup>;
    };
    return <RemovableChips />;
  }
}`,...(j=(f=m.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var R,S,y;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const ClearableChips = () => {
      const [items, setItems] = useState(["Status: Active", "Region: US", "Type: Digital"]);
      const handleRemove = (index: number) => {
        setItems(prev => prev.filter((_, i) => i !== index));
      };
      return <ChipGroup onRemove={handleRemove} onClearAll={() => setItems([])}>\r
          {items.map((item, i) => <ChipGroup.Chip key={item} index={i}>\r
              {item}\r
            </ChipGroup.Chip>)}\r
        </ChipGroup>;
    };
    return <ClearableChips />;
  }
}`,...(y=(S=h.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var B,I,N;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <ChipGroup variant="base">\r
      <ChipGroup.Chip index={0}>Base Chip 1</ChipGroup.Chip>\r
      <ChipGroup.Chip index={1}>Base Chip 2</ChipGroup.Chip>\r
    </ChipGroup>
}`,...(N=(I=u.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var _,k,w;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <ChipGroup variant="component">\r
      <ChipGroup.Chip index={0}>Component Chip 1</ChipGroup.Chip>\r
      <ChipGroup.Chip index={1}>Component Chip 2</ChipGroup.Chip>\r
    </ChipGroup>
}`,...(w=(k=l.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const Q=["Default","WithRemove","WithClearAll","BaseVariant","ComponentVariant"];export{u as BaseVariant,l as ComponentVariant,c as Default,h as WithClearAll,m as WithRemove,Q as __namedExportsOrder,L as default};
