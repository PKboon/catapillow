import type { Meta, StoryObj } from "@storybook/react";
import { CIcon } from "../Icons/CIcon";
import { CButton } from "./CButton";

const meta: Meta<typeof CButton> = {
  title: "Components/Buttons/CButton",
  component: CButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    color: "secondary",
    disabled: false,
    className: "justify-between w-40",
  },
  render: (args) => (
    <CButton {...args}>
      <span className="flex gap-1 items-center">
        <CIcon icon="mdi:menu" />
        Menu
      </span>
      <CIcon icon="mdi:chevron-down" />
    </CButton>
  ),
};

export const Primary: Story = {
  args: {
    children: "Button",
    color: "primary",
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    color: "secondary",
    disabled: false,
  },
};

export const Success: Story = {
  args: {
    children: "Button",
    color: "success",
    disabled: false,
  },
};

export const Danger: Story = {
  args: {
    children: "Button",
    color: "danger",
    disabled: false,
  },
};

export const Warning: Story = {
  args: {
    children: "Button",
    color: "warning",
    disabled: false,
  },
};

export const Info: Story = {
  args: {
    children: "Button",
    color: "info",
    disabled: false,
  },
};
