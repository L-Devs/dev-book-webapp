interface Props extends React.HTMLProps<HTMLDivElement> {
	type: "accent" | "alternate";
}
// Use alternate prop to invert background and text colors depending on the wanted theme

const StayConnectedBanner: React.FC<Props> = ({
	type,
	className,
	...props
}) => {
	let typeStyle = "";

	if (type == "accent") {
		typeStyle = "bg-accent-200 text-light-100";
	} else {
		typeStyle = "bg-light-100 text-accent-200";
	}

	return (
		<div
			className={` w-1/2 flex justify-center min-h-screen items-center ${typeStyle} ${className}`}
			{...props}
		>
			<div
				className={"font-extrabold text-7xl text-left leading-normal  w-2/3"}
			>
				<span>
					Share Your Interests, <br></br>Stay
				</span>
				<span className="w-[477px] bg-dark-200 h-[155px] mt-3 text-center flex items-center justify-center -rotate-[5.2deg] text-light-100">
					Connected.
				</span>
			</div>
		</div>
	);
};

export default StayConnectedBanner;
