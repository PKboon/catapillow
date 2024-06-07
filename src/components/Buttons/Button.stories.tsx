import type { Meta, StoryObj } from "@storybook/react";
import { Symbol } from "../Symbols/Symbol";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Buttons/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ctype: {
      options: ["primary", "secondary", "success", "danger", "warning", "info"],
      control: "radio",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    ctype: "secondary",
    disabled: false,
    className: "justify-between w-40",
  },
  render: (args) => (
    <Button {...args}>
      <span className="flex gap-1 items-center">
        <Symbol symbol="mdi:menu" />
        Menu
      </span>
      <Symbol symbol="mdi:chevron-down" />
    </Button>
  ),
};

export const Primary: Story = {
  args: {
    children: "Button",
    ctype: "primary",
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    ctype: "secondary",
    disabled: false,
  },
};

export const Success: Story = {
  args: {
    children: "Button",
    ctype: "success",
    disabled: false,
  },
};

export const Danger: Story = {
  args: {
    children: "Button",
    ctype: "danger",
    disabled: false,
  },
};

export const Warning: Story = {
  args: {
    children: "Button",
    ctype: "warning",
    disabled: false,
  },
};

export const Info: Story = {
  args: {
    children: "Button",
    ctype: "info",
    disabled: false,
  },
};
