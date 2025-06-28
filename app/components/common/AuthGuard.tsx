
'use client';
import { useRouter } from 'next/navigation';
import { ReactNode, useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/app/context/AuthProvider';
import { jwtDecode } from 'jwt-decode';
import Loading from './Loading';

type DecodedToken = {
    exp: number;
    [key: string]: any;
};

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
                    router.push('/auth/login');
                    return;
                }

                const dedoded: DecodedToken = jwtDecode(token);
                const isExpired = dedoded.exp * 1000 < Date.now();
                if (isExpired) {
                    router.push('/auth/login');
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
                    router.push('/auth/login');
                } else {
                    setCurrentUser(jsonData.user);
                }
            } catch (err) {
                router.push('/auth/login');
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
