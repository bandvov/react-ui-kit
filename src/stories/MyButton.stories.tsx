import React, { ReactNode } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/MyButton",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      options: [
        "default",
        "default-outlined",
        "success",
        "success-outlined",
        "danger",
        "danger-outlined",
        "error",
        "error-outlined",
      ],
      control: { type: "select" },
    },
    justify: {
      options: ["center", "flex-start", "flex-end", "stretch"],
      control: { type: "select" },
    },
    disabled: {
      options:[true,false],
      control: { type: "boolean" },
    },
    icon: {
      options: ["icon", ""],
      mapping: { icon: <div>&rarr;</div>, "": null }, // Maps serializable option values to complex arg values
      control: {
        type: "radio", // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          // 'labels' maps option values to string labels
          icon: "Icon",
          "": "No icon",
        },
      },
    },
    iconLeft: {
      options: ["icon", ""],
      mapping: { icon: <div>&larr;</div>, "": null }, // Maps serializable option values to complex arg values
      control: {
        type: "radio", // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          // 'labels' maps option values to string labels
          icon: "Icon",
          "": "No icon",
        },
      },
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultButton.args = {
  children: "Button",
};