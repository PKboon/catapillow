import type { Meta, StoryObj } from "@storybook/react";
import { Symbol } from "../Symbols/Symbol";
import { Selectable } from "./Selectable";

const meta: Meta<typeof Selectable> = {
  title: "Components/Inputs/Selectable",
  component: Selectable,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      options: ["checkbox", "radio", "switch"],
      control: "radio",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {
  args: {
    children: "Label",
    id: "checkboxId",
    type: "checkbox",
  },
};

export const Radio: Story = {
  args: {
    children: "Label",
    id: "radioId",
    type: "radio",
  },
};

export const Switch: Story = {
  args: {
    id: "switchId",
    type: "switch",
  },
  render: (args) => (
    <Selectable {...args}>
      <div className="flex gap-.5 items-center">
        VIP
        <Symbol symbol="mdi:asterisk" className="text-danger-500" size="sm" />
      </div>
    </Selectable>
  ),
};
