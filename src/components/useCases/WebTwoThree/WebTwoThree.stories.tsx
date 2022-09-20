import React, { CSSProperties } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { WebTwoThree } from "./WebTwoThree";
export default {
	title: "Example/Use Cases/Web 2 & 3",
	component: WebTwoThree,
} as ComponentMeta<typeof WebTwoThree>;

const Template: ComponentStory<typeof WebTwoThree> = (args) => (
	<>
		<div style={containerStyle}>
			<header style={headerStyle}>
				<img src={require(`/src/assets/logo_dark.svg`)} alt="logo" />
			</header>
			<WebTwoThree {...args} />
		</div>
	</>
);

export const Primary: { args: WebTwoThreeProps } = Template.bind({});

type WebTwoThreeProps = React.ComponentProps<typeof WebTwoThree>;
Primary.args = {
	web2: [
		{
			icon: require(`/src/assets/google.svg`),
			name: "Google",
		},
		{
			icon: require(`/src/assets/facebook.svg`),
			name: "Facebook",
		},
	],
	web3: [
		{
			icon: require(`/src/assets/metamask.svg`),
			name: "Metamask",
			network: "mainnet",
			publicKey: "0x1234567890",
		},
		{
			icon: require(`/src/assets/WalletConnect.svg`),
			name: "Wallet Connect",
			network: "testnet",
			publicKey: "0x1234567890",
		},
	],
};
const containerStyle: CSSProperties = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	width: "100%",
	maxWidth: "400px",
	background: "#fff",
	borderRadius: "8px",
	boxShadow: "0px 0px 14px 4px rgb(26 10 73 / 60%)",
	color: "#000",
};
const headerStyle: CSSProperties = {
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	borderBottom: "2px solid rgb(201, 202, 206)",
	width: "calc(100% - 4rem)",
	position: "relative",
	padding: "2rem",
};
