
import LoginForm from "../components/login/LoginForm";
import { FaUser } from "react-icons/fa";

const Page = () => {
    return (
        <div className='w-full max-w-screen-sm mx-auto px-8'>
            <div className='mt-20'>
                <div className='flex items-center gap-2 text-xl text-gray-600'>
                    <FaUser />
                    <h1>ログイン</h1>
                </div>
                <LoginForm />
            </div>
        </div>
    );
};

export default Page;