import type { Meta, StoryObj } from "@storybook/react";
import { Field } from "./Field";

const meta: Meta<typeof Field> = {
  title: "Components/Inputs/Field",
  component: Field,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ctype: {
      options: ["default", "success", "danger"],
      control: "radio",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    children: "Label",
    id: "fieldId",
    symbol: "mdi:user",
    footer: "This is an example",
  },
};

export const Password: Story = {
  args: {
    children: "Password",
    id: "passwordId",
    symbol: "mdi:lock",
    type: "password",
  },
};

export const Normal: Story = {
  args: {
    children: "Name",
    id: "nameId",
  },
};
