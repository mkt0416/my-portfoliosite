
import { ModalDataType } from "./Skills";
import { motion } from 'framer-motion';

type Props = {
    modalData: ModalDataType | null;
    onclose: () => void;
};

const Modal = ({ modalData, onclose }: Props) => {
    if (!modalData) return null;

    const { icon, textColor, bgColor, title, desc, proficiency } = modalData;

    return (
        <div
            className="w-full h-full fixed inset-0 bg-black/65 z-40 flex justify-center items-center p-8"
            onClick={onclose}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-lg bg-white dark:bg-gray-600 rounded-xl p-8 flex flex-col items-center gap-10"
            >
                <div className="flex items-center gap-1 text-2xl font-bold sm:text-4xl">
                    <span className={`${textColor}`}>{icon}</span>
                    <h3 className="text-center">{title}</h3>
                </div>
                <p className="text-sm sm:text-base">{desc}</p>
                {proficiency && (
                    <div className="w-full">
                        <p className="text-sm sm:text-base mb-2">習熟度 {proficiency}%</p>
                        <div className="bg-gray-200 h-6 rounded-2xl">
                            <div
                                style={{ width: `${proficiency}%` }}
                                className={`${bgColor} h-6 rounded-l-2xl`}>

                            </div>
                        </div>
                    </div>
                )}
                <button
                    className={`text-sm sm:text-base text-white py-2 px-4 rounded-md 
                    ${modalData.bgColor ? modalData.bgColor : 'bg-black'}`}
                    onClick={onclose}>
                    閉じる
                </button>
            </motion.div>
        </div>
    );
};

export default Modal;