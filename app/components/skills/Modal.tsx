
import { ModalDataType } from "./Skills";
import { motion } from 'framer-motion';

type Props = {
    modalData: ModalDataType | null;
    onclose: () => void;
};

const Modal = ({ modalData, onclose }: Props) => {
    if (!modalData) return null;

    const { icon, textColor, bgColor, title, desc, proficiency, experience } = modalData;

    return (
        <div
            className="w-full h-full fixed inset-0 bg-black/65 backdrop-blur-sm z-40 flex justify-center items-center p-8"
            onClick={onclose}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-lg bg-white dark:bg-gray-600 rounded-xl p-8 flex flex-col"
            >
                <div className="flex items-center justify-center gap-1 text-2xl font-bold sm:text-4xl mb-10">
                    <span className={`${textColor}`}>{icon}</span>
                    <h3 className="text-center">{title}</h3>
                </div>
                {proficiency && (
                    <div className="w-full mb-10">
                        <p className="text-sm sm:text-base font-bold mb-2">習熟度: {proficiency}%</p>
                        <div className="bg-gray-200 h-6 rounded-2xl">
                            <div
                                style={{ width: `${proficiency}%` }}
                                className={`${bgColor} h-6 rounded-l-2xl`}>
                            </div>
                        </div>
                    </div>
                )}
                <span className="font-bold mb-2 border-b py-2">説明</span>
                <p className="text-sm sm:text-base mb-5">{desc}</p>
                {experience && (
                    <p className="text-sm sm:text-base font-bold mb-10 border-b py-4">使用年数:{experience}</p>
                )}
                <div className="inline-block text-center">
                    <button
                        className={`text-sm sm:text-base text-white py-2 px-4 rounded-md
                        ${modalData.bgColor ? modalData.bgColor : 'bg-black'}`}
                        onClick={onclose}>
                        閉じる
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default Modal;