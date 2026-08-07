import{j as s}from"./jsx-runtime-B22yQkQ1.js";import{c as l}from"./utils-BriokOL4.js";import{L,u as H}from"./LocalizedLink-D5sXaYq6.js";import{F as N}from"./index-BlYTR7gl.js";import"./index-CIdkRTUq.js";import"./bundle-mjs-D43wmME5.js";import"./next-link-DiJkJLFX.js";function f({items:x,className:y,"data-testid":o}){const v=H();return s.jsx("nav",{className:l("flex",y),"aria-label":"Breadcrumb","data-testid":"breadcrumbs",children:s.jsx("ol",{className:"inline-flex items-center gap-2",children:x.map(({path:n,label:j},e)=>{const w=v===n;return s.jsxs("li",{className:"inline-flex items-center","data-testid":`breadcrumb-item-${e}`,children:[e>0&&s.jsx(N,{size:16}),s.jsx(L,{href:n,className:l("inline-flex items-center label-md text-primary",e>0&&"ml-2",w&&"text-secondary"),"data-testid":o?`${o}-link-${e}`:`breadcrumbs-link-${e}`,children:j})]},n)})})})}f.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; path: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"path",value:{name:"string",required:!0}}]}}],raw:"{ label: string; path: string }[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""}}};const _={title:"B2C/Atoms/Breadcrumbs",component:f,tags:["autodocs"],parameters:{nextjs:{appDirectory:!0}}},a={args:{items:[{label:"Home",path:"/"},{label:"Products",path:"/products"}]}},r={args:{items:[{label:"Home",path:"/"},{label:"Electronics",path:"/categories/electronics"},{label:"Headphones",path:"/categories/electronics/headphones"}]}},t={args:{items:[{label:"Home",path:"/"},{label:"Shop",path:"/shop"},{label:"Women",path:"/shop/women"},{label:"Dresses",path:"/shop/women/dresses"}]}};var i,c,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      path: '/'
    }, {
      label: 'Products',
      path: '/products'
    }]
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,d,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      path: '/'
    }, {
      label: 'Electronics',
      path: '/categories/electronics'
    }, {
      label: 'Headphones',
      path: '/categories/electronics/headphones'
    }]
  }
}`,...(h=(d=r.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var u,b,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      path: '/'
    }, {
      label: 'Shop',
      path: '/shop'
    }, {
      label: 'Women',
      path: '/shop/women'
    }, {
      label: 'Dresses',
      path: '/shop/women/dresses'
    }]
  }
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const $=["TwoLevels","ThreeLevels","FourLevels"];export{t as FourLevels,r as ThreeLevels,a as TwoLevels,$ as __namedExportsOrder,_ as default};
