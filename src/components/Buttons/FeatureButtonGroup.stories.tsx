import type { Meta, StoryObj } from "@storybook/react";
import { FeatureButton } from "./FeatureButton";
import { FeatureButtonGroup } from "./FeatureButtonGroup";

const meta: Meta<typeof FeatureButtonGroup> = {
  title: "Components/Buttons/FeatureButtonGroup",
  component: FeatureButtonGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  render: (args) => (
    <FeatureButtonGroup {...args}>
      <FeatureButton symbolLeft="tabler:plus">Zoom in</FeatureButton>
      <hr className="feature-hr" />
      <FeatureButton symbolLeft="fluent:square-hint-16-filled">
        Reset
      </FeatureButton>
      <hr className="feature-hr" />
      <FeatureButton symbolLeft="tabler:minus">Zoom out</FeatureButton>
    </FeatureButtonGroup>
  ),
};

export const Horizontal: Story = {
  args: {
    alignment: "horizontal",
  },
  render: (args) => (
    <FeatureButtonGroup {...args}>
      <FeatureButton symbolLeft="tabler:plus" />
      <hr className="feature-vt" />
      <FeatureButton symbolLeft="tabler:minus" />
    </FeatureButtonGroup>
  ),
};
