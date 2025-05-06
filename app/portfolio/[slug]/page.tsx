
import React from 'react'
import AuthGuard from '@/app/components/common/AuthGuard';
import PortfolioDetail from '@/app/components/portfolio/PortfolioDetail';
import { getPortfolioDetail } from '@/app/lib/microcms';

export const revalidate = 0;

type Props = {
    params: {
        slug: string;
    };
};

const Page = async ({ params }: Props) => {
    const data = await getPortfolioDetail(params.slug);

    return (
        <AuthGuard>
            <div className='mt-32 mb-20'>
                <PortfolioDetail data={data} />
            </div>
        </AuthGuard>
    );
};

export default Page;