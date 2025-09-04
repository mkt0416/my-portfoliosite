
"use client";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/app/context/AuthProvider";
import { useContext, useEffect, useRef, useState } from "react";
import { FaTrashAlt } from "react-icons/fa"

const Memo = ({ memoId }: { memoId: string }) => {
    const router = useRouter();
    const context = useContext(AuthContext);
    const memos = context?.memos;
    const setMemos = context?.setMemos;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        const getSingleMemo = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/memo/${memoId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                const memo = await response.json();
                const { title, description } = memo;
                setTitle(title);
                setDescription(description);

            } catch (err) {
                console.log(err);
            }
        };
        getSingleMemo();
    }, [memoId]);

    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const updateField = async (field: "title" | "description", value: string) => {
        if (field === "title") setTitle(value);
        if (field === "description") setDescription(value);

        if (timerRef.current) clearTimeout(timerRef.current);

        timerRef.current = setTimeout(async () => {
            try {
                await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/memo/${memoId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                    body: JSON.stringify({
                        [field]: value
                    }),
                });
                const newMemo = memos?.map((memo) =>
                    memo._id === memoId ? { ...memo, [field]: value } : memo
                ) ?? [];
                setMemos?.(newMemo);
            } catch (err) {
                console.log(err);
            }
        }, 500);
    };

    const deleteMemo = async () => {
        const confirmMessage = window.confirm("本当に削除しますか？");
        if (!confirmMessage) return;
        const newMemos = memos?.filter((memo) => memo._id !== memoId) ?? [];
        setMemos?.(newMemos);

        try {
            await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/memo/${memoId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            if (newMemos.length === 0) {
                router.push("/");
            } else {
                router.push(`/site/memo/${newMemos[0]._id}`);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="p-8">
            <div className="flex items-center justify-between">
                <input
                    className="w-full md:text-2xl font-bold py-3 bg-gray-50 outline-none"
                    type="text"
                    value={title}
                    onChange={(e) => updateField("title", e.target.value)}
                />
                <button onClick={deleteMemo}>
                    <FaTrashAlt className="text-red-500 md:size-8" />
                </button>
            </div>
            <div>
                <textarea
                    className="w-full text-sm md:text-base py-3 bg-gray-50 outline-none resize-none"
                    value={description}
                    onChange={(e) => updateField("description", e.target.value)}
                />
            </div>
        </div>
    );
};

export default Memo;