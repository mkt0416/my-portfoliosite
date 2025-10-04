
"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SingleMap from "./SingleMap";
import Image from "next/image";

const SingleWorks = ({ siteId }: { siteId: string }) => {
    const router = useRouter();
    const [siteName, setSiteName] = useState("");
    const [image, setImage] = useState("");
    const [workDescription, setWorkDescription] = useState("");
    const [feedback, setFeedback] = useState("");
    const [location, setLocation] = useState<{ lat: number, lng: number } | null>(null);

    useEffect(() => {
        const getSingleWorks = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/map/${siteId}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    },
                });
                const jsonData = await response.json();
                const { siteName, image, workDescription, feedback, location } = jsonData;
                setSiteName(siteName);
                setImage(image);
                setWorkDescription(workDescription);
                setFeedback(feedback);
                setLocation(location);
            } catch (err) {
                console.log(err);
            }
        };
        getSingleWorks();
    }, [siteId]);

    const updateWork = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/map/${siteId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    siteName,
                    workDescription,
                    feedback,
                })
            });
            router.push("/site/map");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="my-10 md:my-20 flex flex-col items-center gap-10">
            <div className="w-full flex flex-col xl:flex-row gap-10 items-end">
                <div className="w-full h-auto shadow-2xl">
                    <SingleMap
                        location={location}
                        siteName={siteName}
                    />
                </div>
                {image && (
                    <Image
                        className="w-full h-auto rounded-md object-cover shadow-2xl"
                        src={image}
                        alt="site-image"
                        width={500}
                        height={500}
                        priority
                    />
                )}
            </div>
            <form
                onSubmit={updateWork}
                className="w-full max-md:order-2"
            >
                <label className="block text-sm sm:text-base text-blue-600 dark:text-gray-200 mb-3 pl-2">現場名</label>
                <input
                    value={siteName}
                    onChange={(e) => setSiteName(e.target.value)}
                    className="w-full p-2 rounded-md outline-none border mb-4 placeholder:text-sm dark:bg-gray-500"
                    type="text"
                    placeholder="現場名を入力"
                />
                <label className="block text-sm sm:text-base text-blue-600 dark:text-gray-200 mb-3 pl-2">作業内容</label>
                <textarea
                    value={workDescription}
                    onChange={(e) => setWorkDescription(e.target.value)}
                    placeholder="作業内容を入力"
                    rows={10}
                    className="w-full p-2 rounded-md outline-none border mb-4 placeholder:text-sm dark:bg-gray-500"></textarea>
                <label className="block text-sm sm:text-base text-blue-600 dark:text-gray-200 mb-3 pl-2">感想・課題</label>
                <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="感想・課題を入力"
                    rows={10}
                    className="w-full p-2 rounded-md outline-none border mb-4 placeholder:text-sm dark:bg-gray-500"></textarea>
                <button
                    type="submit"
                    className="w-full text-xs sm:text-base text-blue-600 border border-blue-600 bg-blue-50 rounded-md py-2 px-4
                  hover:bg-blue-100 duration-300 dark:text-gray-200 dark:bg-blue-700 dark:border-blue-200 dark:bg-none
                  dark:hover:bg-blue-600"
                >
                    作業内容を編集
                </button>
            </form>
        </div>
    );
};

export default SingleWorks;