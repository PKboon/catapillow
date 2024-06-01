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
      <CIcon size="xxs" {...args} />
      <CIcon size="xs" {...args} />
      <CIcon size="md" {...args} />
      <CIcon size="lg" {...args} />
      <CIcon size="xl" {...args} />
      <CIcon size="xxl" {...args} />
    </div>
  ),
};
