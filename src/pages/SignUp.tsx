import DevButton from "../components/DevButton";
import DevInput from "../components/DevInput";
import StayConnectedBanner from "../components/StayConnectedBanner";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { ErrorMessage, Form, Formik } from "formik";

interface InitialValues {
	userName: string;
	emailAddress: string;
	password: string;
	confirmPassword: string;
}
const SignUp: React.FC = () => {

	//Yup Object Schema
	const SignupSchema = Yup.object().shape({
		userName: Yup.string()
			.min(2, "Too Short!")
			.max(50, "Too Long!")
			.required("Required"),
		emailAddress: Yup.string().email("Invalid email").required("Required"),
		password: Yup.string().required("Password is required"),
		confirmPassword: Yup.string().oneOf(
			[Yup.ref("password")],
			"Both password need to be the same"
		),
	});

	//Form Fields initial values
	const initialValues: InitialValues = {
		userName: "",
		emailAddress: "",
		password: "",
		confirmPassword: "",
	};

	return (
		<div className="p-5 md:p-0 flex flex-col bg-light-100 min-h-screen md:flex-row">
			<Logo className="mb-10 md:hidden text-accent-200" />
			<StayConnectedBanner type="accent" className="mb-20 md:mb-0 md:w-1/2" />
			<div className="md:w-1/2 md:pl-20 text-dark-200">
				<Logo className="my-2 lg:my-4 xl:my-8 mx-auto hidden md:block text-accent-200" />
				<Formik
					initialValues={initialValues}
					validationSchema={SignupSchema}
					onSubmit={(values) => {
						console.log(values);
					}}
				>
					{({ errors, touched }) => {
						return (
							<Form className="flex flex-col gap-1 pb-2">
								<h2 className="font-bold mb-4 capitalize text-dark-200 text-xl">
									Sign up
								</h2>
								<div className="">
									<DevInput
										title="User Name"
										name="userName"
										formError={errors.userName}
										touched={touched.userName}
										type="text"
										className="mb-3 w-full md:w-9/12 2xl:w-6/12 text-dark-200"
									/>
								</div>
								<div className="">
									<DevInput
										title="Email Address"
										name="emailAddress"
										formError={errors.emailAddress}
										touched={touched.emailAddress}
										type="email"
										className="mb-3 w-full md:w-9/12 2xl:w-6/12 text-dark-200"
									/>
								</div>
								<div className="">
									<DevInput
										title="Password"
										name="password"
										type="password"
										formError={errors.password}
										touched={touched.password}
										className="mb-3 w-full md:w-9/12 2xl:w-6/12 text-dark-200"
									/>
								</div>
								<div className="">
									<DevInput
										title="Confirm Password"
										name="confirmPassword"
										type="password"
										formError={errors.confirmPassword}
										touched={touched.confirmPassword}
										className="w-full md:w-9/12 2xl:w-6/12 text-dark-200"
									/>
								</div>

								<DevButton
									btnTypes="secondary"
									type="submit"
									className="w-full mt-8 md:w-9/12 2xl:w-6/12"
								>
									Sign up
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
							</Form>
						);
					}}
				</Formik>
			</div>
		</div>
	);
};

export default SignUp;
