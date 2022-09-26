import { useId } from "react";
import { Field } from "formik";

interface Props extends React.HTMLProps<HTMLInputElement> {
	content: string;
	formError?: string | undefined;
	touched?: boolean | undefined;
}

export const DevCheckBox = ({
	content,
	className,
	formError,
	touched,
	...props
}: Props) => {
	const errorClasses =
		formError && touched
			? "border border-red-500 invalid:border-red-500 focus:outline-none focus:ring focus:ring-red-300"
			: "";
	const randID = useId();
	return (
		<>
			<div className="flex space-x-2">
				<Field
					{...props}
					className={`bg-light-200 border-0  rounded-lg px-4 py-2 md:px-5 md:py-3  lg:px-6 lg:py-3 block ${className} ${errorClasses}`}
					id={randID}
				/>
				<label
					htmlFor={randID}
					className="capitalize font-normal text-sm text-neutral-700"
				>
					{content}
				</label>
			</div>

			{/* Here is you can display field's error message */}
			{formError && touched ? (
				<p className="text-sm text-red-500">{formError}</p>
			) : null}
		</>
	);
};
