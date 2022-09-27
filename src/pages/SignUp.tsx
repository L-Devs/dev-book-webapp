import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DevButton from "../components/DevButton";
import DevInput from "../components/DevInput";
import StayConnectedBanner from "../components/StayConnectedBanner";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { DevCheckBox } from "../components/DevCheckBox";
import Axios from "axios";

interface InitialValues {
	userName: string;
	emailAddress: string;
	password: string;
	terms: boolean;
	confirmPassword: string;
}

const SignUp: React.FC = () => {
	const [errorState, setErrorState] = useState("");

	const navigate = useNavigate();

	//Yup Object Schema
	const SignupSchema = Yup.object().shape({
		userName: Yup.string()
			.min(2, "Too Short!")
			.max(50, "Too Long!")
			.required("Required"),
		emailAddress: Yup.string().email("Invalid email").required("Required"),
		password: Yup.string().required("Password is required"),
		terms: Yup.boolean().oneOf(
			[true],
			"you need to agree with our terms and conditions to continue"
		),
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
		terms: false,
		confirmPassword: "",
	};

	// TODO: PUT URLS IN .ENV ONCE API IS ONLINE

	// submitHandler to submit data to api
	const submitHandler = (values: InitialValues) => {
		// Animate loading button?

		const dataObj = {
			email: values.emailAddress,
			password: values.password,
			username: values.userName,
		};
		// TODO: Remove console logs
		console.log("posting...");
		console.log(dataObj);
		Axios.post("http://127.0.0.1:8000/signup", dataObj, {
			withCredentials: true,
		})
			.then(function (response) {
				console.log(response);
				setErrorState("");
				// TODO: Save userId somewhere
				navigate("/profile");
			})
			.catch(function (error) {
				console.log(error);
				if (error.response.data) {
					setErrorState(error.response.data.message);
				} else {
					setErrorState(error.message);
				}
			});
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
						submitHandler(values);
					}}
				>
					{({ errors, touched }) => {
						return (
							<Form className="flex flex-col space-y-3 pb-2">
								<h2 className="font-bold mb-4 capitalize text-dark-200 text-xl">
									Sign up
								</h2>
								{errorState && <div className="text-red-500">{errorState}</div>}
								<div className="">
									<DevInput
										title="User Name"
										name="userName"
										formError={errors.userName}
										touched={touched.userName}
										type="text"
										className="w-full md:w-9/12 2xl:w-6/12 text-dark-200"
									/>
								</div>
								<div className="">
									<DevInput
										title="Email Address"
										name="emailAddress"
										formError={errors.emailAddress}
										touched={touched.emailAddress}
										type="email"
										className="w-full md:w-9/12 2xl:w-6/12 text-dark-200"
									/>
								</div>
								<div className="">
									<DevInput
										title="Password"
										name="password"
										type="password"
										formError={errors.password}
										touched={touched.password}
										className="w-full md:w-9/12 2xl:w-6/12 text-dark-200"
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
								<div className="">
									<DevCheckBox
										content="agree to terms and conditions"
										name="terms"
										type="checkbox"
										formError={errors.terms}
										touched={touched.terms}
										className="accent-accent-200"
									/>
								</div>

								<DevButton
									devStyle="secondary"
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
