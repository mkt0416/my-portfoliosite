
import { ReactNode } from "react";
import AuthGuard from "@/app/components/common/AuthGuard";
import MemoNavigation from "@/app/components/memo/MemoNavigation";

const MemoLayout = ({ children }: { children: ReactNode }) => {
    return (
        <AuthGuard>
            <div className="flex min-h-screen border">
                <MemoNavigation />
                <div className="flex-1">
                    {children}
                </div>
            </div>
        </AuthGuard>
    );
};

export default MemoLayout;