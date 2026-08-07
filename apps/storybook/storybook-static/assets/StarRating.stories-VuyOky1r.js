import{j as r}from"./jsx-runtime-B22yQkQ1.js";import{S as J}from"./index-BlYTR7gl.js";import{t as p}from"./tailwind.config-Dv2zz2pc.js";import"./index-CIdkRTUq.js";const l=({rate:e,starSize:M=20,disabled:V,"data-testid":G})=>r.jsx("div",{className:"flex","data-testid":G??"star-rating",children:[...Array(5)].map((K,u)=>{const H=u<Math.floor(e)?V?p.theme.extend.colors.disabled:p.theme.extend.colors.primary:p.theme.extend.colors.action.on.primary;return r.jsx(J,{size:M,color:H},u)})});l.__docgenInfo={description:"",methods:[],displayName:"StarRating",props:{rate:{required:!0,tsType:{name:"number"},description:""},starSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""}}};const X={title:"B2C/Atoms/StarRating",component:l,tags:["autodocs"],argTypes:{rate:{control:{type:"range",min:0,max:5,step:.5}},starSize:{control:{type:"range",min:12,max:40}},disabled:{control:"boolean"}}},a={args:{rate:5}},s={args:{rate:4}},t={args:{rate:3}},o={args:{rate:1}},n={args:{rate:0}},c={args:{rate:4,starSize:32}},i={args:{rate:3,starSize:14}},m={args:{rate:4,disabled:!0}},d={render:()=>r.jsx("div",{className:"flex flex-col gap-2",children:[0,1,2,3,4,5].map(e=>r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(l,{rate:e}),r.jsxs("span",{className:"text-sm",children:[e,"/5"]})]},e))})};var g,S,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    rate: 5
  }
}`,...(x=(S=a.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var f,y,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    rate: 4
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var h,v,j;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    rate: 3
  }
}`,...(j=(v=t.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var N,z,R;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    rate: 1
  }
}`,...(R=(z=o.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var T,_,q;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    rate: 0
  }
}`,...(q=(_=n.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var A,F,C;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    rate: 4,
    starSize: 32
  }
}`,...(C=(F=c.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var O,D,E;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    rate: 3,
    starSize: 14
  }
}`,...(E=(D=i.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var I,L,Z;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    rate: 4,
    disabled: true
  }
}`,...(Z=(L=m.parameters)==null?void 0:L.docs)==null?void 0:Z.source}}};var k,w,B;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">\r
      {[0, 1, 2, 3, 4, 5].map(rate => <div key={rate} className="flex items-center gap-2">\r
          <StarRating rate={rate} />\r
          <span className="text-sm">{rate}/5</span>\r
        </div>)}\r
    </div>
}`,...(B=(w=d.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};const Y=["FiveStars","FourStars","ThreeStars","OneStars","ZeroStars","LargeStars","SmallStars","Disabled","AllRatings"];export{d as AllRatings,m as Disabled,a as FiveStars,s as FourStars,c as LargeStars,o as OneStars,i as SmallStars,t as ThreeStars,n as ZeroStars,Y as __namedExportsOrder,X as default};
