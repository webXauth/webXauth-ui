import classNames from "classnames";
import { HTMLAttributes } from "react";
import { Button } from "../../atoms";
import { TextInfo } from "../../molecules";

import styles from "./TextButton.module.scss";
interface TextButtonProps
	extends Pick<HTMLAttributes<"div">, "className" | "style"> {
	message: string;
	onClick: () => void;
	children: React.ReactNode;
}
export const TextButton = ({
	message,
	onClick,
	className,
	style,
	children,
}: TextButtonProps) => {
	return (
		<div className={classNames(styles.container, className)} style={style}>
			<TextInfo text={message} />
			<Button onClick={onClick}>{children}</Button>
		</div>
	);
};
