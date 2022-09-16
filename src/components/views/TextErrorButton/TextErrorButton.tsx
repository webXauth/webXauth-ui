import classNames from "classnames";
import { HTMLAttributes } from "react";
import { Button } from "../../atoms";
import { InfoBlock, TextInfo } from "../../molecules";
import styles from "./TextErrorButton.module.scss";
interface TextErrorButtonProps
	extends Pick<HTMLAttributes<"div">, "className" | "style"> {
	errorText: string;
	onClick: () => void;
	infoText: string;
	label: string;
}
export const TextErrorButton = ({
	errorText,
	infoText,
	onClick,
	label,
	className,
	style,
}: TextErrorButtonProps) => {
	return (
		<div className={classNames(styles.container, className)} style={style}>
			<TextInfo text={infoText} className={styles.text} />
			<InfoBlock variant="error">{errorText}</InfoBlock>
			<Button onClick={onClick}>{label}</Button>
		</div>
	);
};
