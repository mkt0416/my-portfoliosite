
import React from 'react'
import PageHero from '@/app/components/common/PageHero';
import { getBlogList, getCategoryDetail } from '@/app/lib/microcms';
import BlogList from '@/app/components/blog/BlogList';
import { BLOG_LIST_LIMIT } from '@/app/constants';
import { notFound } from 'next/navigation';
import Pagenation from '@/app/components/blog/Pagenation';
import AuthGuard from '@/app/components/common/AuthGuard';

type Props = {
    params: {
        id: string;
    };
};

const Page = async ({ params }: Props) => {
    const category = await getCategoryDetail(params.id).catch(notFound);
    const { contents: blog, totalCount } = await getBlogList({
        limit: BLOG_LIST_LIMIT,
        filters: `category[equals]${category.id}`
    });

    return (
        <AuthGuard>
            <PageHero
                image='/images/blog.svg'
                title='Blog'
            />
            <div className='mt-32'>
                <BlogList data={blog} />
                <Pagenation
                    totalCount={totalCount}
                    basePath={`/blog/category/${category.id}`}
                />
            </div>
        </AuthGuard>
    );
};

export default Page;