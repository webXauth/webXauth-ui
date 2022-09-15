import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Footer } from "./Footer";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Example/Layout/Footer",
	component: Footer,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Footer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Primary: { args: FooterProps } = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
type FooterProps = React.ComponentProps<typeof Footer>;
Primary.args = {
	children: <h2 style={{ color: "white" }}>this a child element</h2>,
};
