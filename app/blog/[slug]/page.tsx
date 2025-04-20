
import Article from '@/app/components/blog/Article';
import ButtonLink from '@/app/components/common/ButtonLink';
import { getBlogDetail } from '@/app/lib/microcms';
import React from 'react'

type Props = {
    params: {
        slug: string;
    };
};

const Page = async ({ params }: Props) => {
    const data = await getBlogDetail(params.slug);

    return (
        <>
            <Article data={data} />
            <div className='text-center mt-10 mb-10'>
                <ButtonLink href='/blog'>ブログ一覧</ButtonLink>
            </div>
        </>
    );
};

export default Page;