
import Image from "next/image";
import { WinModalType } from "./WinAppTableList";
import { FaWindows } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from 'framer-motion';

type Props = {
    modalData: WinModalType | null;
    onclose: () => void;
}
const WinModal = ({ modalData, onclose }: Props) => {
    if (!modalData) return null;
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black/60 px-8">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 dark:bg-gray-700 py-4 sm:py-8 px-6 sm:px-14 rounded-xl flex flex-col items-center gap-8"
            >
                <div className="flex items-center gap-1 text-sm sm:text-2xl font-bold">
                    <FaWindows />
                    <h1>{modalData.title}</h1>
                </div>
                <Image
                    style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.5)' }}
                    className="w-full rounded-xl"
                    src={modalData.image}
                    alt="app-image"
                    width={400}
                    height={400}
                />
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