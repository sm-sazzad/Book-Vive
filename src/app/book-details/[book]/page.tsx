import { getBooks } from '@/Components/Books';
import SelectedBookCard from '@/Components/SelectedBookCard';
import React from 'react';

const page = async ({ params }: { params: Promise<{ book: string }> }) => {
    const { book } = await params;

    const books = await getBooks();
    console.log(typeof book)

    const bookData = books.find(n => n.bookId === Number(book))



    return (
        <div>
            <SelectedBookCard book={bookData!}></SelectedBookCard>
        </div>
    );
};

export default page;