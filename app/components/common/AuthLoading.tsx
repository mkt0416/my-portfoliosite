
type Props = {
    text: string;
};

const AuthLoading = ({ text }: Props) => {
    return (
        <div className='w-full flex items-center justify-center'>
            <div className="flex flex-col items-center gap-2">
                <div className='w-12 h-12 border-4 border-blue-500 rounded-full border-t-transparent animate-spin'>
                </div>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default AuthLoading;