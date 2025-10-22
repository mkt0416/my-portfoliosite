
import LegoMinifig from "@/app/components/lego/LegoMinifig";
import { getTheme } from "../sets/page";

const page = async () => {
    const themes = await getTheme();

    return (
        <>
            <LegoMinifig themes={themes} />
        </>
    );
};

export default page;