
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
    comments: [];
    createdAt: string;
};

export type CommentType = {
    _id: string;
    userId: string;
    usernaem: string;
    text: string;
    createdAt: string;
};