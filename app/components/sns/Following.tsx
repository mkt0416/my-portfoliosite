
import Image from "next/image"
import Link from "next/link"
import SnsLoading from "./SnsLoading";
import { UserType } from "@/app/lib/snsTypes";
import { RiUserUnfollowLine } from "react-icons/ri";

type Props = {
    friend: UserType;
    handleUnFollow: (friendId: string) => Promise<void>;
    loading: boolean;
};

const Following = ({ friend, loading, handleUnFollow }: Props) => {
    return (
        <div
            className="flex justify-between items-center border-b"
        >
            <Link
                href={`/snsprofile/${friend.username}`}
                className="flex items-center gap-2 py-4">
                {loading
                    ? <SnsLoading />
                    : (
                        <Image
                            className="w-10 h-10 rounded-full object-cover border-2 border-yellow-400"
                            src={friend.profilePicture
                                ? friend.profilePicture
                                : '/images/persons/noAvatar.png'
                            }
                            alt="profilePicture"
                            width={50}
                            height={50}
                            priority
                        />
                    )
                }
                <p>{friend.username}</p>
            </Link>
            <button
                onClick={() => handleUnFollow(friend._id)}
                className="flex items-center gap-1 border border-blue-300 text-blue-500 text-sm py-2 px-3 rounded-md
                       hover:bg-blue-50 duration-300"
            >
                <span><RiUserUnfollowLine /></span>
                <p className="hidden sm:block">アンフォロー</p>
            </button>
        </div>
    );
};

export default Following;