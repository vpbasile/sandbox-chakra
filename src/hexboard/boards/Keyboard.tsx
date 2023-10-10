import Hexboard from '../HexBoardSVG';
import { useState } from "react";
import { gameGlobals, hexagon } from '../hexDefinitions';
import { hexOrientations } from '../hexMath';
import aspectRatio from '../rectMath';
import { clickMessage } from '../hexFunctions';
import BoardControl from '../forms/BoardControl';
import CanvasControl from '../forms/CanvasControl';


export default function Keyboard() {
	// <> States that control canvas parameters
	const [hexRadius, SEThexRadius] = useState(200);
	const [separationMultiplier, SETseparationMultiplier] = useState(1.1)
	const orientation = hexOrientations["pointy-top"]

	// <> Create the roster of hexes
	const hexList: hexagon[] = [];

	const keyboardCharList = [`qwertyuiop[]`, `asdfghjkl;'`, `zxcvbnm,./`, "_"]
	keyboardCharList.forEach((row, rowIndex) => {
		Array.from(row).forEach((key, keyIndex) => {
			const thisOne: hexagon = { q: keyIndex, r: rowIndex, hexText: key }
			hexList.push(thisOne)

		})
	})

	const cssClasses = ["bg-green", "bg-red", "bg-blue", "bg-purple", "bg-orange"]
	let cssClassIndex = 0;
	function getNextCssClass() {
		const cssClass = cssClasses[cssClassIndex];
		cssClassIndex = (cssClassIndex + 1) % cssClasses.length;
		return cssClass;
	}
	function colorHexes(hexes: hexagon[]) {
		hexes.forEach(hex => { hex.cssClasses = `hover-space ${getNextCssClass()}` })
	}

	colorHexes(hexList);


	const keyboardHexes = hexList.map(hex => {
		// Give all the hexes a cssClasses if they don't already have one
		if (hex.cssClasses === undefined) { hex.cssClasses = "hover-space bg-gray" }
		return hex;
	})

	// <> Hexboard Parameters
	const gameGlobals: gameGlobals = {
		orientation: orientation,
		hexRadius: hexRadius,
		textSize: hexRadius / 2,
		separationMultiplier: separationMultiplier,
		drawBackBoard: false,
		onClick: clickMessage,
	}

	const multiplier = aspectRatio();
	const [canvasWidth, SETcanvasWidth] = useState(2 * hexRadius * 12 * separationMultiplier)
	const [canvasHeight, SETcanvasHeight] = useState(canvasWidth / multiplier)
	const originY = hexRadius * separationMultiplier;
	const [hexGridOrigin, SEThexGridOrigin] = useState({ x: originY * multiplier, y: originY });
	const canvasGlobals = {
		canvasWidth: canvasWidth,
		canvasHeight: canvasHeight,
		hexGridOrigin: hexGridOrigin,
		canvasBackgroundColor: '#000',
	}

	return (
		<Box>
			<Box id="sideBar">
				<BoardControl
					hexRadius={hexRadius} SEThexRadius={SEThexRadius}
					separationMultiplier={separationMultiplier} SETseparationMultiplier={SETseparationMultiplier}
				/>
				<CanvasControl
					canvasWidth={canvasWidth} SETcanvasWidth={SETcanvasWidth}
					canvasHeight={canvasHeight} SETcanvasHeight={SETcanvasHeight}
					hexGridOrigin={hexGridOrigin} SEThexGridOrigin={SEThexGridOrigin}
				/>
			</Box>
			<Box id="displayBoardContainer">
				<Box id='displayBoard' className="col-md-10">
					<Hexboard
						hexRoster={keyboardHexes}
						gameGlobals={gameGlobals}
						canvasGlobals={canvasGlobals}
						displayRoster={true}
					//   logo={logo}
					/>
				</Box>
			</Box>
		</Box>

	);
}