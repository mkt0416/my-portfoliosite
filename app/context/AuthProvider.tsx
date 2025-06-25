
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

type AuthContextType = {
    currentUser: User | null;
    loggedIn: boolean;
    setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <AuthContext.Provider value={{
            currentUser,
            loggedIn,
            setCurrentUser,
            setLoggedIn,
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;