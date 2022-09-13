import { ComponentPropsWithoutRef } from "react";
import styles from "./Input.module.scss";
interface InputProps extends ComponentPropsWithoutRef<"input"> {
	label?: string;
}
export const Input = (props: InputProps) => {
	const { label, type, placeholder, value, onChange, id, ...rest } = props;
	return (
		<div className={styles.input}>
			{label && <label htmlFor={id}>{label}</label>}
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				id={id}
				{...rest}
			/>
		</div>
	);
};
