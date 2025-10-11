
import Image from 'next/image'

type Props = {
    image: string;
    title: string;
};

const PageHero = ({ image, title }: Props) => {
    return (
        <div className='relative w-full h-48 md:h-80'>
            <Image
                src={image}
                alt='skills-image'
                fill
                priority
                className='object-cover'
            />
            <div className='absolute inset-0 bg-black/50' />
            <div className='absolute inset-0 flex justify-center items-center'>
                <h2 className='text-4xl md:text-6xl text-white font-extrabold'>{title}</h2>
            </div>
        </div>
    );
};

export default PageHero;