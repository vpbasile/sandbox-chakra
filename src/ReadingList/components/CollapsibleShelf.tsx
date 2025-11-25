import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box, Collapse, HStack, Heading, IconButton, StackDivider, Text, VStack, useDisclosure } from "@chakra-ui/react";
import books from "../data/books.json";
import { TBookshelf } from "../types";
import CountBadge from "./CountBadge";
import StatusButton from "./StatusButton";

export default function CollapsibleShelf({ shelf }: { shelf: TBookshelf }) {
    const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: false });
    const shelfBooks = shelf.bookIds.map((id) => books[id as keyof typeof books]).filter(Boolean);

    return (
        <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
        >
            <HStack justify="space-between" mb={isOpen ? 3 : 0}>
                <Heading size="md" id={`shelf-${shelf.id}`}>
                    {shelf.title}{" "}
                    <CountBadge amount={shelfBooks.length} />
                </Heading>
                <IconButton
                    aria-label={isOpen ? "Collapse shelf" : "Expand shelf"}
                    icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    onClick={onToggle}
                    variant="ghost"
                    size="sm"
                />
            </HStack>

            <Collapse in={isOpen} animateOpacity>
                <VStack
                    align="stretch"
                    divider={<StackDivider borderColor="gray.200" />}
                    spacing={3}
                >
                    {shelfBooks.map((book) => (
                        <HStack key={book.id} justify="space-between">
                            <Box>
                                <Text fontWeight="bold">{book.title}</Text>
                                <Text fontSize="sm" color="gray.600">
                                    {book.author}
                                </Text>
                            </Box>
                            <StatusButton book={book} />
                        </HStack>
                    ))}
                </VStack>
            </Collapse>
        </Box>
    );
}