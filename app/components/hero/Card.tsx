
import Link from "next/link";
import Image from "next/image";
import { CardDataType } from "./CardSection";

type Props = {
    card: CardDataType;
};

const Card = ({ card }: Props) => {
    return (
        <Link
            href={card.link}
            className="w-full flex flex-col xl:flex-row justify-between gap-3 items-center xl:items-start
             hover:scale-105 duration-300 p-6 bg-indigo-300 rounded-xl"
        >
            <h2 className="text-2xl md:text-4xl font-extrabold">{card.title}</h2>
            <Image
                className="h-56 w-56 md:w-40"
                src={card.image}
                alt="cardimage"
                width={150}
                height={150}
            />
        </Link>
    );
};

export default Card;