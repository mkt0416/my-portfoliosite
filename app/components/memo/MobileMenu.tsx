
"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/app/context/ContextProvider";
import { formatDate } from "@/app/lib/utils";
import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaRegPlusSquare } from "react-icons/fa";

type Props = {
    showMobileMenu: boolean;
    setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenu = ({ showMobileMenu, setShowMobileMenu }: Props) => {
    const context = useContext(AppContext);
    const memos = context?.memos;
    const setMemos = context?.setMemos;
    const pathName = usePathname();
    const router = useRouter();
    const [activeLink, setActiveLink] = useState("");

    useEffect(() => {
        setActiveLink(pathName);
    }, [pathName]);

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
        <>
            <div className="relative md:hidden">
                <div className="absolute top-4 left-4">
                    <p
                        className="px-4 py-1 text-blue-500 border border-blue-500 rounded-md"
                        onClick={() => setShowMobileMenu(true)}
                    >
                        AllMemo
                    </p>
                </div>
            </div>
            {showMobileMenu && (
                <div className="w-full h-screen fixed inset-0 bg-black/80 text-gray-200 z-50 overflow-y-scroll">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative flex flex-col"
                    >
                        <button
                            onClick={() => setShowMobileMenu(false)}
                            className="absolute top-8 right-8"
                        >
                            <AiOutlineCloseCircle className="size-8" />
                        </button>
                        <h2 className="text-2xl font-bold pt-8 px-4">📝メモ一覧</h2>
                        <button
                            onClick={createMemo}
                            className="p-4"
                        >
                            <FaRegPlusSquare className="size-6" />
                        </button>
                        <ul className="">
                            {memos?.map((memo) => (
                                <Link
                                    key={memo._id}
                                    href={`/site/memo/${memo._id}`}
                                    onClick={() => setShowMobileMenu(false)}
                                >
                                    <li className={`py-2 px-4 border-b border-gray-600 ${activeLink === "/site/memo/" + memo._id && "bg-gray-600"}`}>
                                        <p className="text-sm mb-1">{formatDate(memo.createdAt)}</p>
                                        <h3 className="text-xl mb-2">{memo.icon} {memo.title.length > 10
                                            ? memo.title.slice(0, 10) + "..."
                                            : memo.title
                                        }
                                        </h3>
                                        <p>
                                            {memo.description.length > 20
                                                ? memo.description.slice(0, 20) + "..."
                                                : memo.description
                                            }
                                        </p>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default MobileMenu;