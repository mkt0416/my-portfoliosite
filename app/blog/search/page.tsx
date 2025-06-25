
import { getBlogList } from '@/app/lib/microcms';
import { BLOG_LIST_LIMIT } from '@/app/constants';
import PageHero from '@/app/components/common/PageHero';
import BlogList from '@/app/components/blog/BlogList';
import SearchField from '@/app/components/blog/SearchField';

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
            <PageHero image='/images/blog.svg' title='Blog' />
            <div className='mt-32'>
                <SearchField />
                <BlogList data={data} />
            </div>
        </>
    );
};

export default Page;