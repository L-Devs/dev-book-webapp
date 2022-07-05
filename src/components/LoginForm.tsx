import DevInput from "./DevInput";
import DevButton from "./DevButton";

const LoginForm = () => {
	return (
		<div>
			<p className="mb-[24px] font-semibold">Login</p>
			<DevInput title="Email Address" className="mb-4" />
			<DevInput title="Password" className="mb-4" />
			<div className="flex gap-2 mb-6">
				<input type="checkbox" className="h-6 w-6" />
				Remember me
			</div>
			<DevButton type="secondary" className="w-full">
				Login
			</DevButton>
			<div className="text-lg font-normal">
				Don&apos;t have an account?{" "}
				<a href="/signup" className="text-accent-300 font-medium">
					Create New Account
				</a>
			</div>
		</div>
	);
};

export default LoginForm;
