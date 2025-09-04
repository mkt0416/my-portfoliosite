
'use client'
import { createContext, ReactNode, useState } from 'react';

type User = {
    _id: string;
    username: string;
    desc: string;
    profilePicture: string;
    coverPicture: string;
    followers: string[];
    followings: string[];
};

type Memo = {
    _id: string;
    icon: string;
    title: string;
    description: string;
    createdAt: string;
};

type AuthContextType = {
    currentUser: User | null;
    loggedIn: boolean;
    memos: Memo[];
    setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    setMemos: React.Dispatch<React.SetStateAction<Memo[]>>;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [memos, setMemos] = useState<Memo[]>([]);

    return (
        <AuthContext.Provider value={{
            currentUser,
            loggedIn,
            memos,
            setCurrentUser,
            setLoggedIn,
            setMemos,
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;