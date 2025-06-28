
import ProfileTop from '@/app/components/profile/ProfileTop';
import TimeLine from '@/app/components/profile/TimeLine';
import Hobby from '@/app/components/profile/Hobby';

const Page = () => {
    return (
        <>
            <div className='mt-32'>
                <ProfileTop />
            </div>
            <div className='mt-32'>
                <TimeLine />
            </div>
            <div className='mt-32 mb-20'>
                <Hobby />
            </div>
        </>
    );
};

export default Page;