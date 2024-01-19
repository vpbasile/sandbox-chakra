import { Table, TableCaption, TableContainer, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { TicketProps, ticketStatusList } from "./typeDefs";

// I want to create a component that will display each of the tickets I am tracking.  Every ticket has a numeric id and a string description.  Every ticket will be in one of a list of statuses.
export default function ProjectTrack() {
    const exampleTickets: TicketProps[] = [
        { id: 1, description: "Design UI components", status: "movedToProduction" },
        { id: 2, description: "Implement backend logic", status: "readyForProduction" },
        { id: 3, description: "Review code changes", status: "awaitingApproval" },
        { id: 4, description: "Perform unit tests", status: "toTest" },
        { id: 5, description: "Build deployment package", status: "toBuild" },
        { id: 6, description: "Fix bugs and issues", status: "toBuild" },
        { id: 7, description: "Deploy to production", status: "movedToProduction" },
        { id: 8, description: "Prepare release notes", status: "readyForProduction" },
        { id: 9, description: "Obtain stakeholder approval", status: "awaitingApproval" },
        { id: 10, description: "Perform integration tests", status: "toTest" },
        { id: 11, description: "Configure build pipeline", status: "toBuild" },
        { id: 12, description: "Optimize application performance", status: "toBuild" }
    ];

    return (
        // Display a table of tickets with a row for each status and an ordered list of tickets in that status.
        <TableContainer>
            <Table>
                <TableCaption>Project Track</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Status</Th>
                        <Th>ID</Th>
                        <Th>Description</Th>
                    </Tr>
                    {ticketStatusList.map((status) => (
                        <>
                            <Tr>
                                <Th>{status}</Th>
                            </Tr>
                            {exampleTickets.filter((ticket) => ticket.status === status).map((ticket) => (<Tr key={ticket.id}><Td></Td><Td>{ticket.id}</Td><Td>{ticket.description}</Td></Tr>))}
                        </>
                    ))}
                </Thead>

            </Table>
        </TableContainer >
    );
}
