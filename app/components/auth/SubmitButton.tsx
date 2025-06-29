
type Props = {
    text: string;
    loading: boolean;
};

const SubmitButton = ({ text, loading }: Props) => {
    return (
        <button
            disabled={loading}
            className='w-full py-2 border border-blue-400 rounded text-blue-500 hover:bg-blue-50 duration-300 mb-4'
            type='submit'
        >
            {text}
        </button>
    );
};

export default SubmitButton;