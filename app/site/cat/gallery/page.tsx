
import CatsGallery from "@/app/components/cats/CatsGallery";
import { fetchCats } from "@/app/lib/cats";

const page = async () => {
    const cats = await fetchCats();

    return (
        <>
            <CatsGallery
                initialCats={cats}
            />
        </>
    );
};

export default page;