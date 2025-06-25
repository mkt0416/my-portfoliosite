
'use client'
import Image from "next/image";
import { useContext, useState } from "react";
import { AuthContext } from "@/app/context/AuthProvider";
import { FaImage } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";

const Share = () => {
    const context = useContext(AuthContext);
    const currentUser = context?.currentUser;
    const [desc, setDesc] = useState('');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState('');

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
            console.log(imageUrl);
            alert('画像アップロード成功');
        } catch (err) {
            console.log(err);
            alert('画像アップロード失敗');
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: currentUser?._id,
                    desc: desc,
                    img: imageUrl,
                })
            });
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div
                style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.5)' }}
                className="bg-white dark:bg-gray-600 border rounded-xl p-6 sm:p-10"
            >
                <Image
                    className="w-10 h-10 rounded-full border-2 border-yellow-400 object-cover mb-4"
                    src={currentUser?.profilePicture
                        ? currentUser.profilePicture
                        : '/images/persons/noAvatar.png'
                    }
                    alt="profilePicture"
                    width={50}
                    height={50}
                    priority
                />
                <h1 className="text-xs sm:text-lg font-semibold mb-4 underline">こんにちは{currentUser?.username}さん!!</h1>
                <input
                    onChange={(e) => setDesc(e.target.value)}
                    className="w-full rounded-md border py-3 px-4 focus:outline-none mb-5 placeholder:text-xs sm:placeholder:text-sm"
                    type="text"
                    placeholder="今何してるの？"
                />
                <hr className="mb-5" />
                <div className="flex items-center justify-between">
                    <label
                        className="flex flex-col sm:flex-row items-start md:items-center gap-2"
                        htmlFor="file"
                    >
                        <div className="flex items-center gap-1">
                            <FaImage className="text-blue-600 text-xl sm:text-2xl" />
                            <p className="text-xs sm:text-sm">写真選択</p>
                        </div>
                        <input
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    setImageFile(e.target.files[0])
                                }
                            }}
                            id="file"
                            style={{ display: 'none' }}
                            type="file"
                        />
                        <button
                            type="button"
                            onClick={handleUploadImage}
                            disabled={!imageFile}
                            className="text-white text-xs bg-gray-600 rounded-full py-1 px-3 disabled:hidden"
                        >
                            画像アップロード
                        </button>
                    </label>
                    <button
                        disabled={!desc}
                        type="submit"
                        className="flex items-center gap-1 border border-blue-300 py-2 px-3 rounded-md text-blue-500
                        hover:bg-blue-50 duration-300"
                    >
                        <IoIosCreate className="size-4" />
                        <p className="text-xs sm:text-sm">投稿</p>
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Share;