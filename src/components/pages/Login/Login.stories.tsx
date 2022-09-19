import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Login } from "./Login";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Example/Pages/Login",
	component: Login,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Login>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const Primary: { args: LoginProps } = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
type LoginProps = React.ComponentProps<typeof Login>;
Primary.args = {
	logo: require(`/src/assets/logo_dark.svg`),
};
