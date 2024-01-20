import { useState } from 'react';
import Hexboard from "../../HexBoardSVG";
import HexboardLayout from '../../HexboardLayout';
import BoardParameters from '../../forms/BoardParameters';
import CanvasParameters from '../../forms/CanvasParameters';
import { canvasGlobals, gameGlobals } from "../../hexDefinitions";
import { clickMessage } from '../../hexFunctions';
import { hexOrientations } from '../../hexMath';
import RosterDisplay from '../../hexRosterDisplay';
import fileData from './data.json';

export default function SavedBoard() {
	// <> States that control canvas parameters
	const [canvasWidth, SETcanvasWidth] = useState(window.innerWidth)
	const [canvasHeight, SETcanvasHeight] = useState(2 * window.innerHeight)
	const [hexRadius, SEThexRadius] = useState(200);
	const [separationMultiplier, SETseparationMultiplier] = useState(1.1)
	const [hexGridOrigin, SEThexGridOrigin] = useState({ x: canvasWidth / 2, y: canvasHeight / 2 });
	const [orientation] = useState(hexOrientations["flat-top"])
	// function toggleOrientation(): void {
	// 	if (orientation===hexOrientations["flat-top"]){SETorientation(hexOrientations["pointy-top"])} else {
	// 		SETorientation(hexOrientations["flat-top"])
	// 	}
	// }

	const hexRoster = fileData.hexRoster;
	// const canvasGlobals = fileData.canvasGlobals;

	const gameGlobals: gameGlobals = {
		// Hexagons
		orientation: orientation,
		hexRadius: hexRadius,
		separationMultiplier: separationMultiplier,
		textSize: 12,
		drawBackBoard: true,
		onClick: clickMessage
	}

	const canvasGlobals: canvasGlobals = {
		canvasWidth: canvasWidth,
		canvasHeight: canvasHeight,
		hexGridOrigin: hexGridOrigin,
		canvasBackgroundColor: '#000',
	}

	return <HexboardLayout id="savedBoard" displayTitle="Saved Board" forms={[<BoardParameters
		hexRadius={hexRadius}
		separationMultiplier={separationMultiplier}
		SEThexRadius={SEThexRadius}
		SETseparationMultiplier={SETseparationMultiplier} />,
	<CanvasParameters
		canvasWidth={canvasWidth} SETcanvasWidth={SETcanvasWidth}
		canvasHeight={canvasHeight} SETcanvasHeight={SETcanvasHeight}
		hexGridOrigin={hexGridOrigin} SEThexGridOrigin={SEThexGridOrigin}
	/>]} board={<Hexboard
		hexRoster={hexRoster}
		gameGlobals={gameGlobals}
		canvasGlobals={canvasGlobals} />} roster={<RosterDisplay hexRoster={hexRoster} />} />
}