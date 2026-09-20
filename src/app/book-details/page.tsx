import { getBooks } from '@/Components/Books';
import BooksCard from '@/Components/BooksCard';

const page = async () => {
    const books = await getBooks();

    return (
        <div>
            <h1 className='font-bold text-5xl text-center my-9'>All Books</h1>
            <div className='w-[90%] mx-auto grid grid-cols-3 gap-4'>
                {
                    books.map(book => <BooksCard key={book.bookId} book={book} />)
                }
            </div>
        </div>
    );
};

export default page;