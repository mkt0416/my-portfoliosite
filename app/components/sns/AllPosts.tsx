
'use client'
import { useEffect, useState } from "react";
import Post from "./Post";
import { PostType } from "@/app/lib/snsTypes";

const AllPosts = () => {
    const [posts, setPosts] = useState<PostType[]>([]);

    const fetchPost = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`)
            const jsonData: PostType[] = await response.json();
            setPosts(jsonData.sort((a, b) => {
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            }));
        } catch (err) {
            console.log(err);
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
                />
            ))}
        </>
    );
};

export default AllPosts;