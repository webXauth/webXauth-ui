import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Icon } from "./Icon";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "WebXAuth/Atoms/Icon",
	component: Icon,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary: { args: IconProps } = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
type IconProps = React.ComponentProps<typeof Icon>;
Primary.args = {
	src: require(`/src/assets/metamask.svg`),
};
