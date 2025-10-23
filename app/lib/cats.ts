
export type Cats = {
    id: string;
    url: string;
    breeds?: {
        name: string;
        origin: string;
        description: string;
        wikipedia_url: string;
    }[];
};

export const fetchCats = async (): Promise<Cats[]> => {
    try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=24", {
            headers: {
                "x-api-key": process.env.NEXT_PUBLIC_CAT_API_KEY ?? ""
            },
            next: {
                revalidate: 60,
            }
        });
        const jsonData = await response.json();
        return jsonData ?? [];
    } catch (err) {
        console.log(err);
        return [];
    }
};