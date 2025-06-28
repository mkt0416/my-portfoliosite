
import Container from "@/app/components/common/Container";
import PageHero from "@/app/components/common/PageHero";
import Followings from "@/app/components/sns/Followings";
import Navbar from "@/app/components/sns/Navbar";
import Sidebar from "@/app/components/sns/Sidebar";

type Props = {
    params: {
        userId: string;
    },
};

const Page = ({ params }: Props) => {
    const userId = params.userId;
    return (
        <>
            <PageHero image="/images/sns.svg" title="Followings" />
            <Container>
                <div className="flex mt-10 pb-20">
                    <Sidebar />
                    <div className="flex-1">
                        <Followings userId={userId} />
                    </div>
                </div>
            </Container>
            <Navbar />
        </>
    );
};

export default Page;