
import Image from "next/image";

type Props = {
    text: string;
};

const CoverPicture = ({ text }: Props) => {
    return (
        <div className="relative w-full h-[120px] md:h-[200px] lg:h-[300px]">
            <Image
                className="object-cover brightness-75"
                src={"/images/SNS.jpg"}
                alt="coverPicture"
                fill
                priority
            />
            <div className="absolute w-full h-full flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-white text-4xl md:text-6xl font-bold mb-3">Circle</h1>
                    <p className="text-xl text-white">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default CoverPicture