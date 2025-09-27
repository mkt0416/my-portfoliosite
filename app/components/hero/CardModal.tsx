
import { CardModalDataType } from "./CardSection";
import { motion } from "framer-motion";
import { FaCheckSquare } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

type Props = {
    modalData: CardModalDataType | null;
    onclose: () => void;
};

const CardModal = ({ modalData, onclose }: Props) => {
    if (!modalData) return;

    return (
        <div
            onClick={onclose}
            className="fixed inset-0 bg-black/65 backdrop-blur-sm flex justify-center items-center px-8 z-50"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl flex flex-col gap-5 bg-white p-8 rounded-xl relative
              dark:bg-gray-600 dark:text-white"
            >
                <button
                    onClick={onclose}
                    className="absolute top-5 right-5 hover:bg-gray-300 rounded duration-300"
                >
                    <IoClose className="md:size-6" />
                </button>
                <div className="border-b pb-3">
                    <div className="flex items-center gap-1 mb-1">
                        <FaCheckSquare className="md:size-5 text-green-500" />
                        <h2 className="text-base md:text-xl font-bold">使用技術</h2>
                    </div>
                    <ul className="flex flex-wrap items-center gap-5 text-sm md:text-base">
                        {modalData.details.technologies.map((tec, index) => (
                            <li key={index}>
                                {tec}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="border-b pb-3">
                    <div className="flex items-center gap-1 mb-1">
                        <FaCheckSquare className="md:size-5 text-green-500" />
                        <h2 className="md:text-xl font-bold">主な機能</h2>
                    </div>
                    <ul className="text-sm md:text-base">
                        {modalData.details.features.map((feat, index) => (
                            <li key={index}>
                                {feat}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="border-b pb-3">
                    <div className="flex items-center gap-1 mb-1">
                        <FaCheckSquare className="md:size-5 text-green-500" />
                        <h2 className="md:text-xl font-bold">説明</h2>
                    </div>
                    <p className="text-sm md:text-base">{modalData.details.challenge}</p>
                </div>
            </motion.div>
        </div>
    );
};

export default CardModal;