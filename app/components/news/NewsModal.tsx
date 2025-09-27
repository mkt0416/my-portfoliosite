
import { ModalData } from "./News";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

type Props = {
    modalData: ModalData | null;
    onclose: () => void;
};

const NewsModal = ({ modalData, onclose }: Props) => {
    if (!modalData) return null;

    return (
        <div
            className="w-full fixed inset-0 bg-black/65 backdrop-blur-sm z-40 flex justify-center items-center p-3"
            onClick={onclose}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white dark:bg-gray-600 rounded-xl p-4 md:p-10
                relative"
            >
                <button
                    onClick={onclose}
                    className="absolute top-2 md:top-5 right-3 md:right-5 hover:bg-gray-300 rounded duration-300"
                >
                    <IoClose className="md:size-6" />
                </button>
                <h2 className="text-lg md:text-xl font-bold mb-5">{modalData.title}</h2>
                <p className="text-xs md:text-base leading-relaxed">{modalData.text}</p>
            </motion.div>
        </div>
    );
};

export default NewsModal;