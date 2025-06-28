
import Container from "@/app/components/common/Container";
import PageHero from "@/app/components/common/PageHero";
import AllPosts from "@/app/components/sns/AllPosts";
import Navbar from "@/app/components/sns/Navbar";
import Sidebar from "@/app/components/sns/Sidebar";

const Page = () => {
    return (
        <>
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
        </ >
    );
};

export default Page;