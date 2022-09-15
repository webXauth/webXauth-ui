import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HomePage } from "./HomePage";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Example/Pages/HomePage",
	component: HomePage,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof HomePage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HomePage> = (args) => (
	<HomePage {...args} />
);

export const Primary: { args: HomePageProps } = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
type HomePageProps = React.ComponentProps<typeof HomePage>;
Primary.args = {
	web2: [
		{
			src: require(`/src/assets/google.svg`),
			name: "Google",
			onclick: () => {},
		},
		{
			src: require(`/src/assets/facebook.png`),
			name: "Facebook",
			onclick: () => {},
		},
	],
	web3: [
		{
			src: require(`/src/assets/metamask.svg`),
			name: "Metamask",
			onclick: () => {},
		},
		{
			src: require(`/src/assets/WalletConnect.svg`),
			name: "Wallet Connect",
			onclick: () => {},
		},
	],
	logo: require(`/src/assets/logo.svg`),
};
