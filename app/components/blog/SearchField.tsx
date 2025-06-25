
'use client'
import { useRouter } from 'next/navigation';

const SearchField = () => {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const q = e.currentTarget.elements.namedItem('q');
        if (q instanceof HTMLInputElement) {
            const params = new URLSearchParams();
            params.set('q', q.value.trim());
            router.push(`/blog/search?${params.toString()}`);
        }
    };

    return (
        <div className='w-full max-w-screen-lg mx-auto px-8 md:px-12 lg:px-16'>
            <form onSubmit={handleSubmit}>
                <input
                    className='w-full border border-gray-300 rounded-xl px-4 py-3 dark:bg-gray-600
                     dark:placeholder:text-white outline-none'
                    type="text"
                    name='q'
                    placeholder='キーワード検索'
                />
            </form>
        </div>
    );
};

export default SearchField;