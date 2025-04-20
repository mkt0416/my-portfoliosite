
import React from 'react'

type Props = {
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const HumbergerMenu = ({ setShowMenu }: Props) => {
    return (
        <div
            onClick={() => setShowMenu(true)}
            className='md:hidden w-7 h-5 flex flex-col justify-between group overflow-hidden'
        >
            <span className='w-full h-[3px] bg-gray-600 inline-flex -translate-x-1
        group-hover:-translate-x-0 transition-transform duration-500'></span>
            <span className='w-full h-[3px] bg-gray-600 inline-flex -translate-x-3
        group-hover:-translate-x-0 transition-transform duration-500'></span>
            <span className='w-full h-[3px] bg-gray-600 inline-flex'></span>
        </div>
    );
};

export default HumbergerMenu;