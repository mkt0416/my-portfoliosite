
'use client';
import React, { ReactNode, useContext } from 'react';
import { AuthContext } from '@/app/context/AuthProvider';

const AuthGuard = ({ children }: { children: ReactNode }) => {
    const context = useContext(AuthContext);

    if (!context) return null;

    const { currentUser } = context;

    if (!currentUser) {
        return (
            <div className='w-full min-h-screen flex items-center justify-center'>
                <div className='w-20 h-20 border-4 border-blue-500 rounded-full border-t-transparent animate-spin'></div>
            </div>
        );
    }

    return <>{children}</>;
};

export default AuthGuard;
