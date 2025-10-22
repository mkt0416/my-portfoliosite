
import LegoParts from "@/app/components/lego/LegoParts";
import { getTheme } from "../sets/page";

const page = async () => {
    const themes = await getTheme();

    return (
        <>
            <LegoParts themes={themes} />
        </>
    );
};

export default page;