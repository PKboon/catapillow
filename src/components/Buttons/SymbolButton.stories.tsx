import type { Meta, StoryObj } from "@storybook/react";
import { SymbolButton } from "./SymbolButton";

const meta: Meta<typeof SymbolButton> = {
  title: "Components/Buttons/SymbolButton",
  component: SymbolButton,
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
    tooltip: "Home",
  },
  render: (args) => (
    <div className="flex gap-3 items-center">
      <SymbolButton size="sm" {...args} />
      <SymbolButton size="md" {...args} />
      <SymbolButton size="lg" {...args} />
    </div>
  ),
};
