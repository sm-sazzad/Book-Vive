import { IBook } from '@/app/BookType';
import Image from 'next/image';


interface BookCardProps {
    book: IBook;
}

const SelectedBookCard = ({ book }: BookCardProps) => {
    return (
        <div className="mx-auto w-[90%] mt-20 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg transition-all duration-500 hover:shadow-2xl">

            <div className="flex min-h-[70vh] flex-col lg:flex-row">

                {/* ================= IMAGE SECTION ================= */}
                <div className="relative flex w-full items-center justify-center overflow-hidden bg-linear-to-br from-emerald-50 via-amber-50 to-orange-100 p-8 sm:p-12 lg:w-[42%]">

                    {/* Decorative Blur */}
                    <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-emerald-200/40 blur-3xl" />
                    <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-orange-200/50 blur-3xl" />

                    {/* Book Image */}
                    <div className="relative z-10 h-105 w-67.5 sm:h-120 sm:w-77.5">
                        <Image
                            src={book.image}
                            alt={book.bookName}
                            fill
                            sizes="(max-width: 640px) 270px, 310px"
                            className="rounded-xl object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                    </div>

                    {/* Rating */}
                    <div className="absolute right-5 top-5 z-20 flex items-center gap-2 rounded-full border border-white/60 bg-white/90 px-4 py-2 shadow-lg backdrop-blur-md">
                        <span className="text-lg text-yellow-400">★</span>

                        <div>
                            <p className="text-sm font-bold text-gray-800">
                                {book.rating}
                            </p>
                            <p className="text-[10px] text-gray-400">
                                Rating
                            </p>
                        </div>
                    </div>

                    {/* Category */}
                    <div className="absolute left-5 top-5 z-20 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white shadow-lg">
                        {book.category}
                    </div>

                    {/* Bottom Image Label */}
                    <div className="absolute bottom-5 left-1/2 z-20 w-[80%] -translate-x-1/2 rounded-2xl border border-white/40 bg-white/80 p-3 text-center shadow-lg backdrop-blur-md">
                        <p className="truncate text-sm font-bold text-gray-800">
                            {book.bookName}
                        </p>
                        <p className="text-xs text-gray-500">
                            by {book.author}
                        </p>
                    </div>
                </div>


                {/* ================= DETAILS SECTION ================= */}
                <div className="flex flex-1 flex-col p-6 sm:p-8 lg:p-10">

                    {/* Top Row */}
                    <div className="mb-5 flex items-center justify-between">

                        <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600">
                            📚 {book.category}
                        </span>

                        <span className="text-xs font-medium text-gray-400">
                            Book Details
                        </span>

                    </div>


                    {/* Title */}
                    <h1 className="max-w-2xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                        {book.bookName}
                    </h1>

                    {/* Author */}
                    <p className="mt-3 text-sm text-gray-500">
                        Written by{" "}
                        <span className="font-semibold text-gray-800">
                            {book.author}
                        </span>
                    </p>


                    {/* Divider */}
                    <div className="my-6 h-px bg-gray-100" />


                    {/* Review */}
                    <div>
                        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-600">
                            About this book
                        </p>

                        <p className="max-w-2xl text-sm leading-7 text-gray-600">
                            {book.review}
                        </p>
                    </div>


                    {/* Book Stats */}
                    <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">

                        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                            <p className="text-xs text-gray-400">
                                Pages
                            </p>

                            <p className="mt-1 text-lg font-bold text-gray-800">
                                {book.totalPages}
                            </p>
                        </div>

                        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                            <p className="text-xs text-gray-400">
                                Published
                            </p>

                            <p className="mt-1 text-lg font-bold text-gray-800">
                                {book.yearOfPublishing}
                            </p>
                        </div>

                        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4 sm:col-span-2">
                            <p className="text-xs text-gray-400">
                                Publisher
                            </p>

                            <p className="mt-1 truncate text-sm font-bold text-gray-800">
                                {book.publisher}
                            </p>
                        </div>

                    </div>


                    {/* Tags */}
                    <div className="mt-7">

                        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">
                            Topics
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {book.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-600 transition-colors hover:bg-emerald-100"
                                >
                                    #{tag.trim()}
                                </span>
                            ))}
                        </div>

                    </div>


                    {/* Buttons */}
                    <div className="mt-auto flex gap-3 pt-8">

                        <button
                            className="cursor-pointer flex-1 rounded-xl border-2 border-emerald-500 px-5 py-3 text-sm font-bold text-emerald-600 transition-all duration-300 hover:bg-emerald-50"
                        >
                            Read Book
                        </button>

                        <button
                            className="flex-1 cursor-pointer rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-md shadow-emerald-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg"
                        >
                            ♡ Add to Wishlist
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default SelectedBookCard;