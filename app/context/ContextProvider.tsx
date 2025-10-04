
'use client'
import { createContext, ReactNode, useState } from 'react';
import { User } from '../lib/User';
import { Memo } from '../lib/memo';
import { Location, Works } from '../lib/map';

export type AppContextType = {
    currentUser: User | null;
    loggedIn: boolean;
    memos: Memo[];
    location: Location;
    works: Works[];
    setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    setMemos: React.Dispatch<React.SetStateAction<Memo[]>>;
    setLocation: React.Dispatch<React.SetStateAction<Location>>;
    setWorks: React.Dispatch<React.SetStateAction<Works[]>>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [memos, setMemos] = useState<Memo[]>([]);
    const [location, setLocation] = useState<Location>(null);
    const [works, setWorks] = useState<Works[]>([]);

    return (
        <AppContext.Provider value={{
            currentUser,
            loggedIn,
            memos,
            location,
            works,
            setCurrentUser,
            setLoggedIn,
            setMemos,
            setLocation,
            setWorks,
        }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default ContextProvider;