"use client"
import ListedBookCard from '@/Components/ListedBookCard';
import { BooksContext } from '@/context/Context';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { IBook } from '../BookType';

const page = () => {
    const { readBook, setReadBooks, wishlist, setWishlist } = useContext(BooksContext);
    const [type, setType] = useState<"rating" | "page" | "year" | "sort">("sort")

    const sortBooks = (books: IBook[]) => {
        const readBooks = [...books];
        if (type === "rating") {
            readBooks.sort((a, b) => (b.rating - a.rating))
        }
        else if (type === "page") {
            readBooks.sort((a, b) => b.totalPages - a.totalPages)
        }
        else if (type === "year") {
            readBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
        }
        return readBooks;
    }

    const SortedReadBooks = sortBooks(readBook);
    const SortedWishlist = sortBooks(wishlist);

    return (<>
        <div>
            <div className='relative bg-stone-300 w-[80%] mx-auto my-10 rounded-2xl text-center'>
                <Image className='h-60 w-full object-cover rounded-2xl'
                    alt="hi" width={1000} height={100} src={"https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}></Image>
                <h1 className='absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 font-bold text-4xl '>Books</h1>
            </div>
        </div>

        <div className='text-center'>
            <select onChange={(e) => setType(e.target.value as "rating" | "page" | "year" | "sort")} defaultValue="Pick a language" className="select w-40 select-secondary bg-[#00a824] rounded-2xl">
                <option value={"sort"}>Sort By</option>
                <option value={"rating"}>Rating</option>
                <option value={"page"}>Number of Pages</option>
                <option value={"year"}>Publish Year</option>
            </select>
        </div>

        <div className="tabs tabs-border w-[90%] mx-auto">
            <input type="radio" name="my_tabs_2" className="tab" aria-label="Read Books" defaultChecked />
            <div className="tab-content bg-base-100 p-10 pl-0">
                {
                    SortedReadBooks.length === 0 ? <h1 className='font-bold text-center text-2xl'>NO book slected</h1> : (
                        <div className='grid gap-3'>
                            {
                                SortedReadBooks.map(book => <ListedBookCard key={book.bookId} book={book} />)
                            }
                        </div>
                    )
                }
            </div>

            <input type="radio" name="my_tabs_2" className="tab" aria-label="WishList Books" />
            <div className="tab-content bg-base-100 p-10 pl-0">
                {
                    SortedWishlist.length === 0 ? <h1 className='font-bold text-center text-2xl'>NO book selected</h1> : (
                        <div className='grid gap-3'>
                            {
                                SortedWishlist.map(book => <ListedBookCard key={book.bookId} book={book} />)
                            }
                        </div>
                    )
                }
            </div>
        </div>
    </>);
};

export default page;