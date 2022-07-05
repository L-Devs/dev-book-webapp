import PageBanner from "../components/PageBanner";
import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";

const Login = () => {
	return (
		<div className="font-poppins flex ">
			<PageBanner />
			<div className="w-1/2 h-screen pl-[120px] pt-[60px]">
				<Logo />
				<div className="mt-[165px] mb-[62px]">
					<span className="text-4xl font-bold">
						Welcome Back, Continue Where You Left.
					</span>
				</div>
				<LoginForm />
			</div>
		</div>
	);
};
export default Login;
