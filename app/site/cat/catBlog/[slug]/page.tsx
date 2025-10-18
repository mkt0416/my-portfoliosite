
import CatsBlogDetail from "@/app/components/cats/CatsBlogDetail";
import { getCatBlogDetail } from "@/app/lib/microcms";

export const revalidate = 0;

type Props = {
    params: {
        slug: string;
    };
};

const page = async ({ params }: Props) => {
    const data = await getCatBlogDetail(params.slug);

    return (
        <>
            <CatsBlogDetail data={data} />
        </>
    );
};

export default page;