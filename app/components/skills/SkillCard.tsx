
import { SetStateAction } from "react";
import { ModalDataType } from "./Skills";

type Props = {
    item: {
        id: string;
        icon: JSX.Element;
        title: string;
        textColor: string;
        bgColor: string;
        desc: string;
        proficiency: number;
    };
    setModalData: (value: SetStateAction<ModalDataType | null>) => void;
};

const SkillCard = ({ item, setModalData }: Props) => {
    return (
        <div
            onClick={() => setModalData({
                icon: item.icon,
                textColor: item.textColor,
                bgColor: item.bgColor,
                title: item.title,
                desc: item.desc,
                proficiency: item.proficiency,
            })}
            data-aos="flip-left"
            data-aos-delay="500"
            style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)" }}
            className='w-full bg-white/90 dark:bg-gray-600/90 rounded-xl p-8 flex flex-col items-center hover:bg-blue-50 duration-300'
        >
            <span className={`text-7xl sm:text-9xl ${item.textColor}`}>{item.icon}</span>
            <h3 className='text-xl sm:text-3xl text-gray-600 dark:text-white font-bold mt-5'>{item.title}</h3>
        </div>
    );
};

export default SkillCard;