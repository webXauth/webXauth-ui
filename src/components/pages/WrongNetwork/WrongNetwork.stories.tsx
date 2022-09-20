import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { WrongNetwork } from "./WrongNetwork";

export default {
	title: "WebXAuth/Pages/WrongNetwork",
	component: WrongNetwork,
} as ComponentMeta<typeof WrongNetwork>;

const Template: ComponentStory<typeof WrongNetwork> = (args) => (
	<WrongNetwork {...args} />
);

export const Primary: { args: WrongNetworkProps } = Template.bind({});

type WrongNetworkProps = React.ComponentProps<typeof WrongNetwork>;
Primary.args = {
	logo: require(`/src/assets/logo_dark.svg`),
};
