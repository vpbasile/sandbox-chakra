import { Box, Button, Center, Collapse, Heading, Stack, Text, useDisclosure } from "@chakra-ui/react"

export default function TE() {

    const players = ["Agamemnon", "Boethius", "Salazar", "Paul"]
    let i = 0;

    const { isOpen, onToggle } = useDisclosure();

    function TriggerTransition() { onToggle() }

    return (
        <Box >
            <Box id="gameContainer" py={10} my={10}>
                <Collapse in={isOpen} animateOpacity>
                    <Box id="gameBoardContainer1" height={'1wv'}>
                        <Box textAlign={'center'} id="messageDisplay" w={'100%'} bg={"gray"} my={5} p={5}>
                            <Heading as='h2' id="displayMessage">Welcome! You can play with up to 4 teams.</Heading>
                        </Box>
                        <Box id="setup" border={'1px solid purple'}>
                            <Box display={{ sm: 'flex' }}>
                                <Box id="playerList" flex={5} my={5}>
                                    <ul role="list" >
                                        {players.map(thisName => <li key={`${i++}`}><label htmlFor="thisname">{thisName}</label></li>)}
                                    </ul>
                                </Box>
                                <Stack id="addRemovePlayers" flex={5} py={5}>
                                    <Button>Add another team</Button>
                                    <Button onClick={TriggerTransition}>Begin Game</Button >
                                    <Button>Remove a team</Button >
                                </Stack >
                            </Box >
                        </Box >
                    </Box>
                </Collapse>
                <Collapse in={!isOpen} animateOpacity>
                    <Box id="gameboardContainer2">
                        <Box textAlign={'center'} id="messageDisplay" w={'100%'} bg={'red.800'} my={5} p={5}>
                            <Heading as='h2' id="displayMessage">Geography</Heading>
                        </Box>
                        <Box>
                            <Center id="playerList" flex={5} border={'2px solid white'} my={5} py={5}>
                                <Text>What is the correct answer to the question?</Text>
                            </Center>
                            <Stack id="addRemovePlayers" flex={5}>
                                <Button onClick={TriggerTransition} py={7} whiteSpace={'normal'}>First choice</Button>
                                <Button onClick={TriggerTransition} py={7} whiteSpace={'normal'}>Yet another choice the you could, possibly, select if you thought it to be the correct one.</Button>
                                <Button onClick={TriggerTransition} py={7} whiteSpace={'normal'}>Choice, the third</Button>
                                <Button onClick={TriggerTransition} py={7} whiteSpace={'normal'}>Final choice</Button>
                            </Stack >
                        </Box >
                    </Box>
                </Collapse>
            </Box>
        </Box >)
}