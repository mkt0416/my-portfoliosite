
import Link from 'next/link';
import React from 'react'

const HeaderTitle = () => {
    return (
        <Link href={'/'}>
            <h1 className='text-3xl text-gray-600 font-bold'>My Portfolio</h1>
        </Link>
    );
};

export default HeaderTitle;