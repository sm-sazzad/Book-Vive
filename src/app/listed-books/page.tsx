"use client"
import ListedBookCard from '@/Components/ListedBookCard';
import { BooksContext } from '@/context/Context';
import Image from 'next/image';
import { useContext } from 'react';

const page = () => {
    const { readBook, setReadBooks, wishlist, setWishlist } = useContext(BooksContext);

    return (<>
        <div>
            <div className='relative bg-stone-300 w-[80%] mx-auto my-10 rounded-2xl text-center'>
                <Image className='h-60 w-full object-cover rounded-2xl'
                    alt="hi" width={1000} height={100} src={"https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}></Image>
                <h1 className='absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 font-bold text-4xl '>Books</h1>
            </div>
        </div>
        <div className="tabs tabs-border w-[90%] mx-auto">
            <input type="radio" name="my_tabs_2" className="tab" aria-label="Read Books" defaultChecked />
            <div className="tab-content bg-base-100 p-10 pl-0">
                <div className='grid gap-3'>
                    {
                        readBook.map(book => <ListedBookCard key={book.bookId} book={book} />)
                    }
                </div>
            </div>

            <input type="radio" name="my_tabs_2" className="tab" aria-label="WishList Books" />
            <div className="tab-content bg-base-100 p-10 pl-0">
                <div className='grid gap-3'>
                    {
                        wishlist.map(book => <ListedBookCard key={book.bookId} book={book} />)
                    }
                </div>
            </div>
        </div>
    </>);
};

export default page;