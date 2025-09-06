
'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AppContext } from "@/app/context/ContextProvider";
import { useContext } from "react";
import { FaUser, FaUserEdit, FaUserSlash } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { logout } from "@/app/utils/logout";

const Sidebar = () => {
    const router = useRouter();
    const pathName = usePathname();
    const context = useContext(AppContext);
    if (!context) return null;
    const { currentUser } = context;
    const sidebarItem = [
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
                onClick={() => logout(context, router)}
                className="w-72 flex items-center gap-2 p-4 rounded-md hover:bg-gray-200 duration-300"
            >
                <span className="text-lg">{<MdLogout />}</span>
                <p className="text-lg">ログアウト</p>
            </button>
        </div>
    );
};

export default Sidebar;