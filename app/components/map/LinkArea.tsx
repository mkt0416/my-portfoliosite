
import Link from "next/link";
import Button from "./Button";

const LinkArea = () => {
    return (
        <div className="mt-20 flex justify-center gap-10 text-blue-600">
            <Link href={"/site/map"}>
                <Button>作業内容一覧</Button>
            </Link>
            <Link href={"/site/map/create"}>
                <Button>作業内容作成</Button>
            </Link>
        </div>
    );
};

export default LinkArea;