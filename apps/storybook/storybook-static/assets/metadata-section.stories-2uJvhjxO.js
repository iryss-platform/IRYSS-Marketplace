import{j as o}from"./jsx-runtime-B22yQkQ1.js";import{u as R}from"./useTranslation-D8qDtbam.js";import{C as T}from"./container-Cr4nqD7r.js";import{H}from"./heading-8Larxijo.js";import{B as I}from"./badge-CWQUphHF.js";import{I as L}from"./icon-button-vC0JyWE_.js";import{L as W,M as V}from"./chunk-62JRHF6Z-cTfXawhh.js";import{r as l}from"./index-CIdkRTUq.js";import"./clx-ypaMnjOU.js";import"./bundle-mjs-D43wmME5.js";import"./index-6gKHwO9i.js";import"./index-ByqT07yD.js";import"./spinner-UC_H4VgD.js";var q=Object.defineProperty,c=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,p=(a,t,e)=>t in a?q(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,z=(a,t)=>{for(var e in t||(t={}))E.call(t,e)&&p(a,e,t[e]);if(c)for(var e of c(t))P.call(t,e)&&p(a,e,t[e]);return a},A=(a,t)=>{var e={};for(var r in a)E.call(a,r)&&t.indexOf(r)<0&&(e[r]=a[r]);if(a!=null&&c)for(var r of c(a))t.indexOf(r)<0&&P.call(a,r)&&(e[r]=a[r]);return e};const k=l.forwardRef((a,t)=>{var e=a,{color:r="currentColor"}=e,B=A(e,["color"]);return l.createElement("svg",z({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,viewBox:"0 0 15 15",fill:"none",ref:t},B),l.createElement("path",{stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M8.833 1.944h4.223v4.223M13.056 1.944 7.5 7.5M11.278 8.833v2.445c0 .982-.796 1.778-1.778 1.778H3.722a1.777 1.777 0 0 1-1.778-1.778V5.5c0-.982.796-1.778 1.778-1.778h2.445"}))});k.displayName="ArrowUpRightOnBox";const C=({data:a,href:t="metadata/edit"})=>{const{t:e}=R();if(!a||!("metadata"in a))return null;const r=a.metadata?Object.keys(a.metadata).length:0;return o.jsxs(T,{className:"flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-x-3",children:[o.jsx(H,{level:"h2",children:e("metadata.header")}),o.jsx(I,{size:"2xsmall",rounded:"full",children:e("metadata.numberOfKeys",{count:r})})]}),o.jsx(L,{size:"small",variant:"transparent",className:"text-ui-fg-muted hover:text-ui-fg-subtle",asChild:!0,children:o.jsx(W,{to:t,children:o.jsx(k,{})})})]})};C.__docgenInfo={description:"",methods:[],displayName:"MetadataSection",props:{data:{required:!0,tsType:{name:"TData"},description:""},href:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"metadata/edit"',computed:!1}}}};const ta={title:"Dashboard/Common/MetadataSection",component:C,tags:["autodocs"],decorators:[a=>o.jsx(V,{children:o.jsx("div",{style:{maxWidth:600,padding:20},children:o.jsx(a,{})})})]},s={args:{data:{metadata:{source:"import",sync_id:"abc-123",priority:"high"}}}},n={args:{data:{metadata:{}}}},d={args:{data:{metadata:null}}},i={args:{data:{metadata:{key1:"value1",key2:"value2"}},href:"/custom/metadata/path"}},m={args:{data:{name:"Test product"}}};var u,f,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    data: {
      metadata: {
        source: "import",
        sync_id: "abc-123",
        priority: "high"
      }
    }
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var g,y,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    data: {
      metadata: {}
    }
  }
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,_,j;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    data: {
      metadata: null
    }
  }
}`,...(j=(_=d.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var M,O,w;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    data: {
      metadata: {
        key1: "value1",
        key2: "value2"
      }
    },
    href: "/custom/metadata/path"
  }
}`,...(w=(O=i.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var b,N,S;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    data: {
      name: "Test product"
    }
  }
}`,...(S=(N=m.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const ra=["WithMetadata","EmptyMetadata","NullMetadata","CustomHref","NoMetadataProperty"];export{i as CustomHref,n as EmptyMetadata,m as NoMetadataProperty,d as NullMetadata,s as WithMetadata,ra as __namedExportsOrder,ta as default};
