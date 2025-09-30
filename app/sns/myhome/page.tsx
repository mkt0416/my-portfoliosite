
import Container from "@/app/components/common/Container";
import CoverPicture from "@/app/components/sns/CoverPicture";
import Navbar from "@/app/components/sns/Navbar";
import Share from "@/app/components/sns/Share";
import Sidebar from "@/app/components/sns/Sidebar";
import SnsTimeline from "@/app/components/sns/SnsTimeLine";

const Page = () => {
    return (
        <>
            <CoverPicture text="MyHome" />
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
        </ >
    );
};

export default Page;