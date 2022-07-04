interface Props extends React.HTMLProps<HTMLInputElement> {
	title?: string;
}

const DevInput: React.FC<Props> = (props) => {
	return (
		<>
			<input {...props}></input>
		</>
	);
};

export default DevInput;
