
import { GrPowerReset } from "react-icons/gr";

const ResetButton = ({ handler }: { handler: () => void }) => {
    return (
        <button
            className="font-semibold border-4 border-yellow-400 rounded-2xl py-2 px-4 text-sm sm:text-base"
            onClick={handler}
        >
            <span className="hidden sm:flex">リセット</span>
            <GrPowerReset className="size-6 sm:hidden" />
        </button>
    );
};

export default ResetButton;