
'use client'
import Image from "next/image";
import { useContext, useState } from "react";
import { AuthContext } from "@/app/context/AuthProvider";
import { FaImage } from "react-icons/fa";

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
            data.append('upload_preset', `${process.env.NEXT_PUBLIC_UPLOAD_PRESET}`);
            data.append('cloud_name', `${process.env.NEXT_PUBLIC_CLOUD_NAME}`);

            const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`, {
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
                className="bg-white border rounded-xl p-6 sm:p-10"
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
                    className="w-full rounded-md border py-3 px-4 focus:outline-none mb-5 placeholder:text-sm"
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
                            <FaImage className="text-blue-600 text-2xl" />
                            <p className="text-sm">写真選択</p>
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
                        className="text-white text-xs sm:text-lg self-end sm:self-center bg-blue-600 py-1 px-3
                            rounded-lg hover:bg-blue-500 duration-300 disabled:bg-blue-300"
                    >
                        投稿
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Share;