
import CatDetail from "@/app/components/cats/CatDetail";
import { fetchCats } from "@/app/lib/cats";

type Props = {
    params: {
        id: string;
    };
};

const fetchCatDetail = async (CatId: string) => {
    try {
        const resposnse = await fetch(`https://api.thecatapi.com/v1/images/${CatId}`);
        const jsonData = await resposnse.json();
        return jsonData;
    } catch (err) {
        console.log(err);
    }
};

const page = async ({ params }: Props) => {
    const catId = params.id;
    const cat = await fetchCatDetail(catId);
    const cats = await fetchCats();

    return (
        <div>
            <CatDetail
                cat={cat}
                cats={cats}
            />
        </div>
    );
};

export default page;