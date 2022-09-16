import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";
import styles from "./Button.module.scss";
interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
	children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
	const { children, className, ...rest } = props;
	return (
		<button className={classNames(styles.button, className)} {...rest}>
			{children}
		</button>
	);
};
