
type Props = {
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const HumbergerMenu = ({ setShowMenu }: Props) => {
    return (
        <div
            onClick={() => setShowMenu(true)}
            className='lg:hidden w-7 h-5 flex flex-col justify-between group overflow-hidden'
        >
            <span className='w-full h-[3px] bg-white inline-flex -translate-x-1
            group-hover:-translate-x-0 transition-transform duration-500'></span>
            <span className='w-full h-[3px] bg-white inline-flex -translate-x-3
            group-hover:-translate-x-0 transition-transform duration-500'></span>
            <span className='w-full h-[3px] bg-white inline-flex'></span>
        </div>
    );
};

export default HumbergerMenu;