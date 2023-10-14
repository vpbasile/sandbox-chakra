export const [hugeSize, bigSize, pipSize, spacerSize] = ['375px', '200px', '30px', '10px'];



import z from "zod"

const zzz = z.union([z.literal("Command"), z.literal("Operations"), z.literal("Science")])

const OfficerSchema = z.object({
    name: z.string(),
    department: zzz,
    rankDesignation: z.string()
})

export type Department = z.infer<typeof zzz>
export type Officer = z.infer<typeof OfficerSchema>
export type deptType = { color: string; }

// ---------------------------------------------
// <> Name
// ---------------------------------------------

// ---------------------------------------------
// <> Department
// ---------------------------------------------
export const deptMap = new Map<string, deptType>([
    ["Command", { color: "starfleet.command" }],
    ["Operations", { color: "starfleet.operations" }],
    ["Science", { color: "starfleet.science" }],
    ["Section 31", { color: "starfleet.indeterminite" }]
])
// ---------------------------------------------
// <> Rank
// ---------------------------------------------
export type rankType = { rankName: string, insignia: number };
export const rankMap = new Map<string, rankType>([
    ["C-06", { rankName: "Captain", insignia: 4 }],
    ["C-05", { rankName: "Commander", insignia: 3 }],
    ["C-04", { rankName: "Lieutenant Commander", insignia: 2.5 }],
    ["C-03", { rankName: "Lieutenant", insignia: 2 }],
    ["C-02", { rankName: "Lieutenant Jr. Grade", insignia: 1.5 }],
    ["C-01", { rankName: "Ensign", insignia: 1 }],
    ["C-00", { rankName: "Yeoman", insignia: 0 }],
])