import{j as e,c as m,a as F,g}from"./index-DUMt_cWD.js";import{r as _}from"./index-CDs2tPxN.js";import{S as u}from"./Symbol-vABjcYPN.js";import{T as v}from"./Tooltip-B3t6pMZ_.js";const f=F(["flex items-center gap-1 px-1 py-0.5","rounded-md","text-textLight text-sm","bg-bgSecondaryLight","hover:bg-slate-500 hover:bg-opacity-15","focus:bg-slate-500 focus:bg-opacity-15","active:bg-slate-500 active:bg-opacity-30","dark:text-textDark","dark:bg-bgSecondaryDark","dark:hover:bg-slate-500 dark:hover:bg-opacity-30","dark:focus:bg-slate-500 dark:focus:bg-opacity-30","dark:active:bg-slate-500 dark:active:bg-opacity-70"]),a=_.forwardRef(({children:t,symbolLeft:r,symbolRight:s,symbolSize:o="text-lg",tooltip:l,...d},p)=>e.jsx(e.Fragment,{children:l?e.jsx(v,{tooltip:l,children:e.jsxs("button",{ref:p,className:m(f({}),t&&g(r,s)),...d,children:[e.jsx(u,{symbol:r,className:o}),t,e.jsx(u,{symbol:s,className:o})]})}):e.jsxs("button",{ref:p,className:m(f({}),t&&g(r,s)),...d,children:[e.jsx(u,{symbol:r,className:o}),t,e.jsx(u,{symbol:s,className:o})]})}));try{a.displayName="FeatureButton",a.__docgenInfo={description:"",displayName:"FeatureButton",props:{tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"string"}},symbolLeft:{defaultValue:null,description:"",name:"symbolLeft",required:!1,type:{name:"string"}},symbolRight:{defaultValue:null,description:"",name:"symbolRight",required:!1,type:{name:"string"}},symbolSize:{defaultValue:{value:"text-lg"},description:"",name:"symbolSize",required:!1,type:{name:"string"}}}}}catch{}const N=F(["flex gap-1 p-1","rounded-[8px]","drop-shadow-md","bg-bgSecondaryLight dark:bg-bgSecondaryDark"],{variants:{alignment:{horizontal:["flex-row"],vertical:["flex-col"]}},defaultVariants:{alignment:"vertical"}}),n=_.forwardRef(({alignment:t,children:r,className:s,...o},l)=>e.jsx("div",{ref:l,className:m(N({alignment:t,className:s})),...o,children:r}));try{n.displayName="FeatureButtonGroup",n.__docgenInfo={description:"",displayName:"FeatureButtonGroup",props:{alignment:{defaultValue:null,description:"",name:"alignment",required:!1,type:{name:'"horizontal" | "vertical" | null'}}}}}catch{}const q={title:"Components/Buttons/FeatureButtonGroup",component:n,parameters:{layout:"centered"},tags:["autodocs"]},c={render:t=>e.jsxs(n,{...t,children:[e.jsx(a,{symbolLeft:"tabler:plus",children:"Zoom in"}),e.jsx("hr",{className:"feature-hr"}),e.jsx(a,{symbolLeft:"fluent:square-hint-16-filled",children:"Reset"}),e.jsx("hr",{className:"feature-hr"}),e.jsx(a,{symbolLeft:"tabler:minus",children:"Zoom out"})]})},i={args:{alignment:"horizontal"},render:t=>e.jsxs(n,{...t,children:[e.jsx(a,{symbolLeft:"tabler:plus"}),e.jsx("hr",{className:"feature-vt"}),e.jsx(a,{symbolLeft:"tabler:minus"})]})};var b,y,x;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <FeatureButtonGroup {...args}>
      <FeatureButton symbolLeft="tabler:plus">Zoom in</FeatureButton>
      <hr className="feature-hr" />
      <FeatureButton symbolLeft="fluent:square-hint-16-filled">
        Reset
      </FeatureButton>
      <hr className="feature-hr" />
      <FeatureButton symbolLeft="tabler:minus">Zoom out</FeatureButton>
    </FeatureButtonGroup>
}`,...(x=(y=c.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var h,j,B;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    alignment: "horizontal"
  },
  render: args => <FeatureButtonGroup {...args}>
      <FeatureButton symbolLeft="tabler:plus" />
      <hr className="feature-vt" />
      <FeatureButton symbolLeft="tabler:minus" />
    </FeatureButtonGroup>
}`,...(B=(j=i.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};const S=["Vertical","Horizontal"];export{i as Horizontal,c as Vertical,S as __namedExportsOrder,q as default};
