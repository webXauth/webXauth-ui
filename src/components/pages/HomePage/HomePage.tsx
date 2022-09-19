import { Button, Icon } from "../../atoms";
import { Footer } from "../../layout/Footer";
import { Header } from "../../layout/Header";
import { TextInfo } from "../../molecules";
import styles from "./HomePage.module.scss";
interface HomePageProps {
	web2: {
		src: string;
		name: string;
		onclick: () => void;
	}[];
	web3: {
		src: string;
		name: string;
		onclick: () => void;
	}[];
	logo: string;
}
export const HomePage = ({ web2, web3, logo }: HomePageProps) => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<img src={logo} alt="logo" />
			</header>
			<div className={styles.home}>
				<TextInfo
					text="Choose your preferred way to login"
					title={{ text: "WebXAuth", as: "h1" }}
					className={styles.info}
				/>
				<div className={styles.login}>
					<Button style={{ border: "0.1rem solid rgb(201, 202, 206)" }}>
						Continue with Bonuz
					</Button>
				</div>
				<div className={styles.icons}>
					{web2.map((item, index) => (
						<Icon
							key={index}
							src={item.src}
							name={item.name}
							onclick={item.onclick}
							width="48"
							height="48"
						/>
					))}
				</div>
			</div>
			<footer className={styles.footer}>
				{web3.map((item, index) => (
					<Icon
						key={index}
						src={item.src}
						name={item.name}
						onclick={item.onclick}
						width="48"
						height="48"
					/>
				))}
			</footer>
		</div>
	);
};
