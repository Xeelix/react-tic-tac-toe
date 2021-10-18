import React from "react";

const StyledButton = ({ children, onClick  }) => {
	return (
		<button
			onClick={onClick}
			className="mt-4 px-6 py-2 rounded-lg transition duration-300 ease-in-out bg-gray-300 hover:bg-gray-400"
		>
			{children}
		</button>
	);
};

export default StyledButton;
