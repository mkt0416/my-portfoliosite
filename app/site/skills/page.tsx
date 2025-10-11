
import PageHero from '@/app/components/common/PageHero';
import Skills from '@/app/components/skills/Skills';
import Certifications from '@/app/components/skills/Certifications';

const Page = () => {
    return (
        <>
            <PageHero
                image='/images/skills.jpg'
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