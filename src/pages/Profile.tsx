import { useState } from "react";
import * as Yup from "yup";
import "yup-phone";
import Axios from "axios";
import { Form, Formik } from "formik";
import DevInput from "../components/DevInput";
import DevButton from "../components/DevButton";
import DevSelect from "../components/DevSelect";

interface ProfileInitialValues {
	userId: number;
	firstName: string;
	lastName: string;
	birthDate: Date;
	gender: "m" | "f";
	phoneNumber: string;
	country: string;
}

const Profile = () => {
	const [errorState, setErrorState] = useState("");

	// Profile schema for Yup
	const ProfileSchema = Yup.object().shape({
		userId: Yup.number().required("Required"),
		firstName: Yup.string()
			.min(2, "Too Short!")
			.max(50, "Too Long!")
			.required("Required"),
		lastName: Yup.string()
			.min(2, "Too Short!")
			.max(50, "Too Long!")
			.required("Required"),
		birthDate: Yup.date().required("Required"),
		gender: Yup.string().length(1, "Must be 1 character").required("Required"),
		phoneNumber: Yup.string()
			.phone("", false, "Invalid phone number")
			.required("Required"),
		country: Yup.string().required("Required"),
	});

	// TODO: Need to get userId from signup post request first
	// Profile initial values
	const profileInitialValues: ProfileInitialValues = {
		userId: 0,
		firstName: "",
		lastName: "",
		birthDate: new Date(),
		gender: "m",
		phoneNumber: "",
		country: "",
	};
	console.log(profileInitialValues.birthDate);

	// Submit userprofile to api
	const profileSubmitHandler = (values: ProfileInitialValues) => {
		// Animate loading button?

		const dataObj = {
			userId: values.userId,
			firstName: values.firstName,
			lastName: values.lastName,
			birthDate: values.birthDate,
			gender: values.gender,
			phoneNumber: values.phoneNumber,
			country: values.country,
		};
		console.log("posting...");
		console.log(dataObj);
		Axios.post("http://127.0.0.1:8000/userprofile", dataObj, {
			withCredentials: true,
		})
			.then(function (response) {
				console.log(response);
				setErrorState("");
				// Cookie stuff maybe?
				// TODO: Redirect to home & remove console logs
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
		<Formik
			initialValues={profileInitialValues}
			validationSchema={ProfileSchema}
			onSubmit={(values) => {
				profileSubmitHandler(values);
			}}
		>
			{({ errors, touched }) => {
				return (
					<Form className="flex flex-col space-y-3 pb-2">
						<h2 className="font-bold mb-4 capitalize text-dark-200 text-xl">
							User profile
						</h2>
						{errorState && <div className="text-red-500">{errorState}</div>}
						<div className="">
							<DevInput
								title="First Name"
								name="firstName"
								formError={errors.firstName}
								touched={touched.firstName}
								type="text"
								className="w-full md:w-9/12 2xl:w-6/12 text-dark-200"
							/>
						</div>
						<div className="">
							<DevInput
								title="Last Name"
								name="lastName"
								formError={errors.lastName}
								touched={touched.lastName}
								type="text"
								className="w-full md:w-9/12 2xl:w-6/12 text-dark-200"
							/>
						</div>
						<div className="">
							<DevInput
								title="Birth Date"
								name="birthDate"
								type="date"
								className="w-full md:w-9/12 2xl:w-6/12 text-dark-200"
							/>
						</div>
						<div className="">
							<DevSelect
								title="Gender"
								name="gender"
								type="select"
								formError={errors.gender}
								touched={touched.gender}
								className="w-full md:w-9/12 2xl:w-6/12 text-dark-200"
								options={[
									{ name: "Male", value: "m" },
									{ name: "Female", value: "f" },
								]}
							/>
						</div>
						<div className="">
							<DevInput
								title="Phone Number"
								name="phoneNumber"
								type="text"
								formError={errors.phoneNumber}
								touched={touched.phoneNumber}
								className="w-full md:w-9/12 2xl:w-6/12 text-dark-200"
							/>
						</div>
						<div className="">
							<DevSelect
								title="Country"
								name="country"
								type="select"
								formError={errors.country}
								touched={touched.country}
								className="w-full md:w-9/12 2xl:w-6/12 text-dark-200"
								options={[
									{ name: "Sudan", value: "SU" },
									{ name: "United Stated of America", value: "US" },
									{ name: "United Kingdom", value: "UK" },
									{ name: "Oman", value: "OM" },
								]}
							/>
						</div>
						<DevButton
							devStyle="secondary"
							type="submit"
							className="w-full mt-8 md:w-9/12 2xl:w-6/12"
						>
							Confirm
						</DevButton>
					</Form>
				);
			}}
		</Formik>
	);
};

export default Profile;
