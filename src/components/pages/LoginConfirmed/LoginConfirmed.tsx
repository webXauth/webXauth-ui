import { TextButton } from "../../views/TextButton/TextButton";
import styles from "./LoginConfirmed.module.scss";
interface LoginConfirmedProps {
	logo: string;
}
export const LoginConfirmed = ({ logo }: LoginConfirmedProps) => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<img src={logo} alt="logo" />
			</header>
			<div className={styles.loginConfirmed}>
				<TextButton
					message="Your account was successfully created. Please activate your account by clicking the link in your mail box."
					onClick={() => {}}
				>
					Close
				</TextButton>
			</div>
		</div>
	);
};
