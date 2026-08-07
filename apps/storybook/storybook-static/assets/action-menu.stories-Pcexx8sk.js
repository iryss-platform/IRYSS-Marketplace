import{j as t}from"./jsx-runtime-B22yQkQ1.js";import{A as L}from"./action-menu-xZwejfKu.js";import{P as i}from"./pencil-square-DHVttk8H.js";import{E as h}from"./eye-BqWlHDH4.js";import{r as a}from"./index-CIdkRTUq.js";import{M as W}from"./chunk-62JRHF6Z-cTfXawhh.js";import"./tooltip-COW0t6El.js";import"./clx-ypaMnjOU.js";import"./bundle-mjs-D43wmME5.js";import"./index-BzyXaVL0.js";import"./index-JBlh9YZm.js";import"./index-COjQfkKY.js";import"./index-ByqT07yD.js";import"./index-DhYkYC9J.js";import"./index-CHbZemxA.js";import"./floating-ui.dom-Cc2GnI-s.js";import"./index-Cfm_U0qX.js";import"./index-CWCmOpDM.js";import"./dropdown-menu-DjjVi6wj.js";import"./ellipse-mini-solid-3zxHimHt.js";import"./index-CuHOFxEL.js";import"./index-DYKGYn3L.js";import"./icon-button-vC0JyWE_.js";import"./index-6gKHwO9i.js";import"./spinner-UC_H4VgD.js";var N=Object.defineProperty,m=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,b=(e,r,o)=>r in e?N(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,B=(e,r)=>{for(var o in r||(r={}))T.call(r,o)&&b(e,o,r[o]);if(m)for(var o of m(r))$.call(r,o)&&b(e,o,r[o]);return e},G=(e,r)=>{var o={};for(var n in e)T.call(e,n)&&r.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&m)for(var n of m(e))r.indexOf(n)<0&&$.call(e,n)&&(o[n]=e[n]);return o};const v=a.forwardRef((e,r)=>{var o=e,{color:n="currentColor"}=o,f=G(o,["color"]);return a.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,viewBox:"0 0 15 15",fill:"none",ref:r},f),a.createElement("g",{stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,clipPath:"url(#a)"},a.createElement("path",{d:"M4.752 9.616 1.935 8.86l-.755 2.817"}),a.createElement("path",{d:"M13.136 8.53a5.729 5.729 0 0 1-11.196.357M10.248 5.384l2.817.755.755-2.817"}),a.createElement("path",{d:"M1.864 6.469a5.729 5.729 0 0 1 11.184-.403"})),a.createElement("defs",null,a.createElement("clipPath",{id:"a"},a.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}))))});v.displayName="ArrowPath";var H=Object.defineProperty,u=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,E=(e,r,o)=>r in e?H(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,z=(e,r)=>{for(var o in r||(r={}))q.call(r,o)&&E(e,o,r[o]);if(u)for(var o of u(r))I.call(r,o)&&E(e,o,r[o]);return e},F=(e,r)=>{var o={};for(var n in e)q.call(e,n)&&r.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&u)for(var n of u(e))r.indexOf(n)<0&&I.call(e,n)&&(o[n]=e[n]);return o};const g=a.forwardRef((e,r)=>{var o=e,{color:n="currentColor"}=o,f=F(o,["color"]);return a.createElement("svg",z({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,viewBox:"0 0 15 15",fill:"none",ref:r},f),a.createElement("path",{stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M1.944 3.278h11.112M5.5 3.278V1.944a.89.89 0 0 1 .889-.888H8.61a.89.89 0 0 1 .889.888v1.334M11.722 5.5v6.667c0 .982-.795 1.777-1.777 1.777h-4.89a1.777 1.777 0 0 1-1.777-1.777V5.5M5.944 7.278v4M9.056 7.278v4"}))});g.displayName="Trash";const be={title:"Dashboard/Common/ActionMenu",component:L,tags:["autodocs"],decorators:[e=>t.jsx(W,{children:t.jsx("div",{style:{padding:40},children:t.jsx(e,{})})})]},l={args:{groups:[{actions:[{icon:t.jsx(i,{}),label:"Edit",onClick:()=>console.log("Edit clicked")},{icon:t.jsx(h,{}),label:"View details",onClick:()=>console.log("View clicked")}]},{actions:[{icon:t.jsx(g,{}),label:"Delete",onClick:()=>console.log("Delete clicked")}]}]}},s={args:{groups:[{actions:[{icon:t.jsx(i,{}),label:"Edit product",to:"/products/1/edit"},{icon:t.jsx(h,{}),label:"View product",to:"/products/1"}]}]}},c={args:{groups:[{actions:[{icon:t.jsx(i,{}),label:"Edit",onClick:()=>console.log("Edit")},{icon:t.jsx(v,{}),label:"Sync inventory",disabled:!0,disabledTooltip:"Inventory sync is not available for this product",onClick:()=>{}},{icon:t.jsx(g,{}),label:"Delete",onClick:()=>console.log("Delete")}]}]}},p={args:{variant:"primary",groups:[{actions:[{icon:t.jsx(i,{}),label:"Edit",onClick:()=>console.log("Edit")}]}]}},d={args:{groups:[{actions:[{icon:t.jsx(h,{}),label:"View",onClick:()=>console.log("View")},{icon:t.jsx(i,{}),label:"Edit",onClick:()=>console.log("Edit")}]},{actions:[{icon:t.jsx(v,{}),label:"Refresh",onClick:()=>console.log("Refresh")}]},{actions:[{icon:t.jsx(g,{}),label:"Delete",onClick:()=>console.log("Delete")}]}]}};var w,k,y;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    groups: [{
      actions: [{
        icon: <PencilSquare />,
        label: "Edit",
        onClick: () => console.log("Edit clicked")
      }, {
        icon: <Eye />,
        label: "View details",
        onClick: () => console.log("View clicked")
      }]
    }, {
      actions: [{
        icon: <Trash />,
        label: "Delete",
        onClick: () => console.log("Delete clicked")
      }]
    }]
  }
}`,...(y=(k=l.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var _,P,x;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    groups: [{
      actions: [{
        icon: <PencilSquare />,
        label: "Edit product",
        to: "/products/1/edit"
      }, {
        icon: <Eye />,
        label: "View product",
        to: "/products/1"
      }]
    }]
  }
}`,...(x=(P=s.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var j,C,O;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    groups: [{
      actions: [{
        icon: <PencilSquare />,
        label: "Edit",
        onClick: () => console.log("Edit")
      }, {
        icon: <ArrowPath />,
        label: "Sync inventory",
        disabled: true,
        disabledTooltip: "Inventory sync is not available for this product",
        onClick: () => {}
      }, {
        icon: <Trash />,
        label: "Delete",
        onClick: () => console.log("Delete")
      }]
    }]
  }
}`,...(O=(C=c.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var D,S,M;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    groups: [{
      actions: [{
        icon: <PencilSquare />,
        label: "Edit",
        onClick: () => console.log("Edit")
      }]
    }]
  }
}`,...(M=(S=p.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var V,R,A;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    groups: [{
      actions: [{
        icon: <Eye />,
        label: "View",
        onClick: () => console.log("View")
      }, {
        icon: <PencilSquare />,
        label: "Edit",
        onClick: () => console.log("Edit")
      }]
    }, {
      actions: [{
        icon: <ArrowPath />,
        label: "Refresh",
        onClick: () => console.log("Refresh")
      }]
    }, {
      actions: [{
        icon: <Trash />,
        label: "Delete",
        onClick: () => console.log("Delete")
      }]
    }]
  }
}`,...(A=(R=d.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};const Ee=["Default","WithLinks","WithDisabledAction","PrimaryVariant","MultipleGroups"];export{l as Default,d as MultipleGroups,p as PrimaryVariant,c as WithDisabledAction,s as WithLinks,Ee as __namedExportsOrder,be as default};
