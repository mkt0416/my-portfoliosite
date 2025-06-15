
'use client'
import Image from "next/image";
import { AuthContext } from "@/app/context/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { UserType } from "@/app/lib/snsTypes";
import Container from "../common/Container";
import { RiUserFollowLine } from "react-icons/ri";
import { RiUserUnfollowLine } from "react-icons/ri";

type Props = {
    username: string;
};

const ProfileHero = ({ username }: Props) => {
    const context = useContext(AuthContext);
    const currentUser = context?.currentUser;
    const [user, setUser] = useState<UserType | null>(null);
    const [followers, setFollowers] = useState(0);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users?username=${username}`);
                const jsonData: UserType = await response.json();
                setUser(jsonData);
                setFollowers(jsonData.followers.length);
            } catch (err) {
                console.log(err);
            }
        };
        fetchUser();
    }, [username]);

    const handleFollow = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/${user?._id}/follow`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: currentUser?._id,
                })
            });
            if (!response.ok) {
                return
            }
        } catch (err) {
            console.log(err);
        }
        setFollowers(followers + 1);
    };

    const handleUnFollow = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/${user?._id}/unfollow`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: currentUser?._id,
                })
            });
            if (!response.ok) {
                return;
            }
        } catch (err) {
            console.log(err);
        }
        setFollowers(followers - 1);
    };

    return (
        <>
            <div className="relative w-full h-[300px]">
                <Image
                    className="object-cover"
                    src={user?.coverPicture
                        ? user.coverPicture
                        : '/images/posts/3.jpeg'
                    }
                    alt="coverPicture"
                    fill
                    priority
                />
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                    <Image
                        className="w-40 h-40 object-cover rounded-full border-4 border-yellow-400"
                        src={user?.profilePicture
                            ? user.profilePicture
                            : '/images/persons/noAvatar.png'
                        }
                        alt="profilePicture"
                        width={200}
                        height={200}
                        priority
                    />
                </div>
            </div>
            <Container>
                <div className="mt-20">
                    <h1 className="text-lg sm:text-2xl text-center font-bold">{user?.username}</h1>
                    <p className="mt-5 text-center">{user?.desc}</p>
                    <div className="mt-10 flex flex-wrap gap-5 justify-center sm:justify-around">
                        <span className="flexnitems-center gap-1 bg-slate-500 font-semibold text-xs sm:text-sm text-white py-2 px-4 rounded-full
                             hover:bg-slate-400 duration-300">フォロワー {followers}</span>
                        <button
                            disabled={user?._id === currentUser?._id}
                            onClick={handleFollow}
                            className="flex items-center gap-1 bg-slate-500 font-semibold text-xs sm:text-sm text-white py-2 px-4 rounded-full
                             hover:bg-slate-400 duration-300 disabled:bg-slate-300"
                        >
                            <span><RiUserFollowLine /></span>
                            フォロー
                        </button>
                        <button
                            disabled={user?._id === currentUser?._id}
                            onClick={handleUnFollow}
                            className="flex items-center gap-1 bg-slate-500 font-semibold text-xs sm:text-sm text-white py-2 px-4 rounded-full
                             hover:bg-slate-400 duration-300 disabled:bg-slate-300"
                        >
                            <span><RiUserUnfollowLine /></span>
                            アンフォロー
                        </button>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ProfileHero;