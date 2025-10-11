
import { MdLogout } from "react-icons/md"

type Props = {
    logout: () => void;
};

const LogoutButton = ({ logout }: Props) => {
    return (
        <button
            onClick={logout}
            className='flex items-center font-semibold text-indigo-500 border border-indigo-500
            py-1 sm:py-2 px-2 sm:px-4 text-lg rounded-md hover:bg-indigo-100 duration-300'
        >
            <span className="hidden sm:flex">Signout</span>
            <MdLogout className='size-5' />
        </button>
    );
};

export default LogoutButton;