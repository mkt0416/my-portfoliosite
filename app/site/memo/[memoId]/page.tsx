
import Memo from "@/app/components/memo/Memo";

type Props = {
    params: {
        memoId: string;
    };
};

const Page = ({ params }: Props) => {
    const memoId = params.memoId;
    return (
        <>
            <Memo memoId={memoId} />
        </>
    );
};

export default Page;