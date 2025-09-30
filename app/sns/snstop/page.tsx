
import Container from "@/app/components/common/Container";
import AllPosts from "@/app/components/sns/AllPosts";
import CoverPicture from "@/app/components/sns/CoverPicture";
import Navbar from "@/app/components/sns/Navbar";
import Sidebar from "@/app/components/sns/Sidebar";

const Page = () => {
    return (
        <>
            <CoverPicture text="Top" />
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