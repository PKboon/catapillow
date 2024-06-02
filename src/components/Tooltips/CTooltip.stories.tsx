import type { Meta, StoryObj } from "@storybook/react";
import { CButton } from "../Buttons/CButton";
import { CTooltip } from "./CTooltip";

const meta: Meta<typeof CTooltip> = {
  title: "Components/Tooltips/CTooltip",
  component: CTooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example1: Story = {
  args: {
    tooltip: "Hi! I'm a tooltip",
  },
  render: (args) => <CTooltip {...args}>Hover me</CTooltip>,
};

export const Example2: Story = {
  args: {
    tooltip: "Click me",
  },
  render: (args) => (
    <CTooltip {...args}>
      <CButton>I'm a button</CButton>
    </CTooltip>
  ),
};
