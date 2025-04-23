
import { Blog } from '@/app/lib/microcms';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Date from './Date';
import Category from './Category';

type Props = {
    data: Blog[];
};

const BlogList = ({ data }: Props) => {
    return (
        <div className='mt-32 mb-20 w-full max-w-screen-lg mx-auto px-8 text-gray-600'>
            {data.map((article) => (
                <div
                    key={article.id}
                    className='grid grid-cols-1 lg:grid-cols-2 gap-10 border-b border-gray-200 py-10'
                >
                    {article.image
                        ? (
                            <Image
                                className='rounded-lg'
                                src={article.image.url}
                                alt='image'
                                width={article.image.width}
                                height={article.image.height}
                                priority
                            />
                        )
                        : (
                            <Image
                                className='rounded-lg'
                                src={'/images/no-image.png'}
                                alt='image'
                                width={600}
                                height={450}
                                priority
                            />
                        )
                    }
                    <div className='flex flex-col gap-10 lg:mt-14'>
                        <div>
                            <Date date={article.createdAt ?? article.publishedAt} />
                            <h1 className='text-xl md:text-2xl font-bold'>{article.title}</h1>
                        </div>
                        <div className='flex items-center gap-5'>
                            <Link href={`/blog/category/${article.category.id}`}>
                                <Category category={article.category} />
                            </Link>
                            <Link
                                href={`/blog/${article.id}`}
                                className='bg-gray-300 px-3 py-2 rounded-md hover:bg-gray-200 duration-300'
                            >
                                ブログ詳細
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogList;