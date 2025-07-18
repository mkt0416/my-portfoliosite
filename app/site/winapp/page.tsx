
import AuthGuard from "@/app/components/common/AuthGuard";
import PageHero from "@/app/components/common/PageHero";
import WinAppTableList from "@/app/components/winapp/WinAppTableList";

const Page = () => {
    return (
        <AuthGuard>
            <PageHero image="/images/computer.svg" title="Windows App" />
            <div className="mt-20 mb-20">
                <WinAppTableList />
            </div>
        </AuthGuard>
    );
};

export default Page;