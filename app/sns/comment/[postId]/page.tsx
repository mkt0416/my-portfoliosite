
import Container from "@/app/components/common/Container";
import PageHero from "@/app/components/common/PageHero";
import CommentList from "@/app/components/sns/CommentList";
import Navbar from "@/app/components/sns/Navbar";
import Sidebar from "@/app/components/sns/Sidebar";

type Props = {
    params: {
        postId: string;
    };
};

const Page = ({ params }: Props) => {
    const postId = params.postId;

    return (
        <>
            <PageHero image="/images/sns.svg" title="Comment" />
            <Container>
                <div className="flex mt-10 pb-20">
                    <Sidebar />
                    <div className="flex-1">
                        <CommentList postId={postId} />
                    </div>
                </div>
            </Container>
            <Navbar />
        </>
    );
};

export default Page;