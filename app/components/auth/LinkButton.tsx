
import Link from "next/link";

type Props = {
    href: string;
    text: string;
};

const LinkButton = ({ href, text }: Props) => {
    return (
        <div className='flex flex-col sm:flex-row justify-between items-center'>
            <Link
                className='text-blue-500 text-sm p-2 hover:bg-blue-50 duration-300'
                href={href}
            >
                {text}
            </Link>
            <Link
                className='text-blue-500 text-sm p-2 hover:bg-blue-50 duration-300'
                href='/'
            >
                ホームへ戻る
            </Link>
        </div>
    );
};

export default LinkButton;