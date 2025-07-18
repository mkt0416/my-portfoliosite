
'use client'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/app/context/AuthProvider";
import Post from "./Post";
import { PostType } from "@/app/lib/snsTypes";

type Props = {
    username?: string;
};

const SnsTimeline = ({ username }: Props) => {
    const context = useContext(AuthContext);
    const currentUser = context?.currentUser;
    const [loadingPost, setLoadingPost] = useState(true);
    const [posts, setPosts] = useState<PostType[]>([]);

    useEffect(() => {
        fetchPost();
    }, [username, currentUser?._id]);

    const fetchPost = async () => {
        try {
            setLoadingPost(true);
            const response = username
                ? await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts/profile/${username}`)
                : await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts/timeline/${currentUser?._id}`)
            const jsonData: PostType[] = await response.json();
            setPosts(jsonData.sort((a, b) => {
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            }));
        } catch (err) {
            console.log(err);
        } finally {
            setLoadingPost(false);
        }
    };

    return (
        <>
            {posts.map((post) => (
                <Post
                    key={post._id}
                    post={post}
                    fetchPost={fetchPost}
                    loadingPost={loadingPost}
                />
            ))}
        </>
    );
};

export default SnsTimeline;