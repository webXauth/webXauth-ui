import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Spinner } from "./Spinner";

export default {
	title: "Example/Atoms/Spinner",
	component: Spinner,
	argTypes: {
		backgroundColor: { control: "color", defaultValue: "#000" },
	},
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
	<div style={{ width: "fit-content" }}>
		<Spinner {...args} />
	</div>
);
type SpinnerProps = React.ComponentProps<typeof Spinner>;

export const Primary: { args: SpinnerProps } = Template.bind({});
Primary.args = {
	backgroundColor: "#000",
};
