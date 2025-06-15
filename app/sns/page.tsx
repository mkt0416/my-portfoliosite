
import AuthGuard from "../components/common/AuthGuard";
import Container from "../components/common/Container";
import PageHero from "../components/common/PageHero";
import Navbar from "../components/sns/Navbar";
import Share from "../components/sns/Share";
import Sidebar from "../components/sns/Sidebar";
import SnsTimeline from "../components/sns/SnsTimeLine";

const Page = () => {
    return (
        <AuthGuard>
            <PageHero image="/images/sns.svg" title="SNS" />
            <Container>
                <div className="mt-10 pb-20 flex">
                    <Sidebar />
                    <div className="flex-1">
                        <Share />
                        <div className="mt-10">
                            <SnsTimeline />
                        </div>
                    </div>
                </div>
            </Container>
            <Navbar />
        </AuthGuard >
    );
};

export default Page;