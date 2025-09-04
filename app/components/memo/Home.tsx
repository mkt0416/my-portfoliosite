
"use client";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/app/context/AuthProvider";
import { useContext } from "react";

const Home = () => {
    const router = useRouter();
    const context = useContext(AuthContext);
    const memos = context?.memos;
    const setMemos = context?.setMemos;

    const createMemo = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/memo`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            const newMemo = await response.json();
            setMemos?.([newMemo, ...(memos || [])]);
            router.push(`/site/memo/${newMemo._id}`);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <button
                onClick={createMemo}
                className="text-blue-500 text-sm md:text-lg border border-blue-500 rounded-md py-2 px-4
              hover:bg-blue-50 duration-300 cursor-pointer"
            >
                メモを作成
            </button>
        </div>
    );
};

export default Home;