
import { formatDate } from '@/app/lib/utils';

type Props = {
    date: string;
};

const Date = ({ date }: Props) => {
    return (
        <p className='text-gray-600 dark:text-white font-semibold'>
            {formatDate(date)}
        </p>
    );
};

export default Date;