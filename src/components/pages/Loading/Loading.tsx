import { Spinner } from "../../atoms/Spinner/Spinner";
import { TextInfo } from "../../molecules";
import styles from "./Loading.module.scss";
interface LoadingProps {
	logo: string;
}
export const Loading = ({ logo }: LoadingProps) => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<img src={logo} alt="logo" />
			</header>
			<div className={styles.loading}>
				<TextInfo text="Please wait a few seconds until we log you in." />
				<Spinner />
			</div>
		</div>
	);
};
