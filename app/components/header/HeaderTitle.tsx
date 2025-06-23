
import Link from 'next/link';

const HeaderTitle = () => {
    return (
        <Link
            className='md:hidden'
            href={'/'}
        >
            <h1 className='text-xl text-gray-600 font-extrabold'>MyPortfolio</h1>
        </Link>
    );
};

export default HeaderTitle;