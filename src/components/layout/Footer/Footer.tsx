import classNames from "classnames";
import styles from "./Footer.module.scss";
interface FooterProps {
	children: React.ReactNode;
	className?: string;
}
export const Footer = ({ children, className }: FooterProps) => {
	return <div className={classNames(styles.footer, className)}>{children}</div>;
};

export default Footer;
