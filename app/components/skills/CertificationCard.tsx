
import { Dispatch, SetStateAction } from "react";
import { ModalDataType } from "./Skills";

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
            data-aos="zoom-in"
            data-aos-delay="500"
            key={item.id}
            style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)" }}
            className='bg-white dark:bg-gray-600 rounded-lg p-4 border-l-4 border-blue-500 hover:bg-blue-50 duration-300
            cursor-pointer'
        >
            <span className='text-gray-600 dark:text-white font-bold'>{item.title}</span>
        </li>
    );
};

export default CertificationCard;