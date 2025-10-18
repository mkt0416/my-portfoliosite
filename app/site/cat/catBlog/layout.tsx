
import Image from "next/image";
import { ReactNode } from "react";

const CatBloglayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="relative">
            <Image
                src={"/images/cat.jpg"}
                alt="bg-image"
                fill
                priority
                className="object-cover object-center brightness-90 dark:brightness-75"
            />
            <div className="relative">
                {children}
            </div>
        </div>
    );
};

export default CatBloglayout;