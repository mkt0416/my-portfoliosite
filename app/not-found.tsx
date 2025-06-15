
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-8xl font-bold">404</h1>
            <p className="text-4xl font-semibold">Page NotFound</p>
            <Link href={'/'} className="mt-2 text-xl text-blue-600 hover:underline">Go BackHome</Link>
        </div>
    );
};

export default NotFoundPage;