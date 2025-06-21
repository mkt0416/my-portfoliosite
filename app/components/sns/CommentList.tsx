
'use client'
import { useEffect, useState } from "react";
import { CommentType } from "@/app/lib/snsTypes";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

type Props = {
    postId: string;
};

const CommentList = ({ postId }: Props) => {
    const [comments, setComments] = useState<CommentType[]>([]);

    useEffect(() => {
        getComments();
    }, [postId]);

    const getComments = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts/${postId}/comments`);
            const jsonData: CommentType[] = await response.json();
            setComments(jsonData.sort((a, b) => {
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            }));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <CommentForm
                postId={postId}
                getComments={getComments}
            />
            {comments.length === 0
                ? (
                    <h1>まだコメントが投稿されていません</h1>
                )
                : (
                    <div
                        style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.5)' }}
                        className="bg-white border rounded-xl p-6 sm:p-10"
                    >
                        {comments.map((comment) => (
                            <Comment
                                key={comment._id}
                                comment={comment}
                                postId={postId}
                                getComments={getComments}
                            />
                        ))}
                    </div>
                )
            }
        </>
    );
};

export default CommentList;