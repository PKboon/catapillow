import type { Meta, StoryObj } from "@storybook/react";
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

export const Default: Story = {
  args: {
    children: "Button",
  },
};
