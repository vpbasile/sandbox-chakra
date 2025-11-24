import { Badge, Box, Button, Heading, HStack, StackDivider, Text, VStack } from '@chakra-ui/react';
import books from './books.json';
import genres from './genres.json';
import { TBookshelf } from './types';
import { toggleReadStatus } from './utils';

export default function ReadingListDisplay() {
    //Take the list of books and separate them by genre.  Retun a separate bookshelf for each unique genre;
    const bookshelves: TBookshelf[] = [];
    const genreMap: { [genre: string]: TBookshelf } = {};

    Object.values(books).forEach((book) => {
        book.genreIds.forEach((genre) => {
            if (!genreMap[genre]) {
                const genreInfo = genres.find((g) => g.id === genre);
                genreMap[genre] = {
                    id: genre,
                    title: genreInfo ? genreInfo.name : 'Unknown Genre',
                    bookIds: [],
                };
                bookshelves.push(genreMap[genre]);
            }
            genreMap[genre].bookIds.push(book.id);
        });
    });

    return <Box>
        <Heading as={'h1'}>Reading List</Heading>
        <VStack spacing={6} align="stretch">
            {bookshelves.map((shelf) => {
                const shelfBooks = shelf.bookIds.map((id) => books[id as keyof typeof books]).filter(Boolean);

                return (
                    <Box
                        key={shelf.id}
                        p={5}
                        shadow="md"
                        borderWidth="1px"
                        borderRadius="md"
                    >
                        <Heading size="md" mb={3}>
                            {shelf.title}{" "}
                            <Badge colorScheme="teal" ml={2}>
                                {shelfBooks.length} books
                            </Badge>
                        </Heading>

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
                                    <Button
                                        size="sm"
                                        colorScheme={book.readByMe ? "green" : "blue"}
                                        onClick={() => toggleReadStatus(book)}
                                    >
                                        {book.readByMe ? "Read" : "Mark as Read"}
                                    </Button>
                                </HStack>
                            ))}
                        </VStack>
                    </Box>
                );
            })}
        </VStack>
    </Box>
}