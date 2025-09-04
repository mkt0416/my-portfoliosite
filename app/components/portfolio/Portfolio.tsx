
import Image from 'next/image';
import Link from 'next/link';
import type { Portfolio } from '@/app/lib/microcms';
import SubTitle from '../common/SubTitle';
import Container from '../common/Container';

type Props = {
    data: Portfolio[];
};

const Portfolio = ({ data }: Props) => {
    return (
        <Container>
            <SubTitle
                text='AppList'
                description=' 以下は、実際のアプリケーション制作を通じて学習してきた成果物の一覧です。カードをクリックし詳細をご覧いただけます。'
            />
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {data.map((article) => (
                    <Link
                        href={`/site/portfolio/${article.id}`}
                        key={article.id}
                        style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)" }}
                        className='bg-gray-200 dark:bg-gray-600 p-6 rounded-lg shadow-md hover:scale-105 duration-300'
                    >
                        <Image
                            className='w-full rounded-lg mb-2'
                            src={article.image.url}
                            alt='image'
                            width={article.image.width}
                            height={article.image.height}
                            priority
                        />
                        <h2 className='text-xl text-gray-600 dark:text-white font-bold'>{article.title}</h2>
                    </Link>
                ))}
            </div>
        </Container>
    );
};

export default Portfolio;