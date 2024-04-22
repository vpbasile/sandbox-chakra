import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import '../../hex.css';
import { hexagon } from '../../hexDefinitions';
import WordSoupBoard from './board';
// import './color-honey.css';
import './color-tomato.css';
export default function WordSoupGame() {

    // ---------------------------------------------
    // <><> Create players
    // ---------------------------------------------
    const players = [
        { name: "Player 1", score: 0, words: [] },
        { name: "Player 2", score: 0, words: [] }
    ]

    // ---------------------------------------------
    // <><> Initalize the board
    // ---------------------------------------------

    const usefulClasses = "hex clickable";
    const blankRoster: hexagon[] = [
        // There are 37 heagons in the board, numbered 0-36
        { "q": 0, "r": 0, cssClasses: usefulClasses, hexText: "*" },
        { "q": -1, "r": 0, cssClasses: usefulClasses, hexText: "*" },
        { "q": -1, "r": 1, cssClasses: usefulClasses, hexText: "*" },
        { "q": 0, "r": -1, cssClasses: usefulClasses, hexText: "*" },
        { "q": 0, "r": 1, cssClasses: usefulClasses, hexText: "*" },
        { "q": 1, "r": -1, cssClasses: usefulClasses, hexText: "*" },
        { "q": 1, "r": 0, cssClasses: usefulClasses, hexText: "*" },
        { "q": -2, "r": 0, cssClasses: usefulClasses, hexText: "*" },
        { "q": -2, "r": 1, cssClasses: usefulClasses, hexText: "*" },
        { "q": -2, "r": 2, cssClasses: usefulClasses, hexText: "*" },
        { "q": -1, "r": -1, cssClasses: usefulClasses, hexText: "*" },
        { "q": -1, "r": 2, cssClasses: usefulClasses, hexText: "*" },
        { "q": 0, "r": -2, cssClasses: usefulClasses, hexText: "*" },
        { "q": 0, "r": 2, cssClasses: usefulClasses, hexText: "*" },
        { "q": 1, "r": -2, cssClasses: usefulClasses, hexText: "*" },
        { "q": 1, "r": 1, cssClasses: usefulClasses, hexText: "*" },
        { "q": 2, "r": -2, cssClasses: usefulClasses, hexText: "*" },
        { "q": 2, "r": -1, cssClasses: usefulClasses, hexText: "*" },
        { "q": 2, "r": 0, cssClasses: usefulClasses, hexText: "*" },
        { "q": -3, "r": 0, cssClasses: usefulClasses, hexText: "*" },
        { "q": -3, "r": 1, cssClasses: usefulClasses, hexText: "*" },
        { "q": -3, "r": 2, cssClasses: usefulClasses, hexText: "*" },
        { "q": -3, "r": 3, cssClasses: usefulClasses, hexText: "*" },
        { "q": -2, "r": -1, cssClasses: usefulClasses, hexText: "*" },
        { "q": -2, "r": 3, cssClasses: usefulClasses, hexText: "*" },
        { "q": -1, "r": -2, cssClasses: usefulClasses, hexText: "*" },
        { "q": -1, "r": 3, cssClasses: usefulClasses, hexText: "*" },
        { "q": 0, "r": -3, cssClasses: usefulClasses, hexText: "*" },
        { "q": 0, "r": 3, cssClasses: usefulClasses, hexText: "*" },
        { "q": 1, "r": -3, cssClasses: usefulClasses, hexText: "*" },
        { "q": 1, "r": 2, cssClasses: usefulClasses, hexText: "*" },
        { "q": 2, "r": -3, cssClasses: usefulClasses, hexText: "*" },
        { "q": 2, "r": 1, cssClasses: usefulClasses, hexText: "*" },
        { "q": 3, "r": -3, cssClasses: usefulClasses, hexText: "*" },
        { "q": 3, "r": -2, cssClasses: usefulClasses, hexText: "*" },
        { "q": 3, "r": -1, cssClasses: usefulClasses, hexText: "*" },
        { "q": 3, "r": 0, cssClasses: usefulClasses, hexText: "*" }
    ];

    const myDice1 = `rstqwx`
    const myDice2 = `eaozjy`
    const dicePool = [
        'aaafrs', 'aaeeee', 'aafirs', 'adennn', 'aeeeem', myDice1,
        'aeegmu', 'aegmnn', 'afirsy', 'bjkqxz', 'ccenst', myDice2,
        'aeegmu', 'aegmnn', 'afirsy', 'bjkqxz', 'ccenst', myDice2,
        'ceiilt', 'ceilpt', 'ceipst', 'ddhnot', 'dhhlor', myDice1,
        'dhlnor', 'dhlnor', 'eiiitt', 'emottt', 'ensssu', myDice2,
        'fiprsy', 'gorrvw', 'iprrry', 'nootuw', 'ooottu', myDice1
        , 'ceilpt', 'ceipst', 'ddhnot', 'dhhlor', myDice2, myDice1
    ]

    const rollDie = (input: string) => input[Math.floor(Math.random() * input.length)]
    function populateHexes(hexRoster: hexagon[]): hexagon[] {
        return hexRoster.map((hex: hexagon) => {
            const newHex = { ...hex };
            return { ...newHex, letter: rollDie(dicePool.pop() || "&") };
        });
    }

    const initialRoster = populateHexes(blankRoster);
    const [hexRoster, setHexRoster] = useState(initialRoster);

    // ---------------------------------------------
    // <><> Render
    // ---------------------------------------------
    return (
        <Box>
            <Box id='Playerdisplay'>
                {players.map((player, index) => (
                    <Box key={index}>{player.name} {player.score}</Box>
                ))}
            </Box>
            <WordSoupBoard hexRoster={hexRoster} />
        </Box>
    );
}