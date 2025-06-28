
import Header from "../components/header/Header";

type Props = {
    children: React.ReactNode;
};

const SiteLayout = ({ children }: Props) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default SiteLayout;