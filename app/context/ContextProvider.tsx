
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

export type AppContextType = {
    currentUser: User | null;
    loggedIn: boolean;
    memos: Memo[];
    setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    setMemos: React.Dispatch<React.SetStateAction<Memo[]>>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [memos, setMemos] = useState<Memo[]>([]);

    return (
        <AppContext.Provider value={{
            currentUser,
            loggedIn,
            memos,
            setCurrentUser,
            setLoggedIn,
            setMemos,
        }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default ContextProvider;