
import React from 'react'

type Props = {
    children: React.ReactNode;
};

const Container = ({ children }: Props) => {
    return (
        <div className='w-full max-w-screen-xl mx-auto px-8 md:px-12 lg:px-16'>
            {children}
        </div>
    );
};

export default Container;