
import { ReactNode } from "react";
import AuthGuard from "@/app/components/common/AuthGuard";
import Header from "@/app/components/header/Header";

const Maplayout = ({ children }: { children: ReactNode }) => {

    return (
        <>
            <AuthGuard>
                <Header />
                {children}
            </AuthGuard>
        </>
    );
};

export default Maplayout;