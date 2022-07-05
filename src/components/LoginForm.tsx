import DevInput from "./DevInput";

const LoginForm = () => {
	return (
		<div>
			<p className="mb-[24px]">Login</p>
			<DevInput title="Email Address" className="mb-4" />
			<DevInput title="Password" className="mb-4" />
			<input type="checkbox" />
		</div>
	);
};

export default LoginForm;
