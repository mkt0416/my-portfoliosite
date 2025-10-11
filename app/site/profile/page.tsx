
import ProfileSection from '@/app/components/profile/ProfileSection';
import ProfileTop from '@/app/components/profile/ProfileTop';
import TimeLine from '@/app/components/profile/TimeLine';
import Hobby from '@/app/components/profile/Hobby';

const Page = () => {
    return (
        <>
            <ProfileSection />
            <ProfileTop />
            <TimeLine />
            <div className='mt-32 mb-20'>
                <Hobby />
            </div>
        </>
    );
};

export default Page;