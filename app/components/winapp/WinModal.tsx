
import Image from "next/image";
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
            className="fixed inset-0 flex justify-center items-center bg-black/60 px-8"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-gray-700 py-4 sm:py-8 px-6 sm:px-14 rounded-xl flex flex-col gap-8 relative"
            >
                <div className="flex items-center gap-2 text-base sm:text-2xl font-extrabold border-b-2 border-gray-200 pb-1">
                    <IoBulbOutline className="size-5 sm:size-8 text-yellow-400" />
                    <h1 className="">Learning Point</h1>
                </div>
                <div className="flex items-end gap-10">
                    <ul>
                        {modalData.learning.map((data, index) => (
                            <li key={index} className="mb-5 flex items-center gap-3 text-xs sm:text-sm border-b border-gray-200 pb-1">
                                <IoMdCheckboxOutline className="size-5 sm:size-7 text-green-600" />
                                {data}
                            </li>
                        ))}
                    </ul>
                    <FaRegHandPointRight className="-rotate-45 size-8 sm:size-14 absolute bottom-14 sm:bottom-12 left-6 sm:left-10" />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hidden lg:block">
                        <span className="flex justify-end mb-3 font-semibold text-xs">{modalData.title}</span>
                        <Image
                            src={modalData.image}
                            alt="App-Image"
                            width={300}
                            height={300}
                            priority
                            className="rounded-lg"
                        />
                    </motion.div>
                </div>
                <div className="flex justify-center">
                    <button
                        className="text-xs sm:text-sm bg-gray-200 py-2 px-4 rounded-md flex items-center gap-1 dark:bg-gray-500"
                        onClick={onclose}
                    >
                        <IoCloseSharp />
                        閉じる
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default WinModal;