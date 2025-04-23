
import BlogList from '@/app/components/blog/BlogList';
import SearchField from '@/app/components/blog/SearchField';
import { BLOG_LIST_LIMIT } from '@/app/constants';
import { getBlogList } from '@/app/lib/microcms';
import React from 'react'

type Props = {
    searchParams: {
        q?: string;
    };
};

const Page = async ({ searchParams }: Props) => {
    const { contents: data } = await getBlogList({
        limit: BLOG_LIST_LIMIT,
        q: searchParams.q,
    });

    return (
        <>
            <SearchField />
            <BlogList data={data} />
        </>
    );
};

export default Page;