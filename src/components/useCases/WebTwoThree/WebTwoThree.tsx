import { useState } from "react";
import { Button, Icon } from "../../atoms";
import { TextInfo } from "../../molecules";
import { Web3 } from "../Web3/Web3";
import styles from "./WebTwoThree.module.scss";
interface IWeb2 {
	icon: string;
	name: string;
}
interface IWeb3 {
	name: string;
	icon: string;
	network: string;
	publicKey: string;
}
interface WebTwoThreeProps {
	web2: IWeb2[];
	web3: IWeb3[];
}
enum Flow {
	home,
	web3,
	web2,
}
export const WebTwoThree = ({ web2, web3 }: WebTwoThreeProps) => {
	const [flow, setFlow] = useState(Flow.home);
	const [activeWeb2Provider, setActiveWeb2Provider] =
		useState<IWeb2 | null>(null);
	const [activeWeb3Provider, setActiveWeb3Provider] =
		useState<IWeb3 | null>(null);
	return (
		<div style={{ width: "100%" }}>
			{flow === Flow.home && (
				<Home
					web2={web2}
					web3={web3}
					setFlow={setFlow}
					setActiveWeb2Provider={setActiveWeb2Provider}
					setActiveWeb3Provider={setActiveWeb3Provider}
				/>
			)}
			{flow === Flow.web2 && (
				<Web2
					activeProvider={activeWeb2Provider!}
					setFlow={() => setFlow(Flow.home)}
				/>
			)}
			{flow === Flow.web3 && (
				<Web3
					wallets={web3}
					currentWallet={activeWeb3Provider}
					setFlow={() => setFlow(Flow.home)}
				/>
			)}
		</div>
	);
};
interface HomeProps extends WebTwoThreeProps {
	setFlow: (flow: Flow) => void;
	setActiveWeb2Provider: (provider: IWeb2 | null) => void;
	setActiveWeb3Provider: (provider: IWeb3 | null) => void;
}

const Home = ({
	web2,
	web3,
	setFlow,
	setActiveWeb2Provider,
	setActiveWeb3Provider,
}: HomeProps) => {
	return (
		<div
			style={{ marginBlockStart: "2rem", width: "100%" }}
			className={styles.container}
		>
			<TextInfo
				title={{ text: "WebXAuth", as: "h1" }}
				text="Authenticate with Web2 or Web3"
				className={styles.title}
			/>
			<div className={styles.list}>
				{web2.map((w) => (
					<Icon
						src={w.icon}
						name={w.name}
						onclick={() => {
							setActiveWeb2Provider(w);
							setFlow(Flow.web2);
						}}
						width="40"
						height="40"
						key={w.name}
					/>
				))}
			</div>
			<footer className={styles.footer}>
				<div className={styles.list}>
					{web3.map((w) => (
						<Icon
							src={w.icon}
							name={w.name}
							onclick={() => {
								setActiveWeb3Provider(w);
								setFlow(Flow.web3);
							}}
							key={w.name}
						/>
					))}
				</div>
			</footer>
		</div>
	);
};
const Web2 = ({
	activeProvider,
	setFlow,
}: {
	activeProvider: IWeb2;
	setFlow: () => void;
}) => {
	return (
		<div className={styles.web2}>
			You clicked on {activeProvider.name} sign in method, you should be
			redirected/popup to {activeProvider.name} complete the authentication flow
			<Button onClick={setFlow}>Back</Button>
		</div>
	);
};
