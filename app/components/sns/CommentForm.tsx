
'use client'
import { useContext, useState } from "react";
import { AppContext } from "@/app/context/ContextProvider";
import { IoIosCreate } from "react-icons/io";

type Props = {
    postId: string;
    getComments: () => Promise<void>
};

const CommentForm = ({ postId, getComments }: Props) => {
    const context = useContext(AppContext);
    const currentUser = context?.currentUser;
    const [text, setText] = useState('');

    const createComment = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts/${postId}/comment`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: currentUser?._id,
                    text: text,
                })
            });
            setText('');
            getComments();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div
            style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.5)' }}
            className="mb-10 bg-white dark:bg-gray-600 border rounded-xl p-6 sm:p-10"
        >
            <form onSubmit={createComment}>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full rounded-md border py-3 px-4 focus:outline-none placeholder:text-sm dark:bg-gray-400
                    dark:placeholder:text-white"
                    type="text"
                    name="comment"
                    placeholder="コメント投稿"
                />
                <hr className="my-5" />
                <div className="mt-3 flex justify-end">
                    <button
                        type="submit"
                        className="flex items-center gap-1 border border-blue-300 text-sm py-2 px-3 rounded-md text-blue-500
                        hover:bg-blue-50 duration-300"
                    >
                        <IoIosCreate className="size-4" />
                        <p className="text-xs sm:text-sm">投稿</p>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CommentForm;