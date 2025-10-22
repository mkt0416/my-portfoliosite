
import { ReactNode } from "react";
import LegoSideBar from "@/app/components/lego/LegoSideBar";

const SetsLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex min-h-screen border-t border-yellow-200 dark:border-yellow-700">
            <LegoSideBar />
            <div className="flex-1 min-w-0">
                {children}
            </div>
        </div>
    );
};

export default SetsLayout;