import React from "react";
import NoughtIcon from "./icons/NoughtIcon";
import CrossIcon from "./icons/CrossIcon";

const cellSize = 20;

const Cell = ({ value, onClick, animation }) => {
	const noughtOrCross = (value, animation) => {
		if (value === 1) {
			return <NoughtIcon className={animation}/>;
		} else if (value === 2) {
			return <CrossIcon className={animation}/>;
		}
	};

	return (
		<button
			onClick={onClick}
			className={`w-${cellSize} h-${cellSize} flex flex-wrap content-center justify-center bg-primary`}
		>
			{noughtOrCross(value, animation)}
		</button>
	);
};

export default Cell;
