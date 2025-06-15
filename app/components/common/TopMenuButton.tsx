
'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { BsArrowUpSquare } from "react-icons/bs";

const TopMenuButton = () => {
    const [scrolling, setScrolling] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`${scrolling ? 'fixed bottom-12 lg:bottom-0 right-1 z-50' : 'hidden'}`}>
            <Link href={'#home'}>
                <button>
                    <BsArrowUpSquare
                        size={40}
                    />
                </button>
            </Link>
        </div>
    );
};

export default TopMenuButton;