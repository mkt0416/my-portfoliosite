
import { notFound } from 'next/navigation';
import { portfolioData } from '@/app/components/portfolio/portfolioData';
import PortfolioDetail from '@/app/components/portfolio/PortfolioDetail';

type Props = {
    params: {
        slug: string;
    };
};

const Page = async ({ params }: Props) => {
    const detailData = portfolioData.find((item) => item.id === params.slug)

    if (!detailData) {
        notFound();
    }

    return (
        <div className='mt-32 mb-20'>
            <PortfolioDetail data={detailData} />
        </div>
    );
};

export default Page;