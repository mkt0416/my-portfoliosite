
import { MdLogout } from "react-icons/md"

type Props = {
    logout: () => void;
};

const LogoutButton = ({ logout }: Props) => {
    return (
        <button
            onClick={logout}
            className='flex items-center font-semibold text-indigo-500 border border-indigo-500 p-1 text-sm
           sm:text-base sm:p-2 rounded-md hover:bg-indigo-100 duration-300'
        >
            <span className="hidden sm:flex">Signout</span>
            <MdLogout className='size-4 sm:size-6' />
        </button>
    );
};

export default LogoutButton;