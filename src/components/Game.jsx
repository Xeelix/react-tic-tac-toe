import React, { useEffect, useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";
import StyledButton from "./StyledButton";

import NoughtIcon from "./icons/NoughtIcon";
import CrossIcon from "./icons/CrossIcon";
import ModalWindow from "./ModalWindow";

const Game = () => {
	// Main array with game field
	// 1 - X, 2 - O
	const [mainArray, setMainArray] = useState(Array(9).fill(null));
	// Determining the next move
	const [xIsNext, setXIsNext] = useState(true);
	// Variable for cells animation
	const [cellAnimation, setCellAnimation] = useState("animate-fade-in");
	const winner = calculateWinner(mainArray);

	const [openModalWindow, setOpenModalWindow] = useState(false);

	// Async timeout
	function timeout(delay) {
		return new Promise((res) => setTimeout(res, delay));
	}

	useEffect(() => {
		if (winner) {
			setOpenModalWindow(true);
		}
	}, [winner]);

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
				setXIsNext(true);
			}
		};
		delayAnimation();
	}, [cellAnimation]);

	const handleRestartClick = () => {
		setOpenModalWindow(false);

		setCellAnimation("animate-fade-out");
	};

	const NoughtOrCrossIcon = ({ reverse = false }) => {
		let icon = xIsNext;
		if (reverse) {
			icon = !icon;
		}

		return icon ? <NoughtIcon size={17} /> : <CrossIcon size={17} />;
	};

	const ModalTitle = ({ text }) => {
		return (
			<div className="flex items-center">
				<div>
					<NoughtOrCrossIcon reverse={true} />
				</div>
				<div className="ml-1">{text}</div>
			</div>
		);
	};

	return (
		<div className="h-screen flex flex-col justify-center items-center pt-30 bg-primary">
			<div className="flex items-center mb-10 px-4 py-3 bg-gray-300 w-60 rounded-lg font-medium text-xl">
				{winner ? (
					<>
						<ModalTitle text=" - has won" />
					</>
				) : (
					<>
						<div className="font-normal">
							Next Move:
						</div>
						<div className="ml-1">
							<NoughtOrCrossIcon />
						</div>
					</>
				)}
			</div>

			<Board
				squares={mainArray}
				onClick={handleCellClick}
				winner={winner}
				animation={cellAnimation}
			/>

			<StyledButton onClick={handleRestartClick}>Restart</StyledButton>

			<ModalWindow
				title={<ModalTitle text=" - has won" />}
				message="Press button to restart"
				buttonText="Restart"
				handleClick={handleRestartClick}
				open={openModalWindow}
				setOpen={setOpenModalWindow}
			/>
		</div>
	);
};

export default Game;
