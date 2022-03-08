import React, { ReactNode } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Button from '../components/Button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/MyButton',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: { control: 'variant' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultButton.args = {};
export const DefaultOutlinedButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultOutlinedButton.args = {
  variant:"default-outlined"
};
export const SuccessButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SuccessButton.args = {
 variant: "success",
};
export const SuccessOutlinedButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SuccessOutlinedButton.args = {
 variant: "success-outlined",
};
export const DangerButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DangerButton.args = {
 variant: "danger",
};
export const DangerOutlinedButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DangerOutlinedButton.args = {
 variant: "danger-outlined",
};

export const ErrorButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ErrorButton.args = {
 variant: "error",
};
export const ErrorOutlinedButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ErrorOutlinedButton.args = {
 variant: "error-outlined",
};
export const DisabledButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DisabledButton.args = {
 variant: "disabled",
 disabled: true
};


