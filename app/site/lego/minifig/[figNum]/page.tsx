
import SingleData from "@/app/components/lego/SingleData";
import { getRamdomFigs, getRamdomSets, Sets } from "@/app/lib/lego";

type Props = {
    params: {
        figNum: string;
    };
};

const getSingleFigs = async (id: string): Promise<Sets> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/lego/minifigs/${id}`, {
        cache: "no-store",
    });
    const jsonData = await response.json();
    return jsonData;
};

const page = async ({ params }: Props) => {
    const singleMinifig = await getSingleFigs(params.figNum);
    const randomSets = await getRamdomSets();
    const randomFigs = await getRamdomFigs();

    return (
        <>
            <SingleData
                data={singleMinifig}
                randomSets={randomSets}
                randomFigs={randomFigs}
            />
        </>
    );
};

export default page;