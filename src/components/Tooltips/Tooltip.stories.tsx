import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Buttons/Button";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltips/Tooltip",
  component: Tooltip,
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
  render: (args) => <Tooltip {...args}>Hover me</Tooltip>,
};

export const Example2: Story = {
  args: {
    tooltip: "Click me",
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button>I'm a button</Button>
    </Tooltip>
  ),
};
