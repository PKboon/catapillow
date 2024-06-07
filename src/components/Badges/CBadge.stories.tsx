import type { Meta, StoryObj } from "@storybook/react";
import { CBadge } from "./CBadge";

const meta: Meta<typeof CBadge> = {
  title: "Components/Badges/CBadge",
  component: CBadge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Jane Doe",
    iconLeft: "mdi:user",
    ctype: "default",
  },
};

export const Success: Story = {
  args: {
    children: "versions",
    iconRight: "material-symbols:keyboard-arrow-down-rounded",
    ctype: "success",
    className: "cursor-pointer",
  },
};

export const Danger: Story = {
  args: {
    children: "text",
    iconLeft: "mdi:home",
    iconRight: "mdi:home",
    ctype: "danger",
  },
};

export const Warning: Story = {
  args: {
    children: "text",
    ctype: "warning",
  },
};

export const Info: Story = {
  args: {
    children: "text",
    ctype: "info",
  },
};
