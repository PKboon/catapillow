import type { Meta, StoryObj } from "@storybook/react";
import { CIcon } from "./CIcon";

const meta: Meta<typeof CIcon> = {
  title: "Components/Icons/CIcon",
  component: CIcon,
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
  },
  render: (args) => (
    <div className="flex gap-2 items-center">
      <CIcon size="sm" {...args} />
      <CIcon size="md" {...args} />
      <CIcon size="lg" {...args} />
    </div>
  ),
};
