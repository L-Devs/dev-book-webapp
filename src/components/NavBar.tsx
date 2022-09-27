import RoundedContainer from "./RoundedContainer";
import Logo from "./Logo";
// TODO: Fix logo text leaking through container
const NavBar = () => {
	return (
		<RoundedContainer className="flex flex-row mx-36 my-7 h-14">
			<Logo className="text-accent-200 text-xl relative inset-y-0" />

			<RoundedContainer className="bg-[#FAFAFA]"></RoundedContainer>
			<div></div>
		</RoundedContainer>
	);
};

export default NavBar;
