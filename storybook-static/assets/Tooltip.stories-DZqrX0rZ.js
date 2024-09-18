import{j as e}from"./index-DUMt_cWD.js";import{B as c}from"./Button-Dxhvbro-.js";import{T as a}from"./Tooltip-B3t6pMZ_.js";import"./index-CDs2tPxN.js";const T={title:"Components/Tooltips/Tooltip",component:a,parameters:{layout:"centered"},tags:["autodocs"]},o={args:{tooltip:"Hi! I'm a tooltip"},render:t=>e.jsx(a,{...t,children:"Hover me"})},r={args:{tooltip:"Click me"},render:t=>e.jsx(a,{...t,children:e.jsx(c,{children:"I'm a button"})})};var s,n,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    tooltip: "Hi! I'm a tooltip"
  },
  render: args => <Tooltip {...args}>Hover me</Tooltip>
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var m,i,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    tooltip: "Click me"
  },
  render: args => <Tooltip {...args}>
      <Button>I'm a button</Button>
    </Tooltip>
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const E=["Example1","Example2"];export{o as Example1,r as Example2,E as __namedExportsOrder,T as default};
