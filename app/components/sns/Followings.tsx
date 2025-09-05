
'use client'
import { AppContext } from "@/app/context/ContextProvider";
import { useContext, useEffect, useState } from "react";
import Following from "./Following";
import { UserType } from "@/app/lib/snsTypes";

type Props = {
    userId: string;
};

const Followings = ({ userId }: Props) => {
    const context = useContext(AppContext);
    const currentUser = context?.currentUser;
    const [loading, setLoading] = useState(true);
    const [followings, setFollowings] = useState<UserType[]>([]);

    useEffect(() => {
        getFollowings();
    }, [userId]);

    const getFollowings = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/${userId}/friends`);
            const jsonData: UserType[] = await response.json();
            setFollowings(jsonData);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
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
                    loading={loading}
                />
            ))}
        </>
    );
};

export default Followings;