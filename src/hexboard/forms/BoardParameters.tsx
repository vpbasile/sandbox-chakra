import { Box, Container, Heading, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { formAttributes } from "./style";

type propsType = {
	hexRadius: number, separationMultiplier: number
	SEThexRadius: Dispatch<SetStateAction<number>>, SETseparationMultiplier: Dispatch<number>,
	// SEThexGridOrigin: any

}

export default function BoardParameters(props: propsType) {
	const hexRadius = props.hexRadius;
	const separationMultiplier = props.separationMultiplier;
	const SEThexRadius = props.SEThexRadius;
	const SETseparationMultiplier = props.SETseparationMultiplier;
	// const SEThexGridOrigin = props.SEThexGridOrigin;

	const key = "BoardParametersBox";
	return (<Container id={key} key={key} sx={formAttributes}>
		<Heading>Board Parameters</Heading>
		<InputGroup>
			<InputLeftAddon children="Hex Radius" />
			<Input type='number' id="hexRadius" defaultValue={hexRadius} onChange={(e) => SEThexRadius(+e.target.value)} />
		</InputGroup>
		<InputGroup>
			<InputLeftAddon children="Separation Multiplier" />
			<Input type='number' id="separationMultiplier" defaultValue={separationMultiplier} onChange={(e) => SETseparationMultiplier(+e.target.value)} />
		</InputGroup>
		<InputGroup>
			<InputLeftAddon children="Hex Grid Origin" />
			<Input type='number' id="hexGridOriginX" defaultValue={0} />
			<Input type='number' id="hexGridOriginY" defaultValue={0} />
		</InputGroup>

			<Box className="" id="canvasDimensionBox">

				<Box className="" id="pickSeparationBox">
					<label htmlFor='pickSeparation'>Separation multiplier: {separationMultiplier}</label>
					<Input type='range' min='1' max='2' step='0.1' className='form-range'
						defaultValue={separationMultiplier} onChange={(e) => {
							// console.log(`separationMultiplier: ${separationMultiplier}`)
							SETseparationMultiplier(+e.target.value)
							// setTimeout(() => console.log(`separationMultiplier: ${separationMultiplier}`), 1000)
						}
						} />
				</Box>
			</Box>
			{/* Needs the ability to set orientation */}
			{/* <p className="">You'll have to click a selector button above to re-render with the settigns you make on this form.  I'm working on fixing this.</p> */}
	</Container>)
}