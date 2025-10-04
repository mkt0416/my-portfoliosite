
"use client";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/app/context/ContextProvider";
import { FaImage } from "react-icons/fa";

const CreateForm = () => {
    const context = useContext(AppContext);
    const location = context?.location;
    const currentUser = context?.currentUser;
    const router = useRouter();
    const DEFAULT_IMAGE_URL = "/images/no-image.png";

    const [province, setProvince] = useState("");
    const [city, setCity] = useState("");
    const [neighbourhood, setNeighbourhood] = useState("");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState(DEFAULT_IMAGE_URL);
    const [siteName, setSiteName] = useState("");
    const [workDescription, setWorkDescription] = useState("");
    const [feedback, setFeedback] = useState("");

    useEffect(() => {
        const getAddress = async (lat?: number, lon?: number) => {
            if (lat === undefined || lon === undefined) {
                return;
            }
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/reverse-decode?lat=${lat}&lon=${lon}`);
                const jsonData = await response.json();
                const { province, city, neighbourhood } = jsonData.address;
                setProvince(province);
                setCity(city);
                setNeighbourhood(neighbourhood);
            } catch (err) {
                console.log(err);
            }
        };
        getAddress(location?.lat, location?.lng);
    }, [location]);

    const handleUploadImage = async () => {
        if (!imageFile) return;

        try {
            const data = new FormData();
            data.append('file', imageFile);

            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/upload`, {
                method: 'POST',
                body: data,
            });
            const jsonData = await response.json();
            setImageUrl(jsonData.url);
            alert('画像アップロード成功');
        } catch (err) {
            console.log(err);
            alert('画像アップロード失敗');
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/map`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({
                    user: currentUser?._id,
                    image: imageUrl || DEFAULT_IMAGE_URL,
                    province,
                    city,
                    neighbourhood,
                    siteName,
                    workDescription,
                    feedback,
                    location,
                })
            });
            router.push("/site/map");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="my-20">
            <div className="flex gap-5">
                <label
                    className="flex items-center gap-4 mb-6 cursor-pointer pl-2"
                    htmlFor="file"
                >
                    <div className="flex items-center gap-1 text-xl text-blue-600 dark:text-gray-200">
                        <FaImage />
                        <p className="text-xs sm:text-base">写真選択</p>
                    </div>
                    <input
                        onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                                setImageFile(e.target.files[0])
                            }
                        }}
                        id="file"
                        style={{ display: "none" }}
                        type="file"
                    />
                    <button
                        disabled={!imageFile}
                        onClick={handleUploadImage}
                        type="button"
                        className="text-xs sm:text-base text-blue-600 border border-blue-600 bg-blue-50 rounded-md py-2 px-4
                           hover:bg-blue-100 duration-300 disabled:hidden dark:text-gray-200 dark:bg-blue-700 dark:border-blue-200 dark:bg-none
                           dark:hover:bg-blue-600"
                    >
                        画像アップロード
                    </button>
                </label>
            </div>
            <p className="text-sm sm:text-base text-blue-600 dark:text-gray-200 mb-5 pl-2">{province} {city} {neighbourhood}</p>
            <form
                onSubmit={handleSubmit}
            >
                <label className="block text-sm sm:text-base text-blue-600 dark:text-gray-200 mb-3 pl-2">現場名</label>
                <input
                    onChange={(e) => setSiteName(e.target.value)}
                    className="w-full p-2 rounded-md outline-none border mb-4 placeholder:text-sm dark:bg-gray-500"
                    type="text"
                    placeholder="現場名を入力"
                />
                <label className="block text-sm sm:text-base text-blue-600 dark:text-gray-200 mb-3 pl-2">作業内容</label>
                <textarea
                    onChange={(e) => setWorkDescription(e.target.value)}
                    placeholder="作業内容を入力"
                    rows={12}
                    className="w-full p-2 rounded-md outline-none border mb-4 placeholder:text-sm dark:bg-gray-500"></textarea>
                <label className="block text-sm sm:text-base text-blue-600 dark:text-gray-200 mb-3 pl-2">感想・課題</label>
                <textarea
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="感想・課題を入力"
                    rows={12}
                    className="w-full p-2 rounded-md outline-none border mb-4 placeholder:text-sm dark:bg-gray-500"></textarea>
                <button
                    disabled={!province || !city || !neighbourhood || !imageUrl}
                    type="submit"
                    className="w-full text-xs sm:text-base text-blue-600 border border-blue-600 bg-blue-50 rounded-md py-2 px-4
                  hover:bg-blue-100 duration-300 disabled:hidden dark:text-gray-200 dark:bg-blue-700 dark:border-blue-200 dark:bg-none
                  dark:hover:bg-blue-600"
                >
                    作業内容を登録
                </button>
            </form>
        </div>
    );
};

export default CreateForm;