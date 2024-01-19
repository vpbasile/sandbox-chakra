enum TicketStatus {
    toBuild = "to build",
    toTest = "to test",
    awaitingApproval = "awaiting approval",
    readyForProduction = "ready for production",
    movedToProduction = "moved to production"
}

export type statusTag = keyof typeof TicketStatus;
export const ticketStatusList: statusTag[] = Object.keys(TicketStatus) as statusTag[];

export type TicketProps = {
    id: number;
    description: string;
    status: statusTag;
};