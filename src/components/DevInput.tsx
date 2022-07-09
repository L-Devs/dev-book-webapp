import React, { useEffect, useState } from "react";
import { Field } from "formik";
// this is the type of the components props ..
// it will extend the input element props cuz
// since we want to customize the input element
interface Props extends React.HTMLProps<HTMLInputElement> {
	title?: string;
	formError?: string | undefined;
	touched?: boolean | undefined;
}

// extracting the className so I can use the existing class names
// and add the passed by the user of the component
function DevInput({ className, title, formError, touched, ...props }: Props) {
	const [onError, setOneError] = useState(false);

	//Add error classes when the fields has invalid data
	const errorClasses = onError
		? "border border-red-500 invalid:border-red-500 focus:outline-none focus:ring focus:ring-red-300"
		: "";

	// update the state if the field has invalid data
	useEffect(() => {
		if (formError && touched) setOneError(true);
		else setOneError(false);
	}, [formError]);

	return (
		<>
			{/* this is the label and won't be rendered unless label prop passed */}
			{title && <label className="mb-1 block font-medium">{title}</label>}
			<Field
				{...props}
				className={`bg-light-200 border-0  rounded-lg px-4 py-2 md:px-5 md:py-3  lg:px-6 lg:py-3 block${className} ${errorClasses}`}
			/>

			{/* Here is you can display field's error message */}
			{formError && touched ? (
				<p className="text-sm text-red-500">{formError}</p>
			) : null}
		</>
	);
}

export default DevInput;
