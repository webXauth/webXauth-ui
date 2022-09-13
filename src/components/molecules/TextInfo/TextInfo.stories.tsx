import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextInfo } from "./TextInfo";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Example/Molecules/TextInfo",
	component: TextInfo,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof TextInfo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextInfo> = (args) => (
	<TextInfo {...args} />
);

export const Primary: { args: TextInfoProps } = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
type TextInfoProps = React.ComponentProps<typeof TextInfo>;
Primary.args = {
	text: "Your account was successfully created. Please activate your account by clicking the link in your mail box.",
	button: { text: "Close", onClick: () => {} },
};
