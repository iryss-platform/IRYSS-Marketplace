import{j as t}from"./jsx-runtime-B22yQkQ1.js";import{u as _}from"./useTranslation-D8qDtbam.js";import{r as d}from"./index-CIdkRTUq.js";import{T as k}from"./text-v69jHjT5.js";import"./index-6gKHwO9i.js";import"./clx-ypaMnjOU.js";import"./bundle-mjs-D43wmME5.js";import"./index-ByqT07yD.js";var B=Object.defineProperty,c=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,p=(e,r,n)=>r in e?B(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,O=(e,r)=>{for(var n in r||(r={}))v.call(r,n)&&p(e,n,r[n]);if(c)for(var n of c(r))w.call(r,n)&&p(e,n,r[n]);return e},T=(e,r)=>{var n={};for(var s in e)v.call(e,s)&&r.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&c)for(var s of c(e))r.indexOf(s)<0&&w.call(e,s)&&(n[s]=e[s]);return n};const j=d.forwardRef((e,r)=>{var n=e,{color:s="currentColor"}=n,o=T(n,["color"]);return d.createElement("svg",O({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,viewBox:"0 0 15 15",fill:"none",ref:r},o),d.createElement("path",{stroke:s,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M9.25 3.25 5 7.5l4.25 4.25"}))});j.displayName="ChevronLeft";const W=[{id:"store",number:1,labelKey:"onboarding.wizard.steps.store"},{id:"address",number:2,labelKey:"onboarding.wizard.steps.address"},{id:"company",number:3,labelKey:"onboarding.wizard.steps.company"},{id:"payment",number:4,labelKey:"onboarding.wizard.steps.payment"}],P=W.length,z=({currentStep:e,onBack:r,showBack:n,children:s})=>{const{t:o}=_();return t.jsx("div",{className:"flex w-full flex-col lg:w-[584px] lg:shrink-0 h-full bg-ui-bg-base border-r border-ui-border-base overflow-y-auto",children:t.jsxs("div",{className:"flex flex-1 flex-col p-8 lg:px-14 lg:py-12",children:[n&&r&&t.jsxs("button",{type:"button",onClick:r,className:"txt-compact-small text-ui-fg-base flex items-center gap-x-0.5 font-medium transition-colors hover:text-ui-fg-subtle self-start mb-6",children:[t.jsx(j,{className:"size-4"}),t.jsx("span",{children:o("actions.back")})]}),t.jsx(k,{size:"small",className:"text-ui-fg-subtle mb-1",children:o("onboarding.wizard.stepOf",{current:e+1,total:P})}),s]})})};z.__docgenInfo={description:"",methods:[],displayName:"WizardSidebar",props:{currentStep:{required:!0,tsType:{name:"number"},description:""},onBack:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showBack:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const I={title:"Vendor/Onboarding/WizardSidebar",component:z,tags:["autodocs"],decorators:[e=>t.jsx("div",{style:{height:"500px",display:"flex"},children:t.jsx(e,{})})]},a={args:{currentStep:0,showBack:!1,children:t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:600,margin:"0 0 8px"},children:"Set up your store"}),t.jsx("p",{style:{color:"#666",fontSize:"14px",margin:0},children:"Tell us about your business to get started."})]})}},i={args:{currentStep:1,showBack:!0,onBack:()=>alert("Going back"),children:t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:600,margin:"0 0 8px"},children:"Business Address"}),t.jsx("p",{style:{color:"#666",fontSize:"14px",margin:0},children:"Where is your business located?"})]})}},l={args:{currentStep:3,showBack:!0,onBack:()=>alert("Going back"),children:t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:600,margin:"0 0 8px"},children:"Payment Setup"}),t.jsx("p",{style:{color:"#666",fontSize:"14px",margin:0},children:"Configure how you will receive payments."})]})}};var m,u,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    currentStep: 0,
    showBack: false,
    children: <div>\r
        <h2 style={{
        fontSize: "1.25rem",
        fontWeight: 600,
        margin: "0 0 8px"
      }}>\r
          Set up your store\r
        </h2>\r
        <p style={{
        color: "#666",
        fontSize: "14px",
        margin: 0
      }}>\r
          Tell us about your business to get started.\r
        </p>\r
      </div>
  }
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,h,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    currentStep: 1,
    showBack: true,
    onBack: () => alert("Going back"),
    children: <div>\r
        <h2 style={{
        fontSize: "1.25rem",
        fontWeight: 600,
        margin: "0 0 8px"
      }}>\r
          Business Address\r
        </h2>\r
        <p style={{
        color: "#666",
        fontSize: "14px",
        margin: 0
      }}>\r
          Where is your business located?\r
        </p>\r
      </div>
  }
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var y,b,S;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    currentStep: 3,
    showBack: true,
    onBack: () => alert("Going back"),
    children: <div>\r
        <h2 style={{
        fontSize: "1.25rem",
        fontWeight: 600,
        margin: "0 0 8px"
      }}>\r
          Payment Setup\r
        </h2>\r
        <p style={{
        color: "#666",
        fontSize: "14px",
        margin: 0
      }}>\r
          Configure how you will receive payments.\r
        </p>\r
      </div>
  }
}`,...(S=(b=l.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const K=["FirstStep","MiddleStep","LastStep"];export{a as FirstStep,l as LastStep,i as MiddleStep,K as __namedExportsOrder,I as default};
