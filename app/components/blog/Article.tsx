
import { Blog } from '@/app/lib/microcms';
import Image from 'next/image';
import React from 'react'
import Date from './Date';
import Category from './Category';

type Props = {
    data: Blog;
};

const Article = ({ data }: Props) => {
    return (
        <div className='w-full max-w-screen-md mx-auto px-8 text-gray-600'>
            <div className='mt-32 mb-20 flex flex-col items-center gap-14'>
                <h1 className='text-xl lg:text-3xl font-bold'>{data.title}</h1>
                <div className='flex items-center gap-5'>
                    <Date date={data.createdAt ?? data.publishedAt} />
                    <Category category={data.category} />
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
                <p className='text-lg leading-relaxed'>{data.textBody}</p>
            </div>
        </div>
    );
};

export default Article;