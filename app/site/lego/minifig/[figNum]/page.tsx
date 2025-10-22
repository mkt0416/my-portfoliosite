
import SingleData from "@/app/components/lego/SingleData";
import { Sets } from "@/app/lib/lego";

type Props = {
    params: {
        figNum: string;
    };
};

const getSingleSets = async (id: string): Promise<Sets> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/lego/minifigs/${id}`, {
        cache: "no-store",
    });
    const jsonData = await response.json();
    return jsonData;
};

const getRamdomSets = async (): Promise<Sets[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/lego/random/sets`, {
        cache: "no-store",
    })
    const jsonData = await response.json();
    return jsonData;
};

const getRamdomFigs = async (): Promise<Sets[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/lego/random/minifigs`, {
        cache: "no-store",
    })
    const jsonData = await response.json();
    return jsonData;
};

const page = async ({ params }: Props) => {
    const singleMinifig = await getSingleSets(params.figNum);
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