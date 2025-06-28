
import AuthGuard from "../components/common/AuthGuard";
import Header from "../components/header/Header";

type Props = {
    children: React.ReactNode;
};

const SNSLayout = ({ children }: Props) => {
    return (
        <AuthGuard>
            <Header />
            {children}
        </AuthGuard>
    );
};

export default SNSLayout;