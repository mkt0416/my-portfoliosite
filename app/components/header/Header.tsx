
'use client'
import React, { useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import HumbergerMenu from './HumbergerMenu';
import HeaderTitle from './HeaderTitle';
import Navigation from './Navigation';
import { AuthContext } from '@/app/context/AuthProvider';

const headerListItems = [
    { id: '1', link: '/', text: 'Home' },
    { id: '2', link: '/profile', text: 'Profile' },
    { id: '3', link: '/skills', text: 'Skills' },
    { id: '4', link: '/portfolio', text: 'Portfolio' },
    { id: '5', link: '/blog', text: 'Blog' },
    { id: '6', link: '/snstop', text: 'SNS' },
    { id: '7', link: '/contact', text: 'Contact' },
];

const Header = () => {
    const [activeLink, setActiveLink] = useState<string>('');
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const pathName = usePathname();
    const context = useContext(AuthContext);
    const currentUser = context?.currentUser;

    useEffect(() => {
        setActiveLink(pathName);
    }, [pathName]);

    if (!currentUser) return null;

    return (
        <header id='home' className='py-8'>
            <div className='w-full max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16'>
                <div className='flex justify-between items-center'>
                    <HeaderTitle />
                    <Navigation
                        headerListItems={headerListItems}
                        activeLink={activeLink}
                    />
                    <HumbergerMenu setShowMenu={setShowMenu} />
                    {showMenu && (
                        <MobileMenu
                            headerListItems={headerListItems}
                            setShowMenu={setShowMenu}
                        />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;