import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LoginConfirmed } from "./LoginConfirmed";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "WebXAuth/Pages/LoginConifrmed",
	component: LoginConfirmed,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof LoginConfirmed>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoginConfirmed> = (args) => (
	<LoginConfirmed {...args} />
);

export const Primary: { args: LoginConfirmedProps } = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
type LoginConfirmedProps = React.ComponentProps<typeof LoginConfirmed>;
Primary.args = {
	logo: require(`/src/assets/logo_dark.svg`),
};
