
'use client';
import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/app/context/AuthProvider';
import { useRouter } from 'next/navigation';
import Loading from './Loading';

const AuthGuard = ({ children }: { children: ReactNode }) => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true);
    const context = useContext(AuthContext);

    const currentUser = context?.currentUser;
    const setCurrentUser = context?.setCurrentUser;

    useEffect(() => {
        const checkAuth = async () => {
            if (!setCurrentUser) return;
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
    }, [router, setCurrentUser]);

    if (!currentUser || loading) {
        return <Loading />
    }

    return <>{children}</>;
};

export default AuthGuard;
