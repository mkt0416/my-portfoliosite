
'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const AuthGuard = ({ children }: { children: ReactNode }) => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    router.push('/login');
                    return;
                }

                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify-token`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    router.push('/login');
                    return;
                } else {
                    setLoading(false);
                }
            } catch (err) {
                router.push('/login');
            }
        };
        checkAuth();
    }, []);

    if (loading) {
        return (
            <div className='w-full min-h-screen flex items-center justify-center'>
                <div className='w-20 h-20 border-4 border-blue-500 rounded-full border-t-transparent animate-spin'></div>
            </div>
        );
    }

    return <>{children}</>;
};

export default AuthGuard;
