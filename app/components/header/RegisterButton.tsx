
import Link from "next/link";
import { FaUserPlus } from "react-icons/fa";

const RegisterButton = () => {
    return (
        <Link href={'/auth/register'}>
            <button
                className='flex items-center gap-1 font-semibold bg-indigo-500 text-white
                py-2 px-4 rounded-md hover:bg-indigo-400 duration-300'
            >
                <span className="hidden sm:flex">Signup</span>
                <FaUserPlus className='size-5' />
            </button>
        </Link>
    );
};

export default RegisterButton;