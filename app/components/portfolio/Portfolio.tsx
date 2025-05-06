
import React from 'react'
import SubTitle from '../common/SubTitle';
import type { Portfolio } from '@/app/lib/microcms';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../common/Container';
import AuthGard from '../common/AuthGuard';

type Props = {
    data: Portfolio[];
};

const Portfolio = ({ data }: Props) => {
    return (
        <AuthGard>
            <Container>
                <SubTitle text='Portfolio' />
                <p>Below is a list of projects I created while learning through hands-on application development.</p>
                <span className='text-gray-400 text-xs'>以下は、実際のアプリケーション制作を通じて学習してきた成果物の一覧です。
                    <br />カードをクリックし詳細をご覧いただけます。
                </span>
                <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {data.map((article) => (
                        <Link
                            href={`/portfolio/${article.id}`}
                            key={article.id}
                            style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)" }}
                            className='bg-gray-200 p-6 rounded-lg shadow-md hover:scale-105 duration-300'
                        >
                            <Image
                                className='w-full rounded-lg mb-2'
                                src={article.image.url}
                                alt='image'
                                width={article.image.width}
                                height={article.image.height}
                                priority
                            />
                            <h2 className='text-xl text-gray-600 font-bold'>{article.title}</h2>
                        </Link>

                    ))}
                </div>
            </Container>
        </AuthGard>
    );
};

export default Portfolio;