
import { notFound } from 'next/navigation';
import { getBlogList, getCategoryDetail } from '@/app/lib/microcms';
import { BLOG_LIST_LIMIT } from '@/app/constants';
import PageHero from '@/app/components/common/PageHero';
import BlogList from '@/app/components/blog/BlogList';
import Pagenation from '@/app/components/blog/Pagenation';

type Props = {
    params: {
        id: string;
        current: string;
    };
};

const Page = async ({ params }: Props) => {
    const category = await getCategoryDetail(params.id).catch(notFound);
    const current = parseInt(params.current, 10);

    if (Number.isNaN(current) || current < 0) {
        notFound();
    }

    const { contents: blog, totalCount } = await getBlogList({
        limit: BLOG_LIST_LIMIT,
        offset: BLOG_LIST_LIMIT * (current - 1),
        filters: `category[equals]${category.id}`,
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
