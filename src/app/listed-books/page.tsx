"use client"
import ListedBookCard from '@/Components/ListedBookCard';
import { BooksContext } from '@/context/Context';
import { useContext } from 'react';

const page = () => {
    const { readBook, setReadBooks, wishlist, setWishlist } = useContext(BooksContext);

    return (<>
        <div>
            <div className='bg-stone-300 w-[80%] mx-auto my-10 rounded-2xl text-center'>
                <h1 className='font-bold text-4xl p-20'>Books</h1>
            </div>
        </div>
        <div className="tabs tabs-border w-[90%] mx-auto">
            <input type="radio" name="my_tabs_2" className="tab" aria-label="Read Books" defaultChecked />
            <div className="tab-content bg-base-100 p-10 pl-0">
                {
                    readBook.map(book => <ListedBookCard key={book.bookId} book={book} />)
                }
            </div>

            <input type="radio" name="my_tabs_2" className="tab" aria-label="WishList Books" />
            <div className="tab-content bg-base-100 p-10 pl-0">
                {
                    wishlist.map(book => <ListedBookCard key={book.bookId} book={book} />)
                }
            </div>
        </div>
    </>);
};

export default page;