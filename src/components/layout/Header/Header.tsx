import styles from "./Header.module.scss";
interface HeaderProps {
	children?: React.ReactNode;
}
export const Header = ({ children }: HeaderProps) => {
	return <div className={styles.header}>{children}</div>;
};
