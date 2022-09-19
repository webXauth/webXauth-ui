import { Icon } from "../../atoms/Icon/Icon";
import styles from "./WalletInfo.module.scss";
import { HTMLAttributes } from "react";
import classNames from "classnames";
interface WalletInfoProps
	extends Pick<HTMLAttributes<"div">, "style" | "className"> {
	publicKey: string;
	network?: string | number;
	icon?: string;
	name: string;
}
export const WalletInfo = ({
	icon,
	name,
	network,
	publicKey,
	className,
	style,
}: WalletInfoProps) => {
	const publicKeyTrimmed = publicKey.slice(0, 4) + "..." + publicKey.slice(-4);
	return (
		<div className={classNames(styles.walletInfo, className)} style={style}>
			<div className={styles.userInfo}>
				{icon && (
					<div className={styles.icon}>
						<Icon src={icon} name={name} width="48" height="48" />
					</div>
				)}
				<div className={styles.info}>
					<p>Account: {publicKeyTrimmed}</p>
					<p>Network: {network ?? "unknown"}</p>
				</div>
			</div>
		</div>
	);
};
