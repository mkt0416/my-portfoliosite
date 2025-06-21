
'use client';
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/app/context/AuthProvider";
import { CommentType, UserType } from "@/app/lib/snsTypes";
import { format } from 'timeago.js';
import { FaTrashAlt } from "react-icons/fa";

type Props = {
    comment: CommentType;
    postId: string;
    getComments: () => Promise<void>;
};

const Comment = ({ comment, postId, getComments }: Props) => {
    const context = useContext(AuthContext);
    const currentUser = context?.currentUser;
    const [user, setUser] = useState<UserType | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users?userId=${comment.userId}`);
                const jsonData: UserType = await response.json();
                setUser(jsonData);
            } catch (err) {
                console.log(err);
            }
        };
        fetchUser();
    }, [comment.userId]);

    const deleteComment = async () => {
        try {
            await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts/${postId}/comment/${comment._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: currentUser?._id,
                })
            });
            getComments();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="py-4 border-b">
            <div className="flex items-center gap-5">
                <Link
                    href={`/snsprofile/${user?.username}`}
                    className="flex items-center gap-2"
                >
                    {user && (
                        <Image
                            className="w-10 h-10 object-cover border-2 border-yellow-400 rounded-full"
                            src={user?.profilePicture
                                ? user.profilePicture
                                : '/images/persons/noAvatar.png'
                            }
                            alt="profilePicture"
                            width={50}
                            height={50}
                        />
                    )}
                    <span>{user?.username}</span>
                </Link>
                <span className="text-xs">{format(comment.createdAt)}</span>
            </div>
            <div className="mt-5 flex flex-col sm:flex-row gap-5 items-start justify-between">
                <p className="text-sm">{comment.text}</p>
                {comment.userId === currentUser?._id && (
                    <button
                        onClick={deleteComment}
                        className="flex items-center gap-1 border border-blue-300 py-2 px-3 rounded-md text-blue-500
                        hover:bg-blue-50 duration-300 self-end sm:self-start"
                    >
                        <FaTrashAlt className="size-4" />
                        <p className="text-xs sm:text-sm">削除</p>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Comment;