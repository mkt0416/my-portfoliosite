
import PageHero from '../components/common/PageHero';
import ContactForm from '../components/contact/ContactForm';

const Page = () => {
    return (
        <>
            <PageHero
                image='/images/contact.svg'
                title='Contact'
            />
            <div className='mt-32 mb-20'>
                <ContactForm />
            </div>
        </>
    );
};

export default Page;