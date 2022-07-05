interface Props {
	alternate?: boolean;
}
// Use alternate prop to invert the color depending on the wanted theme

const Logo = ({ alternate }: Props) => {
	let color = "text-accent-200";

	if (alternate) {
		color = "text-light-100";
	}

	return <span className={color + " font-righteous text-2xl font-normal"}>LDev</span>;
};

export default Logo;
