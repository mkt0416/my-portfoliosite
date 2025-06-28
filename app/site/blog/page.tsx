
import { getBlogList } from '@/app/lib/microcms';
import { BLOG_LIST_LIMIT } from '@/app/constants';
import PageHero from '@/app/components/common/PageHero';
import BlogList from '@/app/components/blog/BlogList';
import SearchField from '@/app/components/blog/SearchField';
import Pagenation from '@/app/components/blog/Pagenation';

export const revalidate = 0;

const Page = async () => {
    const { contents: blog, totalCount } = await getBlogList({ limit: BLOG_LIST_LIMIT });

    return (
        <>
            <PageHero
                image='/images/blog.svg'
                title='Blog'
            />
            <div className='mt-20 mb-20'>
                <SearchField />
                <BlogList data={blog} />
                <Pagenation totalCount={totalCount} />
            </div>
        </>
    );
};

export default Page;