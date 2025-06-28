
import { getPortfolioList } from '@/app/lib/microcms';
import { PORTFOLIO_LIST_LIMIT } from '@/app/constants';
import PageHero from '@/app/components/common/PageHero';
import Portfolio from '@/app/components/portfolio/Portfolio';

export const revalidate = 0;

const Page = async () => {
    const data = await getPortfolioList({ limit: PORTFOLIO_LIST_LIMIT });

    return (
        <>
            <PageHero
                image='/images/portfolio.svg'
                title='Portfolio'
            />
            <div className='mt-20 mb-20'>
                <Portfolio data={data.contents} />
            </div>
        </>
    );
};

export default Page;