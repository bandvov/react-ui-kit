import React, { ReactNode } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Badge, Button } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Badge",
  component: Badge,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    position: {
      options: ["top", "bottom"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const BadgeTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BadgeTemplate.args = {
  label: "",
  children: <Button rounded>&copy;</Button>,
};
