import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LoginConifrmed } from "./LoginConifrmed";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "WebXAuth/Pages/LoginConifrmed",
	component: LoginConifrmed,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof LoginConifrmed>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoginConifrmed> = (args) => (
	<LoginConifrmed {...args} />
);

export const Primary: { args: LoginConifrmedProps } = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
type LoginConifrmedProps = React.ComponentProps<typeof LoginConifrmed>;
Primary.args = {
	logo: require(`/src/assets/logo_dark.svg`),
};
