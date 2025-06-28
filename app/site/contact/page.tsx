
import PageHero from '@/app/components/common/PageHero';
import ContactForm from '@/app/components/contact/ContactForm';

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