
import AuthGuard from "./components/common/AuthGuard";
import HeroSection from "./components/hero/HeroSection";

const Page = () => {
    return (
        <AuthGuard>
            <HeroSection />
        </AuthGuard>
    );
};

export default Page;