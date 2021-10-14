import React from "react";
import Cell from "./Cell";

const Board = ({ squares }) => {
	return (
		<div className="grid grid-cols-3 gap-0.25 bg-gray-900">
			{squares.map((square, i) => (
				<Cell key={i} value={square} />
			))}
		</div>
	);
};

export default Board;
