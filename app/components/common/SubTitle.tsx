
type Props = {
    text: string;
};

const SubTitle = ({ text }: Props) => {
    return (
        <div className='inline-block'>
            <div className='bg-indigo-500 text-sm sm:text-xl text-white font-semibold px-5 py-3 rounded-full mb-5 sm:mb-10'>
                <h2>{text}</h2>
            </div>
        </div>
    );
};

export default SubTitle;