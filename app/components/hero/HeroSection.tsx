
import Image from 'next/image';

const HeroSection = () => {
    return (
        <div className='bg-blue-100 dark:bg-gray-600'>
            <section className='w-full min-h-screen max-w-screen-2xl mx-auto flex items-center justify-center px-8 md:px-12 lg:px-16'>
                <div className='flex flex-col md:flex-row items-center gap-5'>
                    <div>
                        <Image
                            src={'/images/heroimage.svg'}
                            alt=''
                            width={700}
                            height={700}
                            priority
                        />
                    </div>
                    <div className='text-center lg:text-left text-gray-600 dark:text-white'>
                        <h1 className='text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-5'>
                            Welcome to My portfolio!!
                        </h1>
                        <p className='font-semibold mb-8'>I&apos;m a beginner web developer who is just starting to learn about clean code and thoughtful design.
                            <br />
                            I&apos;m eager to improve and learn from more experienced developers.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;