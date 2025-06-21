
'use client'
import { AuthContext } from "@/app/context/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { UserType } from "@/app/lib/snsTypes";
import Following from "./Following";

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

    return (
        <>
            {followings.map((friend) => (
                <Following
                    key={friend._id}
                    friend={friend}
                    handleUnFollow={handleUnFollow}
                />
            ))}
        </>
    );
};

export default Followings;