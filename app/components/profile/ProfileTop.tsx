
'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '../common/Container';

const ProfileTop = () => {
    return (
        <Container>
            <section className='flex flex-col lg:flex-row gap-10 items-center relative'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className='flex-grow text-center lg:text-left max-lg:order-2'
                >
                    <h1 className='text-3xl md:text-5xl font-extrabold mb-5'>Makoto Saitoh</h1>
                    <p className='max-w-2xl text-gray-600 font-semibold leading-relaxed dark:text-gray-400'>
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
                    transition={{ duration: 0.8 }}
                >
                    <Image
                        style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)" }}
                        className='rounded-full object-cover border-4 border-yellow-400'
                        src={'/images/profile.png'}
                        alt='profile'
                        width={400}
                        height={400}
                        priority
                    />
                </motion.div>
            </section>
        </Container>
    );
};

export default ProfileTop;