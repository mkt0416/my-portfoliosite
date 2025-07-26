
import { Dispatch, SetStateAction } from "react";
import { ModalDataType } from "./Skills";
import { FaCheck } from "react-icons/fa";

type Props = {
    item: {
        id: string;
        title: string;
        desc: string;
    };
    setModalData: Dispatch<SetStateAction<ModalDataType | null>>
}

const CertificationCard = ({ item, setModalData }: Props) => {
    return (
        <li
            onClick={() => setModalData({
                title: item.title,
                desc: item.desc,
            })}
            key={item.id}
            style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)" }}
            className='bg-white dark:bg-gray-600 rounded-lg p-4 border-l-4 border-blue-500 hover:bg-blue-50 duration-300
            cursor-pointer flex justify-between items-center gap-2 relative'
        >
            <span className='text-gray-600 text-sm sm:text-base dark:text-white font-bold'>{item.title}</span>
            <span
                data-aos="fade"
                data-aos-delay="500"
                className=" absolute right-0 top-0 sm:-top-5 text-indigo-600 text-3xl sm:text-5xl">
                <FaCheck />
            </span>
        </li>
    );
};

export default CertificationCard;