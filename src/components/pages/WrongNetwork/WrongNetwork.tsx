import { WalletInfo } from "../../molecules";
import { TextErrorButton } from "../../views/TextErrorButton/TextErrorButton";
import metamaskIcon from "../../../assets/metamask.svg";
import styles from "./WrongNetwork.module.scss";
interface WrongNetworkProps {
	logo: string;
}
export const WrongNetwork = ({ logo }: WrongNetworkProps) => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<img src={logo} alt="logo" />
			</header>
			<div className={styles.wrongNetwork}>
				<WalletInfo
					icon={metamaskIcon}
					name="Bonuz User"
					publicKey="
                0x0000000000000000000000000000000000000000"
					className={styles.walletInfo}
				/>
				<TextErrorButton
					errorText="Reason: Ethereum is not supported."
					onClick={() => {}}
					infoText="Please change your current network by clicking on the button below."
					label="Change Network"
					className={styles.info}
				/>
			</div>
			<footer className={styles.footer}>
				<p>
					or <u>cancel</u> and get back to bonuz
				</p>
			</footer>
		</div>
	);
};
