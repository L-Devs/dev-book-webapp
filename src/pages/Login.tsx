import React, { FC } from "react";

const Login = () => {
	return (
		<div className="font-bold font-poppins text-accent-200 text-center flex justify-evenly">
			<div className="bg-accent-200 w-1/2 h-screen content-center">
				<div className="flex justify-center h-screen items-center">
					<h1 className="w-2/3 text-light-100 text-7xl text-left leading-normal">
						<span>
							Share your Interests, <br></br>Stay
						</span>
						<span className="w-[477px] bg-dark-200 h-[155px] mt-3 text-center flex items-center justify-center -rotate-[5.2deg]">
							Connected
						</span>
					</h1>
				</div>
			</div>
			<div className="w-1/2 h-screen"></div>
		</div>
	);
};
export default Login;
