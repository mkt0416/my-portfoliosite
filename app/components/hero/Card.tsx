
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
            className="w-full flex flex-col justify-between gap-3 items-center hover:scale-105 duration-300 bg-indigo-300 py-6
            rounded-xl shadow-xl"
        >
            <Image
                className="h-56"
                src={card.image}
                alt="cardimage"
                width={200}
                height={200}
            />
            <h2 className="text-2xl md:text-4xl font-extrabold">{card.title}</h2>
        </Link>
    );
};

export default Card;