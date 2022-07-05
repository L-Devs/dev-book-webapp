// this is the type of the components props ..
// it will extend the input element props cuz
// since we want to customize the input element
interface Props extends React.HTMLProps<HTMLInputElement> {
	title?: string;
}

// extracting the className so I can use the existing class names
// and add the passed by the user of the component
const DevInput: React.FC<Props> = ({ className, title, ...props }) => {
	return (
		<>
			{/* this is the label and won't be rendered unless label prop passed */}
			{title && <label className="mb-2 block">{title}</label>}
			<input
				{...props}
				className={
					"bg-light-200 border-0 rounded-lg h-[48px] px-3 block " + className
				}
			></input>
		</>
	);
};

export default DevInput;
