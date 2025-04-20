
import React from 'react'
import PageHero from '../components/common/PageHero';
import Container from '../components/common/Container';
import Skills from '../components/skills/Skills';
import Certifications from '../components/skills/Certifications';

const Page = () => {
    return (
        <>
            <PageHero
                image='/images/skills.svg'
                title={'Skills'}
            />
            <Container>
                <Skills />
                <Certifications />
            </Container>
        </>
    );
};

export default Page;