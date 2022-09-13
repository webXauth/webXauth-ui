import { ComponentPropsWithoutRef } from "react";
import styles from "./Button.module.scss";
interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
	children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
	const { children, ...rest } = props;
	return (
		<div className={styles.button}>
			<button {...rest}>{children}</button>
		</div>
	);
};
