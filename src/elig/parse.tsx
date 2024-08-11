import { Box, Heading, Stack, Text, Textarea } from "@chakra-ui/react";

import { ErrorBoundary } from "react-error-boundary";
import Collapse from "../z-helpers/collapse";
import Segment from "./display/Segment";
import { parsedMessageType } from "./interfaceDefinitions";
import { messageData as exampleMessage } from './xample_data/X279-error-response-from-payer-to-clinic-not-eligible-for-inquiries-with-payer';


type propsType = {
    setcurrentInputMessage: React.Dispatch<string>;
    currentInputMessage: string;
    parseMessage: (arg0: string) => parsedMessageType;
    fieldDelimiter: string;
    segmentDelimiter: string;
};

export default function ParseDisplay(props: propsType) {
    const currentInputMessage = props.currentInputMessage;
    const setcurrentInputMessage = props.setcurrentInputMessage;
    const parseMessage = props.parseMessage;


    function displayMessage(messageText: string) {
        const parsedMessage: parsedMessageType = parseMessage(messageText);
        const messageDate = parsedMessage[0][0][9];
        const messageTime = parsedMessage[0][0][10];
        const messageNumber = parsedMessage[0][0][13];
        let lineCount = 0
        // A Box for each loop
        const returnMessage = parsedMessage.map((loop, loopNumber) => {
            let loopIndent = loopNumber
            if (loopIndent > 5) { loopIndent = 0; }
            return (<Box key={`loop-${loopNumber}`} id={`loop-${loopNumber}`}>
                {loop.map((segmentContents) => {
                    const lineNumber = ++lineCount;
                    const segmentKey = `${lineNumber}-${loopNumber}-${segmentContents[0]}`
                    return (<Segment key={segmentKey} loop={loopNumber} segmentContents={segmentContents} lineNumber={lineNumber} segmentDelimiter={props.segmentDelimiter} fieldDelimiter={props.fieldDelimiter} />)
                })}
            </Box>)
        })
        return <Box>
            <Text>Date: {messageDate}</Text>
            <Text>Time: {messageTime}</Text>
            <Text>Message #: {messageNumber}</Text>
            {returnMessage};
        </Box>
    }

    return <ErrorBoundary fallback={<Box>Something went wrong in the Parsedisplay</Box>}>
        <Box id="parsing" p={4} verticalAlign={'top'}>
            <Collapse buttonText="Enter message.  Click to hide/show.">
                <Stack p={4}>
                    <Textarea id="messageInput" h={'2xl'} w={'2xl'}
                        defaultValue={exampleMessage}
                        onChange={(e) => {
                            setcurrentInputMessage(e.target.value);
                            console.log(currentInputMessage)
                        }}
                    ></Textarea>
                </Stack>
            </Collapse>
            <Stack p={4}>
                <Heading as={'h2'}>Result</Heading>
                <Box id="messageDisplay" >{displayMessage(currentInputMessage)}</Box>
            </Stack>
        </Box>;
    </ErrorBoundary>
}