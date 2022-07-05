import React from "react";
import PageBanner from "../components/PageBanner";
import Logo from "../components/Logo";

const Login = () => {
	return (
		<div className="font-bold font-poppins flex ">
			<PageBanner />
			<div className="w-1/2 h-screen ">
				<Logo />
				<div className="">
					<span className="w-1/2">welcome back, continue where you left.</span>
				</div>
			</div>
		</div>
	);
};
export default Login;
