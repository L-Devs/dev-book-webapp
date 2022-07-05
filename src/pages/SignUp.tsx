import React from "react";
import DevButton from "../components/DevButton";
import DevInput from "../components/DevInput";

const SignUp: React.FC = () => {
	const handleButtonClick = (evnet: React.MouseEvent<HTMLButtonElement>) => {
		console.log("button clicked");
	}
	return (
		<>
			<DevInput />
			<div className="flex gap-4 p-4 flex-wrap">
				<DevButton text="create account" type="accent" cb={handleButtonClick}/>
				<DevButton text="create account" type="secondary" cb={handleButtonClick}/>
				<DevButton text="create account" type="text-accent" cb={handleButtonClick}/>
				<DevButton text="create account" type="text-secondary" cb={handleButtonClick}/>
			</div>
		</>
	);
};

export default SignUp;
