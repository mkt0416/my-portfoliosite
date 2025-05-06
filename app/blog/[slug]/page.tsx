
import React from 'react'
import Article from '@/app/components/blog/Article';
import ButtonLink from '@/app/components/common/ButtonLink';
import { getBlogDetail } from '@/app/lib/microcms';
import PageHero from '@/app/components/common/PageHero';
import AuthGuard from '@/app/components/common/AuthGuard';

export const revalidate = 0;

type Props = {
    params: {
        slug: string;
    };
};

const Page = async ({ params }: Props) => {
    const data = await getBlogDetail(params.slug);

    return (
        <AuthGuard>
            <PageHero image='/images/blog.svg' title='Blog' />
            <Article data={data} />
            <div className='flex justify-center mt-32 mb-10'>
                <ButtonLink href='/blog'>ブログ一覧</ButtonLink>
            </div>
        </AuthGuard>
    );
};

export default Page;