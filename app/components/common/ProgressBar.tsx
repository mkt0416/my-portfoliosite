
'use client'
import { AuthContext } from '@/app/context/AuthProvider';
import React, { useContext, useEffect, useState } from 'react';

const ProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState<number>(0);
    const context = useContext(AuthContext);
    const currentUser = context?.currentUser;

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / scrollHeight) * 100;
            setScrollProgress(progress);
        };
        window.addEventListener('scroll', updateProgress);
        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    if (!currentUser) return null;

    return (
        <div className='fixed top-0 left-0 w-full h-2 bg-gray-400 z-50'>
            <div className='w-full h-2 bg-blue-400 transition-all duration-100'
                style={{ width: `${scrollProgress}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;