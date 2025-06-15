
'use client'
import React, { useContext } from 'react'
import { AuthContext } from '@/app/context/AuthProvider';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ButtonLink from '../common/ButtonLink';
import { MdLogout } from "react-icons/md";

const HeroSction = () => {
    const router = useRouter();
    const context = useContext(AuthContext);
    if (!context) return null;
    const { currentUser, setCurrentUser } = context;

    const logout = () => {
        localStorage.removeItem('token');
        setCurrentUser(null);
        router.push('/login');
    };

    return (
        <div className="pb-20 md:pb-0 w-full min-h-screen bg-[linear-gradient(170deg,#f8fafc_50%,#f0e68c_50%)] flex items-center">
            <div className='w-full max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16'>
                <div className='flex flex-col lg:flex-row items-center gap-5'>
                    <div>
                        <Image
                            src={'/images/heroimage.svg'}
                            alt=''
                            width={700}
                            height={700}
                            priority
                        />
                    </div>
                    <div className='text-center lg:text-left'>
                        <h1 className='text-3xl lg:text-4xl xl:text-5xl text-gray-600 font-bold mb-5'
                            style={{ textShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)" }}
                        >
                            Welcome to My portfolio!!
                        </h1>
                        <h2 className='text-2xl text-gray-600 font-bold mb-3'>Hello!!
                            <span className="text-yellow-600 font-extrabold underline underline-offset-4 pl-2">{currentUser?.username}</span>!!
                        </h2>
                        <p className='text-gray-600 font-semibold mb-8'> I&apos;m a beginner web developer who is just starting to learn about clean code and thoughtful design.
                            <br />
                            I&apos;m eager to improve and learn from more experienced developers.
                        </p>
                        <div>
                            <div className='flex items-center justify-center md:justify-start gap-5'>
                                <ButtonLink href='/portfolio'>Portfolio</ButtonLink>
                                <button
                                    onClick={logout}
                                    className='bg-gray-600 text-white px-5 py-3 font-bold rounded-full
                                        flex items-center gap-1 hover:bg-gray-800 duration-300'
                                    style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)" }}
                                >
                                    Logout
                                    <MdLogout />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSction;