
export const dynamic = "force-dynamic";

import LegoParts from "@/app/components/lego/LegoParts";
import { getTheme } from "@/app/lib/lego";

const page = async () => {
    const themes = await getTheme();

    return (
        <>
            <LegoParts themes={themes} />
        </>
    );
};

export default page;