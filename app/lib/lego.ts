
export type Themes = {
    id: number;
    name: string;
};

export type Sets = {
    last_modified_dt: string;
    name: string;
    set_name: string;
    num_parts: number;
    set_img_url: string;
    set_num: string;
    set_url: string;
    theme_id: number;
    year: number;
};

export const getTheme = async (): Promise<Themes[]> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/lego/theme`, {
            next: { revalidate: 86400 },
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

export const getRamdomSets = async (): Promise<Sets[]> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/lego/random/sets`, {
            cache: "no-store",
        })
        const jsonData = await response.json();
        return jsonData || [];
    } catch (err) {
        console.log(err);
        return [];
    }
};

export const getRamdomFigs = async (): Promise<Sets[]> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/lego/random/minifigs`, {
            cache: "no-store",
        })
        const jsonData = await response.json();
        return jsonData || [];
    } catch (err) {
        console.log(err);
        return [];
    }
};