
import { WinModalType } from "./WinAppTableList";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdCheckboxOutline } from "react-icons/io";
import { IoBulbOutline } from "react-icons/io5";
import { FaRegHandPointRight } from "react-icons/fa";
import { motion } from 'framer-motion';

type Props = {
    modalData: WinModalType | null;
    onclose: () => void;
}
const WinModal = ({ modalData, onclose }: Props) => {

    if (!modalData) return null;

    return (
        <div
            onClick={onclose}
            className="fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-sm px-8"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-700 pt-4 pb-12 sm:pt-8 sm:pb-16 px-6 sm:px-14 rounded-xl flex flex-col gap-8 relative"
            >
                <div className="relative">
                    <div className="flex items-center gap-2 text-base sm:text-2xl font-extrabold border-b-2 border-gray-200 pb-1">
                        <IoBulbOutline className="size-5 sm:size-8 text-yellow-400" />
                        <h1 className="">Learning Point</h1>
                    </div>
                    <div
                        onClick={onclose}
                        className="absolute top-1 right-2 hover:bg-gray-100 duration-300 rounded cursor-pointer"
                    >
                        <IoCloseSharp className="size-4 sm:size-6" />
                    </div>
                </div>
                <div className="flex items-end gap-10">
                    <ul>
                        {modalData.learning.map((data, index) => (
                            <li key={index} className="mb-5 flex items-center gap-3 text-xs sm:text-sm border-b border-gray-200 pb-1">
                                <IoMdCheckboxOutline className="w-5 h-5 sm:w-7 sm:h-7 text-green-600 flex-shrink-0" />
                                {data}
                            </li>
                        ))}
                    </ul>
                    <FaRegHandPointRight className="-rotate-45 size-8 sm:size-12 absolute bottom-7 left-6 sm:left-10" />
                </div>
            </motion.div>
        </div>
    );
};

export default WinModal;