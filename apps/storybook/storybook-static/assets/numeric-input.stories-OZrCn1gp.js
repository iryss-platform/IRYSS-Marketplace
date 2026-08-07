import{j as l}from"./jsx-runtime-B22yQkQ1.js";import{r as s}from"./index-CIdkRTUq.js";import{u as _e}from"./useTranslation-D8qDtbam.js";import{I as Ve}from"./input-C1pN4sZs.js";import"./index-6gKHwO9i.js";import"./clx-ypaMnjOU.js";import"./bundle-mjs-D43wmME5.js";import"./eye-BqWlHDH4.js";var Se=Object.defineProperty,j=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable,F=(e,r,t)=>r in e?Se(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,je=(e,r)=>{for(var t in r||(r={}))ce.call(r,t)&&F(e,t,r[t]);if(j)for(var t of j(r))pe.call(r,t)&&F(e,t,r[t]);return e},Ne=(e,r)=>{var t={};for(var a in e)ce.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&j)for(var a of j(e))r.indexOf(a)<0&&pe.call(e,a)&&(t[a]=e[a]);return t};const de=s.forwardRef((e,r)=>{var t=e,{color:a="currentColor"}=t,m=Ne(t,["color"]);return s.createElement("svg",je({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,viewBox:"0 0 15 15",fill:"none",ref:r},m),s.createElement("path",{stroke:a,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M2.5 7.5h10"}))});de.displayName="Minus";var Me=Object.defineProperty,N=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,z=(e,r,t)=>r in e?Me(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Ie=(e,r)=>{for(var t in r||(r={}))me.call(r,t)&&z(e,t,r[t]);if(N)for(var t of N(r))fe.call(r,t)&&z(e,t,r[t]);return e},Te=(e,r)=>{var t={};for(var a in e)me.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&N)for(var a of N(e))r.indexOf(a)<0&&fe.call(e,a)&&(t[a]=e[a]);return t};const ve=s.forwardRef((e,r)=>{var t=e,{color:a="currentColor"}=t,m=Te(t,["color"]);return s.createElement("svg",Ie({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,viewBox:"0 0 15 15",fill:"none",ref:r},m),s.createElement("path",{stroke:a,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M7.5 2.5v10M2.5 7.5h10"}))});ve.displayName="Plus";const M=s.forwardRef(({value:e,onChange:r,onBlur:t,name:a,placeholder:m,min:v=0,max:g=999999,step:I=1,disabled:i=!1,className:ge="",hideControls:E=!1,"aria-invalid":he=!1},ye)=>{const{t:T}=_e(),[u,f]=s.useState((e==null?void 0:e.toString())||""),c=s.useRef(null),p=s.useRef(null),h=s.useRef(!1),d=s.useRef(0),O=s.useRef(!1),q=s.useRef(e);s.useEffect(()=>{e!==void 0&&e!==q.current&&(O.current||(f(e.toString()),d.current=e),q.current=e)},[e]),s.useEffect(()=>()=>{c.current&&clearTimeout(c.current),p.current&&clearInterval(p.current)},[]);const be=n=>{const o=n.target.value;f(o),O.current=!0;const D=parseFloat(o);!isNaN(D)&&r?(d.current=D,r(D)):o===""&&r?(d.current=0,r(void 0)):o==="0"&&r&&(d.current=0,r(0))},R=()=>{if(i)return;const n=parseFloat(u)||0,o=Math.min(n+I,g);d.current=o,f(o.toString()),r&&r(o)},P=()=>{if(i)return;const n=parseFloat(u)||0,o=Math.max(n-I,v);d.current=o,f(o.toString()),r&&r(o)},xe=n=>{n.key==="ArrowUp"?(n.preventDefault(),R()):n.key==="ArrowDown"&&(n.preventDefault(),P())},we=()=>{const n=parseFloat(u);if(!isNaN(n)){const o=Math.max(Math.min(n,g),v);o!==n&&(f(o.toString()),r&&r(o))}setTimeout(()=>{O.current=!1},100),t&&t()},k=()=>{c.current&&(clearTimeout(c.current),c.current=null),p.current&&(clearInterval(p.current),p.current=null),h.current=!1},W=n=>{i||(h.current=!0,n==="increment"?R():P(),c.current=setTimeout(()=>{h.current&&(p.current=setInterval(()=>{h.current?n==="increment"?R():P():k()},50))},500))},$=n=>{n.preventDefault()},B=()=>{k()},L=()=>{k()};return l.jsxs("div",{className:`relative w-full ${ge}`,children:[l.jsx(Ve,{ref:ye,type:"number",value:u,onChange:be,onBlur:we,onKeyDown:xe,name:a,placeholder:m||T("products.fields.attributes.enterValuePlaceholder"),min:v,max:g,step:I,disabled:i,"aria-invalid":he,className:`w-full [-moz-appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none ${E?"":"pr-16"}`}),!E&&l.jsxs("div",{className:"absolute bottom-0 right-0 top-0 flex flex-row border-l border-ui-border-base",children:[l.jsx("button",{type:"button",onClick:$,onMouseDown:()=>W("decrement"),onMouseUp:B,onMouseLeave:L,disabled:i||(parseFloat(u)||0)<=v,className:"bg-ui-field flex h-full w-8 items-center justify-center border-r border-ui-border-base transition-colors hover:bg-ui-bg-field-hover disabled:cursor-not-allowed disabled:opacity-50","aria-label":T("general.decrement"),children:l.jsx(de,{className:"h-3 w-3 text-ui-fg-muted"})}),l.jsx("button",{type:"button",onClick:$,onMouseDown:()=>W("increment"),onMouseUp:B,onMouseLeave:L,disabled:i||(parseFloat(u)||0)>=g,className:"bg-ui-field flex h-full w-8 items-center justify-center rounded-r-md transition-colors hover:bg-ui-bg-field-hover disabled:cursor-not-allowed disabled:opacity-50","aria-label":T("general.increment"),children:l.jsx(ve,{className:"h-3 w-3 text-ui-fg-muted"})})]})]})});M.displayName="NumericInput";M.__docgenInfo={description:"",methods:[],displayName:"NumericInput",props:{value:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},name:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"999999",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},hideControls:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},"aria-invalid":{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const $e={title:"Vendor/Inputs/NumericInput",component:M,tags:["autodocs"],decorators:[e=>l.jsx("div",{style:{maxWidth:"300px"},children:l.jsx(e,{})})]},y={args:{placeholder:"Enter quantity"}},b={args:{value:42}},x={args:{value:5,min:0,max:100,step:5}},w={args:{value:10,disabled:!0}},_={args:{value:25,hideControls:!0,placeholder:"No +/- buttons"}},V={render:()=>{const[e,r]=s.useState(1);return l.jsxs("div",{style:{maxWidth:"300px"},children:[l.jsx("p",{style:{marginBottom:"8px",fontSize:"14px",color:"#666"},children:"Click +/- or use arrow keys. Hold to repeat."}),l.jsx(M,{value:e,onChange:r,min:0,max:999,step:1,placeholder:"Quantity"}),l.jsxs("p",{style:{marginTop:"8px",fontSize:"12px",color:"#999"},children:["Value: ",e]})]})}},S={args:{value:50,min:0,max:1e3,step:10},name:"Step by 10"};var C,U,H;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter quantity"
  }
}`,...(H=(U=y.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var A,K,Q;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    value: 42
  }
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var G,J,X;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    value: 5,
    min: 0,
    max: 100,
    step: 5
  }
}`,...(X=(J=x.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Y,Z,ee;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    value: 10,
    disabled: true
  }
}`,...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,te,ae;_.parameters={..._.parameters,docs:{...(re=_.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    value: 25,
    hideControls: true,
    placeholder: "No +/- buttons"
  }
}`,...(ae=(te=_.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,se,oe;V.parameters={...V.parameters,docs:{...(ne=V.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState(1);
    return <div style={{
      maxWidth: "300px"
    }}>\r
        <p style={{
        marginBottom: "8px",
        fontSize: "14px",
        color: "#666"
      }}>\r
          Click +/- or use arrow keys. Hold to repeat.\r
        </p>\r
        <NumericInput value={val} onChange={setVal} min={0} max={999} step={1} placeholder="Quantity" />\r
        <p style={{
        marginTop: "8px",
        fontSize: "12px",
        color: "#999"
      }}>\r
          Value: {val}\r
        </p>\r
      </div>;
  }
}`,...(oe=(se=V.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var le,ie,ue;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    value: 50,
    min: 0,
    max: 1000,
    step: 10
  },
  name: "Step by 10"
}`,...(ue=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};const Be=["Default","WithValue","WithMinMax","Disabled","HiddenControls","Interactive","StepByTen"];export{y as Default,w as Disabled,_ as HiddenControls,V as Interactive,S as StepByTen,x as WithMinMax,b as WithValue,Be as __namedExportsOrder,$e as default};
