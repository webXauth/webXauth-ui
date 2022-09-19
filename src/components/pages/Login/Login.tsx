import { Button, Input } from "../../atoms";
import styles from "./Login.module.scss";
interface LoginProps {
	logo: string;
}
export const Login = ({ logo }: LoginProps) => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<img src={logo} alt="logo" />
			</header>
			<div className={styles.login}>
				<Input
					placeholder="Enter your email"
					label="Enter your email address:"
				/>
				<Button style={{ border: "0.1rem solid rgb(201, 202, 206)" }}>
					Continue with Bonuz
				</Button>
				<p>Back to login</p>
			</div>
			<footer className={styles.footer}>
				<p>
					or <u>cancel</u> and get back to bonuz
				</p>
			</footer>
		</div>
	);
};
