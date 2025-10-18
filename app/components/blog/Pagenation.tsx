
import Link from 'next/link';
import { BLOG_LIST_LIMIT } from '@/app/constants';

type Props = {
    totalCount: number;
    current?: number;
    basePath?: string;
};

const Pagenation = ({ totalCount, current = 1, basePath = '/site/blog' }: Props) => {
    const page = Array.from(
        { length: Math.ceil(totalCount / BLOG_LIST_LIMIT) },
        (_, i) => i + 1,
    );

    return (
        <div className='py-10'>
            <ul className='flex items-center justify-center gap-5'>
                {page.map((p) => (
                    <li key={p}>
                        {p !== current
                            ? (
                                <Link href={`${basePath}/p/${p}`}>
                                    {p}
                                </Link>
                            )
                            : (
                                <span className='bg-gray-400 px-3 py-2 rounded-md'>
                                    {p}
                                </span>
                            )
                        }
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagenation;