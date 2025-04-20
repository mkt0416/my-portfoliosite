
import { formatDate } from '@/app/lib/utils';
import React from 'react'

type Props = {
    date: string;
};

const Date = ({ date }: Props) => {
    return (
        <p className='text-gray-600 font-semibold'>
            {formatDate(date)}
        </p>
    );
};

export default Date;