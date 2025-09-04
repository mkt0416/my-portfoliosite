
import { ReactNode } from "react";
import AuthGuard from "@/app/components/common/AuthGuard";
import Sidebar from "@/app/components/memo/Sidebar";

const MemoLayout = ({ children }: { children: ReactNode }) => {
    return (
        <AuthGuard>
            <div className="flex min-h-screen border">
                <Sidebar />
                <div className="flex-1">
                    {children}
                </div>
            </div>
        </AuthGuard>
    );
};

export default MemoLayout;