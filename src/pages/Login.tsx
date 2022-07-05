import PageBanner from "../components/PageBanner";
import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";

const Login = () => {
	return (
		<div className="font-bold font-poppins flex ">
			<PageBanner />
			<div className="w-1/2 h-screen pl-[120px] pt-[60px] pr-[200px]">
				<Logo />
				<div className="mt-[165px] mb-[62px]">
					<span className="text-4xl">
						Welcome Back, Continue Where You Left.
					</span>
				</div>
				<LoginForm />
			</div>
		</div>
	);
};
export default Login;
