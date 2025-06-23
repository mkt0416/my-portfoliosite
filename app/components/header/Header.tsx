
'use client'
import { usePathname, useRouter } from 'next/navigation';
import { AuthContext } from '@/app/context/AuthProvider';
import { useContext, useEffect, useState } from 'react'
import MobileMenu from './MobileMenu';
import HumbergerMenu from './HumbergerMenu';
import Navigation from './Navigation';
import HeaderTitle from './HeaderTitle';

const headerListItems = [
    { id: '1', link: '/', text: 'Home' },
    { id: '2', link: '/profile', text: 'Profile' },
    { id: '3', link: '/skills', text: 'Skills' },
    { id: '4', link: '/portfolio', text: 'Portfolio' },
    { id: '5', link: '/blog', text: 'Blog' },
    { id: '6', link: '/snstop', text: 'SNS' },
    { id: '7', link: '/contact', text: 'Contact' },
    { id: '8', link: '/music', text: 'Music' },
];

const Header = () => {
    const router = useRouter();
    const [activeLink, setActiveLink] = useState<string>('');
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const pathName = usePathname();
    const context = useContext(AuthContext);
    const currentUser = context?.currentUser;
    const setCurrentUser = context?.setCurrentUser;

    const logout = () => {
        localStorage.removeItem('token');
        if (setCurrentUser) {
            setCurrentUser(null);
        }
        router.push('/login');
    };

    useEffect(() => {
        setActiveLink(pathName);
    }, [pathName]);

    if (!currentUser) return null;

    return (
        <header id='home' className='py-8'>
            <div className='w-full max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16'>
                <div className='flex justify-between md:justify-end items-center'>
                    <HeaderTitle />
                    <Navigation
                        headerListItems={headerListItems}
                        activeLink={activeLink}
                        logout={logout}
                    />
                    <HumbergerMenu setShowMenu={setShowMenu} />
                    {showMenu && (
                        <MobileMenu
                            headerListItems={headerListItems}
                            setShowMenu={setShowMenu}
                            logout={logout}
                        />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;