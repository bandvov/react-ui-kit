import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dropdown from "../components/Dropdown";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Dropdown",
  component: Dropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [
    (StoryFn) => {
      // mock state
      const [open, setOpen] = useState(false);
      return (
        <StoryFn isOpen={open} setOpen={setOpen}>
          <h1>Dropdown</h1>
        </StoryFn>
      );
    },
  ],
} as ComponentMeta<typeof Dropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args}>
    <h1>Hello this is dropdown</h1>
  </Dropdown>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = {
  title: "test",
};
