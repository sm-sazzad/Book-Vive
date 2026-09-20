import { IBook } from '@/app/BookType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BooksCard = ({ book }: { book: IBook }) => {
    return (
        <div className='w-full max-w-sm bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100'>

            {/* Image Section */}
            <div className='relative w-full h-72 bg-linear-to-br from-amber-50 to-orange-100 overflow-hidden'>
                <Image
                    src={book.image}
                    alt={book.bookName}
                    fill
                    sizes="(max-width: 768px) 100vw, 384px"
                    className='object-contain p-6 group-hover:scale-105 transition-transform duration-500'
                />

                {/* Rating Badge */}
                <div className='absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm'>
                    <span className='text-yellow-500'>★</span>
                    <span className='text-sm font-semibold text-gray-700'>{book.rating}</span>
                </div>

                {/* Category Badge */}
                <div className='absolute top-3 left-3 bg-emerald-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm'>
                    {book.category}
                </div>
            </div>

            {/* Content Section */}
            <div className='p-5'>
                <h3 className='text-lg font-bold text-gray-800 line-clamp-2 mb-1 group-hover:text-emerald-600 transition-colors'>
                    {book.bookName}
                </h3>

                <p className='text-sm text-gray-500 mb-3'>
                    by <span className='font-medium text-gray-700'>{book.author}</span>
                </p>

                {/* Button */}
                <Link href={`/book-details/${book.bookId}`}>
                    <button className='w-full cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2.5 rounded-lg transition-colors duration-300'>
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BooksCard;