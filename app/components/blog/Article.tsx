
import { Blog } from '@/app/lib/microcms';
import Image from 'next/image';
import React from 'react'
import Date from './Date';
import Category from './Category';
import Link from 'next/link';
import CodeArea from './CodeArea';
import ContentArea from './ContentArea';

type Props = {
    data: Blog;
};

const Article = ({ data }: Props) => {
    return (
        <div className='w-full max-w-screen-md mx-auto px-8 md:px-12 lg:px-16 text-gray-600'>
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
                <p className='text-lg leading-relaxed'>{data.textBody}</p>
                <div>
                    {data.content && (
                        <ContentArea content={data.content} />
                    )}
                    {data.code && (
                        <CodeArea code={data.code} />
                    )}
                    {data.content2 && (
                        <ContentArea content={data.content2} />
                    )}
                    {data.code2 && (
                        <CodeArea code={data.code2} />
                    )}
                    {data.content3 && (
                        <ContentArea content={data.content3} />
                    )}
                    {data.code3 && (
                        <CodeArea code={data.code3} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Article;