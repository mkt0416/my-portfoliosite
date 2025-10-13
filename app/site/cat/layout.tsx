
import { ReactNode } from "react";

const CatLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="bg-gradient-to-tr from-purple-100 to-pink-100 dark:bg-none dark:bg-gray-800">
            {children}
        </div>
    );
};

export default CatLayout;