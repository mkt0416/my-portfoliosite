
'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import '../../animation/animation.css';

const ProfileTop = () => {
    return (
        <div className='min-h-[650px]'>
            <Container>
                <section className='flex flex-col lg:flex-row gap-10 items-center relative'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className='flex-grow text-center lg:text-left max-lg:order-2'
                    >
                        <div className='absolute left-16 top-0 w-5/12 h-96
                     bg-gradient-to-tl from-indigo-100 to-indigo-200 dark:bg-gray-700 dark:from-transparent dark:to-transparent
                    -z-10 shadow-2xl -skew-x-12 rounded-xl hidden lg:flex'></div>
                        <h1 className='text-3xl md:text-5xl font-extrabold mb-5'>Makoto Saitoh</h1>
                        <p className='max-w-2xl text-xs md:text-base text-gray-600 font-semibold leading-relaxed dark:text-gray-400'>
                            私は開発者として駆け出しの者で、現在JavaScript、React、Next.jsを学習しています。
                            <br />
                            まだ学ぶべきことはたくさんありますが、開発者として成長することに情熱を持っており、
                            <br />
                            一人前の信頼されるエンジニアになれるよう努力しています！
                            <br />
                            最近では、開発スキルの幅を広げるためにC#の学習も始めました。
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Image
                            className='rounded-full object-cover'
                            src={'/images/profile.png'}
                            alt='profile'
                            width={400}
                            height={400}
                            priority
                        />
                    </motion.div>
                </section>
            </Container>
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
};

export default ProfileTop;