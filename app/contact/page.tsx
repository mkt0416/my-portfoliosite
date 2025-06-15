
import AuthGuard from '../components/common/AuthGuard';
import PageHero from '../components/common/PageHero';
import ContactForm from '../components/contact/ContactForm';

const Page = () => {
    return (
        <AuthGuard>
            <PageHero
                image='/images/contact.svg'
                title='Contact'
            />
            <div className='mt-32 mb-20'>
                <ContactForm />
            </div>
        </AuthGuard>
    );
};

export default Page;