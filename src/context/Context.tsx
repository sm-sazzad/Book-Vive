"use client"
import { IBook } from '@/app/BookType';
import React, { use, useState } from 'react';
import { createContext } from 'react';

interface BooksContextType {
    readBook: IBook[];
    setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
    wishlist: IBook[];
    setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<BooksContextType>({
    readBook: [],
    setReadBooks: () => { },
    wishlist: [],
    setWishlist: () => { },
});

const ContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [readBook, setReadBooks] = useState<IBook[]>([]);
    const [wishlist, setWishlist] = useState<IBook[]>([]);

    const sharedId: BooksContextType = {
        readBook, setReadBooks, wishlist, setWishlist
    }

    return (
        <BooksContext.Provider value={sharedId}> {children}</BooksContext.Provider >
    );
};

export default ContextProvider;