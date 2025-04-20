
import React from 'react'
import type { Category } from '@/app/lib/microcms';

type Props = {
    category: Category;
};

const Category = ({ category }: Props) => {
    return (
        <div className='bg-yellow-300 px-3 py-2 text-gray-700 rounded-md'>{category.name}</div>
    );
};

export default Category;