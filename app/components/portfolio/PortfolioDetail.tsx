
import { Portfolio } from '@/app/lib/microcms';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from 'react-icons/fi';
import { IoArrowUndoCircle } from "react-icons/io5";
import Container from '../common/Container';

type Props = {
    data: Portfolio;
};

const PortfolioDetail = ({ data }: Props) => {
    return (
        <Container>
            <div
                style={{ boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)" }}
                className='bg-gray-200 p-5 sm:p-10 md:p-20 rounded-lg  flex flex-col items-center gap-10 relative'
            >
                <span className='absolute top-2 right-2'>
                    <Link href={'/portfolio'}>
                        <IoArrowUndoCircle size={40} className='text-gray-600' />
                    </Link>
                </span>
                <h1 className='text-xl md:text-4xl text-gray-600 font-bold mt-5 sm:mt-0'>{data.title}</h1>
                <Image
                    style={{ boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)" }}
                    className='w-full rounded-lg shadow-md'
                    src={data.image.url}
                    alt='image'
                    width={data.image.width}
                    height={data.image.height}
                    priority
                />
                <p className='max-w-screen-xl'>{data.description}</p>
                <div className='flex flex-wrap justify-center items-center gap-5 text-lg font-semibold mt-10'>
                    <a href={`${data.projecturlfrontend}`}
                        style={{ boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)" }}
                        className='flex items-center gap-1 bg-yellow-300 px-3 py-2 
                    rounded-md hover:bg-yellow-400 duration-300' target='_blank'
                    >
                        <FiExternalLink />
                        <p>URL</p>
                    </a>
                    <a href={`${data.githuburlfrontend}`}
                        style={{ boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)" }}
                        className='flex items-center gap-1 bg-yellow-300 px-3 py-2 
                    rounded-md hover:bg-yellow-400 duration-300' target='_blank'
                    >
                        <FaGithub />
                        <p>URL</p>
                    </a>
                    {data.githuburlbackend && (
                        <a href={`${data.githuburlbackend}`}
                            style={{ boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)" }}
                            className='flex items-center gap-1 bg-yellow-300 px-3 py-2 
                         rounded-md hover:bg-yellow-400 duration-300' target='_blank'
                        >
                            <FaGithub />
                            <p>backendURL</p>
                        </a>
                    )}
                </div>
            </div>
        </Container>
    );
};

export default PortfolioDetail;