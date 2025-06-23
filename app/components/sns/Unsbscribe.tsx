
'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/app/context/AuthProvider";
import { useContext } from "react";

type Props = {
    userId: string;
};

const Unsbscribe = ({ userId }: Props) => {
    const router = useRouter();
    const context = useContext(AuthContext);
    const currentUser = context?.currentUser;
    const setCurrentUser = context?.setCurrentUser;

    const handleUnscribe = async () => {
        if (!setCurrentUser) return;
        const token = localStorage.getItem('token');
        try {
            await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    userId: currentUser?._id,
                })
            });
            localStorage.removeItem('token');
            setCurrentUser(null);
            router.push('/register');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="mt-32 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-2">アカウント削除</h1>
            <p className="text-center mb-4">
                ご利用ありがとうございました。
                <br />
                またのご利用を心よりお待ちしております。
            </p>
            <div className="flex items-center gap-5">
                <button
                    onClick={handleUnscribe}
                    className="border border-blue-300 text-blue-500 py-3 px-4 rounded-md hover:bg-blue-50 duration-300"
                >
                    退会する
                </button>
                <Link
                    className="border border-blue-300 text-blue-500 py-3 px-4 rounded-md hover:bg-blue-50 duration-300"
                    href={'/snstop'}
                >
                    退会しない
                </Link>
            </div>
        </div>
    );
};

export default Unsbscribe;