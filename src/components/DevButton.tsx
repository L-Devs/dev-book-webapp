import React, { FunctionComponent } from "react";

interface Props extends React.HTMLProps<HTMLButtonElement> {
	text: string;
	type: "accent" | "secondary" | "text-accent" | "text-secondary";
	cb: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const DevButton:FunctionComponent<Props> = ({ type, text, cb}) => {
	return (
		<button
			onClick={(e) => cb(e)}
			className={`text-sm md:text-base font-bold capitalize text-center px-5 py-[10px] md:px-6 md:py-3  lg:text-lg lg:px-7 lg:py-[14px] rounded-lg ${
				type == "accent"
					? "bg-accent-200 hover:bg-accent-100 text-white"
					: type == "secondary"
						? "bg-dark-200 hover:bg-dark-100 text-white dark:bg-light-100 dark:hover:bg-light-200 dark:text-dark-200"
						: type == "text-accent"
							? "text-accent-200"
							: type == "text-secondary"
								? "text-dark-200 dark:text-light-200"
								: " "}`}>
			{text}
		</button>
	);
};

export default DevButton;
