import{j as e}from"./index-DUMt_cWD.js";import{B as t}from"./Badge-Dgf1LBvL.js";import{B as l}from"./Button-Dxhvbro-.js";import{S as g}from"./SymbolButton-CU9VUgDd.js";import{S as s}from"./Symbol-vABjcYPN.js";import{T as a}from"./Tooltip-B3t6pMZ_.js";import"./index-CDs2tPxN.js";const k={title:"Components/Cards/Card",parameters:{layout:"centered"},tags:["autodocs"]},h="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1dQBCzyBKVkaJlg0zXkvl5cLbAAnsZs9khNWjFLEOC6za7QeErBK_3tsTzvSJVmi2uYg&usqp=CAU",i={args:{},render:n=>e.jsxs("div",{className:"drop-shadow-md bg-bgSecondaryLight dark:bg-bgSecondaryDark w-52 rounded-lg p-2.5",...n,children:[e.jsx("img",{src:h,className:"rounded-md mb-2"}),e.jsxs("div",{className:"grid gap-1.5",children:[e.jsxs("div",{className:"relative",children:[e.jsx("h4",{className:"font-bold text-textLight dark:text-textDark",children:"Jane Doe"}),e.jsx("div",{className:"absolute top-0 -right-2",children:e.jsx(g,{symbol:"bi:three-dots-vertical",tooltip:"More options",className:"text-textLight dark:text-textDark"})})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(a,{tooltip:"VIP",children:e.jsx(s,{symbol:"mdi:person",className:"text-textLight dark:text-textDark"})}),e.jsx(a,{tooltip:"11 Main street, Boston, MA 01234",children:e.jsx(s,{symbol:"mdi:home",className:"text-textLight dark:text-textDark"})}),e.jsx(a,{tooltip:"(123) 123-1234",children:e.jsx(s,{symbol:"mdi:phone",className:"text-textLight dark:text-textDark"})})]}),e.jsx("p",{className:"text-[.8rem] leading-[1rem] text-textLight dark:text-textDark",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),e.jsxs("div",{className:"flex items-center gap-1 flex-wrap",children:[e.jsx(t,{ctype:"success",symbolLeft:"mdi:check",children:"vegan"}),e.jsx(t,{ctype:"danger",symbolLeft:"mdi:close",children:"strawberries"}),e.jsx(t,{ctype:"danger",symbolLeft:"mdi:close",children:"milk"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[.65rem] text-slate-400 text-right mt-4 mb-2",children:"Last visit: 07/01/2023 11:45 AM"}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx(l,{className:"w-full justify-center",ctype:"secondary",children:"Edit"}),e.jsx(l,{className:"w-full justify-center",children:"Select"})]})]})]})},r={args:{},render:n=>e.jsxs("div",{className:"drop-shadow-md bg-bgSecondaryLight dark:bg-bgSecondaryDark p-2.5 flex gap-3 w-[35rem]",style:{borderRadius:"10rem .5rem .5rem 10rem"},...n,children:[e.jsx("img",{src:h,className:"rounded-full w-52 h-52"}),e.jsxs("div",{className:"flex flex-col gap-1.5 justify-between",children:[e.jsxs("div",{className:"relative",children:[e.jsx("h4",{className:"font-bold",children:"Jane Doe"}),e.jsx("div",{className:"absolute top-0 -right-2",children:e.jsx(g,{symbol:"bi:three-dots-vertical",tooltip:"More options"})})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(a,{tooltip:"VIP",children:e.jsx(s,{symbol:"mdi:person"})}),e.jsx(a,{tooltip:"11 Main street, Boston, MA 01234",children:e.jsx(s,{symbol:"mdi:home"})}),e.jsx(a,{tooltip:"(123) 123-1234",children:e.jsx(s,{symbol:"mdi:phone"})})]}),e.jsx("p",{className:"text-[.8rem] leading-[1rem]",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),e.jsxs("div",{className:"flex items-center gap-1 flex-wrap",children:[e.jsx(t,{ctype:"success",symbolLeft:"mdi:check",children:"vegan"}),e.jsx(t,{ctype:"danger",symbolLeft:"mdi:close",children:"strawberries"}),e.jsx(t,{ctype:"danger",symbolLeft:"mdi:close",children:"milk"})]}),e.jsxs("div",{className:"grid justify-items-end",children:[e.jsx("p",{className:"text-[.65rem] text-slate-400 text-right mb-2",children:"Last visit: 07/01/2023 11:45 AM"}),e.jsxs("div",{className:"flex items-center gap-1.5 w-1/2",children:[e.jsx(l,{className:"w-full justify-center",ctype:"secondary",children:"Edit"}),e.jsx(l,{className:"w-full justify-center",children:"Select"})]})]})]})]})};var o,d,m;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {},
  render: args => <div className="drop-shadow-md bg-bgSecondaryLight dark:bg-bgSecondaryDark w-52 rounded-lg p-2.5" {...args}>
      <img src={image} className="rounded-md mb-2" />

      <div className="grid gap-1.5">
        <div className="relative">
          <h4 className="font-bold text-textLight dark:text-textDark">
            Jane Doe
          </h4>
          <div className="absolute top-0 -right-2">
            <SymbolButton symbol="bi:three-dots-vertical" tooltip="More options" className="text-textLight dark:text-textDark" />
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Tooltip tooltip="VIP">
            <Symbol symbol="mdi:person" className="text-textLight dark:text-textDark" />
          </Tooltip>
          <Tooltip tooltip="11 Main street, Boston, MA 01234">
            <Symbol symbol="mdi:home" className="text-textLight dark:text-textDark" />
          </Tooltip>
          <Tooltip tooltip="(123) 123-1234">
            <Symbol symbol="mdi:phone" className="text-textLight dark:text-textDark" />
          </Tooltip>
        </div>
        <p className="text-[.8rem] leading-[1rem] text-textLight dark:text-textDark">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex items-center gap-1 flex-wrap">
          <Badge ctype="success" symbolLeft="mdi:check">
            vegan
          </Badge>
          <Badge ctype="danger" symbolLeft="mdi:close">
            strawberries
          </Badge>
          <Badge ctype="danger" symbolLeft="mdi:close">
            milk
          </Badge>
        </div>
      </div>

      <div>
        <p className="text-[.65rem] text-slate-400 text-right mt-4 mb-2">
          Last visit: 07/01/2023 11:45 AM
        </p>

        <div className="flex items-center gap-1.5">
          <Button className="w-full justify-center" ctype="secondary">
            Edit
          </Button>
          <Button className="w-full justify-center">Select</Button>
        </div>
      </div>
    </div>
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,p,x;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: args => <div className="drop-shadow-md bg-bgSecondaryLight dark:bg-bgSecondaryDark p-2.5 flex gap-3 w-[35rem]" style={{
    borderRadius: "10rem .5rem .5rem 10rem"
  }} {...args}>
      <img src={image} className="rounded-full w-52 h-52" />

      <div className="flex flex-col gap-1.5 justify-between">
        <div className="relative">
          <h4 className="font-bold">Jane Doe</h4>
          <div className="absolute top-0 -right-2">
            <SymbolButton symbol="bi:three-dots-vertical" tooltip="More options" />
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Tooltip tooltip="VIP">
            <Symbol symbol="mdi:person" />
          </Tooltip>
          <Tooltip tooltip="11 Main street, Boston, MA 01234">
            <Symbol symbol="mdi:home" />
          </Tooltip>
          <Tooltip tooltip="(123) 123-1234">
            <Symbol symbol="mdi:phone" />
          </Tooltip>
        </div>
        <p className="text-[.8rem] leading-[1rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex items-center gap-1 flex-wrap">
          <Badge ctype="success" symbolLeft="mdi:check">
            vegan
          </Badge>
          <Badge ctype="danger" symbolLeft="mdi:close">
            strawberries
          </Badge>
          <Badge ctype="danger" symbolLeft="mdi:close">
            milk
          </Badge>
        </div>

        <div className="grid justify-items-end">
          <p className="text-[.65rem] text-slate-400 text-right mb-2">
            Last visit: 07/01/2023 11:45 AM
          </p>

          <div className="flex items-center gap-1.5 w-1/2">
            <Button className="w-full justify-center" ctype="secondary">
              Edit
            </Button>
            <Button className="w-full justify-center">Select</Button>
          </div>
        </div>
      </div>
    </div>
}`,...(x=(p=r.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const L=["Example1","Example2"];export{i as Example1,r as Example2,L as __namedExportsOrder,k as default};
