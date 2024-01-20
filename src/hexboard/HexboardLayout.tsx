import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Heading } from '@chakra-ui/react';
export default function HexboardLayout(props: { id: string, displayTitle: string, forms: JSX.Element[], board: JSX.Element, roster: JSX.Element }) {

    return (<Box>
        <Flex>
            <Box id='form'>
                <Heading>Forms</Heading>
                <Box>
                    {props.forms.map((form, i) => {return <Box key={i}>{form}</Box>})}
                </Box>
            </Box>
            <Box w={'full'}>
                <Heading>HexBoard: {props.displayTitle}</Heading>
                <Box color={'blue.500'} border={'2px'}>{props.board}</Box>
            </Box>
        </Flex>
        <Accordion id={props.id} allowMultiple>
            <AccordionItem id='roster'>
                <AccordionButton>Roster<AccordionIcon /></AccordionButton>
                <AccordionPanel>
                    {props.roster}
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    </Box>)
}