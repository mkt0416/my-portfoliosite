
import PortfolioDetail from '@/app/components/portfolio/PortfolioDetail';
import { getPortfolioDetail } from '@/app/lib/microcms';
import React from 'react'

export const revalidate = 0;

type Props = {
    params: {
        slug: string;
    };
};

const Page = async ({ params }: Props) => {
    const data = await getPortfolioDetail(params.slug);

    return (
        <div className='mt-32 mb-20'>
            <PortfolioDetail data={data} />
        </div>
    );
};

export default Page;