
import { PiLego } from "react-icons/pi";

const InitialView = ({ title, text }: { title: string, text: string }) => {
    return (
        <div className="w-full h-[60vh] flex flex-col justify-center items-center text-center">
            <PiLego className="size-20 text-yellow-500 animate-bounce" />
            <h2 className="text-xl sm:text-2xl font-bold">{title}</h2>
            <p className="text-sm sm:text-base mt-2">{text}</p>
        </div>
    );
};

export default InitialView;