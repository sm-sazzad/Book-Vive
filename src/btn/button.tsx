"use client"

import { use, useContext } from "react";
import { BooksContext } from '@/context/Context'
import { IBook } from "@/app/BookType";
import { handleBuildComplete } from "next/dist/build/adapter/build-complete";
import { toast } from "react-toastify";


const Button = ({ book }: { book: IBook }) => {

    const { readBook, setReadBooks, wishlist, setWishlist } = useContext(BooksContext)
    // console.log(wishlist);
    const handleBtn1 = () => {
        const isAvaiable = readBook.some(n => n.bookId === book.bookId);
        isAvaiable ? toast.error("Already Added") : (setReadBooks([...readBook, book]), toast.success("Added to your list"));
    }
    const handleBtn2 = () => {
        const isAvaiable = wishlist.some(n => n.bookId === book.bookId);
        isAvaiable ? toast.error("Already Added") : (setWishlist([...wishlist, book]), toast.success("Added to your list"));

    }

    return (
        <div className="mt-auto flex gap-3 pt-8">

            <button onClick={handleBtn1}
                className="cursor-pointer flex-1 rounded-xl border-2 border-emerald-500 px-5 py-3 text-sm font-bold text-emerald-600 transition-all duration-300 hover:bg-emerald-50"
            >
                Read Book
            </button>

            <button onClick={handleBtn2}
                className="flex-1 cursor-pointer rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-md shadow-emerald-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg"
            >
                ♡ Add to Wishlist
            </button>

        </div>
    );
};

export default Button;