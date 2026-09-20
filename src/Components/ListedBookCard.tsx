// import { BooksContext } from '@/context/Context';
import { IBook } from '@/app/BookType';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';

const ListedBookCard = ({ book }: { book: IBook }) => {
    return (
        <div className='w-full bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group'>
            <div className='flex gap-4 p-4'>

                {/* ================= Image (Left) ================= */}
                <div className='relative w-24 h-32 sm:w-28 sm:h-36 shrink-0 rounded-lg bg-linear-to-br from-amber-50 to-orange-100 overflow-hidden'>
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        fill
                        sizes="112px"
                        className='object-contain p-2 group-hover:scale-105 transition-transform duration-500'
                    />
                </div>

                {/* ================= Content (Right) ================= */}
                <div className='flex-1 min-w-0 flex flex-col justify-between'>

                    {/* Top: Title + Author + Category */}
                    <div>
                        <div className='flex items-start justify-between gap-2 mb-1'>
                            <h3 className='text-base font-bold text-gray-800 line-clamp-1 group-hover:text-emerald-600 transition-colors'>
                                {book.bookName}
                            </h3>
                            <span className='text-xs font-semibold text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded-md shrink-0 flex items-center gap-0.5'>
                                ★ {book.rating}
                            </span>
                        </div>

                        <p className='text-xs text-gray-500 mb-2'>
                            by <span className='font-medium text-gray-700'>{book.author}</span>
                            <span className='mx-1.5'>•</span>
                            <span className='text-emerald-600 font-medium'>{book.category}</span>
                        </p>

                        {/* Review */}
                        <p className='text-xs text-gray-600 line-clamp-2 mb-2'>
                            {book.review}
                        </p>

                        {/* Tags */}
                        <div className='flex flex-wrap gap-1 mb-2'>
                            {book.tags.slice(0, 3).map((tag, idx) => (
                                <span
                                    key={idx}
                                    className='text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded'
                                >
                                    #{tag.trim()}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Bottom: Meta + Buttons */}
                    <div className='flex items-center justify-between gap-2 pt-2 border-t border-gray-100'>
                        <div className='flex items-center gap-1.5 text-[11px] text-gray-500'>
                            <span>{book.totalPages} pg</span>
                            <span>•</span>
                            <span>{book.yearOfPublishing}</span>
                        </div>

                        <div className='flex gap-2 '>
                            <button className='text-xs cursor-pointer font-semibold bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 rounded-md transition-colors'>
                                Read
                            </button>
                            <Link href={`/book-details/${book.bookId}`}>
                                <button className='text-xs cursor-pointer font-semibold bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 rounded-md transition-colors'>
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default ListedBookCard;