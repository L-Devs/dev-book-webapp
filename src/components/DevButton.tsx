type Props = React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;

const DevButton: React.FC<Props> = ({ className, ...props }) => {
	return (
		<>
			<button
				{...props}
				className={" bg-dark-300 text-white px-4 p-2 rounded-lg " + className}
			>
				{props.children}
			</button>
		</>
	);
};

export default DevButton;
