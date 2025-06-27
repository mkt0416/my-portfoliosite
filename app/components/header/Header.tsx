
'use client'
import { usePathname, useRouter } from 'next/navigation';
import { AuthContext } from '@/app/context/AuthProvider';
import { useContext, useEffect, useState } from 'react'
import MobileMenu from './MobileMenu';
import HumbergerMenu from './HumbergerMenu';
import Navigation from './Navigation';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import ThemeToggle from './ThemeToggle';
import RegisterButton from './RegisterButton';

const headerListItems = [
    { id: '1', link: '/', text: 'Home' },
    { id: '2', link: '/profile', text: 'Profile' },
    { id: '3', link: '/skills', text: 'Skills' },
    { id: '4', link: '/portfolio', text: 'Portfolio' },
    { id: '5', link: '/blog', text: 'Blog' },
    { id: '6', link: '/snstop', text: 'SNS' },
    { id: '7', link: '/music', text: 'Music' },
    { id: '8', link: '/chat', text: 'Chat' },
    { id: '9', link: '/contact', text: 'Contact' },
];

const Header = () => {
    const router = useRouter();
    const [activeLink, setActiveLink] = useState<string>('');
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const pathName = usePathname();
    const context = useContext(AuthContext);
    const loggedIn = context?.loggedIn;
    const setLoggedIn = context?.setLoggedIn;

    const logout = () => {
        localStorage.removeItem('token');
        if (setLoggedIn) {
            setLoggedIn(false);
        }
        router.push('/');
    };

    useEffect(() => {
        setActiveLink(pathName);
    }, [pathName]);

    useEffect(() => {
        const isAuth = localStorage.getItem('token');
        if (setLoggedIn) {
            isAuth && setLoggedIn(true)
        }
    }, []);

    return (
        <header id='home' className='py-8 sm:py-10'>
            <div className='w-full max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16'>
                <div className='flex justify-between items-center'>
                    <Navigation
                        headerListItems={headerListItems}
                        activeLink={activeLink}
                    />
                    <HumbergerMenu setShowMenu={setShowMenu} />
                    <div className='flex items-center gap-2 xl:gap-4'>
                        <RegisterButton />
                        {loggedIn ? <LogoutButton logout={logout} /> : <LoginButton />}
                        <ThemeToggle />
                    </div>
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