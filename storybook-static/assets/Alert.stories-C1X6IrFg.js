import{j as e,c as O,a as T}from"./index-DUMt_cWD.js";import{B as c}from"./Button-Dxhvbro-.js";import{r as m}from"./index-CDs2tPxN.js";import{S as I}from"./SymbolButton-CU9VUgDd.js";import{S as W}from"./Symbol-vABjcYPN.js";import"./Tooltip-B3t6pMZ_.js";const E=T(["flex","relative","rounded-md","drop-shadow-md","bg-bgSecondaryLight dark:bg-bgSecondaryDark"],{variants:{ctype:{default:[],success:[],danger:[],warning:[],info:[]}},defaultVariants:{ctype:"default"}}),r=m.forwardRef(({ctype:s,header:d,className:B,children:D,dismissable:L=!1,..._},k)=>{const[V,C]=m.useState(!1),l=()=>{switch(s){case"success":return{symbol:"material-symbols:check-circle-rounded",symbolBg:"bg-success-500"};case"danger":return{symbol:"jam:close-circle-f",symbolBg:"bg-danger-500"};case"warning":return{symbol:"ph:warning-fill",symbolBg:"bg-warning-400"};case"info":return{symbol:"mdi:information-box",symbolBg:"bg-info-500"};default:return{symbol:"",symbolBg:""}}};return e.jsx(e.Fragment,{children:!V&&e.jsxs("div",{ref:k,className:O(E({ctype:s,className:B})),..._,children:[l().symbol.length>0&&e.jsx("div",{className:`${l().symbolBg} p-2 rounded-l-md`,children:e.jsx(W,{symbol:l().symbol,className:"text-slate-100 dark:text-slate-800",size:"lg"})}),e.jsxs("div",{className:"pt-2 pb-3 px-3 rounded-r-md text-textLight dark:text-textDark",children:[d&&e.jsx("h6",{className:"text-base font-bold",children:d}),e.jsx("div",{children:D})]}),L&&e.jsx("div",{className:"absolute right-1 top-1",children:e.jsx(I,{symbol:"ep:close-bold",tooltip:"Close",size:"sm",onClick:()=>C(!0)})})]})})});try{r.displayName="Alert",r.__docgenInfo={description:"",displayName:"Alert",props:{header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"string"}},ctype:{defaultValue:null,description:"",name:"ctype",required:!1,type:{name:'"success" | "danger" | "warning" | "info" | "default" | null'}},dismissable:{defaultValue:{value:"false"},description:"",name:"dismissable",required:!1,type:{name:"boolean"}}}}}catch{}const F={title:"Components/Alerts/Alert",component:r,parameters:{layout:"centered"},argTypes:{ctype:{options:["default","success","danger","warning","info"],control:"radio"}},tags:["autodocs"]},a={args:{header:"Header",dismissable:!0,ctype:"default"},render:s=>e.jsxs(r,{...s,children:[e.jsx("p",{className:"text-sm",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsxs("div",{className:"flex gap-3 mt-5 justify-end",children:[e.jsx(c,{ctype:"secondary",children:"Decline"}),e.jsx(c,{ctype:"success",children:"Accept"})]})]})},t={args:{ctype:"success",header:"Successfully submitted!"},render:s=>e.jsx(r,{...s,children:e.jsx("p",{className:"text-sm",children:"Lorem ipsum dolor sit amet."})})},n={args:{ctype:"danger",header:"Something went wrong",dismissable:!0},render:s=>e.jsx(r,{...s,children:e.jsxs("ul",{className:"list-disc text-sm ps-5",children:[e.jsx("li",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"}),e.jsx("li",{children:"Tempor incididunt ut labore et dolore magna aliqua ut enim ad minim"}),e.jsx("li",{children:"Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"}),e.jsx("li",{children:"Commodo consequat"})]})})},i={args:{ctype:"warning",header:"Oops!"},render:s=>e.jsxs(r,{...s,children:[e.jsx("p",{className:"text-sm",children:"No results found."}),e.jsx("div",{className:"flex gap-3 mt-5 justify-center",children:e.jsx(c,{ctype:"secondary",children:"OK"})})]})},o={args:{ctype:"info",header:"What's new",dismissable:!0},render:s=>e.jsx(r,{...s,children:e.jsxs("ol",{className:"list-decimal text-sm ps-5",children:[e.jsx("li",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"}),e.jsx("li",{children:"Tempor incididunt ut labore et dolore magna aliqua ut enim ad minim"})]})})};var u,p,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    header: "Header",
    dismissable: true,
    ctype: "default"
  },
  render: args => <Alert {...args}>
      <p className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="flex gap-3 mt-5 justify-end">
        <Button ctype="secondary">Decline</Button>
        <Button ctype="success">Accept</Button>
      </div>
    </Alert>
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var x,y,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ctype: "success",
    header: "Successfully submitted!"
  },
  render: args => <Alert {...args}>
      <p className="text-sm">Lorem ipsum dolor sit amet.</p>
    </Alert>
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,h,j;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ctype: "danger",
    header: "Something went wrong",
    dismissable: true
  },
  render: args => <Alert {...args}>
      <ul className="list-disc text-sm ps-5">
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </li>
        <li>
          Tempor incididunt ut labore et dolore magna aliqua ut enim ad minim
        </li>
        <li>
          Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea
        </li>
        <li>Commodo consequat</li>
      </ul>
    </Alert>
}`,...(j=(h=n.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var N,q,A;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ctype: "warning",
    header: "Oops!"
  },
  render: args => <Alert {...args}>
      <p className="text-sm">No results found.</p>
      <div className="flex gap-3 mt-5 justify-center">
        <Button ctype="secondary">OK</Button>
      </div>
    </Alert>
}`,...(A=(q=i.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var S,v,w;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ctype: "info",
    header: "What's new",
    dismissable: true
  },
  render: args => <Alert {...args}>
      <ol className="list-decimal text-sm ps-5">
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </li>
        <li>
          Tempor incididunt ut labore et dolore magna aliqua ut enim ad minim
        </li>
      </ol>
    </Alert>
}`,...(w=(v=o.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const G=["Default","Success","Danger","Warning","Info"];export{n as Danger,a as Default,o as Info,t as Success,i as Warning,G as __namedExportsOrder,F as default};
