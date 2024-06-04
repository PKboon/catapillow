import type { Meta, StoryObj } from "@storybook/react";
import { CActionIconButton } from "./CActionIconButton";

const meta: Meta<typeof CActionIconButton> = {
  title: "Components/Buttons/CActionIconButton",
  component: CActionIconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    icon: "mdi:home",
    tooltip: "Home",
  },
  render: (args) => (
    <div className="flex gap-3 items-center">
      <CActionIconButton size="sm" {...args} />
      <CActionIconButton size="md" {...args} />
      <CActionIconButton size="lg" {...args} />
    </div>
  ),
};
