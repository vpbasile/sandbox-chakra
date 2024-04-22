import { useState } from 'react';
import Hexboard from "../../HexBoardSVG";
import HexboardLayout from '../../HexboardLayout';
import BoardParameters from '../../forms/BoardParameters';
import CanvasParameters from '../../forms/CanvasParameters';
import { canvasGlobals, gameGlobals, hexagon } from "../../hexDefinitions";
import { clickMessage } from '../../hexFunctions';
import { hexOrientations } from '../../hexMath';
import RosterDisplay from '../../hexRosterDisplay';

export default function WordSoupBoard(props: { hexRoster: hexagon[], children?: JSX.Element }) {
	const hexRoster = props.hexRoster
	// <> States that control canvas parameters
	const [canvasWidth, SETcanvasWidth] = useState(6000)
	const [canvasHeight, SETcanvasHeight] = useState(4200)
	const [hexRadius, SEThexRadius] = useState(200);
	const [separationMultiplier, SETseparationMultiplier] = useState(1.1)
	const [hexGridOrigin, SEThexGridOrigin] = useState({ x: 3000, y: 2100 });
	const [orientation] = useState(hexOrientations["flat-top"])

	const gameGlobals: gameGlobals = {
		// Hexagons
		orientation: orientation,
		hexRadius: hexRadius,
		separationMultiplier: separationMultiplier,
		textSize: 122,
		drawBackBoard: true,
		onClick: clickMessage
	}

	const canvasGlobals: canvasGlobals = {
		canvasWidth: canvasWidth,
		canvasHeight: canvasHeight,
		hexGridOrigin: hexGridOrigin,
		canvasBackgroundColor: '#00c',
	}

	return <HexboardLayout id="wordSoupBoard" displayTitle="Word Soup" forms={[<BoardParameters
		hexRadius={hexRadius}
		separationMultiplier={separationMultiplier}
		SEThexRadius={SEThexRadius}
		SETseparationMultiplier={SETseparationMultiplier} hexgridOrigin={hexGridOrigin} SEThexGridOrigin={SEThexGridOrigin} />,
	<CanvasParameters
		canvasWidth={canvasWidth} SETcanvasWidth={SETcanvasWidth}
		canvasHeight={canvasHeight} SETcanvasHeight={SETcanvasHeight}
		hexGridOrigin={hexGridOrigin} SEThexGridOrigin={SEThexGridOrigin}
	/>]} board={<Hexboard
		hexRoster={hexRoster}
		gameGlobals={gameGlobals}
		canvasGlobals={canvasGlobals} />} roster={<RosterDisplay hexRoster={hexRoster} />} >
		{props.children}
	</HexboardLayout>
}