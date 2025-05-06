
'use client';
import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/app/context/AuthProvider';
import { useRouter } from 'next/navigation';

const AuthGuard = ({ children }: { children: ReactNode }) => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true);
    const context = useContext(AuthContext);

    if (!context) return null;

    const { currentUser, setCurrentUser } = context;

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
                const jsonData = await response.json();
                if (!response.ok) {
                    router.push('/login');
                } else {
                    setCurrentUser(jsonData.user);
                }
            } catch (err) {
                router.push('/login');
            }
            finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, [router]);

    if (!currentUser || loading) {
        return (
            <div className='w-full min-h-screen flex items-center justify-center'>
                <div className='w-20 h-20 border-4 border-blue-500 rounded-full border-t-transparent animate-spin'></div>
            </div>
        );
    }

    return <>{children}</>;
};

export default AuthGuard;
