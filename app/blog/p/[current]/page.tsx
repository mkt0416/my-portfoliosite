
import React from 'react'
import PageHero from '@/app/components/common/PageHero';
import { getBlogList } from '@/app/lib/microcms';
import BlogList from '@/app/components/blog/BlogList';
import { BLOG_LIST_LIMIT } from '@/app/constants';
import { notFound } from 'next/navigation';
import Pagenation from '@/app/components/blog/Pagenation';

type Props = {
    params: {
        current: string;
    };
};

const Page = async ({ params }: Props) => {
    const current = parseInt(params.current, 10);

    if (Number.isNaN(current) || current < 0) {
        notFound();
    }

    const { contents: blog, totalCount } = await getBlogList({
        limit: BLOG_LIST_LIMIT,
        offset: BLOG_LIST_LIMIT * (current - 1),
    });

    if (blog.length === 0) {
        notFound();
    }

    return (
        <>
            <PageHero
                image='/images/blog.svg'
                title='Blog'
            />
            <BlogList data={blog} />
            <Pagenation
                totalCount={totalCount}
                current={current}
            />
        </>
    );
};

export default Page;
