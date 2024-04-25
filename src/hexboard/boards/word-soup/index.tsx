import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import '../../hex.css';
import { hexagon } from '../../hexDefinitions';
import WordSoupBoard from './board';
import './color-tomato.css';
import { shuffle } from './soup-functions';

export type newHex = hexagon & { uid: number, value: number, clickFunction: (hexId: number) => void, active: boolean }

export default function WordSoupGame() {

    // ---------------------------------------------
    // <><> Gameplay state - this should be done with Redux
    // ---------------------------------------------

    // const placeholderText = "---";

    // const [currentPlayerIndex] = useState(0);
    // const [currentWord, setCurrentWord] = useState(placeholderText);
    // const [currentWordScore, setCurrentWordScore] = useState(0);

    // const wordHistory: string[] = []
    // let currentTurn = 0

    // <><> Initalize the board
    // ---------------------------------------------
    // Generate the Hex grid coordinates
    const generateHexCoordinates = () => {
        const usefulClasses = "hex clickable";
        let idGen = 0;
        const hexRoster: newHex[] = [];
        for (let q = -3; q <= 3; q++) {
            for (let r = -3; r <= 3; r++) {
                if (Math.abs(q + r) <= 3) {
                    const x = idGen++;
                    const newHex = { uid: x, q: q, r: r, cssClasses: usefulClasses, hexText: "*", value: 2, clickFunction: () => { }, active: true };
                    hexRoster.push(newHex);
                }
            }
        }
        return hexRoster;
    }

    const hexRosterInitial = generateHexCoordinates();

    // shuffle the array
    const letterBag: string[] = shuffle("aaaaaaaaabbbcccddddeeeeeeeeeeeeeeffffggghhiiiiiiiiijkllllllllmmnnnnnnnnoooooooooppqrrrrrrsssstttttttuuuuvvwwxyyz".split(''));
    const [currentLetterSupply, setCurrentLetterSupply] = useState(letterBag)

    const populatedHexes = hexRosterInitial.map((hex) => {
        if (hex.hexText === "*") {
            hex.hexText = currentLetterSupply.shift() || "*"
        }
        return hex
    })

    const [hexRoster, setHexRoster] = useState(populatedHexes);

    return (
        <>
            <Box id='DebugDisplay'>
                {/* Current Word: {currentWord} / {currentWordScore} */}
                {/* <Text>Current Letter Supply ({currentLetterSupply.length} letters): {currentLetterSupply}</Text> */}
                {/* hexRoster: {hexRoster.map((hex, index) => (
                    <Box key={index}>
                        {hex.hexText} - {hex.value} - {hex.active ? 'active' : 'inactive'}
                    </Box>
                ))} */}
            </Box>
            <Box>
                <WordSoupBoard hexRoster={hexRoster}>
                    {/* <Box id='Playerdisplay'>
                        {players.map((player, index) => {
                            if (index === currentPlayerIndex) {
                                return <Box key={index} className='tomato' textStyle={'underline'}>{player.name} {player.score}</Box>
                            } else return (
                                <Box key={index}>
                                    <Box>{player.name} {player.score}</Box>
                                    <Box>{player.words.map((word, index) => (<Box key={'word-' + index}>{word}</Box>))}</Box>
                                </Box>
                            )
                        })}
                    </Box> */}
                </WordSoupBoard>
            </Box>
        </>
    );
}
