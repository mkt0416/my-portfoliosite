
import AuthGuard from "@/app/components/common/AuthGuard";
import Container from "@/app/components/common/Container";
import Navbar from "@/app/components/sns/Navbar";
import ProfileHero from "@/app/components/sns/ProfileHero";
import Sidebar from "@/app/components/sns/Sidebar";
import SnsTimeline from "@/app/components/sns/SnsTimeLine";

type Props = {
    params: {
        username: string;
    };
};

const Page = ({ params }: Props) => {
    const username = params.username;

    return (
        <AuthGuard>
            <ProfileHero username={username} />
            <Container>
                <div className="flex mt-10 pb-20">
                    <Sidebar />
                    <div className="flex-1">
                        <SnsTimeline username={username} />
                    </div>
                </div>
            </Container>
            <Navbar />
        </AuthGuard>
    );
};

export default Page;