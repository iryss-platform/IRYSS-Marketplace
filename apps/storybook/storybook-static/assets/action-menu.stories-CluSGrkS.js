import{j as o}from"./jsx-runtime-B22yQkQ1.js";import{A as w}from"./action-menu-CvazXu4o.js";import{M as D}from"./chunk-62JRHF6Z-cTfXawhh.js";import"./index-CIdkRTUq.js";import"./conditional-tooltip-DRL11-MB.js";import"./tooltip-COW0t6El.js";import"./clx-ypaMnjOU.js";import"./bundle-mjs-D43wmME5.js";import"./index-BzyXaVL0.js";import"./index-JBlh9YZm.js";import"./index-COjQfkKY.js";import"./index-ByqT07yD.js";import"./index-DhYkYC9J.js";import"./index-CHbZemxA.js";import"./floating-ui.dom-Cc2GnI-s.js";import"./index-Cfm_U0qX.js";import"./index-CWCmOpDM.js";import"./dropdown-menu-DjjVi6wj.js";import"./ellipse-mini-solid-3zxHimHt.js";import"./index-CuHOFxEL.js";import"./index-DYKGYn3L.js";import"./icon-button-vC0JyWE_.js";import"./index-6gKHwO9i.js";import"./spinner-UC_H4VgD.js";const i=()=>o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M11.5 2.5L13.5 4.5L5 13H3V11L11.5 2.5Z",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})}),s=()=>o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M3 4.5H13M6 4.5V3.5C6 3.224 6.224 3 6.5 3H9.5C9.776 3 10 3.224 10 3.5V4.5M5 7V12M8 7V12M11 7V12M4 4.5L4.5 13.5H11.5L12 4.5",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})}),b=()=>o.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("rect",{x:"5",y:"5",width:"8",height:"8",rx:"1",stroke:"currentColor",strokeWidth:"1.2"}),o.jsx("path",{d:"M3 11V3H11",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"})]}),K={title:"Vendor/Common/ActionMenu",component:w,tags:["autodocs"],decorators:[j=>o.jsx(D,{children:o.jsx("div",{style:{padding:"40px",display:"flex",justifyContent:"center"},children:o.jsx(j,{})})})]},n={args:{groups:[{actions:[{icon:o.jsx(i,{}),label:"Edit",onClick:()=>alert("Edit clicked")},{icon:o.jsx(b,{}),label:"Duplicate",onClick:()=>alert("Duplicate clicked")}]},{actions:[{icon:o.jsx(s,{}),label:"Delete",onClick:()=>alert("Delete clicked")}]}]}},e={args:{groups:[{actions:[{icon:o.jsx(i,{}),label:"Edit Product",onClick:()=>{}},{icon:o.jsx(b,{}),label:"Copy ID",onClick:()=>{}}]}]}},r={args:{groups:[{actions:[{icon:o.jsx(i,{}),label:"Edit",onClick:()=>{}},{icon:o.jsx(s,{}),label:"Delete",onClick:()=>{},disabled:!0,disabledTooltip:"Cannot delete published products"}]}]}},t={args:{variant:"primary",groups:[{actions:[{icon:o.jsx(i,{}),label:"Edit",onClick:()=>{}},{icon:o.jsx(s,{}),label:"Delete",onClick:()=>{}}]}]}};var c,a,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    groups: [{
      actions: [{
        icon: <PencilIcon />,
        label: "Edit",
        onClick: () => alert("Edit clicked")
      }, {
        icon: <CopyIcon />,
        label: "Duplicate",
        onClick: () => alert("Duplicate clicked")
      }]
    }, {
      actions: [{
        icon: <TrashIcon />,
        label: "Delete",
        onClick: () => alert("Delete clicked")
      }]
    }]
  }
}`,...(l=(a=n.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var p,d,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    groups: [{
      actions: [{
        icon: <PencilIcon />,
        label: "Edit Product",
        onClick: () => {}
      }, {
        icon: <CopyIcon />,
        label: "Copy ID",
        onClick: () => {}
      }]
    }]
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,g,k;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    groups: [{
      actions: [{
        icon: <PencilIcon />,
        label: "Edit",
        onClick: () => {}
      }, {
        icon: <TrashIcon />,
        label: "Delete",
        onClick: () => {},
        disabled: true,
        disabledTooltip: "Cannot delete published products"
      }]
    }]
  }
}`,...(k=(g=r.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var h,x,C;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    groups: [{
      actions: [{
        icon: <PencilIcon />,
        label: "Edit",
        onClick: () => {}
      }, {
        icon: <TrashIcon />,
        label: "Delete",
        onClick: () => {}
      }]
    }]
  }
}`,...(C=(x=t.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const N=["Default","SingleGroup","WithDisabledAction","PrimaryVariant"];export{n as Default,t as PrimaryVariant,e as SingleGroup,r as WithDisabledAction,N as __namedExportsOrder,K as default};
