import { IBook } from '@/app/BookType';
import React from 'react';
import BooksCard from './BooksCard';

export const getBooks = async (): Promise<IBook[]> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/booksData.json`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

const Books = async () => {
    const books = await getBooks();
    // console.log(books)
    return (
        <div className='w-[90%] mx-auto'>
            <h1 className='text-center font-bold text-4xl my-10'>Books</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    books.map(book => <BooksCard key={book.bookId} book={book} />)
                }
            </div>
        </div>
    );
};

export default Books;