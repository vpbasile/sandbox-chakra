import { Box, Button, ButtonGroup, Heading, StackDivider, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { AddForm } from './components/AddForm';
import CollapsibleShelf from './components/CollapsibleShelf';
import booksData from './data/books.json';
import genres from './data/genres.json';
import { TBook, TBookshelf } from './types';

type ViewMode = 'grouped' | 'all';

export default function ReadingListDisplay() {
    const [viewMode, setViewMode] = useState<ViewMode>('grouped');
    const [books, setBooks] = useState<{ [key: string]: TBook }>({});

    // Load books into state on mount
    useEffect(() => {
        setBooks(booksData as { [key: string]: TBook });
    }, []);
    //Take the list of books and separate them by genre.  Retun a separate bookshelf for each unique genre;
    const bookshelves: TBookshelf[] = [];
    const genreMap: { [genre: string]: TBookshelf } = {};
    const readingList: TBookshelf = Object.values(books).reduce((shelf, book) => {
        if (!book.readByMe) {
            shelf.bookIds.push(book.id);
        }
        return shelf;
    }, { id: 'reading', title: 'Reading', bookIds: [] as string[] });
    const finishedList: TBookshelf = Object.values(books).reduce((shelf, book) => {
        if (book.readByMe) {
            shelf.bookIds.push(book.id);
        }
        return shelf;
    }, { id: 'finished', title: 'Finished', bookIds: [] as string[] });

    // Iterate through books to populate genreMap
    Object.values(books).forEach((book) => {
        book.genreIds.forEach((genre) => {
            if (!genreMap[genre]) {
                const genreInfo = genres.find((g) => g.id === genre);
                if (!genreInfo) {
                    console.error(`Unknown genre "${genre}" found in book "${book.title}" (${book.id})`);
                    return;
                }
                genreMap[genre] = {
                    id: genre,
                    title: genreInfo.name,
                    bookIds: [],
                };
                bookshelves.push(genreMap[genre]);
            }
            if (genreMap[genre]) {
                genreMap[genre].bookIds.push(book.id);
            }
        });
    });

    const button2 = <Button
        colorScheme={viewMode === 'grouped' ? 'blue' : 'gray'}
        onClick={() => setViewMode('grouped')}
    >
        By Genre
    </Button>;
    const button1 = <Button
        colorScheme={viewMode === 'all' ? 'blue' : 'gray'}
        onClick={() => setViewMode('all')}
    >
        All Books
    </Button>;
    return <Box>
        <Heading as={'h1'}>Reading List</Heading>

        {/* View Mode Selector */}
        <Box mb={6} mt={4}>
            <ButtonGroup isAttached variant="outline">
                {button1}
                {button2}
            </ButtonGroup>
        </Box>

        {/* Grouped by Genre View */}
        {viewMode === 'grouped' && (
            <VStack spacing={6} align="stretch">
                {bookshelves.map((shelf) => (
                    <CollapsibleShelf key={shelf.id} shelf={shelf} />
                ))}
            </VStack>
        )}

        {/* All Books View */}
        {viewMode === 'all' && (
            <VStack
                align="stretch"
                spacing={3}
                divider={<StackDivider borderColor="gray.200" />}
                p={5}
                shadow="md"
                borderWidth="1px"
                borderRadius="md"
            >
                <CollapsibleShelf key={readingList.id} shelf={readingList} />
                <CollapsibleShelf key={finishedList.id} shelf={finishedList} />
            </VStack>
        )}

        <VStack spacing={3} align={'stretch'} mt={6}>
            <AddForm onAdd={(book) => {
                // Handle adding a new book
                console.log('Adding book:', book);
                const newId = `book_${Object.keys(books).length + 1}`;
                setBooks({
                    ...books,
                    [newId]: { id: newId, ...book },
                });
            }} />
        </VStack>
    </Box>
}