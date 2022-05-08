import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Dropdown } from "..";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Dropdown",
  component: Dropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Dropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = (args) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div style={{ margin: "5rem auto", width: "max-content" }}>
      <Dropdown {...args} isOpen={open} onClick={setOpen}>
        <h1 style={{ padding: "1rem" }}>Hello this is dropdown</h1>
      </Dropdown>
    </div>
  );
};
export const DropdownTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

DropdownTemplate.args = {
  title: "test",
};
DropdownTemplate.storyName = "Dropdown";
