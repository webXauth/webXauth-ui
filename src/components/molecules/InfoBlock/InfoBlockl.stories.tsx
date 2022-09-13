import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InfoBlock } from "./InfoBlock";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Example/Molecules/InfoBlock",
	component: InfoBlock,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof InfoBlock>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InfoBlock> = (args) => (
	<InfoBlock {...args} />
);

export const Primary: { args: InfoBlockProps } = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
type InfoBlockProps = React.ComponentProps<typeof InfoBlock>;
Primary.args = {
	variant: "error",
	children: "Error: Something went wrong",
};
