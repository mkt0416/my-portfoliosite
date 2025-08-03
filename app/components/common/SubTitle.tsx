
type Props = {
    text: string;
    description?: string;
};

const SubTitle = ({ text, description }: Props) => {
    return (
        <>
            <div className='inline-block'>
                <div className='bg-indigo-500 text-sm sm:text-xl text-white font-semibold px-5 py-3 rounded-full mb-5 sm:mb-10'>
                    <h2>{text}</h2>
                </div>
            </div>
            <p className='max-w-4xl text-sm sm:text-base text-gray-600 font-semibold leading-relaxed dark:text-gray-400'>
                {description}
            </p>
        </>
    );
};

export default SubTitle;