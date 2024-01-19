
import { Box, Input } from "@chakra-ui/react";
import { useState } from "react";
import Hexboard from "../HexBoardSVG";
import BoardControl from "../forms/BoardControl";
import CanvasControl from "../forms/CanvasControl";
import SaveRosterButton from "../forms/saveRoster";
import { gameGlobals, hexagon } from "../hexDefinitions";
import { clickMessage } from "../hexFunctions";
import { calcCenteredRectangle, cube_ring, hexOrientations } from "../hexMath";
import aspectRatio from "../rectMath";

export default function CreateBoard() {
	// <> States that control canvas parameters
	const [hexRadius, SEThexRadius] = useState(200);
	const [separationMultiplier, SETseparationMultiplier] = useState(1.1)
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [defaultOrientation, SETdefaultOrientation] = useState(hexOrientations["flat-top"])

	console.log(SETdefaultOrientation)

	// States unique to this board
	const [qTemp, SETqTemp] = useState(0);
	const [rTemp, SETrTemp] = useState(0);
	const cssClassChoices = [
		`just-grid`,
		`bg-white`,
		'bg-red',
		'bg-orange',
		'bg-yellow',
		'bg-green',
		'bg-blue',
		'bg-purple',
	]
	const [classTemp] = useState(cssClassChoices[0])
	// const blankRoster: hexagon[] = []
	const centerHex: hexagon = { q: 0, r: 0, cssClasses: cssClassChoices[0] }
	let tempRoster: hexagon[] = [centerHex]
	const boardSize: number = 7
	for (let i = 1; i < boardSize; i++) {
		const thisRing = cube_ring(centerHex, i)
		// console.log(`Ring ${i} is ${JSON.stringify(thisRing)}`)
		tempRoster = tempRoster.concat(thisRing);
		// console.log(JSON.stringify(tempRoster))
	}
	tempRoster = tempRoster.map((eachHex) => { eachHex.cssClasses = cssClassChoices[0] + " hover-space"; return eachHex; })
	const [hexRoster, SEThexRoster] = useState<hexagon[]>(tempRoster)

	function addHex() {
		const tempRoster = Array.from(hexRoster)
		tempRoster.push({ q: qTemp, r: rTemp, cssClasses: classTemp })
		SEThexRoster(tempRoster);
	}

	const form = <Box className="form-group border bg-orange p-3">
		<h3>Add Hex</h3>
		<Box id="setQBox">
			<label className="" htmlFor="qField">q:</label>
			<Input className="form-control" name="qField" defaultValue={qTemp} onChange={(e) => SETqTemp(+e.target.value)} />
		</Box>
		<Box className="setRBox">
			<label className="" htmlFor="rField">r:</label>
			<Input className="form-control" name="rField" defaultValue={rTemp} onChange={(e) => SETrTemp(+e.target.value)} />
		</Box>
		<Box id="chooseClass">
			{/* <ArraySelect
				choicesArray={cssClassChoices}
				onChange={SETclassTemp}
			/> */}
		</Box>
		<Box id="buttons">
			<button className="btn form-control bg-orange" onClick={() => addHex()}>Add</button>
		</Box>
	</Box>

	const gameGlobals: gameGlobals = {
		orientation: defaultOrientation,
		hexRadius: hexRadius,
		separationMultiplier: separationMultiplier,
		textSize: 12,
		drawBackBoard: false,
		onClick: clickMessage
	}

	// <><><> Calculate the size of the canvas based on the hex roster
	const canvasDefaults = calcCenteredRectangle(hexRoster, gameGlobals)
	const [canvasHeight, SETcanvasHeight] = useState(canvasDefaults.canvasHeight * separationMultiplier)
	const [canvasWidth, SETcanvasWidth] = useState(canvasHeight * aspectRatio())
	// Since this is a centered board, we can calculate the origin based on the height and width
	const [hexGridOrigin, SEThexGridOrigin] = useState({ x: canvasWidth / 2, y: canvasHeight / 2 });

	const canvasGlobals = {
		canvasWidth, canvasHeight, hexGridOrigin,
		canvasBackgroundColor: '#000'
	}

	return (
		<Box id="generativeContainer">
			<Box id="sidebar">
				<SaveRosterButton
					hexRoster={hexRoster}
					gameGlobals={gameGlobals}
				/>
				{form}
				<BoardControl
					hexRadius={hexRadius}
					separationMultiplier={separationMultiplier}
					SEThexRadius={SEThexRadius}
					SETseparationMultiplier={SETseparationMultiplier} />
				<CanvasControl
					canvasWidth={canvasWidth} SETcanvasWidth={SETcanvasWidth}
					canvasHeight={canvasHeight} SETcanvasHeight={SETcanvasHeight}
					hexGridOrigin={hexGridOrigin} SEThexGridOrigin={SEThexGridOrigin}
				/>
			</Box>
			<Box id='createBoard'>
				<Hexboard
					hexRoster={hexRoster}
					gameGlobals={gameGlobals}
					canvasGlobals={canvasGlobals}
				/>
			</Box>
		</Box>
	)
}