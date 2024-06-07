import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badges/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ctype: {
      options: ["default", "success", "danger", "warning", "info"],
      control: "radio",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Jane Doe",
    symbolLeft: "mdi:user",
    ctype: "default",
  },
};

export const Success: Story = {
  args: {
    children: "versions",
    symbolRight: "material-symbols:keyboard-arrow-down-rounded",
    ctype: "success",
    className: "cursor-pointer",
  },
};

export const Danger: Story = {
  args: {
    children: "text",
    symbolLeft: "mdi:home",
    symbolRight: "mdi:home",
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
