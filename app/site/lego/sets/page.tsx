
import LegoSets from "@/app/components/lego/LegoSets";
import { getTheme } from "@/app/lib/lego";

const page = async () => {
    const themes = await getTheme();

    return (
        <>
            <LegoSets themes={themes} />
        </>
    );
};

export default page;