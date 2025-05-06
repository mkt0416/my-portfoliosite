
import React from 'react'
import PageHero from '../components/common/PageHero';
import { getBlogList } from '../lib/microcms';
import BlogList from '../components/blog/BlogList';
import { BLOG_LIST_LIMIT } from '../constants';
import Pagenation from '../components/blog/Pagenation';
import SearchField from '../components/blog/SearchField';
import AuthGuard from '../components/common/AuthGuard';

export const revalidate = 0;

const Page = async () => {
    const { contents: blog, totalCount } = await getBlogList({ limit: BLOG_LIST_LIMIT });

    return (
        <AuthGuard>
            <PageHero
                image='/images/blog.svg'
                title='Blog'
            />
            <div className='mt-32 mb-20'>
                <SearchField />
                <BlogList data={blog} />
                <Pagenation totalCount={totalCount} />
            </div>
        </AuthGuard>
    );
};

export default Page;