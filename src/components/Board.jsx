import React, { useEffect, useState } from "react";
import Cell from "./Cell";

const Board = ({ squares, onClick, winner, animation }) => {
	const [winnerDistribution, setWinnerDistribution] = useState(winner);
	const [localWinner, setLocalWinner] = useState(null);
	const [index, seIndex] = useState(-1);


	return (
		<div className="grid grid-cols-3 gap-0.25 bg-gray-900">
			{squares.map((square, i) => {
				return (
					<Cell
						key={i}
						value={square}
						onClick={() => onClick(i)}
						animation={animation}
						className={winner}
					/>
				);
			})}

			{winner && (
				<div className="line absolute h-60 border-red-700 border-l-2 diagR ">
					
				</div>
			)}


		</div>
	);
};

export default Board;
