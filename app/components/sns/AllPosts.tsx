
'use client'
import { useEffect, useState } from "react";
import { PostType } from "@/app/lib/snsTypes";
import Post from "./Post";

const AllPosts = () => {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [loadingPost, setLoadingPost] = useState(true);

    const fetchPost = async () => {
        try {
            setLoadingPost(true)
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`)
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

    useEffect(() => {
        fetchPost();
    }, []);

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

export default AllPosts;