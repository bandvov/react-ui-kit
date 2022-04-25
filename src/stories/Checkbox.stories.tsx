import React, { ReactNode, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Checkbox",
  component: Checkbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      options: ["default", "toggle"],
      control: { type: "radio" },
    },
    disabled: {
      options: [true, false],
      control: { type: "boolean" },
    },
    checked: {
      options: [true, false],
      control: { type: "boolean" },
      description:
        "some description sad sa dasd asd as dasdasd a dasd  das d as dasd as das das das dsa d as d asd",
      defaultValue: true,
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const DefaultCheckbox = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultCheckbox.args = {};
