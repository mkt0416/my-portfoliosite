
import Image from 'next/image';
import Link from 'next/link';
import { Portfolio } from './portfolioData';
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from 'react-icons/fi';
import { IoArrowUndoCircle } from "react-icons/io5";
import UrlLink from './UrlLink';

type Props = {
    data: Portfolio;
};

const PortfolioDetail = ({ data }: Props) => {
    return (
        <div className='w-full max-w-screen-md mx-auto px-8 md:px-12 lg:px-16'>
            <div
                style={{ boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)" }}
                className='bg-gray-200 dark:bg-gray-600 p-5 sm:p-10 md:p-20 rounded-lg  flex flex-col items-center gap-10 relative'
            >
                <span className='absolute top-2 right-2'>
                    <Link href={'/site/portfolio'}>
                        <IoArrowUndoCircle size={40} className='text-gray-600 dark:text-white' />
                    </Link>
                </span>
                <h1 className='text-xl md:text-4xl text-gray-600 font-bold mt-5 sm:mt-0'>{data.title}</h1>
                <Image
                    style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)" }}
                    className='w-full rounded-lg shadow-md'
                    src={data.image}
                    alt='image'
                    width={600}
                    height={600}
                    priority
                />
                <p className='max-w-screen-xl'>{data.description}</p>
                <div className='flex flex-wrap justify-center items-center gap-5 text-lg font-semibold mt-10'>
                    <UrlLink
                        href={data.projectUrl}
                        text='URL'
                    >
                        <FiExternalLink />
                    </UrlLink>
                    <UrlLink
                        href={data.githubUrl}
                        text='URL'
                    >
                        <FaGithub />
                    </UrlLink>
                    {data.githubUrlBackend && (
                        <UrlLink
                            href={data.githubUrlBackend}
                            text='BackendURL'
                        >
                            <FaGithub />
                        </UrlLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetail;