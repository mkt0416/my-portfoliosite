
'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AppContext } from "@/app/context/ContextProvider";
import { IoMdHome } from "react-icons/io";
import { FaDesktop, FaUser, FaUsers } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { FaUserSlash } from "react-icons/fa";

const Navbar = () => {
    const router = useRouter();
    const context = useContext(AppContext);
    if (!context) return null;
    const { currentUser, setCurrentUser } = context;
    const navbarItem = [
        {
            id: '1',
            label: 'トップ',
            link: '/sns/snstop',
            icon: <FaDesktop />
        },
        {
            id: '2',
            label: 'マイホーム',
            link: '/sns/myhome',
            icon: <IoMdHome />
        },
        {
            id: '3',
            label: 'マイプロフィール',
            link: `/sns/snsprofile/${currentUser?.username}`,
            icon: <FaUser />
        },
        {
            id: '4',
            label: 'マイプロフィール編集',
            link: `/sns/edituser/${currentUser?._id}`,
            icon: <FaUserEdit />
        },
        {
            id: '5',
            label: '友達',
            link: `/sns/followings/${currentUser?._id}`,
            icon: <FaUsers />
        },
        {
            id: '6',
            label: 'アカウント削除',
            link: `/sns/unsubscribe/${currentUser?._id}`,
            icon: <FaUserSlash />
        },
    ];

    const logout = () => {
        localStorage.removeItem('token');
        setCurrentUser(null);
        router.push('/');
    };

    return (
        <div className="lg:hidden w-full fixed bottom-0 left-0 z-10 bg-slate-400 text-white p-4">
            <div className="flex justify-around">
                {navbarItem.map((item) => (
                    <Link
                        key={item.id}
                        href={item.link}
                    >
                        <span className="text-lg">{item.icon}</span>
                    </Link>
                ))}
                <button
                    onClick={logout}
                >
                    <span className="text-lg">{<MdLogout />}</span>
                </button>
            </div>
        </div>
    );
};

export default Navbar;