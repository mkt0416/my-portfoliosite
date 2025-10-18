
import { formatDate } from '@/app/lib/utils';

type Props = {
    date: string;
};

const CatBlogDate = ({ date }: Props) => {
    return (
        <p className='text-gray-600 dark:text-white font-semibold'>
            {formatDate(date)}
        </p>
    );
};

export default CatBlogDate;