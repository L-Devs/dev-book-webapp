import DevButton from "../components/DevButton";
import DevInput from "../components/DevInput";

const SignUp: React.FC = () => {
	return (
		<>
			<DevInput />
			<div className="flex gap-4 p-4 flex-wrap">
				<DevButton type="accent">hello</DevButton>
				<DevButton type="secondary">hello</DevButton>
				<DevButton type="text-accent">hello</DevButton>
				<DevButton type="text-secondary">hello</DevButton>
			</div>
		</>
	);
};

export default SignUp;
