
import AuthGuard from "@/app/components/common/AuthGuard";
import Container from "@/app/components/common/Container";
import PageHero from "@/app/components/common/PageHero";
import EditPost from "@/app/components/sns/EditPost";
import Navbar from "@/app/components/sns/Navbar";
import Sidebar from "@/app/components/sns/Sidebar";

type Props = {
    params: {
        id: string;
    };
};

const Page = ({ params }: Props) => {
    const id = params.id;
    return (
        <AuthGuard>
            <PageHero image="/images/sns.svg" title="EditPost" />
            <Container>
                <div className="flex mt-10 pb-20">
                    <Sidebar />
                    <div className="flex-1">
                        <EditPost id={id} />
                    </div>
                </div>
            </Container>
            <Navbar />
        </AuthGuard>
    );
};

export default Page;