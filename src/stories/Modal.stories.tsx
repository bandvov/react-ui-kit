import React, { ReactNode } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Modal from "../components/Modal";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Modal",
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args}>
    <h1>This is modal content</h1>
  </Modal>
);

export const DefaultButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultButton.args = {
  open: false,
};