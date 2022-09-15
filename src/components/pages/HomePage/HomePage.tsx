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
			<Header>
				<img src={logo} alt="logo" />
			</Header>
			<div className={styles.home}>
				<TextInfo
					text="Choose your preferred way to login"
					title={{ text: "WebXAuth", as: "h1" }}
					className={styles.info}
				/>
				<div className={styles.login}>
					<Button>Continue with Bonuz</Button>
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
			<Footer className={styles.footer}>
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
			</Footer>
		</div>
	);
};
