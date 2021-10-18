import React, { useEffect, useState } from "react";
import Cell from "./Cell";

const Board = ({ squares, onClick, winner, animation }) => {
	const [winnerDistribution, setWinnerDistribution] = useState(winner);
	const [localWinner, setLocalWinner] = useState(null);
	const [index, seIndex] = useState(-1);

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

			{winner !== null && winner >= 0 && (
				<div
					className={`line absolute h-60 border-l-4 ${lineDirection[winner]} ${animation}`}
				></div>
			)}
		</div>
	);
};

export default Board;
