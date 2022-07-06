type Props = React.HTMLProps<HTMLSpanElement>;

const Logo: React.FC<Props> = ({ className, ...props }) => {
	return (
		<span
			{...props}
			className={`font-righteous text-2xl font-normal ${className}`}
		>
			LDev
		</span>
	);
};

export default Logo;
