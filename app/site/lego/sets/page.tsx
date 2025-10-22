
import LegoSets from "@/app/components/lego/LegoSets";
import { Themes } from "@/app/lib/lego";

export const getTheme = async (): Promise<Themes[]> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/lego/theme`, {
            cache: "no-store",
        });
        const jsonData = await response.json();
        const results: Themes[] = jsonData || [];

        const sorted = results.sort((a, b) =>
            a.name.localeCompare(b.name, "en", { sensitivity: "base" })
        );
        return sorted;
    } catch (err) {
        console.log(err);
        return [];
    }
};

const page = async () => {
    const themes = await getTheme();

    return (
        <>
            <LegoSets themes={themes} />
        </>
    );
};

export default page;