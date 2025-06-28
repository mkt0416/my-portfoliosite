
import Unsbscribe from "@/app/components/sns/Unsbscribe";

type Props = {
    params: {
        userId: string;
    };
};

const Page = ({ params }: Props) => {
    const userId = params.userId;

    return (
        <>
            <Unsbscribe userId={userId} />
        </>
    );
};

export default Page;