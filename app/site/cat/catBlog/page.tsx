
import CatsBlogList from "@/app/components/cats/CatsBlogList";
import { getCatBlogList } from "@/app/lib/microcms";

export const revalidate = 0;

const page = async () => {
    const { contents: catBlog } = await getCatBlogList();
    return (
        <>
            <CatsBlogList data={catBlog} />
        </>
    );
};

export default page;