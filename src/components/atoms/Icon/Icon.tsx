import classNames from "classnames";
import { HTMLAttributes } from "react";
import styles from "./Icon.module.scss";
interface IconProps
	extends Pick<HTMLAttributes<"button">, "style" | "className"> {
	src: string;
	name?: string;
	width?: string | number;
	height?: string | number;
	onclick?: () => void;
}
export const Icon = ({
	src,
	name,
	width,
	height,
	onclick,
	className,
	style,
}: IconProps) => {
	return (
		<button
			className={classNames(styles.icon, className)}
			onClick={onclick}
			style={style}
		>
			<img src={src} alt={name ?? ""} width={width} height={height} />
		</button>
	);
};
