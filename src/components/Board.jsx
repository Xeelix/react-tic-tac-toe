import React, { useEffect, useState } from "react";
import Cell from "./Cell";

const Board = ({ squares, onClick, winner, animation }) => {
	// Classes for winner line locations
	const lineDirection = [
		"horizTop",
		"horizMid",
		"horizBtm",
		"vertL",
		"vertM",
		"vertR",
		"diagL",
		"diagR",
	];

	return (
		<div className="grid grid-cols-3 gap-0.25 bg-gray-900">
			{squares.map((square, i) => {
				return (
					<Cell
						key={i}
						value={square}
						onClick={() => onClick(i)}
						animation={animation}
					/>
				);
			})}

			{/* Drawing line if winner exists */}
			{winner !== null && winner >= 0 && (
				<div
					className={`line absolute h-60 border-l-4 ${lineDirection[winner]} ${animation}`}
				></div>
			)}
		</div>
	);
};

export default Board;
