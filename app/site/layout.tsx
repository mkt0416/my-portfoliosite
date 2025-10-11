
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

type Props = {
    children: React.ReactNode;
};

const SiteLayout = ({ children }: Props) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default SiteLayout;