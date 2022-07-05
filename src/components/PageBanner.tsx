interface Props {
	alternate?: boolean;
}
// Use alternate prop to invert background and text colors depending on the wanted theme

const PageBanner = ({ alternate }: Props) => {
	let bgColor = "bg-accent-200";
	let textColor = "text-light-100";

	if (alternate) {
		bgColor = "bg-light-100";
		textColor = "text-accent-200";
	}

	return (
		<div
			className={bgColor + " w-1/2 flex justify-center h-screen items-center"}
		>
			<h1 className={textColor + " ml-16 text-7xl text-left leading-normal"}>
				<span>
					Share your Interests, <br></br>Stay
				</span>
				<span className="w-[477px] bg-dark-200 h-[155px] mt-3 text-center flex items-center justify-center -rotate-[5.2deg] text-light-100">
					Connected
				</span>
			</h1>
		</div>
	);
};

export default PageBanner;
