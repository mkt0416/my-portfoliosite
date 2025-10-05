
import { ReactNode } from "react";
import AuthGuard from "@/app/components/common/AuthGuard";

const Maplayout = ({ children }: { children: ReactNode }) => {

    return (
        <>
            <AuthGuard>
                {children}
            </AuthGuard>
        </>
    );
};

export default Maplayout;