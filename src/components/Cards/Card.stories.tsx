import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../Badges/Badge";
import { Button } from "../Buttons/Button";
import { SymbolButton } from "../Buttons/SymbolButton";
import { Symbol } from "../Symbols/Symbol";
import { Tooltip } from "../Tooltips/Tooltip";

const meta: Meta<typeof HTMLDivElement> = {
  title: "Components/Cards/Card",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const image: string =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1dQBCzyBKVkaJlg0zXkvl5cLbAAnsZs9khNWjFLEOC6za7QeErBK_3tsTzvSJVmi2uYg&usqp=CAU";

export const Example1: Story = {
  args: {},
  render: (args) => (
    <div
      className="drop-shadow-md bg-bgSecondaryLight dark:bg-bgSecondaryDark w-52 rounded-lg p-2.5"
      {...args}
    >
      <img src={image} className="rounded-md mb-2" />

      <div className="grid gap-1.5">
        <div className="relative">
          <h4 className="font-bold text-textLight dark:text-textDark">
            Jane Doe
          </h4>
          <div className="absolute top-0 -right-2">
            <SymbolButton
              symbol="bi:three-dots-vertical"
              tooltip="More options"
              className="text-textLight dark:text-textDark"
            />
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Tooltip tooltip="VIP">
            <Symbol
              symbol="mdi:person"
              className="text-textLight dark:text-textDark"
            />
          </Tooltip>
          <Tooltip tooltip="11 Main street, Boston, MA 01234">
            <Symbol
              symbol="mdi:home"
              className="text-textLight dark:text-textDark"
            />
          </Tooltip>
          <Tooltip tooltip="(123) 123-1234">
            <Symbol
              symbol="mdi:phone"
              className="text-textLight dark:text-textDark"
            />
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
  ),
};

export const Example2: Story = {
  args: {},
  render: (args) => (
    <div
      className="drop-shadow-md bg-bgSecondaryLight dark:bg-bgSecondaryDark p-2.5 flex gap-3 w-[35rem]"
      style={{ borderRadius: "10rem .5rem .5rem 10rem" }}
      {...args}
    >
      <img src={image} className="rounded-full w-52 h-52" />

      <div className="flex flex-col gap-1.5 justify-between">
        <div className="relative">
          <h4 className="font-bold">Jane Doe</h4>
          <div className="absolute top-0 -right-2">
            <SymbolButton
              symbol="bi:three-dots-vertical"
              tooltip="More options"
            />
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
  ),
};
