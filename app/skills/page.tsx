
import React from 'react'
import PageHero from '../components/common/PageHero';
import Skills from '../components/skills/Skills';
import Certifications from '../components/skills/Certifications';
import AuthGuard from '../components/common/AuthGuard';

const Page = () => {
    return (
        <AuthGuard>
            <PageHero
                image='/images/skills.svg'
                title={'Skills'}
            />
            <div className='mt-32'>
                <Skills />
            </div>
            <div className='mt-32 mb-20'>
                <Certifications />
            </div>
        </AuthGuard>
    );
};

export default Page;