import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextButton } from "./TextButton";

export default {
	title: "Example/Views/TextButton",
	component: TextButton,
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = (args) => (
	<TextButton {...args} />
);

export const Primary: { args: TextButtonProps } = Template.bind({});

type TextButtonProps = React.ComponentProps<typeof TextButton>;
Primary.args = {
	message:
		"Oops! Login was cancelled.Try again by clicking the following button:",
	onClick: () => {},
	children: "Click Me to Reconnect!",
	style: { maxWidth: "500px" },
};
