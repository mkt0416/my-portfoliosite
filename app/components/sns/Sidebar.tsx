
'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AuthContext } from "@/app/context/AuthProvider";
import { useContext } from "react";
import { FaUser, FaUserEdit, FaUserSlash } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
    const router = useRouter();
    const pathName = usePathname();
    const context = useContext(AuthContext);
    if (!context) return null;
    const { currentUser, setCurrentUser } = context;
    const sidebarItem = [
        {
            id: '1',
            label: 'トップ',
            link: '/snstop',
            icon: <FaDesktop />
        },
        {
            id: '2',
            label: 'マイホーム',
            link: '/sns',
            icon: <IoMdHome />
        },
        {
            id: '3',
            label: 'マイプロフィール',
            link: `/snsprofile/${currentUser?.username}`,
            icon: <FaUser />
        },
        {
            id: '4',
            label: 'マイプロフィール編集',
            link: `/edituser/${currentUser?._id}`,
            icon: <FaUserEdit />
        },
        {
            id: '5',
            label: '友達',
            link: `/followings/${currentUser?._id}`,
            icon: <FaUsers />
        },
        {
            id: '6',
            label: 'アカウント削除',
            link: `/unsubscribe/${currentUser?._id}`,
            icon: <FaUserSlash />
        },
    ];

    const logout = () => {
        localStorage.removeItem('token');
        setCurrentUser(null);
        router.push('/');
    };

    return (
        <div className="hidden lg:block mr-10">
            {sidebarItem.map((item) => (
                <Link
                    className={`${pathName === item.link && 'bg-gray-400 text-white border-r-4 border-blue-500'}
                                ${pathName !== item.link && 'hover:bg-gray-200 duration-300'}
                        w-72 flex items-center gap-2 p-4 rounded-md`}
                    key={item.id}
                    href={item.link}
                >
                    <span className="text-lg">{item.icon}</span>
                    <p className="text-lg">{item.label}</p>
                </Link>
            ))}
            <button
                onClick={logout}
                className="w-72 flex items-center gap-2 p-4 rounded-md hover:bg-gray-200 duration-300"
            >
                <span className="text-lg">{<MdLogout />}</span>
                <p className="text-lg">ログアウト</p>
            </button>
        </div>
    );
};

export default Sidebar;