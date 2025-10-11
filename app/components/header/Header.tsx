
'use client'
import { usePathname, useRouter } from 'next/navigation';
import { AppContext } from '@/app/context/ContextProvider';
import { useContext, useEffect, useState } from 'react'
import MobileMenu from './MobileMenu';
import HumbergerMenu from './HumbergerMenu';
import Navigation from './Navigation';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import ThemeToggle from './ThemeToggle';
import RegisterButton from './RegisterButton';
import { logout } from '@/app/utils/logout';

const headerListItems = [
    { id: '1', link: '/', text: 'Home' },
    { id: '2', link: '/site/profile', text: 'Profile' },
    { id: '3', link: '/site/skills', text: 'Skills' },
    { id: '4', link: '/site/blog', text: 'Blog' },
    { id: '5', link: '/site/portfolio', text: 'Portfolio' },
    { id: '6', link: '/site/contact', text: 'Contact' },
];

const Header = ({ isHero }: { isHero?: boolean }) => {
    const router = useRouter();
    const [activeLink, setActiveLink] = useState<string>('');
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const pathName = usePathname();
    const context = useContext(AppContext);
    const loggedIn = context?.loggedIn;
    const setLoggedIn = context?.setLoggedIn;

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
        <header id='home' className={`py-6 sm:py-8 relative z-50 ${isHero ? "bg-black/40 text-white" : "text-gray-600"}`}>
            <div className='w-full max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16'>
                <div className='flex justify-between items-center'>
                    <Navigation
                        headerListItems={headerListItems}
                        activeLink={activeLink}
                    />
                    <HumbergerMenu setShowMenu={setShowMenu} />
                    <div className='flex items-center gap-4'>
                        <RegisterButton />
                        {loggedIn ? <LogoutButton logout={() => logout(context, router)} /> : <LoginButton />}
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