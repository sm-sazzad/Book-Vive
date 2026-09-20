import React from 'react';
import hero from '@/assets/hero_img.jpg'
import Image from 'next/image';

const Banner = () => {
    return (
        <div className='w-[80%] mx-auto bg-linear-to-r from-amber-50 to-orange-100 rounded-2xl shadow-lg my-12 py-20 overflow-hidden'>
            <div className='flex justify-between items-center px-12 py-10'>
                <div className='max-w-lg'>
                    <h1 className='text-4xl font-bold text-gray-800 leading-tight mb-6'>
                        Books to freshen up <br /> your bookshelf
                    </h1>
                    <button className='bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
                        View The List
                    </button>
                </div>
                <div className='relative'>
                    <div className='absolute inset-0 bg-emerald-300 rounded-full blur-3xl opacity-30'></div>
                    <Image
                        src={hero}
                        alt="book"
                        className='relative w-84 h-auto drop-shadow-2xl rounded-2xl'
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;