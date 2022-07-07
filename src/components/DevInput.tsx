import React from "react";
import { FormState } from "react-hook-form";
import { schema } from "../pages/SignUp";
// this is the type of the components props ..
// it will extend the input element props cuz
// since we want to customize the input element
interface Props<T> extends React.HTMLProps<HTMLInputElement> {
	title?: string;
	register: T;
	// formState: FormState<typeof schema>;
}

// extracting the className so I can use the existing class names
// and add the passed by the user of the component
function DevInput<T>({
	className,
	title,
	register,
	...props
}: Props<T>) {
	// const { errors } = formState;
	// console.log(errors);
	return (
		<>
			{/* this is the label and won't be rendered unless label prop passed */}
			{title && <label className="mb-1 block font-medium">{title}</label>}
			<input
				{...props}
				{...register}
				className={`bg-light-200 border-0 rounded-lg px-4 py-2 md:px-5 md:py-3  lg:px-6 lg:py-3 block ${className}`}
			/>
		</>
	);
}

export default DevInput;
