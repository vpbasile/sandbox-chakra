export type TBook = {
    id: string;
    title: string;
    author: string;
    genreIds: string[];   // references TGenre.id, e.g. ["sf", "weird"]
    readByMe?: boolean;
};

export type TBookshelf = {
    id: string;
    title: string;
    bookIds: string[];     // IDs reference a separate collection of books
};



export type TGenre = {
    id: string;             // machine-readable (e.g., "sf", "weird", "lgbtq")
    name: string;           // human-readable
    category: "fiction" | "theme" | "form" | "cultural";
    description?: string;   // optional text explaining the genre
};
