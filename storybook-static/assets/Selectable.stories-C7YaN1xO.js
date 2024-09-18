import{j as e,c as w,a as S}from"./index-DUMt_cWD.js";import{S as _}from"./Symbol-vABjcYPN.js";import{r as j}from"./index-CDs2tPxN.js";const L=S(["flex gap-1.5 items-start text-sm","text-textLight dark:text-textDark"]),f=["appearance-none -mt-[1px] h-4 bg-transparent","border border-solid border-slate-400 outline-none","checked:bg-primaryLight-400 dark:checked:bg-primaryDark-400","checked:border-primaryLight-400 dark:checked:border-primaryDark-400","checked:focus:border-primaryLight-400","checked:after:bg-bgPrimaryLight dark:checked:after:bg-bgPrimaryDark","checked:after:absolute","disabled:opacity-60","focus:shadow-none focus:outline-none","focus:ring-4 focus:ring-slate-400/30 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black","focus:checked:ring-primaryLight-400/30 dark:focus:checked:ring-primaryDark-400/40 focus:checked:ring-offset-white dark:focus:checked:ring-offset-black","hover:cursor-pointer"],d=j.forwardRef(({className:r,children:x,id:c,type:n="radio",...a},y)=>e.jsxs("div",{ref:y,className:w(L({className:r})),children:[n==="switch"&&e.jsx("input",{className:`
              ${f.join(" ")}
              w-7 rounded-full
              after:absolute after:z-[2]
              after:mt-[2px] after:left-[13px]
              after:h-[10px] after:w-[10px]
              after:rounded-full after:border-none 
              after:bg-slate-400 after:transition-[background-color_0.2s,transform_0.2s] after:content-['']
              checked:after:z-[2]
              checked:after:mt-[2px] checked:after:left-[25px]
              checked:after:h-[10px]checked:after:w-[10px]
              checked:after:rounded-full checked:after:border-none
              checked:after:bg-primaryBgLight checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-['']
            `,type:"checkbox",role:"switch",id:c,...a}),n==="checkbox"&&e.jsx("input",{id:c,type:"checkbox",className:`
              ${f.join(" ")}
              -ms-[1.5rem] w-4 rounded
              checked:after:block
              checked:after:ms-[0.25rem]
              checked:after:h-[0.65rem] checked:after:w-[0.35rem] checked:after:rotate-45 checked:after:border-[.18rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-bgPrimaryLight dark:checked:after:border-bgPrimaryDark checked:after:bg-transparent dark:checked:after:bg-primaryDark-400 checked:after:content-['']
              focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded focus:after:content-['']
              checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.65rem] checked:focus:after:w-[0.35rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-bgPrimaryLight dark:checked:focus:after:border-bgPrimaryDark checked:focus:after:bg-transparent
            `,...a}),n==="radio"&&e.jsx("input",{id:c,type:"radio",className:`
              ${f.join(" ")}
              -ms-[1.5rem] w-4 rounded-full
              after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-['']
              checked:after:ms-[7px] checked:after:mt-[7px]
              checked:after:h-[0.5rem] checked:after:w-[0.5rem]
              checked:after:rounded-full checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)]
            `,...a}),e.jsx("label",{htmlFor:c,className:`-mt-[.2rem] cursor-pointer dark:font-medium ${a.disabled&&"opacity-60"}`,children:x})]}));try{d.displayName="Selectable",d.__docgenInfo={description:"",displayName:"Selectable",props:{}}}catch{}const P={title:"Components/Inputs/Selectable",component:d,parameters:{layout:"centered"},argTypes:{type:{options:["checkbox","radio","switch"],control:"radio"}},tags:["autodocs"]},t={args:{children:"Label",id:"checkboxId",type:"checkbox"}},o={args:{children:"Label",id:"radioId",type:"radio"}},s={args:{id:"switchId",type:"switch"},render:r=>e.jsx(d,{...r,children:e.jsxs("div",{className:"flex gap-.5 items-center",children:["VIP",e.jsx(_,{symbol:"mdi:asterisk",className:"text-danger-500",size:"sm"})]})})};var i,h,k;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: "Label",
    id: "checkboxId",
    type: "checkbox"
  }
}`,...(k=(h=t.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var l,m,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: "Label",
    id: "radioId",
    type: "radio"
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var b,p,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    id: "switchId",
    type: "switch"
  },
  render: args => <Selectable {...args}>
      <div className="flex gap-.5 items-center">
        VIP
        <Symbol symbol="mdi:asterisk" className="text-danger-500" size="sm" />
      </div>
    </Selectable>
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const v=["Checkbox","Radio","Switch"];export{t as Checkbox,o as Radio,s as Switch,v as __namedExportsOrder,P as default};
