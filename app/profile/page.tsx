
import React from 'react'
import Container from '../components/common/Container';
import ProfileTop from '../components/profile/ProfileTop';
import TimeLine from '../components/profile/TimeLine';
import Hobby from '../components/profile/Hobby';

const Page = () => {
    return (
        <Container>
            <ProfileTop />
            <TimeLine />
            <Hobby />
        </Container>
    );
};

export default Page;