import { Box, Container, Heading, Input, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ArraySelect from "../z-helpers/ArraySelect";
import { snapshot } from "./interfaceDefinitions";
import SnapshotTable from "./SnapshotTable";

export default function CompareDisplay(props: { segmentIDs: string[]; setwatchSegment: Dispatch<SetStateAction<string>>; setwatchField: Dispatch<SetStateAction<number>>; takeSnapShot: () => void; snapShots: snapshot[]; deleteSnapshot: (id: string) => void; }) {
    const segmentIDs = props.segmentIDs;
    const setwatchSegment = props.setwatchSegment;
    const setwatchField = props.setwatchField;
    const takeSnapShot = props.takeSnapShot;
    const snapShots = props.snapShots;
    const deleteSnapshot = props.deleteSnapshot;


    const headerFooter = <Tr><Th>Segment</Th><Th>Field</Th><Th></Th></Tr>;

    const myTable = <TableContainer>
        <Table>
            <Thead>{headerFooter}</Thead>
            <Tbody>
                <Tr>
                    <Td><ArraySelect choicesArray={segmentIDs} onChange={setwatchSegment} /></Td>
                    <Td><Input type="number" onChange={e => setwatchField(+e.target.value)} /></Td>
                    <Td><Input type="button" value="Snapshot" onClick={takeSnapShot} /></Td>
                </Tr>
            </Tbody>
            {/* <Tfoot>{headerFooter}</Tfoot> */}
        </Table>
    </TableContainer>;

    return (<Container id="comparing" flex={13} p={4}>
        <Heading as={'h2'}>Compare</Heading>
        <ErrorBoundary fallback={<Box p={4}>Error: Something went wrong</Box>}>
            {myTable}
            {<Box id="snapshotBox" p={4}><Text fontSize='lg'>Snapshots</Text><SnapshotTable snapshots={snapShots} deleteSnapshot={deleteSnapshot} /></Box>}
        </ErrorBoundary>
    </Container>

    )
}