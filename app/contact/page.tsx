
import React from 'react'
import PageHero from '../components/common/PageHero';
import Container from '../components/common/Container';
import ContactForm from '../components/contact/ContactForm';

const Page = () => {
    return (
        <>
            <PageHero
                image='/images/contact.svg'
                title='Contact'
            />
            <Container>
                <ContactForm />
            </Container>
        </>
    );
};

export default Page;