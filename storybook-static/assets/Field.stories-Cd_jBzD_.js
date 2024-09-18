import{j as e,c as $,a as F}from"./index-DUMt_cWD.js";import{r as u}from"./index-CDs2tPxN.js";import{S as x}from"./SymbolButton-CU9VUgDd.js";import{S as y}from"./Symbol-vABjcYPN.js";import"./Tooltip-B3t6pMZ_.js";const L=F([],{variants:{ctype:{default:[],success:[],danger:[]}},defaultVariants:{ctype:"default"}}),z=["leading-none block pb-1 pt-3.5 px-0.5 w-full text-sm bg-transparent","border-0 border-b appearance-none focus:outline-none focus:ring-0","text-textLight dark:text-textDark","focus:border-textLight peer dark:focus:border-textDark"],D=["absolute flex items-center gap-0.5 px-0.5 text-sm","duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0]","peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0","peer-focus:start-0 peer-focus:scale-75 peer-focus:-translate-y-5","rtl:peer-focus:translate-x-1 rtl:peer-focus:left-auto"],d=u.forwardRef(({ctype:o,className:S,children:I,value:_,onChange:v,symbol:l,footer:c,id:i,...n},T)=>{const r=()=>{switch(o){case"success":return{symbol:"material-symbols:check-circle-rounded",textColor:"text-success-600 dark:text-success-500",borderColor:"border-success-600 dark:border-success-500"};case"danger":return{symbol:"jam:close-circle-f",textColor:"text-danger-500 dark:text-danger-400",borderColor:"border-danger-500 dark:border-danger-400"};default:return{symbol:"",textColor:"text-textLight dark:text-textDark",borderColor:"border-[#B0B8C0] dark:border-[#787F86]"}}},[p,m]=u.useState(n.type);return e.jsxs("div",{ref:T,className:$(L({ctype:o,className:S}),l?"flex gap-1":""),children:[l&&e.jsx("div",{className:"relative top-3 text-textLight dark:text-textDark",children:e.jsx(y,{symbol:l,size:"lg"})}),e.jsxs("div",{className:"relative z-0",children:[e.jsx("input",{...n,type:p,id:i,value:_,onChange:v,className:`${z.join(" ")} ${r().borderColor}`,placeholder:" "}),e.jsx("label",{htmlFor:i,className:`${D.join(" ")} ${r().textColor}`,children:I}),n.type==="password"&&e.jsx("div",{className:"absolute top-3 -right-6",children:p==="password"?e.jsx(x,{symbol:"el:eye-open",tooltip:"Show",onClick:()=>m("text")}):e.jsx(x,{symbol:"el:eye-close",tooltip:"Hide",onClick:()=>m("password")})}),c&&e.jsxs("div",{className:`${r().textColor} flex gap-0.5 items-center text-xs mt-0.5 px-0.5`,children:[e.jsx(y,{className:`${r().textColor}`,symbol:r().symbol,size:"md"}),c]})]})]})});try{d.displayName="Field",d.__docgenInfo={description:"",displayName:"Field",props:{symbol:{defaultValue:null,description:"",name:"symbol",required:!1,type:{name:"string"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"string"}},ctype:{defaultValue:null,description:"",name:"ctype",required:!1,type:{name:'"success" | "danger" | "default" | null'}}}}}catch{}const R={title:"Components/Inputs/Field",component:d,parameters:{layout:"centered"},argTypes:{ctype:{options:["default","success","danger"],control:"radio"}},tags:["autodocs"]},s={args:{children:"Label",id:"fieldId",symbol:"mdi:user",footer:"This is an example"}},t={args:{children:"Password",id:"passwordId",symbol:"mdi:lock",type:"password"}},a={args:{children:"Name",id:"nameId"}};var f,b,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: "Label",
    id: "fieldId",
    symbol: "mdi:user",
    footer: "This is an example"
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,k,w;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: "Password",
    id: "passwordId",
    symbol: "mdi:lock",
    type: "password"
  }
}`,...(w=(k=t.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var j,C,N;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: "Name",
    id: "nameId"
  }
}`,...(N=(C=a.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};const H=["Text","Password","Normal"];export{a as Normal,t as Password,s as Text,H as __namedExportsOrder,R as default};
