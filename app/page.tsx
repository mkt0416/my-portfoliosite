
import Image from 'next/image';
import React from 'react'
import ButtonLink from './components/common/ButtonLink';

const Page = () => {
    return (
        <div className="pb-20 md:pb-0 w-full min-h-screen bg-[linear-gradient(170deg,#ffffff_50%,#f0e68c_50%)] flex items-center">
            <div className='w-full max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16'>
                <div className='flex flex-col lg:flex-row items-center gap-20'>
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
                        <h1 className='text-3xl lg:text-5xl text-gray-600 font-bold mb-10'
                            style={{ textShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)" }}
                        >Welcome to My portfoliosite!!</h1>
                        <p className='text-lg text-gray-600 mb-10'> I&apos;m a beginner web developer who is just starting to learn about clean code and thoughtful design.
                            <br />
                            I&apos;m eager to improve and learn from more experienced developers.
                        </p>
                        <ButtonLink href='/portfolio'>Portfolio</ButtonLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;