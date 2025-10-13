
import PageHero from "@/app/components/common/PageHero";
import CatAdmin from "@/app/components/cats/CatAdmin";

const page = () => {
    return (
        <>
            <PageHero title="Cat" image="/images/cat.jpg" />
            <CatAdmin />
        </>
    );
};

export default page;