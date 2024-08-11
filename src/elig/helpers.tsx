
export function paddedFieldNum(int: number): string { return String(int).padStart(2, '0') }

// <> Parsing Constants
export const segmentDelimiter = `~`;
export const fieldDelimitier = '*';