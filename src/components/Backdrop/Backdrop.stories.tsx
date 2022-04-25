import React, { ReactNode, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Backdrop } from "..";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Backdrop",
  component: Backdrop,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    setOpen: {
      defaultValue: true,
    },
  },
} as ComponentMeta<typeof Backdrop>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Backdrop> = (args) => {
  return (
    <>
      <Backdrop {...args} />
      <h1>This is backdrop</h1>
    </>
  );
};

export const DefaultBackdrop = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultBackdrop.args = {
  open: false,
  setOpen: () => {},
};
