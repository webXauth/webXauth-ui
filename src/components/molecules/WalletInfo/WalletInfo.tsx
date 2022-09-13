import { Icon } from "../../atoms/Icon/Icon";
import styles from "./WalletInfo.module.scss";
import defaultAvatar from "../../../assets/avatar.svg";
import { HTMLAttributes } from "react";
import classNames from "classnames";
interface WalletInfoProps
	extends Pick<HTMLAttributes<"div">, "style" | "className"> {
	avatar?: string;
	publicKey: string;
	network?: string | number;
	icon?: string;
	name: string;
}
export const WalletInfo = ({
	avatar,
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
				<div className={styles.userAvatar}>
					<img
						src={avatar ?? defaultAvatar}
						alt="avatar"
						width="42"
						height="42"
					/>
				</div>
				<div className={styles.info}>
					<p>Account: {publicKeyTrimmed}</p>
					<p>Network: {network ?? "unknown"}</p>
				</div>
			</div>
			{icon && (
				<div className={styles.icon}>
					<Icon src={icon} name={name} width="48" height="48" />
				</div>
			)}
		</div>
	);
};
