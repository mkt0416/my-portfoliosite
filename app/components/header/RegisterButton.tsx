
import Link from "next/link";
import { FaUserPlus } from "react-icons/fa";

const RegisterButton = () => {
    return (
        <Link href={'/auth/register'}>
            <button
                className='flex items-center gap-1 font-semibold bg-indigo-500 text-white p-1 text-sm
                sm:p-2 rounded-md hover:bg-indigo-400 duration-300'
            >
                <span className="hidden sm:flex">Signup</span>
                <FaUserPlus className='size-4' />
            </button>
        </Link>
    );
};

export default RegisterButton;