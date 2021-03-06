import React from "react";

const CrossesComponent = ({ className, size=35 }) => {
	return (
		<svg
			className={className}
			width={size}
			height={size}
			viewBox="0 0 608 608"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M303.999 516.975C421.623 516.975 516.975 421.622 516.975 303.999C516.975 186.375 421.623 91.0227 303.999 91.0227C186.376 91.0227 91.0234 186.375 91.0234 303.999C91.0234 421.622 186.376 516.975 303.999 516.975ZM303.999 607.975C471.881 607.975 607.975 471.88 607.975 303.999C607.975 136.117 471.881 0.0227051 303.999 0.0227051C136.118 0.0227051 0.0234375 136.117 0.0234375 303.999C0.0234375 471.88 136.118 607.975 303.999 607.975Z"
				fill="black"
			/>
		</svg>
	);
};

export default CrossesComponent;
