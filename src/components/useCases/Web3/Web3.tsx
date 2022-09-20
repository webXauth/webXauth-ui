import { useState } from "react";
import { Icon } from "../../atoms";
import { Spinner } from "../../atoms/Spinner/Spinner";
import { InfoBlock, TextInfo, WalletInfo } from "../../molecules";
import { TextButton } from "../../views/TextButton/TextButton";
import { TextErrorButton } from "../../views/TextErrorButton/TextErrorButton";
import styles from "./Web3.module.scss";
interface Wallet {
	icon: string;
	name: string;
	publicKey: string;
	network: string;
}
interface Web3Props {
	wallets: Wallet[];
	currentWallet?: Wallet | null;
	setFlow?: () => void;
}
export const Web3 = ({ wallets, currentWallet, setFlow }: Web3Props) => {
	const [activeWallet, setActiveWallet] = useState<any>(currentWallet);
	const [signing, setSigning] = useState(false);
	const [isDone, setIsDone] = useState(false);
	const isCorrectNetwork = activeWallet?.network === "mainnet";
	const handleCancel = () => {
		setActiveWallet(null);
	};
	const handleSigning = () => {
		setSigning(true);
		setTimeout(() => {
			setSigning(false);
			setIsDone(true);
		}, 3000);
	};
	if (!wallets)
		return <InfoBlock variant="error">No Wallet is Supported!</InfoBlock>;
	if (!activeWallet)
		return (
			<div className={styles.container}>
				<TextInfo
					title={{ text: "WebXAuth", as: "h1" }}
					text="Authenticate with Web3"
					className={styles.title}
				/>
				<div className={styles.walletList}>
					{wallets.map((wallet) => (
						<Icon
							src={wallet.icon}
							name={wallet.name}
							width="48"
							height="48"
							onclick={() => setActiveWallet(wallet)}
						/>
					))}
				</div>
			</div>
		);
	if (signing) {
		return (
			<div className={styles.signing}>
				<TextInfo text="Signing in..."></TextInfo>
				<Spinner />
			</div>
		);
	}
	if (isDone) {
		return (
			<div className={styles.confirmed}>
				<TextButton
					message="Login Confirmed!"
					onClick={() => {
						setActiveWallet(null);
						setIsDone(false);
						setFlow && setFlow();
					}}
				>
					Close Window
				</TextButton>
			</div>
		);
	}
	return (
		<>
			<div className={styles.web3}>
				<WalletInfo
					icon={activeWallet.icon}
					name={activeWallet.name}
					network={activeWallet.network ?? undefined}
					publicKey={activeWallet.publicKey ?? ""}
					className={styles.walletInfo}
				/>
				{!isCorrectNetwork && (
					<TextErrorButton
						errorText="Reason: testnet is not supported."
						onClick={() => {
							setActiveWallet({ ...wallets[1], network: "mainnet" });
						}}
						infoText="Please change your current network by clicking on the button below."
						label="Change Network"
						className={styles.info}
					/>
				)}
				{isCorrectNetwork && (
					<TextButton
						message="Please Sign by clicking on the message below."
						onClick={() => handleSigning()}
						className={styles.correctNetwork}
					>
						Sign Message
					</TextButton>
				)}
			</div>
			<footer className={styles.footer}>
				<p>
					or{" "}
					<span
						style={{ textDecoration: "underline", cursor: "pointer" }}
						onClick={handleCancel}
					>
						cancel
					</span>{" "}
					and get back to Bonuz
				</p>
			</footer>
		</>
	);
};
