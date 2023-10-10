// Top-level App for selecting a specific Hexboard to display
import { useState } from 'react';

// <> Import Hexboards
import TriviaBoard from './boards/TriviaBoard';
import Keyboard from './boards/Keyboard';
import Generative from './boards/Generative';
import Snowflake from './boards/Snowflake/index';
import SavedBoard from './boards/SavedBoard';
import CreateBoard from './boards/CreateBoard';
import { Box, Heading } from '@chakra-ui/react';

export default function HexBrowser() {

	// <> Global constants for choosing a game
	const options: ({
		key: string;
		title: string;
		value: string;
		Hexboard: JSX.Element;
	})[] = [
			{ key: 'trivia', title: 'Trivia Board', value: 'trivia', Hexboard: <TriviaBoard /> },
			{ key: 'keyboard', title: 'Keyboard', value: 'keyboard', Hexboard: <Keyboard /> },
			{ key: 'saved', title: 'Saved Map', value: 'saved', Hexboard: <SavedBoard /> },
			{ key: 'snowflake', title: 'Snowflake Generator', value: 'snowflake', Hexboard: <Snowflake /> },
			{ key: 'generative', title: 'Generative Map', value: 'generative', Hexboard: <Generative /> },
			{ key: 'create', title: 'Create Board', value: 'create', Hexboard: <CreateBoard /> },
		]
	const [chosenHexboard, setGame] = useState(options[0])

	function pickHexboard(pickedKey: string) {
		const choice = options.find((thisOption) => { return (thisOption.key === pickedKey) })
		if (choice) setGame(choice)
	}

	let buttonID = 0;
	const navBar = options.map(option => {
		return (
			<button key={buttonID++} onClick={() => pickHexboard(option.key)}> {option.title}</button >
		)
	})

	return (
		<Box className="App container-fluid bg-black text-light p-4">
			<Box className="row" id="header">
				<Box className="col-12">
					<nav id="nav-bar" className='col-12'>{navBar}</nav>
					<Heading>Hexboard Maker</Heading>
				</Box>
				<h2 className="bg-gray border">{chosenHexboard.title}</h2>
			</Box>
			<Box className="row" id="page-content-row">
			
					{chosenHexboard.Hexboard}
			</Box>
			<a href='https://www.redblobgames.com/grids/hexagons/'>Special thanks to Red Blob Games!</a>

		</Box>
	)
}