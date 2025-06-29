
type Props = {
    text: string;
};

const AuthLoading = ({ text }: Props) => {
    return (
        <div className='w-full flex items-center justify-center'>
            <div className="flex flex-col items-center gap-5">
                <div className='w-12 h-12 border-4 border-blue-500 rounded-full border-t-transparent animate-spin'>
                </div>
                <p className="text-sm sm:text-base text-blue-600">{text}</p>
            </div>
        </div>
    );
};

export default AuthLoading;