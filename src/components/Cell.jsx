import React from "react";
import NoughtIcon from "./NoughtIcon";
import CrossIcon from "./CrossIcon";

const cellSize = 20;

const Cell = ({ value }) => {
	return (
		<div className={`w-${cellSize} h-${cellSize} flex flex-wrap content-center justify-center bg-primary`}>
			<NoughtIcon className=""/>
		</div>
	);
};

export default Cell;
