
import { ReactNode } from "react";

type Props = {
    href: string;
    text: string;
    children: ReactNode;
};

const UrlLink = ({ href, text, children }: Props) => {
    return (
        <a href={href}
            style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)" }}
            className='flex items-center gap-1 bg-yellow-300 px-3 py-2 
            rounded-md hover:bg-yellow-400 duration-300' target='_blank'
        >
            {children}
            <p>{text}</p>
        </a>
    );
};

export default UrlLink;