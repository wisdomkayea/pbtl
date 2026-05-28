import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

function Button({ children, className, type = "button", ...rest }: ButtonProps) {
	return (
		<button type={type} className={`btn ${className ?? ""}`.trim()} {...rest}>
			{children}
		</button>
	);
}

export default Button;
