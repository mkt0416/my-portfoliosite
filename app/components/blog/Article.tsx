
import { Blog } from '@/app/lib/microcms';
import Image from 'next/image';
import React from 'react'
import Date from './Date';
import Category from './Category';
import Link from 'next/link';

type Props = {
    data: Blog;
};

const Article = ({ data }: Props) => {
    return (
        <div className='w-full max-w-screen-md mx-auto px-8 text-gray-600'>
            <div className='mt-32 mb-20 flex flex-col items-center gap-14'>
                <h1 className='text-xl lg:text-2xl font-bold'>{data.title}</h1>
                <div className='flex items-center gap-5'>
                    <Date date={data.createdAt ?? data.publishedAt} />
                    <Link href={`/blog/category/${data.category.id}`}>
                        <Category category={data.category} />
                    </Link>
                </div>
                {data.image && (
                    <Image
                        className='w-full rounded-md'
                        src={data.image.url}
                        alt='image'
                        width={data.image.width}
                        height={data.image.height}
                        priority
                    />
                )}
                {data.code && (
                    <div
                        className='bg-gray-900 text-lg text-white rounded-md p-10'
                        dangerouslySetInnerHTML={{
                            __html: data.code
                        }}
                    ></div>
                )}
                {data.content && (
                    <div
                        className='text-lg'
                        dangerouslySetInnerHTML={{
                            __html: data.content
                        }}
                    ></div>
                )}
                {data.code2 && (
                    <div
                        className='bg-gray-900 text-lg text-white rounded-md p-10'
                        dangerouslySetInnerHTML={{
                            __html: data.code2
                        }}
                    ></div>
                )}
                {data.content2 && (
                    <div
                        className='text-lg'
                        dangerouslySetInnerHTML={{
                            __html: data.content2
                        }}
                    ></div>
                )}
                {data.code3 && (
                    <div
                        className='bg-gray-900 text-lg text-white rounded-md p-10'
                        dangerouslySetInnerHTML={{
                            __html: data.code3
                        }}
                    ></div>
                )}
                {data.content3 && (
                    <div
                        className='text-lg'
                        dangerouslySetInnerHTML={{
                            __html: data.content3
                        }}
                    ></div>
                )}
                <p className='text-lg leading-relaxed'>{data.textBody}</p>
            </div>
        </div>
    );
};

export default Article;