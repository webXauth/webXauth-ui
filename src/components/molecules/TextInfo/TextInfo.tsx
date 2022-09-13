import classNames from "classnames";
import { MouseEventHandler } from "react";
import { Button } from "../../atoms/Button/Button";
import styles from "./TextInfo.module.scss";
interface TextInfoProps {
	title?: {
		text: string;
		as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	};
	text?: string;
	className?: string;
	button?: {
		text: string;
		onClick: MouseEventHandler<HTMLButtonElement>;
	};
}
export const TextInfo = ({ title, text, button, className }: TextInfoProps) => {
	const TitleComponent = title?.as || "h2";
	return (
		<div className={classNames(styles.textInfo, className)}>
			{title && <TitleComponent>{title.text}</TitleComponent>}
			<p>{text}</p>
			{button && (
				<Button type="button" onClick={button.onClick}>
					{button.text}
				</Button>
			)}
		</div>
	);
};
