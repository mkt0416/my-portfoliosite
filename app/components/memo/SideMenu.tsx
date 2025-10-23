
"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { AppContext } from "@/app/context/ContextProvider";
import { useContext, useEffect } from "react";
import { logout } from "@/app/utils/logout";
import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { FaRegPlusSquare } from "react-icons/fa";
import { formatDate } from "@/app/lib/utils";
import { DragDropContext, Draggable, Droppable, DropResult } from "@hello-pangea/dnd";

const SideMenu = () => {
    const { memoId } = useParams();
    const router = useRouter();
    const context = useContext(AppContext);
    const currentUser = context?.currentUser;
    const memos = context?.memos;
    const setMemos = context?.setMemos;

    useEffect(() => {
        if (!setMemos || !currentUser) return;

        setMemos([]);

        const getAllMemos = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/memo`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                const allMemos = await response.json();
                setMemos(allMemos);
            } catch (err) {
                console.log(err);
            }
        };
        getAllMemos();
    }, []);


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

    const onDragEnd = async (result: DropResult) => {
        if (!result.destination) return;
        const items = Array.from(memos ?? []);
        const [reorderItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderItem);

        setMemos?.(items);

        const updatePosition = items.map((memo, index) => ({
            _id: memo._id,
            position: index,
        }));

        try {
            await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/memo/reorder`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({
                    updatePosition,
                }),
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="hidden md:flex flex-col w-72 bg-gray-200 dark:bg-gray-600 pt-5 text-gray-700 dark:text-gray-200
         h-screen overflow-y-scroll"
        >
            <div className="flex items-center justify-between px-2 md:px-4">
                <div className="flex items-center gap-1">
                    <FaUser className="md:size-5" />
                    <h1 className="text-xs md:text-xl font-bold">{currentUser?.username}</h1>
                </div>
                <button onClick={() => logout(context, router)}>
                    <MdLogout className="size-4 md:size-7" />
                </button>
            </div>
            <div className="mt-10">
                <div className="flex items-center gap-5 px-2 md:px-6">
                    <h2 className="text-sm md:text-xl">メモの追加</h2>
                    <button onClick={createMemo}>
                        <FaRegPlusSquare className="size-4 md:size-6" />
                    </button>
                </div>
            </div>
            <div className="mt-10">
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="memos">
                        {(provided) => (
                            <ul
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {memos?.map((memo, index) => (
                                    <Draggable
                                        key={memo._id}
                                        draggableId={memo._id}
                                        index={index}
                                    >
                                        {(provided, snapShot) => (
                                            <li
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className={`${memo._id === memoId ? "bg-gray-600 text-gray-200" : ""} pl-2 md:pl-4 py-2
                                                ${snapShot.isDragging ? "bg-gray-600/80" : ""}`}
                                            >
                                                <Link href={`/site/memo/${memo._id}`}>
                                                    <p className="text-xs mb-1">{formatDate(memo.createdAt)}</p>
                                                    <h3 className=" text-sm md:text-lg mb-1">{memo.icon} {memo.title.length > 10
                                                        ? memo.title.slice(0, 10) + "..."
                                                        : memo.title
                                                    }
                                                    </h3>
                                                    <p className="text-xs">
                                                        {memo.description.length > 20
                                                            ? memo.description.slice(0, 20) + "..."
                                                            : memo.description
                                                        }
                                                    </p>
                                                </Link>
                                            </li>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </ul>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        </div>
    );
};

export default SideMenu;