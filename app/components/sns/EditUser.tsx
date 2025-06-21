
'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/app/context/AuthProvider";
import { FaImage } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";

type Props = {
    userId: string;
};

const EditUser = ({ userId }: Props) => {
    const router = useRouter();
    const context = useContext(AuthContext);
    const currentUser = context?.currentUser;
    const [username, setUsername] = useState('');
    const [desc, setDesc] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [profileImageFile, setProfileImageFile] = useState<File | null>(null);
    const [profileImageUrl, setProfileImageUrl] = useState('');
    const [coverImageFile, setCoverImageFile] = useState<File | null>(null);
    const [coverImageUrl, setCoverImageUrl] = useState('');

    useEffect(() => {
        const getPost = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users?userId=${userId}`);
            const jsonData = await response.json();
            const { username, desc, profilePicture, coverPicture } = jsonData;
            setUsername(username);
            setDesc(desc);
            setProfileImage(profilePicture);
            setCoverImage(coverPicture);
        };
        getPost();
    }, [userId]);

    const handleUploadProfileImage = async () => {
        if (!profileImageFile) return;

        try {
            const data = new FormData();
            data.append('file', profileImageFile);
            data.append('upload_preset', `${process.env.NEXT_PUBLIC_UPLOAD_PRESET}`);
            data.append('cloud_name', `${process.env.NEXT_PUBLIC_CLOUD_NAME}`);

            const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`, {
                method: 'POST',
                body: data,
            });
            const jsonData = await response.json();
            setProfileImageUrl(jsonData.url);
            alert('画像アップロード成功');
        } catch (err) {
            console.log(err);
            alert('画像アップロード失敗');
        }
    };

    const handleUploadCoverImage = async () => {
        if (!coverImageFile) return;

        try {
            const data = new FormData();
            data.append('file', coverImageFile);
            data.append('upload_preset', `${process.env.NEXT_PUBLIC_UPLOAD_PRESET}`);
            data.append('cloud_name', `${process.env.NEXT_PUBLIC_CLOUD_NAME}`);

            const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`, {
                method: 'POST',
                body: data,
            });
            const jsonData = await response.json();
            setCoverImageUrl(jsonData.url);
            alert('画像アップロード成功');
        } catch (err) {
            console.log(err);
            alert('画像アップロード失敗');
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: currentUser?._id,
                    username: username,
                    desc: desc,
                    profilePicture: profileImageUrl || profileImage,
                    coverPicture: coverImageUrl || coverImage,

                })
            });
            router.push('/sns');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div
            style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.5)' }}
            className="bg-white p-6 sm:p-20 rounded-lg border"
        >
            <form onSubmit={handleSubmit}>
                <p className="text-sm font-semibold mb-2 ml-2">・ユーザー名</p>
                <input
                    className="w-full rounded-md border py-3 px-4 focus:outline-none mb-10"
                    value={username || ''}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                />
                <p className="text-sm font-semibold mb-2 ml-2">・説明</p>
                <input
                    className="w-full rounded-md border py-3 px-4 focus:outline-none mb-10"
                    value={desc || ''}
                    onChange={(e) => setDesc(e.target.value)}
                    type="text"
                />
                <div>
                    <p className="text-sm font-semibold mb-2 ml-2">・プロフィール画像</p>
                    {profileImage && (
                        <Image
                            style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.5)' }}
                            className="w-full rounded-md"
                            src={profileImage}
                            alt="postImage"
                            width={400}
                            height={400}
                        />
                    )}
                    <label
                        className="mt-10 flex flex-col sm:flex-row items-start md:items-center gap-2"
                        htmlFor="profile"
                    >
                        <div className="flex items-center gap-1">
                            <FaImage className="text-blue-600 text-2xl" />
                            <p className="text-sm">写真選択</p>
                        </div>
                        <input
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    setProfileImageFile(e.target.files[0])
                                }
                            }}
                            id="profile"
                            style={{ display: 'none' }}
                            type="file"
                        />
                        <button
                            disabled={!profileImageFile}
                            type="button"
                            onClick={handleUploadProfileImage}
                            className="text-white text-xs bg-gray-600 rounded-full py-1 px-3 disabled:hidden"
                        >
                            画像再アップロード
                        </button>
                    </label>
                </div>
                <div className="mt-10">
                    <p className="text-sm font-semibold mb-2 ml-2">・カバー画像</p>
                    {coverImage && (
                        <Image
                            style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.5)' }}
                            className="w-full rounded-md"
                            src={coverImage}
                            alt="postImage"
                            width={400}
                            height={400}
                        />
                    )}
                    <label
                        className="mt-10 flex flex-col sm:flex-row items-start md:items-center gap-2"
                        htmlFor="cover"
                    >
                        <div className="flex items-center gap-1">
                            <FaImage className="text-blue-600 text-2xl" />
                            <p className="text-sm">写真選択</p>
                        </div>
                        <input
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    setCoverImageFile(e.target.files[0])
                                }
                            }}
                            id="cover"
                            style={{ display: 'none' }}
                            type="file"
                        />
                        <button
                            disabled={!coverImageFile}
                            type="button"
                            onClick={handleUploadCoverImage}
                            className="text-white text-xs bg-gray-600 rounded-full py-1 px-3 disabled:hidden"
                        >
                            画像再アップロード
                        </button>
                    </label>
                </div>
                <div className="mt-10 flex justify-center">
                    <button
                        type="submit"
                        className="flex items-center gap-1 text-sm self-end sm:self-center border border-blue-300 text-blue-500 py-2 px-3
                        rounded-md hover:bg-blue-50 duration-300"
                    >
                        <FaFilePen className="size-4" />
                        <span>プロフィール編集</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditUser;