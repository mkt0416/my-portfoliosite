
import React from 'react'
import type { Category } from '@/app/lib/microcms';

type Props = {
    category: Category;
};

const Category = ({ category }: Props) => {
    return (
        <div
            style={{ boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)" }}
            className='bg-yellow-300 px-2 py-1 text-gray-700 rounded-md'
        >
            {category.name}
        </div>
    );
};

export default Category;