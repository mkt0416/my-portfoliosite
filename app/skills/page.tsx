
import PageHero from '../components/common/PageHero';
import Skills from '../components/skills/Skills';
import Certifications from '../components/skills/Certifications';

const Page = () => {
    return (
        <>
            <PageHero
                image='/images/skills.svg'
                title={'Skills'}
            />
            <div className='mt-20'>
                <Skills />
            </div>
            <div className='mt-20 mb-20'>
                <Certifications />
            </div>
        </>
    );
};

export default Page;