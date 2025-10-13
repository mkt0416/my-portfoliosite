
import CatDetail from "@/app/components/cats/CatDetail";

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
    return (
        <div>
            <CatDetail cat={cat} />
        </div>
    );
};

export default page;