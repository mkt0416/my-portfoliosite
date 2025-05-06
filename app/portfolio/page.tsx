
import React from 'react'
import PageHero from '../components/common/PageHero';
import Portfolio from '../components/portfolio/Portfolio';
import { getPortfolioList } from '../lib/microcms';
import { PORTFOLIO_LIST_LIMIT } from '../constants';
import AuthGuard from '../components/common/AuthGuard';

export const revalidate = 0;

const Page = async () => {
    const data = await getPortfolioList({ limit: PORTFOLIO_LIST_LIMIT });

    return (
        <AuthGuard>
            <PageHero
                image='/images/portfolio.svg'
                title='Portfolio'
            />
            <div className='mt-32 mb-20'>
                <Portfolio data={data.contents} />
            </div>
        </AuthGuard>
    );
};

export default Page;