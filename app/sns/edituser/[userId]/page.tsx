
import Container from "@/app/components/common/Container";
import PageHero from "@/app/components/common/PageHero";
import EditUser from "@/app/components/sns/EditUser";
import Navbar from "@/app/components/sns/Navbar";
import Sidebar from "@/app/components/sns/Sidebar";

type Props = {
    params: {
        userId: string;
    };
};

const Page = ({ params }: Props) => {
    const userId = params.userId;
    return (
        <>
            <PageHero image="/images/sns.svg" title="EditUser" />
            <Container>
                <div className="flex mt-10 pb-20">
                    <Sidebar />
                    <div className="flex-1">
                        <EditUser userId={userId} />
                    </div>
                </div>
            </Container>
            <Navbar />
        </>
    );
};

export default Page;