
import { getBlogList } from '../lib/microcms';
import { BLOG_LIST_LIMIT } from '../constants';
import PageHero from '../components/common/PageHero';
import BlogList from '../components/blog/BlogList';
import SearchField from '../components/blog/SearchField';
import Pagenation from '../components/blog/Pagenation';

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