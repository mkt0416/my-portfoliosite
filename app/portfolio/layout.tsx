
import AuthGuard from "../components/common/AuthGuard";

type Props = {
    children: React.ReactNode;
};

const PortfolioLayout = ({ children }: Props) => {
    return (
        <AuthGuard>
            {children}
        </AuthGuard>
    );
};

export default PortfolioLayout;