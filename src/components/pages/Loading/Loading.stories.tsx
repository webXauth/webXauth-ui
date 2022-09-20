import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Loading } from "./Loading";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "WebXAuth/Pages/Loading",
	component: Loading,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Loading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Loading> = (args) => (
	<Loading {...args} />
);

export const Primary: { args: LoadingProps } = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
type LoadingProps = React.ComponentProps<typeof Loading>;
Primary.args = {
	logo: require(`/src/assets/logo_dark.svg`),
};
