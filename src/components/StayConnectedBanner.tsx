interface Props extends React.HTMLProps<HTMLDivElement> {
	type: "accent" | "alternate";
}
// Use alternate prop to invert background and text colors depending on the wanted theme

const StayConnectedBanner: React.FC<Props> = ({ className, ...props }) => {
	return (
		<div
			className={`md:w-1/2 flex justify-center md:min-h-screen items-center bg-light-100 text-accent-200 lg:bg-accent-200 lg:text-light-100 ${className}`}
			{...props}
		>
			<div
				className={
					"font-extrabold text-3xl md:text-5xl lg:text-7xl text-left leading-normal w-full md:w-2/3"
				}
			>
				<span>
					Share Your <br /> Interests, <br />
					Stay
				</span>
				<span className="bg-dark-200 mt-3 text-center flex items-center justify-center -rotate-[5.2deg] text-light-100 w-fit px-2">
					Connected.
				</span>
			</div>
		</div>
	);
};

export default StayConnectedBanner;
