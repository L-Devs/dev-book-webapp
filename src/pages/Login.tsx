import StayConnectedBanner from "../components/StayConnectedBanner";
import Logo from "../components/Logo";
import DevInput from "../components/DevInput";
import DevButton from "../components/DevButton";

const LoginForm = () => {
	return (
		<div>
			<p className="mb-6 font-semibold">Login</p>
			<DevInput title="Email Address" className="mb-4 w-3/4" />
			<DevInput title="Password" className="mb-4 w-3/4" />
			<div className="flex gap-2 mb-6">
				<input type="checkbox" className="h-6 w-6" />
				Remember me
			</div>
			<DevButton type="secondary" className="w-3/4 h-[53px] font-semibold">
				Login
			</DevButton>
			<div className="text-lg font-normal mt-4">
				Don&apos;t have an account?{" "}
				<a href="/signup" className="text-accent-300 font-medium">
					Create New Account
				</a>
			</div>
		</div>
	);
};

const Login = () => {
	return (
		<div className="font-poppins flex flex-col md:flex-row">
			<div className="w-full md:w-1/2">
				<StayConnectedBanner type="accent" />
			</div>
			<div className="w-full md:w-1/2">
				<Logo />
				<div className="">
					<span className="text-4xl font-bold">
						Welcome Back,
						<br /> Continue Where
						<br /> You Left.
					</span>
				</div>
				<LoginForm />
			</div>
		</div>
	);
};
export default Login;
