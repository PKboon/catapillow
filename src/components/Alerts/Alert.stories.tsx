import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Buttons/Button";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alerts/Alert",
  component: Alert,
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
    <Alert {...args}>
      <p className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="flex gap-3 mt-5 justify-end">
        <Button ctype="secondary">Decline</Button>
        <Button ctype="success">Accept</Button>
      </div>
    </Alert>
  ),
};

export const Success: Story = {
  args: {
    ctype: "success",
    header: "Successfully submitted!",
  },
  render: (args) => (
    <Alert {...args}>
      <p className="text-sm">Lorem ipsum dolor sit amet.</p>
    </Alert>
  ),
};

export const Danger: Story = {
  args: {
    ctype: "danger",
    header: "Something went wrong",
    dismissable: true,
  },
  render: (args) => (
    <Alert {...args}>
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
    </Alert>
  ),
};

export const Warning: Story = {
  args: {
    ctype: "warning",
    header: "Oops!",
  },
  render: (args) => (
    <Alert {...args}>
      <p className="text-sm">No results found.</p>
      <div className="flex gap-3 mt-5 justify-center">
        <Button ctype="secondary">OK</Button>
      </div>
    </Alert>
  ),
};

export const Info: Story = {
  args: {
    ctype: "info",
    header: "What's new",
    dismissable: true,
  },
  render: (args) => (
    <Alert {...args}>
      <ol className="list-decimal text-sm ps-5">
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </li>
        <li>
          Tempor incididunt ut labore et dolore magna aliqua ut enim ad minim
        </li>
      </ol>
    </Alert>
  ),
};
