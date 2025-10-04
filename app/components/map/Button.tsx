
import { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
    return (
        <button
            className="w-full py-2 px-4 border border-blue-600 bg-blue-50 rounded-md 
            text-xs sm:text-base hover:bg-blue-100 duration-300 dark:text-gray-200 dark:bg-blue-700
            dark:border-blue-200 dark:bg-none dark:hover:bg-blue-600"
            type="submit"
        >
            {children}
        </button>
    );
};

export default Button;