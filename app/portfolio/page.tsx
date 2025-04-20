
import React from 'react'
import Container from '../components/common/Container';
import PageHero from '../components/common/PageHero';
import Portfolio from '../components/portfolio/Portfolio';
import { getPortfolioList } from '../lib/microcms';
import { PORTFOLIO_LIST_LIMIT } from '../constants';

export const revalidate = 0;

const Page = async () => {
    const data = await getPortfolioList({ limit: PORTFOLIO_LIST_LIMIT });

    return (
        <>
            <PageHero
                image='/images/portfolio.svg'
                title='Portfolio'
            />
            <Container>
                <Portfolio data={data.contents} />
            </Container>
        </>
    );
};

export default Page;