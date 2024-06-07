import type { Meta, StoryObj } from "@storybook/react";
import { Symbol } from "./Symbol";

const meta: Meta<typeof Symbol> = {
  title: "Components/Symbols/Symbol",
  component: Symbol,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    symbol: "mdi:home",
  },
  render: (args) => (
    <div className="flex gap-2 items-center">
      <Symbol size="sm" {...args} />
      <Symbol size="md" {...args} />
      <Symbol size="lg" {...args} />
    </div>
  ),
};
