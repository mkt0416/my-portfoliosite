
import SingleData from "@/app/components/lego/SingleData";
import { getRamdomFigs, getRamdomSets, Sets } from "@/app/lib/lego";

type Props = {
    params: {
        setNum: string;
    };
};

const getSingleSets = async (id: string): Promise<Sets> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/lego/sets/${id}`, {
        cache: "no-store",
    });
    const jsonData = await response.json();
    return jsonData;
};

const page = async ({ params }: Props) => {
    const singleSets = await getSingleSets(params.setNum);
    const randomSets = await getRamdomSets();
    const randomFigs = await getRamdomFigs();

    return (
        <>
            <SingleData
                data={singleSets}
                randomSets={randomSets}
                randomFigs={randomFigs}
            />
        </>
    );
};

export default page;