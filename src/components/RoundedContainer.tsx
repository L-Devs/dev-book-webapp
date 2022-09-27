

type Props = React.HTMLProps<HTMLDivElement>;

const RoundedContainer: React.FC<Props> = ({ className, ...props }) => {
	return (
		<div
			{...props}
			className={`bg-white border-2 border-white rounded-xl p-4  ${className}`}
		>
			{props.children}
			
		</div>
	);
};

export default RoundedContainer;
