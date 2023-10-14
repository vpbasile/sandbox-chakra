import { Dispatch, SetStateAction } from "react";
import ValueField from "./ValueField";
import { Box, Heading, Input } from "@chakra-ui/react";

type propsType = {
	hexRadius: number, separationMultiplier: number
	SEThexRadius: Dispatch<SetStateAction<number>>, SETseparationMultiplier: Dispatch<number>,
	// SEThexGridOrigin: any

}

export default function BoardControl(props: propsType) {
	const hexRadius = props.hexRadius;
	const separationMultiplier = props.separationMultiplier;
	const SEThexRadius = props.SEThexRadius;
	const SETseparationMultiplier = props.SETseparationMultiplier;
	// const SEThexGridOrigin = props.SEThexGridOrigin;

	return (<Box id="canvasControlBox">
		<Heading>Board Parameters</Heading>
		<Box className="" id="canvasDimensionBox">
			<Box className="" id="pickSizeBox">
				<ValueField
					fieldName="pickHexRadius"
					labelText="Hex Radius"
					type="number"
					defaultValue={hexRadius}
					onChangeFunction={SEThexRadius} />
			</Box>
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
	</Box>)
}