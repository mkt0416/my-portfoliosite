
import RegisterForm from "../components/register/RegisterForm";
import { FaUser } from "react-icons/fa";

const Page = () => {
    return (
        <div className='w-full max-w-screen-sm mx-auto px-8'>
            <div className='mt-20'>
                <div className='flex items-center gap-2 text-xl text-gray-600 dark:text-white'>
                    <FaUser />
                    <h1>ユーザー登録</h1>
                </div>
                <RegisterForm />
            </div>
        </div>
    );
};

export default Page;