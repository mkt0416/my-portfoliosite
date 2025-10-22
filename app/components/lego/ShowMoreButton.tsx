
import { PiLego } from "react-icons/pi";

const ShowMoreButton = ({ handler }: { handler: () => void }) => {
    return (
        <div className="flex justify-center mt-10">
            <button
                onClick={handler}
                className="flex items-center gap-1 bg-yellow-50 py-2 px-4 rounded-full border border-yellow-400
                dark:bg-gray-800"
            >
                <PiLego className="size-5 text-yellow-400" />
                もっと見る
            </button>
        </div>
    );
};

export default ShowMoreButton;