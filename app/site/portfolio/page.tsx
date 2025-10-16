
import PageHero from '@/app/components/common/PageHero';
import Portfolio from '@/app/components/portfolio/Portfolio';

const Page = async () => {
    return (
        <>
            <PageHero
                image='/images/portfolio.jpg'
                title='Portfolio'
            />
            <div className='mt-20 mb-20'>
                <Portfolio />
            </div>
        </>
    );
};

export default Page;