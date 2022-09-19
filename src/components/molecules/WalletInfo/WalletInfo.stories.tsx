import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { WalletInfo } from "./WalletInfo";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Example/Molecules/WalletInfo",
	component: WalletInfo,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof WalletInfo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WalletInfo> = (args) => (
	<WalletInfo {...args} />
);

export const Primary: { args: WalletInfoProps } = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
type WalletInfoProps = React.ComponentProps<typeof WalletInfo>;
Primary.args = {
	name: "Mostafa Talaat",
	publicKey: "0x1234567890",
	style: { width: "fit-content" },
	icon: require(`/src/assets/metamask.svg`),
};
