import type { Meta, StoryObj } from "@storybook/react";
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
    children: "Label",
    id: "switchId",
    type: "switch",
  },
};
