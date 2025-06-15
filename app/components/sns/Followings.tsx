
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
        const getFollowings = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/${userId}/friends`);
                const jsonData: UserType[] = await response.json();
                setFollowings(jsonData);
            } catch (err) {
                console.log(err);
            }
        };
        getFollowings();
    }, [userId]);

    const handleUnFollow = async (friendId: string) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/${friendId}/unfollow`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: currentUser?._id,
                })
            });
            if (response.ok) {
                setFollowings((prev) => {
                    return prev.filter((friend) => friend._id !== friendId)
                })
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
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
                        className="flex items-center gap-1 bg-slate-500 font-semibold text-sm text-white py-2 px-4 rounded-md
                       hover:bg-slate-400 duration-300"
                    >
                        <span><RiUserUnfollowLine /></span>
                        <p className="hidden sm:block">アンフォロー</p>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Followings;