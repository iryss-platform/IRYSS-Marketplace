import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{c as y}from"./utils-BriokOL4.js";import"./index-CIdkRTUq.js";import"./bundle-mjs-D43wmME5.js";const r=({children:N,className:b,"data-testid":f,...j})=>e.jsx("div",{className:y("border rounded-sm py-4 px-2",b),"data-testid":f??"card",...j,children:N});r.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""}}};const W={title:"B2C/Atoms/Card",component:r,tags:["autodocs"]},a={args:{children:"This is a card with some content inside."}},s={args:{children:"Card with extra padding",className:"p-8"}},t={render:()=>e.jsxs(r,{children:[e.jsx("h3",{className:"font-bold text-lg mb-2",children:"Card Title"}),e.jsx("p",{className:"text-sm text-gray-600",children:"This card contains richer content with a title and description paragraph."})]})},n={render:()=>e.jsxs(r,{className:"p-4",children:[e.jsx("h3",{className:"font-bold mb-3",children:"Outer Card"}),e.jsx(r,{className:"bg-gray-50",children:e.jsx("p",{children:"Nested card content"})})]})};var d,c,o;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'This is a card with some content inside.'
  }
}`,...(o=(c=a.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var i,m,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'Card with extra padding',
    className: 'p-8'
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,h,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Card>\r
      <h3 className="font-bold text-lg mb-2">Card Title</h3>\r
      <p className="text-sm text-gray-600">\r
        This card contains richer content with a title and description paragraph.\r
      </p>\r
    </Card>
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,C,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Card className="p-4">\r
      <h3 className="font-bold mb-3">Outer Card</h3>\r
      <Card className="bg-gray-50">\r
        <p>Nested card content</p>\r
      </Card>\r
    </Card>
}`,...(x=(C=n.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const _=["Default","WithCustomClass","WithRichContent","Nested"];export{a as Default,n as Nested,s as WithCustomClass,t as WithRichContent,_ as __namedExportsOrder,W as default};
