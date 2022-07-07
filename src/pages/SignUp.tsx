import DevButton from "../components/DevButton";
import DevInput from "../components/DevInput";
import StayConnectedBanner from "../components/StayConnectedBanner";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
	return (
		<div className="p-5 md:p-0 flex flex-col bg-light-100 min-h-screen md:flex-row">
			<Logo className="mb-10 md:hidden text-accent-200" />
			<StayConnectedBanner type="accent" className="mb-20 md:mb-0 md:w-1/2" />
			<div className="md:w-1/2 md:pl-20 text-dark-200">
				<Logo className="my-2 lg:my-4 xl:my-8 mx-auto hidden md:block lg:text-accent-200" />
				<form className="flex flex-col gap-1 pb-2">
					<h2 className="font-bold mb-4 capitalize text-dark-200 text-xl">Sign up</h2>
					<DevInput
						title="User Name"
						className="mb-3 w-full md:w-9/12 2xl:w-6/12 text-dark-200"
					/>
					<DevInput
						title="Email Address"
						className="mb-3 w-full md:w-9/12 2xl:w-6/12 text-dark-200"
					/>
					<DevInput
						title="Password"
						className="mb-3 w-full md:w-9/12 2xl:w-6/12 text-dark-200"
					/>
					<DevInput
						title="Confirm Password"
						className="w-full md:w-9/12 2xl:w-6/12 text-dark-200"
					/>
					<DevButton
						type="secondary"
						className="w-full mt-8 md:w-9/12 2xl:w-6/12"
					>
						Sign Up
					</DevButton>
					<div className="mt-3">
						Do you have an account?
						<Link to="/login">
							<span className="text-accent-200 font-medium cursor-pointer">
								{" "}
								Login
							</span>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
