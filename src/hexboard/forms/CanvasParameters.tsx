
import { Container, Heading, InputGroup, InputLeftAddon, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/react";
import { Dispatch } from "react";
import { coordinateXY } from "../hexDefinitions";
import { formAttributes } from "./style";
// import { useState } from 'react';

type myProps = {
	canvasWidth: number,
	SETcanvasWidth: Dispatch<number>,
	canvasHeight: number,
	SETcanvasHeight: Dispatch<number>,
	hexGridOrigin: coordinateXY
	SEThexGridOrigin: Dispatch<coordinateXY>
}

export default function CanvasParameters(props: myProps) {
	const canvasWidth = props.canvasWidth; const canvasHeight = props.canvasHeight;
	const SETcanvasWidth = props.SETcanvasWidth;
	const SETcanvasHeight = props.SETcanvasHeight;

	const key = "CanvasParametersBox";
	return (<Container id={key} key={key} sx={formAttributes}>
		<Heading>Canvas Parameters</Heading>
		<InputGroup>
			<InputLeftAddon children="Width" />
			<NumberInput id="canvasWidth" defaultValue={canvasWidth} min={500} onChange={(e) => SETcanvasWidth(+e)}>
				<NumberInputField />
				<NumberInputStepper>
					<NumberIncrementStepper />
					<NumberDecrementStepper />
				</NumberInputStepper>
			</NumberInput>
		</InputGroup>
		<InputGroup>
			<InputLeftAddon children="Height" />
			<NumberInput id="canvasHeight" defaultValue={canvasHeight} min={500} onChange={(e) => SETcanvasHeight(+e)}>
				<NumberInputField />
				<NumberInputStepper>
					<NumberIncrementStepper />
					<NumberDecrementStepper />
				</NumberInputStepper>
			</NumberInput>
		</InputGroup>
	</Container>)
}