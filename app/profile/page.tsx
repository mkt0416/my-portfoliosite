
import React from 'react'
import ProfileTop from '../components/profile/ProfileTop';
import TimeLine from '../components/profile/TimeLine';
import Hobby from '../components/profile/Hobby';

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