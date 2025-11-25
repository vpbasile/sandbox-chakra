import { Button } from "@chakra-ui/react";
import { TBook } from "../types";
import { toggleReadStatus } from "../utils";

export default function StatusButton({ book }: { book: TBook }) {
    const colorScheme = book.readByMe ? "green" : "grey";
    return (
        <Button
            size="sm"
            colorScheme={colorScheme}
            onClick={() => toggleReadStatus(book)}
        >
            {book.readByMe ? "Read" : "Not Read"}
        </Button>
    );
}