
import PartsDetail from "@/app/components/lego/PartsDetail";
import { Parts } from "@/app/lib/lego";

type Props = {
    params: {
        partNum: string;
    };
};

const getSingleSets = async (id: string): Promise<Parts> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/lego/parts/${id}`, {
        cache: "no-store",
    });
    const jsonData = await response.json();
    return jsonData;
};

const page = async ({ params }: Props) => {
    const singleParts = await getSingleSets(params.partNum);

    return (
        <>
            <PartsDetail
                data={singleParts} />
        </>
    );
};

export default page;