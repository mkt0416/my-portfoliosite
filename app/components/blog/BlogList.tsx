
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
        <div className='w-full max-w-screen-lg mx-auto px-8 md:px-12 lg:px-16 text-gray-600'>
            {data.map((article) => (
                <div
                    key={article.id}
                    className='flex flex-col md:flex-row gap-10 border-b border-gray-200 py-10'
                >
                    {article.image
                        ? (
                            <div className='w-full'>
                                <Image
                                    style={{ boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)" }}
                                    className='rounded-lg object-cover'
                                    src={article.image.url}
                                    alt='image'
                                    width={article.image.width}
                                    height={article.image.height}
                                    priority
                                />
                            </div>
                        )
                        : (
                            <div className='w-full'>
                                <Image
                                    className='rounded-lg object-cover'
                                    src={'/images/no-image.png'}
                                    alt='image'
                                    width={1200}
                                    height={630}
                                    priority
                                />
                            </div>
                        )
                    }
                    <div className='w-full flex flex-col gap-3 lg:mt-14'>
                        <div className='flex flex-col gap-1'>
                            <Date date={article.createdAt ?? article.publishedAt} />
                            <h1 className='font-extrabold'>{article.title}</h1>
                        </div>
                        <div className='flex items-center gap-5'>
                            <Link href={`/blog/category/${article.category.id}`}>
                                <Category category={article.category} />
                            </Link>
                            <Link
                                style={{ boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)" }}
                                href={`/blog/${article.id}`}
                                className='bg-gray-300 px-2 py-1 rounded-md hover:bg-gray-200 duration-300'
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