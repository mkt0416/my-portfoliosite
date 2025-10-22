
import { TbLego } from "react-icons/tb";

const LegoLoading = () => {
    return (
        <div className='w-full h-96 flex items-center justify-center'>
            <div className="flex flex-col items-center gap-10">
                <TbLego className="text-yellow-500 size-16 animate-ping duration-500" />
                <p className="text-lg text-yellow-500 font-semibold">Loading...</p>
            </div>
        </div>
    );
};

export default LegoLoading;