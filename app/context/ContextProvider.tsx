
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

type Location = {
    lat: number;
    lng: number;
} | null;

export type AppContextType = {
    currentUser: User | null;
    loggedIn: boolean;
    memos: Memo[];
    location: Location;
    setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    setMemos: React.Dispatch<React.SetStateAction<Memo[]>>;
    setLocation: React.Dispatch<React.SetStateAction<Location>>
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [memos, setMemos] = useState<Memo[]>([]);
    const [location, setLocation] = useState<Location>(null);

    return (
        <AppContext.Provider value={{
            currentUser,
            loggedIn,
            memos,
            location,
            setCurrentUser,
            setLoggedIn,
            setMemos,
            setLocation,
        }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default ContextProvider;