
import AuthGuard from "../components/common/AuthGuard";
import Container from "../components/common/Container";
import PageHero from "../components/common/PageHero";
import AllPosts from "../components/sns/AllPosts";
import Navbar from "../components/sns/Navbar";
import Sidebar from "../components/sns/Sidebar";

const Page = () => {
    return (
        <AuthGuard>
            <PageHero image="/images/sns.svg" title="SNS" />
            <Container>
                <div className="mt-10 pb-20 flex">
                    <Sidebar />
                    <div className="flex-1">
                        <AllPosts />
                    </div>
                </div>
            </Container>
            <Navbar />
        </AuthGuard >
    );
};

export default Page;