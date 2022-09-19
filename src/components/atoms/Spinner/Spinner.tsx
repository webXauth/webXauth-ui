import styles from "./Spinner.module.scss";
interface SpinnerProps {
	backgroundColor?: string;
}
export const Spinner = ({ backgroundColor = "#000" }: SpinnerProps) => {
	return (
		<div className={styles.spinner}>
			<div className={styles.bounce1} style={{ backgroundColor }}></div>
			<div className={styles.bounce2} style={{ backgroundColor }}></div>
		</div>
	);
};
