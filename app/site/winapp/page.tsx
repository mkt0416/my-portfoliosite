
import PageHero from "@/app/components/common/PageHero";
import WinAppTable from "@/app/components/winapp/WinAppTableList";

const Page = () => {
    return (
        <>
            <PageHero image="/images/computer.svg" title="Windows App" />
            <div className="mt-20 mb-20">
                <WinAppTable />
            </div>
        </>
    );
};

export default Page;