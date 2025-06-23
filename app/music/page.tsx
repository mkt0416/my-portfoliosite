
import AuthGuard from "../components/common/AuthGuard";
import PageHero from "../components/common/PageHero";
import Music from "../components/music/Music";

const Page = () => {
    return (
        <AuthGuard>
            <PageHero
                image="/images/music.svg"
                title="Music"
            />
            <div className="mt-20">
                <Music />
            </div>
        </AuthGuard>
    );
};

export default Page;