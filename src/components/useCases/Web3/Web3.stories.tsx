import React, { CSSProperties } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Web3 } from "./Web3";
export default {
	title: "Example/Use Cases/Web3",
	component: Web3,
} as ComponentMeta<typeof Web3>;

const Template: ComponentStory<typeof Web3> = (args) => (
	<>
		<div style={containerStyle}>
			<header style={headerStyle}>
				<img src={require(`/src/assets/logo_dark.svg`)} alt="logo" />
			</header>
			<Web3 {...args} />
		</div>
	</>
);

export const Primary: { args: Web3Props } = Template.bind({});

type Web3Props = React.ComponentProps<typeof Web3>;
Primary.args = {
	wallets: [
		{
			name: "Metamask",
			icon: require(`/src/assets/metamask.svg`),
			network: "mainnet",
			publicKey: "0x1234567890",
		},
		{
			name: "WalletConnect",
			icon: require(`/src/assets/WalletConnect.svg`),
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
