import{j as e}from"./jsx-runtime-B22yQkQ1.js";import{c as A}from"./utils-BriokOL4.js";import"./index-CIdkRTUq.js";import"./bundle-mjs-D43wmME5.js";function L({icon:d,clearable:N,className:S,error:D,"data-testid":c,...r}){let l="";d&&(l+="pl-[38px] "),N&&(l+="pr-[38px]");const _=p=>{r.onChange&&r.onChange(p)};return e.jsxs("div",{className:"relative w-full",children:[d&&e.jsx("span",{className:"absolute top-[16px] left-[16px]","data-testid":c?`${c}-icon`:"textarea-icon",children:d}),e.jsx("textarea",{className:A("w-full px-[16px] py-[12px] border rounded-sm bg-component-secondary focus:border-primary focus:outline-none focus:ring-0",D&&"border-negative focus:border-negative",r.disabled&&"bg-disabled cursor-not-allowed",l,S),value:r.value,onChange:p=>_(p),"data-testid":c??"textarea",...r})]})}L.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""}}};const I={title:"B2C/Atoms/Textarea",component:L,tags:["autodocs"],argTypes:{error:{control:"boolean"},disabled:{control:"boolean"},clearable:{control:"boolean"}}},a={args:{placeholder:"Enter your message..."}},o={args:{value:"This is some pre-filled content in the textarea."}},s={args:{placeholder:"Required field",error:!0}},t={args:{placeholder:"Cannot edit",disabled:!0,value:"This field is disabled"}},n={args:{placeholder:"Write a detailed review...",rows:6}},i={args:{placeholder:"Add a note...",icon:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("path",{d:"M2 4L8 9L14 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("rect",{x:"1",y:"3",width:"14",height:"10",rx:"1",stroke:"currentColor",strokeWidth:"1.5"})]})}};var u,m,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your message...'
  }
}`,...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,x,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: 'This is some pre-filled content in the textarea.'
  }
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var b,v,w;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    placeholder: 'Required field',
    error: true
  }
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var W,y,k;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    placeholder: 'Cannot edit',
    disabled: true,
    value: 'This field is disabled'
  }
}`,...(k=(y=t.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var C,T,R;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    placeholder: 'Write a detailed review...',
    rows: 6
  }
}`,...(R=(T=n.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var j,q,E;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    placeholder: 'Add a note...',
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none">\r
        <path d="M2 4L8 9L14 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />\r
        <rect x="1" y="3" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" />\r
      </svg>
  }
}`,...(E=(q=i.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};const O=["Default","WithValue","WithError","Disabled","WithRows","WithIcon"];export{a as Default,t as Disabled,s as WithError,i as WithIcon,n as WithRows,o as WithValue,O as __namedExportsOrder,I as default};
