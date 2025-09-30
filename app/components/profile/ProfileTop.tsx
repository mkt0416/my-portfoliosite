
'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '../common/Container';

const ProfileTop = () => {
    return (
        <div className='min-h-screen h-fit flex justify-center items-start sm:items-center mt-20 sm:mt-0 mb-10'>
            <Container>
                <section className='flex flex-col md:flex-row gap-10 items-center relative'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className='flex-grow text-center lg:text-left max-md:order-2'
                    >
                        <div className='absolute left-16 xl:top-10 lg:top-12 md:top-16 w-5/12 xl:h-80 lg:h-72
                        bg-gradient-to-tl from-indigo-100 to-indigo-200 dark:bg-gray-700 dark:from-transparent dark:to-transparent
                        shadow-2xl -skew-x-12 rounded-xl hidden md:flex -z-10'
                        >
                        </div>
                        <h1 className='text-3xl md:text-4xl xl:text-5xl text-center md:text-left font-extrabold mb-5'>Makoto Saitoh</h1>
                        <p className='max-w-2xl text-center md:text-left text-gray-600 font-semibold leading-relaxed dark:text-gray-400'>
                            私は趣味でプログラミングを学んでおり、楽しみながら技術を身につけています。
                            <br />
                            JavaScript、React、Next.js中心にWeb技術の習得に励んでいます。
                            <br />
                            楽しみながら継続して技術習得に励むことを大切にしています！
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Image
                            className='rounded-full object-cover shadow-2xl -z-10'
                            src={'/images/profile.png'}
                            alt='profile'
                            width={400}
                            height={400}
                            priority
                        />
                    </motion.div>
                </section>
            </Container>
        </div >
    );
};

export default ProfileTop;