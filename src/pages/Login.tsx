import StayConnectedBanner from "../components/StayConnectedBanner";
import Logo from "../components/Logo";
import DevInput from "../components/DevInput";
import DevButton from "../components/DevButton";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";



interface InitialValues {
	emailAddress: string;
	password: string;
}
interface SubmitObject {
	email: string;
	password: string;
}

const Login: React.FC = () => {
	const SignupSchema = Yup.object().shape({
		emailAddress: Yup.string().email("Invalid email").required("Required"),
		password: Yup.string().required("Password is required"),
	});

	//Form Fields initial values
	const initialValues: InitialValues = {
		emailAddress: "",
		password: "",
	};

	const submitLoginRequest = (submitObject: object) => {
		console.log("posting..");
		
		console.log(submitObject);

		axios
			.post("http://127.0.0.1:8000/login/", 
				submitObject,
			)
			.then(function (response) {
				if (response.data.status == "Success") {
					
					localStorage.setItem("sessionToken", response.data.token);
				}
				console.log("response");
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<div className="p-5 md:p-0 flex flex-col bg-light-100 min-h-screen md:flex-row">
			<Logo className="mb-10 md:hidden text-accent-200" />
			<StayConnectedBanner type="accent" className="mb-20 md:mb-0 md:w-1/2" />
			<div className="md:w-1/2 md:pl-20 text-dark-200">
				<Logo className="my-2 md:my-20 mx-auto hidden md:block lg:text-accent-200" />
				<Formik
					initialValues={initialValues}
					validationSchema={SignupSchema}
					onSubmit={(values) => {
						const submitObject: SubmitObject = {
							email: values.emailAddress,
							password: values.password,
						};
						submitLoginRequest(submitObject);
					}}
				>
					{({ errors, touched }) => {
						return (
							<Form className="flex flex-col gap-1 pb-2">
								<h2 className="font-bold mb-4 capitalize text-dark-200 text-xl">
									Login
								</h2>
								<DevInput
									title="Email Address"
									name="emailAddress"
									type="email"
									className="mb-3 w-full md:w-9/12 2xl:w-6/12 text-dark-200"
									formError={errors.emailAddress}
									touched={touched.emailAddress}
								/>
								<DevInput
									title="Password"
									name="password"
									type="password"
									className="mb-3 w-full md:w-9/12 2xl:w-6/12 text-dark-200"
									formError={errors.password}
									touched={touched.password}
								/>
								<div className="flex gap-2 mb-6 mt-3">
									<input type="checkbox" className="h-6 w-6" />
									Remember me
								</div>
								<DevButton
									devStyle="secondary"
									className="w-full mt-8 md:w-9/12 2xl:w-6/12"
									type="submit"
								>
									Login
								</DevButton>
								<div className="mt-3">
									Don&apos;t have an account?
									<Link to="/signup">
										<span className="text-accent-200 font-medium cursor-pointer">
											{" "}
											Create New Account
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
export default Login;
