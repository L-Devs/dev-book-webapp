interface Props extends React.HTMLProps<HTMLButtonElement> {
	btnTypes: "accent" | "secondary" | "text-accent" | "text-secondary";
	type?: "button" | "submit" | "reset" | undefined;
}

const DevButton: React.FC<Props> = ({
	className,
	btnTypes,
	children,
	...props
}) => {
	let typeStyle = "";

	if (btnTypes == "accent")
		typeStyle = "bg-accent-200 hover:bg-accent-100 text-white";
	else if (btnTypes == "secondary")
		typeStyle =
			"bg-dark-200 hover:bg-dark-100 text-white dark:bg-light-100 dark:hover:bg-light-200 dark:text-dark-200";
	else if (btnTypes == "text-accent") typeStyle = "text-accent-200";
	else if (btnTypes == "text-secondary")
		typeStyle = "text-dark-200 dark:text-light-200";

	return (
		<button
			{...props}
			className={`md:text-base capitalize text-center px-5 py-[10px] md:px-6 md:py-3  lg:text-lg lg:px-7 lg:py-[14px] rounded-lg ${typeStyle} ${className}`}
		>
			{children}
		</button>
	);
};

export default DevButton;
