import classNames from "classnames";
import { HTMLAttributes } from "react";
import styles from "./InfoBlock.module.scss";
interface InfoBlockProps
	extends Pick<HTMLAttributes<"div">, "style" | "className"> {
	children: React.ReactNode;
	variant: "error" | "success";
}
export const InfoBlock = ({
	children,
	variant,
	style,
	className,
}: InfoBlockProps) => {
	return (
		<div
			className={classNames(styles.infoBlock, styles[variant], className)}
			style={style}
		>
			{children}
		</div>
	);
};
