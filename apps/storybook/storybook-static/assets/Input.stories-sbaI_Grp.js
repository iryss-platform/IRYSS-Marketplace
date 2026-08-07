import{j as s}from"./jsx-runtime-B22yQkQ1.js";import{c as ce}from"./utils-BriokOL4.js";import{C as pe}from"./index-BlYTR7gl.js";import{r as o}from"./index-CIdkRTUq.js";import"./bundle-mjs-D43wmME5.js";var de=Object.defineProperty,x=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,j=(a,e,r)=>e in a?de(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r,ue=(a,e)=>{for(var r in e||(e={}))U.call(e,r)&&j(a,r,e[r]);if(x)for(var r of x(e))X.call(e,r)&&j(a,r,e[r]);return a},me=(a,e)=>{var r={};for(var t in a)U.call(a,t)&&e.indexOf(t)<0&&(r[t]=a[t]);if(a!=null&&x)for(var t of x(a))e.indexOf(t)<0&&X.call(a,t)&&(r[t]=a[t]);return r};const Z=o.forwardRef((a,e)=>{var r=a,{color:t="currentColor"}=r,i=me(r,["color"]);return o.createElement("svg",ue({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,viewBox:"0 0 15 15",fill:"none",ref:e},i),o.createElement("g",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,clipPath:"url(#a)"},o.createElement("path",{d:"M1.356 8.507c-.4-.607-.4-1.406 0-2.014.905-1.371 2.9-3.66 6.144-3.66s5.24 2.288 6.144 3.66c.4.608.4 1.407 0 2.014-.905 1.371-2.9 3.66-6.144 3.66S2.26 9.88 1.356 8.507"}),o.createElement("path",{d:"M7.5 9.945a2.444 2.444 0 1 0 0-4.889 2.444 2.444 0 0 0 0 4.889"})),o.createElement("defs",null,o.createElement("clipPath",{id:"a"},o.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}))))});Z.displayName="EyeMini";var fe=Object.defineProperty,y=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable,P=(a,e,r)=>e in a?fe(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r,he=(a,e)=>{for(var r in e||(e={}))ee.call(e,r)&&P(a,r,e[r]);if(y)for(var r of y(e))re.call(e,r)&&P(a,r,e[r]);return a},ge=(a,e)=>{var r={};for(var t in a)ee.call(a,t)&&e.indexOf(t)<0&&(r[t]=a[t]);if(a!=null&&y)for(var t of y(a))e.indexOf(t)<0&&re.call(a,t)&&(r[t]=a[t]);return r};const ae=o.forwardRef((a,e)=>{var r=a,{color:t="currentColor"}=r,i=ge(r,["color"]);return o.createElement("svg",he({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,viewBox:"0 0 15 15",fill:"none",ref:e},i),o.createElement("g",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,clipPath:"url(#a)"},o.createElement("path",{d:"M12.778 5.364c.357.4.645.792.866 1.129.4.607.4 1.406 0 2.013-.905 1.372-2.9 3.66-6.144 3.66q-.732-.002-1.38-.143M3.905 11.095C2.7 10.316 1.86 9.27 1.356 8.506c-.4-.607-.4-1.406 0-2.013.905-1.372 2.9-3.66 6.144-3.66 1.44 0 2.634.45 3.595 1.072"}),o.createElement("path",{d:"M9.792 8.35A2.45 2.45 0 0 1 8.35 9.792M5.771 9.229a2.444 2.444 0 1 1 3.458-3.458M1.278 13.722 13.722 1.278"})),o.createElement("defs",null,o.createElement("clipPath",{id:"a"},o.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}))))});ae.displayName="EyeSlashMini";function te({label:a,icon:e,clearable:r,className:t,error:i,changeValue:p,onIconClick:w,iconAriaLabel:oe,"data-testid":l,...n}){const[c,se]=o.useState(!1),[ne,S]=o.useState(n.type);let E="";e&&(E+="pl-[46px] "),r&&(E+="pr-[38px]"),o.useEffect(()=>{n.type==="password"&&c&&S("text"),n.type==="password"&&!c&&S("password")},[n.type,c]);const le=_=>{p&&p(_)},ie=()=>{p&&p("")};return s.jsxs("div",{className:"flex flex-col",children:[s.jsx("label",{className:"label-md",children:a}),s.jsxs("div",{className:"relative mt-2",children:[e&&w&&s.jsx("button",{onClick:w,className:"flex items-center justify-center rounded-sm transition-all duration-300 ease-out button-transparent h-[32px] w-[32px] absolute top-[8px] left-[8px]","aria-label":oe,"data-testid":l?`${l}-icon-button`:"input-icon-button",children:e}),e&&!w&&s.jsx("span",{className:"absolute top-0 left-[16px] h-full flex items-center","data-testid":l?`${l}-icon`:"input-icon",children:e}),s.jsx("input",{className:ce("w-full px-[16px] py-[12px] border rounded-sm bg-component-secondary focus:border-primary focus:outline-none focus:ring-0",i&&"border-negative focus:border-negative",n.disabled&&"bg-disabled cursor-not-allowed",E,t),value:n.value,onChange:_=>le(_.target.value),...n,type:n.type==="password"?ne:n.type,"data-testid":l}),r&&n.value&&s.jsx("span",{className:"absolute h-full flex items-center top-0 right-[16px] cursor-pointer",onClick:ie,"data-testid":l?`${l}-clear-button`:"input-clear-button",children:s.jsx(pe,{})}),n.type==="password"&&s.jsx("button",{type:"button",onClick:()=>se(!c),className:"text-ui-fg-subtle px-4 focus:outline-none transition-all duration-150 outline-none focus:text-ui-fg-base absolute right-0 top-4","data-testid":l?`${l}-password-button`:"input-password-button",children:c?s.jsx(Z,{}):s.jsx(ae,{})})]})]})}te.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},changeValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onIconClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},iconAriaLabel:{required:!1,tsType:{name:"string"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""}}};const Ee={title:"B2C/Atoms/Input",component:te,tags:["autodocs"],argTypes:{error:{control:"boolean"},clearable:{control:"boolean"},disabled:{control:"boolean"}}},d={args:{placeholder:"Enter text..."}},u={args:{label:"Email",placeholder:"you@example.com"}},m={args:{label:"Name",value:"John Doe"}},f={args:{label:"Password",type:"password",placeholder:"Enter password"}},h={args:{label:"Email",placeholder:"you@example.com",error:!0,value:"invalid-email"}},g={args:{label:"Search",placeholder:"Search...",clearable:!0,value:"Some text"}},b={args:{label:"Disabled Input",placeholder:"Cannot type here",disabled:!0}},v={args:{label:"Search",placeholder:"Search products...",icon:s.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[s.jsx("circle",{cx:"7",cy:"7",r:"5",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M11 11L14 14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}};var O,C,N;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...(N=(C=d.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var k,M,W;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'you@example.com'
  }
}`,...(W=(M=u.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var L,$,q;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Name',
    value: 'John Doe'
  }
}`,...(q=($=m.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var R,D,B;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password'
  }
}`,...(B=(D=f.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var I,H,A;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    error: true,
    value: 'invalid-email'
  }
}`,...(A=(H=h.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var T,z,J;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    placeholder: 'Search...',
    clearable: true,
    value: 'Some text'
  }
}`,...(J=(z=g.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var V,Y,F;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot type here',
    disabled: true
  }
}`,...(F=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:F.source}}};var G,K,Q;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    placeholder: 'Search products...',
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none">\r
        <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />\r
        <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />\r
      </svg>
  }
}`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const _e=["Default","WithLabel","WithValue","Password","WithError","Clearable","Disabled","WithIcon"];export{g as Clearable,d as Default,b as Disabled,f as Password,h as WithError,v as WithIcon,u as WithLabel,m as WithValue,_e as __namedExportsOrder,Ee as default};
