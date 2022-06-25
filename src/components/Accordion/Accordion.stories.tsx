import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Accordion } from "..";

export default {
  title: "Example/Accordion",
  component: Accordion,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      options: ["text", "innerAccordion"],
      mapping: {
        innerAccordion: (
          <Accordion title={"inner accordion"}>
            sdsd as das d asdasd asd asd a dasd ad asd asd asd asd asd asd asd
            asd asd asd asd asd as dasd asd as dd as das dasd as d dasd sad sdsd
            as das d asdasd asd asd a dasd ad asd asd asd asd asd asd asd asd
            asd asd asd asd as dasd asd as dd as das dasd as d dasd sad
          </Accordion>
        ),
        text: `sdsd as das d asdasd asd asd a dasd ad asd asd asd asd asd asd asd
        asd asd asd asd asd as dasd asd as dd as das dasd as d dasd sad
        sdsd as das d asdasd asd asd a dasd ad asd asd asd asd asd asd asd
        asd asd asd asd asd as dasd asd as dd as das dasd as d dasd sad`,
      }, // Maps serializable option values to complex arg values
      control: {
        type: "radio", // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          // 'labels' maps option values to string labels
          innerAccordion: "With inner Accordion",
          text: "With text",
        },
      },
    },
  },
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordion> = (args) => {
  return (
    <div style={{ margin: "5rem auto", width: "40vw" }}>
      <Accordion {...args} />
    </div>
  );
};

export const DropdownTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

DropdownTemplate.args = {
  title: "test",
  children: (
    <div>
      a s dsa d asd asd as das dasdasd as das d asd asda sdsa d as da sd asd sd
      asdas das dasd as d s dsa dasd sa d as d asd
    </div>
  ),
};
DropdownTemplate.storyName = "Accordion";
