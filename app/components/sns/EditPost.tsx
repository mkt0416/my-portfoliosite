
'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/app/context/AuthProvider";
import { FaImage } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";

type Props = {
    id: string;
};

const EditPost = ({ id }: Props) => {
    const router = useRouter();
    const context = useContext(AuthContext);
    const currentUser = context?.currentUser;
    const [desc, setDesc] = useState('');
    const [img, setImg] = useState('');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const getPost = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts/${id}`);
            const jsonData = await response.json();
            const { desc, img } = jsonData;
            setDesc(desc);
            setImg(img || '');
        };
        getPost();
    }, [id]);

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
            await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: currentUser?._id,
                    desc: desc,
                    img: imageUrl || img,
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
                <p className="text-sm font-semibold mb-2 ml-2">・投稿内容</p>
                <input
                    className="w-full rounded-md border py-3 px-4 focus:outline-none mb-10"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    type="text"
                />
                <p className="text-sm font-semibold mb-2 ml-2">・画像</p>
                {img
                    ? (
                        <Image
                            style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.5)' }}
                            className="w-full rounded-md"
                            src={img}
                            alt="postImage"
                            width={400}
                            height={400}
                        />
                    )
                    : <Image
                        style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.5)' }}
                        className="w-full rounded-md"
                        src={'/images/no-image.png'}
                        alt="postImage"
                        width={400}
                        height={400}
                    />
                }
                <div className="flex justify-between items-center mt-10">
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
                            disabled={!imageFile}
                            type="button"
                            onClick={handleUploadImage}
                            className="text-white text-xs bg-gray-600 rounded-full py-1 px-3 disabled:hidden"
                        >
                            画像再アップロード
                        </button>
                    </label>
                    <button
                        type="submit"
                        className="flex items-center gap-1 text-sm self-end sm:self-center border border-blue-300 text-blue-500 py-2 px-3
                            rounded-md hover:bg-blue-50 duration-300"
                    >
                        <FaFilePen className="size-4" />
                        <span>投稿編集</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditPost;