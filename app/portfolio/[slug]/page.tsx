
import Container from '@/app/components/common/Container';
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
        <Container>
            <PortfolioDetail data={data} />
        </Container>
    );
};

export default Page;