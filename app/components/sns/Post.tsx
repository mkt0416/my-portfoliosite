
'use client'
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/app/context/AuthProvider";
import { PostType, UserType } from "@/app/lib/snsTypes";
import { format } from 'timeago.js';
import { FaHeart } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";

type Props = {
    post: PostType;
};

const Post = ({ post }: Props) => {
    const [user, setUser] = useState<UserType | null>(null);
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const context = useContext(AuthContext);
    const currentUser = context?.currentUser;

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users?userId=${post.userId}`);
                const jsonData: UserType = await response.json();
                setUser(jsonData);
            } catch (err) {
                console.log(err);
            }
        };
        fetchUser();
    }, [post.userId]);

    const handleLike = async () => {
        try {
            await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts/${post._id}/like`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: currentUser?._id,
                })
            });
        } catch (err) {
            console.log(err);
        }
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };

    const deletePost = async () => {
        try {
            await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts/${post._id}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: currentUser?._id,
                })
            });
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div
            style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.5)' }}
            className="flex flex-col gap-5 bg-white border rounded-lg p-6 md:p-16 mb-10"
        >
            <div className="flex items-center gap-4">
                <Link href={`/snsprofile/${user?.username}`}>
                    <div className="flex items-center gap-2">
                        <Image
                            className="w-10 h-10 object-cover border-2 border-yellow-400 rounded-full"
                            src={user?.profilePicture
                                ? user.profilePicture
                                : '/images/persons/noAvatar.png'
                            }
                            alt="profilePicture"
                            width={50}
                            height={50}
                            priority
                        />
                        <span className="font-semibold">{user?.username}</span>
                    </div>
                </Link>
                <span className="text-sm">{format(post.createdAt)}</span>
            </div>
            <p>{post.desc}</p>
            <Image
                style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.5)' }}
                className="w-full rounded-lg"
                src={post.img
                    ? post.img
                    : '/images/posts/no-image.png'
                }
                alt="postImg"
                width={600}
                height={600}
                priority
            />
            <div className="flex justify-between items-center">
                <button
                    onClick={handleLike}
                    className="flex items-center gap-2"
                >
                    <FaHeart className="text-red-600 text-lg sm:text-2xl" />
                    <span>{like}</span>
                </button>
                {currentUser?._id === post.userId && (
                    <div className="flex items-baseline gap-4">
                        <Link href={`/editpost/${post._id}`}>
                            <FaFilePen className="sm:text-2xl text-gray-600" />
                        </Link>
                        <button onClick={deletePost}>
                            <FaTrashAlt className="sm:text-2xl text-red-600" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Post;