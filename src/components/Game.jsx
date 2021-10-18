import React, { useEffect, useState, useInterval } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";
import StyledButton from "./StyledButton";

import LineTo from 'react-lineto';

const Game = () => {
	// Main array with game field
	// 1 - X, 2 - O
	const [mainArray, setMainArray] = useState(Array(9).fill(null));
	// Determining the next move
	const [xIsNext, setXIsNext] = useState(true);
	// Variable for cells animation
	const [cellAnimation, setCellAnimation] = useState("animate-fade-in");
	const winner = calculateWinner(mainArray);

	// Async timeout
	function timeout(delay) {
		return new Promise((res) => setTimeout(res, delay));
	}

	const handleCellClick = (i) => {
		const copyMainArray = [...mainArray];

		if (winner || mainArray[i]) {
			return;
		}

		copyMainArray[i] = xIsNext ? 1 : 2;

		setMainArray([...copyMainArray]);
		setXIsNext(!xIsNext);
	};

	// If state cellAnimation is changed (reset button is pressed)
	useEffect(() => {
		// Async function for call timeot
		const delayAnimation = async () => {
			// When reset button is pressed (from handleRestartClick)
			if (cellAnimation === "animate-fade-out") {
				// Set timeout animation playback.
				await timeout(200);

				// Reset states to default values
				setCellAnimation("animate-fade-in");
				setMainArray(Array(9).fill(null));
			}
		};
		delayAnimation();
	}, [cellAnimation]);

	const handleRestartClick = () => {
		setCellAnimation("animate-fade-out");
	};

	return (
		<div className="h-screen flex flex-col justify-center items-center pt-30 bg-primary">
			<Board
				squares={mainArray}
				onClick={handleCellClick}
				winner={winner}
				animation={cellAnimation}
			/>

			<StyledButton onClick={handleRestartClick}>Restart</StyledButton>
			
		</div>
	);
};

export default Game;
