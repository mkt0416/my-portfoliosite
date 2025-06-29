
import { getBlogDetail } from '@/app/lib/microcms';
import PageHero from '@/app/components/common/PageHero';
import Article from '@/app/components/blog/Article';
import ButtonLink from '@/app/components/blog/ButtonLink';

export const revalidate = 0;

type Props = {
    params: {
        slug: string;
    };
};

const Page = async ({ params }: Props) => {
    const data = await getBlogDetail(params.slug);

    return (
        <>
            <PageHero image='/images/blog.svg' title='Blog' />
            <Article data={data} />
            <div className='w-full max-w-screen-md mx-auto px-8 md:px-12 lg:px-16 mb-20'>
                <div className='flex justify-end'>
                    <ButtonLink href='/site/blog'>ブログ一覧</ButtonLink>
                </div>
            </div>
        </>
    );
};

export default Page;