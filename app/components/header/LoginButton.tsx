
import Link from "next/link";
import { MdLogin } from "react-icons/md";

const LoginButton = () => {
    return (
        <Link href={'/auth/login'}>
            <button
                className='flex items-center font-semibold text-indigo-500 border border-indigo-500
                py-2 px-4 rounded-md hover:bg-indigo-100 duration-300'
            >
                <span className="hidden sm:flex">Signin</span>
                <MdLogin className='size-5' />
            </button>
        </Link>
    );
};

export default LoginButton;