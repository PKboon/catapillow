import type { Meta, StoryObj } from "@storybook/react";
import { CButton } from "../Buttons/CButton";
import { CAlert } from "./CAlert";

const meta: Meta<typeof CAlert> = {
  title: "Components/Alerts/CAlert",
  component: CAlert,
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
    header: "Header",
    dismissable: true,
    ctype: "default",
  },
  render: (args) => (
    <CAlert {...args}>
      <p className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="flex gap-3 mt-5 justify-end">
        <CButton ctype="secondary">Decline</CButton>
        <CButton ctype="success">Accept</CButton>
      </div>
    </CAlert>
  ),
};

export const Success: Story = {
  args: {
    ctype: "success",
    header: "Successfully submitted!",
  },
  render: (args) => (
    <CAlert {...args}>
      <p className="text-sm">Lorem ipsum dolor sit amet.</p>
    </CAlert>
  ),
};

export const Danger: Story = {
  args: {
    ctype: "danger",
    header: "Something went wrong",
    dismissable: true,
  },
  render: (args) => (
    <CAlert {...args}>
      <ul className="list-disc text-sm ps-5">
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </li>
        <li>
          Tempor incididunt ut labore et dolore magna aliqua ut enim ad minim
        </li>
        <li>
          Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea
        </li>
        <li>Commodo consequat</li>
      </ul>
    </CAlert>
  ),
};

export const Warning: Story = {
  args: {
    ctype: "warning",
    header: "Oops!",
  },
  render: (args) => (
    <CAlert {...args}>
      <p className="text-sm">No results found.</p>
      <div className="flex gap-3 mt-5 justify-center">
        <CButton ctype="secondary">OK</CButton>
      </div>
    </CAlert>
  ),
};

export const Info: Story = {
  args: {
    ctype: "info",
    header: "What's new",
    dismissable: true,
  },
  render: (args) => (
    <CAlert {...args}>
      <ol className="list-decimal text-sm ps-5">
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </li>
        <li>
          Tempor incididunt ut labore et dolore magna aliqua ut enim ad minim
        </li>
      </ol>
    </CAlert>
  ),
};
