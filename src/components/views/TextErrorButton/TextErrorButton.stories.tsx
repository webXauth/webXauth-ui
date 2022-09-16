import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextErrorButton } from "./TextErrorButton";

export default {
	title: "Example/Views/TextErrorButton",
	component: TextErrorButton,
} as ComponentMeta<typeof TextErrorButton>;

const Template: ComponentStory<typeof TextErrorButton> = (args) => (
	<TextErrorButton {...args} />
);

export const Primary: { args: TextErrorButtonProps } = Template.bind({});

type TextErrorButtonProps = React.ComponentProps<typeof TextErrorButton>;
Primary.args = {
	errorText: "Reason: Testnet is not supported",
	infoText: "Oops! You are connected to the wrong network.",
	label: "Change Network",
	onClick: () => {},
	style: { maxWidth: "500px" },
};
