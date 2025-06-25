
'use client'
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/app/context/AuthProvider";
import SnsLoading from "./SnsLoading";
import { PostType, UserType } from "@/app/lib/snsTypes";
import { formatDate } from "@/app/lib/utils";
import { format } from 'timeago.js';
import { FaHeart } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";

type Props = {
    post: PostType;
    fetchPost: () => Promise<void>;
    loadingPost: boolean;
};

const Post = ({ post, loadingPost, fetchPost }: Props) => {
    const [loadingUser, setLoadingUser] = useState(true);
    const [user, setUser] = useState<UserType | null>(null);
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const context = useContext(AuthContext);
    const currentUser = context?.currentUser;

    useEffect(() => {
        const fetchUser = async () => {
            setLoadingUser(true);
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users?userId=${post.userId}`);
                const jsonData: UserType = await response.json();
                setUser(jsonData);
            } catch (err) {
                console.log(err);
            } finally {
                setLoadingUser(false);
            }
        };
        fetchUser();
    }, [post.userId]);

    useEffect(() => {
        if (currentUser?._id) {
            setIsLiked(post.likes.includes(currentUser?._id))
        } else {
            setIsLiked(false);
        }
    }, [post.likes, currentUser?._id]);

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
            fetchPost();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div
            style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.5)' }}
            className="flex flex-col gap-5 bg-white dark:bg-gray-600  border rounded-lg p-6 md:p-16 mb-10"
        >
            <span className="text-xs sm:text-sm font-semibold self-end">投稿日:{formatDate(post.createdAt)}</span>
            <div className="flex items-center gap-4">
                <Link href={`/snsprofile/${user?.username}`}>
                    <div className="flex items-center gap-2">
                        {loadingUser
                            ? <SnsLoading />
                            : (
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
                        <span className="font-semibold text-sm sm:text-lg">{user?.username}</span>
                    </div>
                </Link>
                <span className="text-xs sm:text-sm">{format(post.createdAt)}</span>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-sm sm:text-lg">{post.desc}</p>

            </div>
            {loadingPost
                ? <SnsLoading />
                : (
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
                )
            }
            <div className="flex justify-between items-center">
                <button
                    onClick={handleLike}
                    className="flex items-center gap-2"
                >
                    <FaHeart className="text-red-600 text-lg sm:text-xl" />
                    <span>{like}</span>
                </button>
                <Link href={`/comment/${post._id}`}>
                    <div className="flex items-center gap-1">
                        <FaRegCommentAlt />
                        <p className="text-xs sm:text-sm">コメント {post.comments.length}</p>
                    </div>
                </Link>
            </div>
            {currentUser?._id === post.userId && (
                <div className="mt-5 flex justify-end gap-5">
                    <Link
                        className="flex items-center gap-1 border border-blue-300 py-2 px-3 rounded-md text-blue-500
                        hover:bg-blue-50 duration-300"
                        href={`/editpost/${post._id}`}>
                        <FaFilePen className="size-4" />
                        <p className="text-xs sm:text-sm">編集</p>
                    </Link>
                    <button
                        className="flex items-center gap-1 border border-blue-300 py-2 px-3 rounded-md text-blue-500
                        hover:bg-blue-50 duration-300"
                        onClick={deletePost}
                    >
                        <FaTrashAlt className="size-4" />
                        <p className="text-xs sm:text-sm">削除</p>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Post;