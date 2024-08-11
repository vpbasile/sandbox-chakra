import { nanoid } from 'nanoid';
import { useState } from 'react';

// <> Import data from local files
import { ExternalLinkIcon, InfoIcon, WarningTwoIcon } from '@chakra-ui/icons';
import { Box, Heading, Link, List, ListIcon, ListItem } from '@chakra-ui/react';
import { ErrorBoundary } from 'react-error-boundary';
import CompareDisplay from './compare';
import { paddedFieldNum } from './helpers';
import { parsedMessageType, snapshot } from './interfaceDefinitions';
import ParseDisplay from './parse';
import segmentInfo from './segmentInfo.json';
import { messageData as exampleMessage } from './xample_data/X279-error-response-from-payer-to-clinic-not-eligible-for-inquiries-with-payer';

// <> Parsing Constants
const segmentDelimiter = `~\n`;
const fieldDelimitier = '*';

export default function X12_270_271() {

  // <> Define constants
  const modes = [
    "Compare",
    "Just parse",
    // "AuthCert Stuff"
  ]
  const infoIcon = <ListIcon as={InfoIcon} />
  const dangerIcon = <ListIcon as={WarningTwoIcon} />
  const segmentIDs = segmentInfo.map((eachsegment) => { return eachsegment.id })

  // <> Define app states
  const [mode] = useState(modes[0])
  const [watchSegment, setwatchSegment] = useState(segmentInfo[0].id)
  const [watchField, setwatchField] = useState(0)
  const [currentInputMessage, setcurrentInputMessage] = useState(exampleMessage)
  // const [currentParsedMessage, setcurrentParsedMessage] = useState(dummyMessage)
  const emptysnapShots: snapshot[] = [{ messageNumber: 0, snappedLoop: 0, snappedField: "", value: "", timestamp: "", deleteKey: "" }]
  const [snapShots, setSnapshots] = useState(emptysnapShots)

  // <> Prep/cache some things for render
  const compareMode = (mode === "Compare")
  // const authcertmode = (mode === "AuthCert Stuff")

  // <> Parsing funcitons
  // Message
  // Loops
  // Segments
  // Fields
  // Subfields

  function parseMessage(messageText: string): parsedMessageType {
    // console.log('Parsing message',messageText)
    // console.log('segmentDelimiter',segmentDelimiter)
    let loopNumber = 0;
    const parsedMessage: parsedMessageType = []
    parsedMessage[0] = []
    // Divide the message into segments
    const messageSegments = messageText.split(segmentDelimiter)
    // console.log('messageSegments',messageSegments)
    // We have to remove the extra tilde at the end
    messageSegments.pop();
    messageSegments.forEach((segment) => {
      // Split the segment into fields
      const splitSegment = segment.split(fieldDelimitier)
      // console.log('splitSegment', splitSegment)
      // If it's an HL segment, then we've found another loop
      if ((splitSegment[0] === "HL") || (splitSegment[0] === "IEA")) {
        // Create an array to store the segments in this loop
        loopNumber++; parsedMessage[loopNumber] = [];
      }
      parsedMessage[loopNumber].push(splitSegment)
    })
    return parsedMessage;
  }

  // <> Helper funcitons

  function takeSnapShot() {
    const whatField = `${watchSegment} - ${paddedFieldNum(watchField)}`;
    let foundAnyting: boolean = false;
    console.log(`Taking snapshot of ${whatField} in all loops.`)
    const parsedMessage = (parseMessage(currentInputMessage));
    const tempSnapshots = Array.from(snapShots);
    const messageDate = parsedMessage[0][0][9];
    const messageTime = parsedMessage[0][0][10];
    const messageNumber = parsedMessage[0][0][13];

    parsedMessage.forEach((loop, loopNumber) => {
      const foundSegments = loop.filter((segment: string[]) => {
        return segment[0] === watchSegment
      });
      if (foundSegments.length === 0) { return [] }
      let foundFields: string[] = [];
      if (foundSegments.length > 0) {
        foundFields = foundSegments.map((segment: string[]) => { return (segment[watchField]) })
        // This still returns something if the field isn't there
      }
      foundFields.forEach((value) => {
        const newRow: snapshot = { messageNumber: +messageNumber, snappedLoop: loopNumber, snappedField: whatField, value: value, timestamp: `${messageDate} ${messageTime}`, deleteKey: nanoid() }
        tempSnapshots.unshift(newRow)
      })
      if (foundSegments.length > 0) { foundAnyting = true; }
      // if (foundSegments.length === 0) { alert(`No ${whatField} values found in the message`); return [] }
    });
    if (!foundAnyting) { alert(`No ${whatField} values found in the message`); }
    setSnapshots(tempSnapshots)
  }

  function deleteSnapshot(id: string) {
    let tempSnapshots = Array.from(snapShots);
    tempSnapshots = tempSnapshots.filter((snapshot) => snapshot.deleteKey !== id)
    setSnapshots(tempSnapshots);
  }

  // ---------------------------------------------
  // <> Make a component
  // ---------------------------------------------

  // <> Render the app
  return <ErrorBoundary fallback={<Box>Something went wrong in the X12_270_271 component</Box>}>
    <Box id="appContainer" bg="black" color="white"></Box>
    <Box id="appContainer" p={'20'}>
      <Box>
        <List spacing={3} p={3}>
          <Heading as={'h3'}>Notice</Heading>
          <ListItem>{infoIcon}Though this app is published to the web, the data is all parsed and handled locally on the user's machine. No data is saved or transferred anywhere.
          </ListItem>
          <ListItem color={'red'}>{dangerIcon}Please remember to handle all PII and PHI safely to protect the patients and other parties referenced in message data.</ListItem>
        </List>
      </Box>

      <ErrorBoundary fallback={<Box>Something went wrong in the appContentRow</Box>}>

        <Box id='appContentRow' >
          <Box id="leftCol" p={4}>
            {/* <ArraySelect choicesArray={modes} onChange={setMode} labelText='Mode:' /> */}

            <ErrorBoundary fallback={<Box>Something went wrong in the Parsedisplay</Box>}>

              <ParseDisplay parseMessage={parseMessage}
                setcurrentInputMessage={setcurrentInputMessage} currentInputMessage={currentInputMessage}
                fieldDelimiter={fieldDelimitier} segmentDelimiter={segmentDelimiter}
              />
            </ErrorBoundary>

          </Box>
          {/* <Spacer /> */}
          {compareMode && <CompareDisplay segmentIDs={segmentIDs} setwatchSegment={setwatchSegment} setwatchField={setwatchField} takeSnapShot={takeSnapShot} snapShots={snapShots} deleteSnapshot={deleteSnapshot} />}
        </Box>
      </ErrorBoundary>
      <Box id='footer' p={10}>
        <List>
          <Heading as={'h2'}>Links</Heading>
          <ListItem><Link href='https://x12.org/examples/005010x217/example-1a-referral-request-review'><ListIcon as={ExternalLinkIcon} color={'green.500'} />Example messages from X12.org</Link></ListItem>
          <ListItem><Link href="https://www.cms.gov/files/document/esmd-x12n-278-companion-guide.pdf"><ListIcon as={ExternalLinkIcon} color={'green.500'} />Example messages from CMS</Link></ListItem>
        </List>
      </Box>
    </Box>
  </ErrorBoundary>
}