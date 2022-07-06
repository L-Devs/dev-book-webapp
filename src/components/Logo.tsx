interface Props extends React.HTMLProps<HTMLSpanElement> {
	type: "accent" | "alternate";
}

const Logo: React.FC<Props> = ({ type, className, ...props }) => {
	let color = "";

	if (type == "accent") color = "text-accent-200";
	else if (type == "alternate") color = "text-light-100";

	return (
		<span {...props} className={`font-righteous text-2xl font-normal ${color} ${className}`}>LDev</span>
	);
};

export default Logo;
