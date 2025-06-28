
import { notFound } from 'next/navigation';
import { getBlogList, getCategoryDetail } from '@/app/lib/microcms';
import { BLOG_LIST_LIMIT } from '@/app/constants';
import PageHero from '@/app/components/common/PageHero';
import BlogList from '@/app/components/blog/BlogList';
import Pagenation from '@/app/components/blog/Pagenation';
import Category from '@/app/components/blog/Category';

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
        <>
            <PageHero
                image='/images/blog.svg'
                title='Blog'
            />
            <div className='mt-20'>
                <div className='w-full max-w-screen-lg mx-auto px-8 md:px-12 lg:px-16 text-gray-600 dark:text-white
                 flex items-center gap-3'
                >
                    <Category category={category} /><p className='font-semibold'>の一覧</p>
                </div>
                <BlogList data={blog} />
                <Pagenation
                    totalCount={totalCount}
                    basePath={`/site/blog/category/${category.id}`}
                />
            </div>
        </>
    );
};

export default Page;