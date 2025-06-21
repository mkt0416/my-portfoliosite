
'use client'
import Image from "next/image";
import Link from "next/link";
import { AuthContext } from "@/app/context/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { UserType } from "@/app/lib/snsTypes";
import { RiUserUnfollowLine } from "react-icons/ri";

type Props = {
    userId: string;
};

const Followings = ({ userId }: Props) => {
    const context = useContext(AuthContext);
    const currentUser = context?.currentUser;
    const [followings, setFollowings] = useState<UserType[]>([]);

    useEffect(() => {
        getFollowings();
    }, [userId]);

    const getFollowings = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/${userId}/friends`);
            const jsonData: UserType[] = await response.json();
            setFollowings(jsonData);
        } catch (err) {
            console.log(err);
        }
    };

    const handleUnFollow = async (friendId: string) => {
        try {
            await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/${friendId}/unfollow`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: currentUser?._id,
                })
            });
            getFollowings();
        } catch (err) {
            console.log(err);
        }
    };

    if (followings.length === 0) {
        return (
            <h1>フォローしているユーザーがいません</h1>
        )
    } else {
        return (
            <div style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.5)' }}
                className="bg-white border rounded-xl p-6 sm:p-10"
            >
                {followings.map((friend) => (
                    <div
                        className="flex justify-between items-center border-b"
                        key={friend._id}
                    >
                        <Link
                            href={`/snsprofile/${friend.username}`}
                            className="flex items-center gap-2 py-4">
                            <Image
                                className="w-10 h-10 rounded-full object-cover border-2 border-yellow-400"
                                src={friend.profilePicture}
                                alt="profilePicture"
                                width={50}
                                height={50}
                                priority
                            />
                            <p>{friend.username}</p>
                        </Link>
                        <button
                            onClick={() => handleUnFollow(friend._id)}
                            className="flex items-center gap-1 border border-blue-300 text-blue-500 text-sm py-2 px-3 rounded-md
                       hover:bg-blue-50 duration-300"
                        >
                            <span><RiUserUnfollowLine /></span>
                            <p className="hidden sm:block">アンフォロー</p>
                        </button>
                    </div>
                ))}
            </div>
        );
    }
};

export default Followings;