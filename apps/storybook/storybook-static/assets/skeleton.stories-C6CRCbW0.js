import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{c as o}from"./clx-ypaMnjOU.js";import{C as le}from"./container-Cr4nqD7r.js";import"./index-CIdkRTUq.js";import"./bundle-mjs-D43wmME5.js";const s=({className:a,style:t})=>e.jsx("div",{"aria-hidden":!0,className:o("bg-ui-bg-component h-3 w-3 animate-pulse rounded-[4px]",a),style:t}),c=({level:a="h1",characters:t=10})=>{let l=9;switch(a){case"h1":l=11;break;case"h2":l=10;break;case"h3":l=9;break}return e.jsx(s,{className:o({"h-7":a==="h1","h-6":a==="h2","h-5":a==="h3"}),style:{width:`${l*t}px`}})},S=({size:a="small",leading:t="compact",characters:l=10})=>{let r=9;switch(a){case"xlarge":r=13;break;case"large":r=11;break;case"base":r=10;break;case"small":r=9;break;case"xsmall":r=8;break}return e.jsx(s,{className:o({"h-5":a==="xsmall","h-6":a==="small","h-7":a==="base","h-8":a==="xlarge","!h-5":t==="compact"}),style:{width:`${r*l}px`}})},j=()=>e.jsx(s,{className:"h-7 w-7 rounded-md"}),U=({rowCount:a})=>{const t=Array.from({length:a??0},(l,r)=>r);return e.jsxs(le,{className:"divide-y p-0","aria-hidden":!0,children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(c,{characters:16}),e.jsx(j,{})]}),t.map(l=>e.jsxs("div",{className:"grid grid-cols-2 items-center px-6 py-4","aria-hidden":!0,children:[e.jsx(S,{size:"small",leading:"compact",characters:12}),e.jsx(S,{size:"small",leading:"compact",characters:24})]},l))]})},X=({layout:a})=>e.jsxs("div",{className:o("flex items-center justify-between p-4",{"border-t":a==="fill"}),children:[e.jsx(s,{className:"h-7 w-[138px]"}),e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(s,{className:"h-7 w-24"}),e.jsx(s,{className:"h-7 w-11"}),e.jsx(s,{className:"h-7 w-11"})]})]}),Y=({rowCount:a=10,search:t=!0,filters:l=!0,orderBy:r=!0,pagination:i=!0,layout:n="fit"})=>{const d=a+1,ae=Array.from({length:d},(w,re)=>re),se=t||l||r;return e.jsxs("div",{"aria-hidden":!0,className:o({"flex h-full flex-col overflow-hidden":n==="fill"}),children:[se&&e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[l&&e.jsx(s,{className:"h-7 w-full max-w-[135px]"}),(t||r)&&e.jsxs("div",{className:"flex items-center gap-x-2",children:[t&&e.jsx(s,{className:"h-7 w-[160px]"}),r&&e.jsx(s,{className:"h-7 w-7"})]})]}),e.jsx("div",{className:"flex flex-col divide-y border-y",children:ae.map(w=>e.jsx(s,{className:"h-10 w-full rounded-none"},w))}),i&&e.jsx(X,{layout:n})]})},Z=({sections:a=2,showJSON:t=!1,showMetadata:l=!1})=>e.jsxs("div",{className:"flex flex-col gap-y-3",children:[Array.from({length:a},(r,i)=>i).map(r=>e.jsx(s,{className:o("h-full max-h-[460px] w-full rounded-lg",{"max-h-[219px]":r===0})},r)),l&&e.jsx(s,{className:"h-[60px] w-full rounded-lg"}),t&&e.jsx(s,{className:"h-[60px] w-full rounded-lg"})]}),ee=({mainSections:a=2,sidebarSections:t=1,showJSON:l=!1,showMetadata:r=!0})=>{const i=l||r;return e.jsx("div",{className:"flex flex-col gap-y-3",children:e.jsxs("div",{className:"flex flex-col gap-x-4 gap-y-3 xl:flex-row xl:items-start",children:[e.jsxs("div",{className:"flex w-full flex-col gap-y-3",children:[Array.from({length:a},(n,d)=>d).map(n=>e.jsx(s,{className:o("h-full max-h-[460px] w-full rounded-lg",{"max-h-[219px]":n===0})},n)),i&&e.jsxs("div",{className:"hidden flex-col gap-y-3 xl:flex",children:[r&&e.jsx(s,{className:"h-[60px] w-full rounded-lg"}),l&&e.jsx(s,{className:"h-[60px] w-full rounded-lg"})]})]}),e.jsxs("div",{className:"flex w-full max-w-[100%] flex-col gap-y-3 xl:mt-0 xl:max-w-[440px]",children:[Array.from({length:t},(n,d)=>d).map(n=>e.jsx(s,{className:o("h-full max-h-[320px] w-full rounded-lg",{"max-h-[140px]":n===0})},n)),i&&e.jsxs("div",{className:"flex flex-col gap-y-3 xl:hidden",children:[r&&e.jsx(s,{className:"h-[60px] w-full rounded-lg"}),l&&e.jsx(s,{className:"h-[60px] w-full rounded-lg"})]})]})]})})};s.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"HeadingSkeleton",props:{level:{required:!1,tsType:{name:'ComponentPropsWithoutRef["level"]',raw:'ComponentPropsWithoutRef<typeof Heading>["level"]'},description:"",defaultValue:{value:'"h1"',computed:!1}},characters:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}}}};S.__docgenInfo={description:"",methods:[],displayName:"TextSkeleton",props:{size:{required:!1,tsType:{name:'ComponentPropsWithoutRef["size"]',raw:'ComponentPropsWithoutRef<typeof Text>["size"]'},description:"",defaultValue:{value:'"small"',computed:!1}},leading:{required:!1,tsType:{name:'ComponentPropsWithoutRef["leading"]',raw:'ComponentPropsWithoutRef<typeof Text>["leading"]'},description:"",defaultValue:{value:'"compact"',computed:!1}},characters:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}}}};j.__docgenInfo={description:"",methods:[],displayName:"IconButtonSkeleton"};U.__docgenInfo={description:"",methods:[],displayName:"GeneralSectionSkeleton",props:{rowCount:{required:!1,tsType:{name:"number"},description:""}}};X.__docgenInfo={description:"",methods:[],displayName:"TableFooterSkeleton",props:{layout:{required:!0,tsType:{name:"union",raw:'"fill" | "fit"',elements:[{name:"literal",value:'"fill"'},{name:"literal",value:'"fit"'}]},description:""}}};Y.__docgenInfo={description:"",methods:[],displayName:"TableSkeleton",props:{rowCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},search:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},filters:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},orderBy:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},pagination:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:'"fit" | "fill"',elements:[{name:"literal",value:'"fit"'},{name:"literal",value:'"fill"'}]},description:"",defaultValue:{value:'"fit"',computed:!1}}}};Z.__docgenInfo={description:"",methods:[],displayName:"SingleColumnPageSkeleton",props:{sections:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},showJSON:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showMetadata:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};ee.__docgenInfo={description:"",methods:[],displayName:"TwoColumnPageSkeleton",props:{mainSections:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},sidebarSections:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},showJSON:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showMetadata:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const ce={title:"Admin/Common/Skeleton",component:s,tags:["autodocs"]},m={args:{className:"h-4 w-32"}},u={args:{className:"h-8 w-64 rounded-lg"}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:"h1 (16 characters)"}),e.jsx(c,{level:"h1",characters:16})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:"h2 (12 characters)"}),e.jsx(c,{level:"h2",characters:12})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:"h3 (8 characters)"}),e.jsx(c,{level:"h3",characters:8})]})]})},x={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:["xsmall","small","base","large","xlarge"].map(a=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:a}),e.jsx(S,{size:a,characters:20})]},a))})},f={name:"IconButton Skeleton",render:()=>e.jsx(j,{})},h={render:()=>e.jsx(U,{rowCount:4})},g={render:()=>e.jsx("div",{style:{maxWidth:"800px"},children:e.jsx(Y,{rowCount:5,search:!0,filters:!0,orderBy:!0,pagination:!0,layout:"fit"})})},y={render:()=>e.jsx("div",{style:{maxWidth:"800px"},children:e.jsx(Z,{sections:3,showJSON:!0,showMetadata:!0})})},v={render:()=>e.jsx("div",{style:{maxWidth:"1000px"},children:e.jsx(ee,{mainSections:2,sidebarSections:2,showJSON:!0,showMetadata:!0})})};var N,b,k;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    className: "h-4 w-32"
  }
}`,...(k=(b=m.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var T,C,_;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    className: "h-8 w-64 rounded-lg"
  }
}`,...(_=(C=u.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var q,V,P;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  }}>\r
      <div>\r
        <div style={{
        fontSize: "11px",
        color: "#888",
        marginBottom: "4px"
      }}>h1 (16 characters)</div>\r
        <HeadingSkeleton level="h1" characters={16} />\r
      </div>\r
      <div>\r
        <div style={{
        fontSize: "11px",
        color: "#888",
        marginBottom: "4px"
      }}>h2 (12 characters)</div>\r
        <HeadingSkeleton level="h2" characters={12} />\r
      </div>\r
      <div>\r
        <div style={{
        fontSize: "11px",
        color: "#888",
        marginBottom: "4px"
      }}>h3 (8 characters)</div>\r
        <HeadingSkeleton level="h3" characters={8} />\r
      </div>\r
    </div>
}`,...(P=(V=p.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var B,I,z;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  }}>\r
      {(["xsmall", "small", "base", "large", "xlarge"] as const).map(size => <div key={size}>\r
          <div style={{
        fontSize: "11px",
        color: "#888",
        marginBottom: "4px"
      }}>{size}</div>\r
          <TextSkeleton size={size} characters={20} />\r
        </div>)}\r
    </div>
}`,...(z=(I=x.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var W,H,R;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "IconButton Skeleton",
  render: () => <IconButtonSkeleton />
}`,...(R=(H=f.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var D,A,G;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <GeneralSectionSkeleton rowCount={4} />
}`,...(G=(A=h.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var O,J,M;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: "800px"
  }}>\r
      <TableSkeleton rowCount={5} search filters orderBy pagination layout="fit" />\r
    </div>
}`,...(M=(J=g.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};var E,F,$;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: "800px"
  }}>\r
      <SingleColumnPageSkeleton sections={3} showJSON showMetadata />\r
    </div>
}`,...($=(F=y.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var K,L,Q;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: "1000px"
  }}>\r
      <TwoColumnPageSkeleton mainSections={2} sidebarSections={2} showJSON showMetadata />\r
    </div>
}`,...(Q=(L=v.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};const me=["Default","CustomSize","HeadingSkeletons","TextSkeletons","IconButtonSkeletonStory","GeneralSection","Table","SingleColumnPage","TwoColumnPage"];export{u as CustomSize,m as Default,h as GeneralSection,p as HeadingSkeletons,f as IconButtonSkeletonStory,y as SingleColumnPage,g as Table,x as TextSkeletons,v as TwoColumnPage,me as __namedExportsOrder,ce as default};
