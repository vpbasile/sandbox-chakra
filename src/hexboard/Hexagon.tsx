import { gameGlobals } from './hexDefinitions';
import { calcTheta, hex_to_pixel } from './hexMath';

// function degtoRad(degrees) { return degrees * Math.PI / 180 }

export interface hexProps {
	gameGlobals: gameGlobals;
	id: number;
	q: number;
	r: number;
	cssClasses?: string;
	hexText?: string;
	clickMessage: string;
	expandBounds: (point: { x: number, y: number }) => void;
}

export default function Hexagon(props: hexProps) {
	const gameGlobals = props.gameGlobals
	// Cache global variables
	const hexRadius = gameGlobals.hexRadius;
	const orientation = gameGlobals.orientation;
	const cornerAngles = orientation.cornerAngles
	// Coordinates
	const q = props.q;
	const r = props.r;
	// const s = -q - r;
	// Math
	const hexText = props.hexText
	const hexTextSize = gameGlobals.textSize;

	const center = hex_to_pixel(q, r, gameGlobals)

	// Find the X and Y of each corner
	let polygonString = ""
	cornerAngles.map(angle => {
		const theta = calcTheta(angle)
		const x = Math.floor(center.x + hexRadius * Math.cos(theta))
		const y = Math.floor(center.y + hexRadius * Math.sin(theta))
		// Handles calculating the bounding box
		props.expandBounds({ x, y })
		// console.log(`corner: ${angle} ${x},${y}`)
		// if this is not the first corner, then we need to add a space
		if (polygonString !== "") { polygonString += " " }
		return polygonString += `${x},${y}`
	});

	// CSS
	const cssClasses = props.cssClasses;

	function displayText() {
		if (hexText !== undefined) {
			return (<text
				className='hexText'
				x={center.x}
				y={center.y}
				textAnchor="middle"
				alignmentBaseline="middle"
				fontSize={`${hexTextSize}px`}
			>
				{hexText}
			</text>)
		}

	}
	const textForHex = displayText()

	// Make the SVG
	return (
		<g onClick={() => console.log(props.clickMessage)}>
			<polygon
				style={{}}
				className={`hex ${cssClasses}`}
				id={`${props.id}`}
				points={polygonString}
			/>
			{textForHex}
		</g>
	)
}