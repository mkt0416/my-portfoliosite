
import AuthGuard from "../components/common/AuthGuard";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

type Props = {
    children: React.ReactNode;
};

const SNSLayout = ({ children }: Props) => {
    return (
        <AuthGuard>
            <Header />
            {children}
            <Footer />
        </AuthGuard>
    );
};

export default SNSLayout;