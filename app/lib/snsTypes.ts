
export type UserType = {
    _id: string;
    username: string;
    desc: string;
    profilePicture: string;
    coverPicture: string;
    followers: string[];
    followings: string[];
};

export type PostType = {
    _id: string;
    userId: string;
    img: string;
    desc: string;
    likes: string[];
    createdAt: string;
};