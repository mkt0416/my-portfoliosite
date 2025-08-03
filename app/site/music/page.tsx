
import AuthGuard from "@/app/components/common/AuthGuard";
import Music from "@/app/components/music/Music";

const Page = () => {
    return (
        <AuthGuard>
            <div className="mt-20">
                <Music />
            </div>
        </AuthGuard>
    );
};

export default Page;