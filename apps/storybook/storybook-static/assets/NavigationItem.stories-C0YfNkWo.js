import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{c as I}from"./utils-BriokOL4.js";import{L as S}from"./LocalizedLink-D5sXaYq6.js";import"./index-CIdkRTUq.js";import"./bundle-mjs-D43wmME5.js";import"./next-link-DiJkJLFX.js";const a=({children:f,href:u="/",className:g,active:v,"data-testid":N,...x})=>e.jsx(S,{href:u,className:I("label-md uppercase px-4 py-3 my-3 md:my-0 flex items-center justify-between",v&&"underline  underline-offset-8",g),"data-testid":N??"navigation-item",...x,children:f});a.__docgenInfo={description:"",methods:[],displayName:"NavigationItem",props:{href:{defaultValue:{value:'"/"',computed:!1},required:!1}}};const A={title:"B2C/Atoms/NavigationItem",component:a,tags:["autodocs"],argTypes:{active:{control:"boolean"}},parameters:{nextjs:{appDirectory:!0}}},r={args:{children:"Shop",href:"/shop"}},t={args:{children:"Shop",href:"/shop",active:!0}},s={render:()=>e.jsxs("nav",{className:"flex items-center",children:[e.jsx(a,{href:"/shop",active:!0,children:"Shop"}),e.jsx(a,{href:"/categories",children:"Categories"}),e.jsx(a,{href:"/brands",children:"Brands"}),e.jsx(a,{href:"/sale",children:"Sale"})]})};var o,n,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Shop',
    href: '/shop'
  }
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Shop',
    href: '/shop',
    active: true
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,l,h;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <nav className="flex items-center">\r
      <NavigationItem href="/shop" active>Shop</NavigationItem>\r
      <NavigationItem href="/categories">Categories</NavigationItem>\r
      <NavigationItem href="/brands">Brands</NavigationItem>\r
      <NavigationItem href="/sale">Sale</NavigationItem>\r
    </nav>
}`,...(h=(l=s.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};const D=["Default","Active","NavBar"];export{t as Active,r as Default,s as NavBar,D as __namedExportsOrder,A as default};
