import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";

const Game = () => {
	const [mainArray, setMainArray] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);

	return (
		<div className="h-screen flex justify-center items-center pt-30 bg-primary">
			<Board squares={mainArray} />
		</div>
	);
};

export default Game;
