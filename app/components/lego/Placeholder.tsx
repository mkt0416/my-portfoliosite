
import { TbLego } from "react-icons/tb";

const Placeholder = () => {
    return (
        <div className="w-full h-32 sm:h-80 rounded-2xl shadow-xl flex flex-col items-center justify-center
        bg-gradient-to-tl from-yellow-200 via-yellow-300 to-yellow-400"
        >
            <TbLego className="size-12 text-yellow-600" />
            <p className="text-xl sm:text-2xl font-bold">No Image</p>
        </div>
    );
};

export default Placeholder;