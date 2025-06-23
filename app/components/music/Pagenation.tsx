
type Props = {
    onNext: (() => Promise<void>) | null;
    onPrev: (() => Promise<void>) | null;
};

const Pagenation = ({ onNext, onPrev }: Props) => {
    return (
        <div className="my-10 flex justify-center gap-5">
            <button
                onClick={onPrev ?? undefined}
                disabled={onPrev == null}
                className="bg-slate-500 text-white py-2 px-4 rounded-md font-bold hover:bg-slate-400 duration-300
                disabled:cursor-not-allowed disabled:bg-slate-300"
            >
                Prev
            </button>
            <button
                onClick={(onNext ?? undefined)}
                disabled={onNext == null}
                className="bg-slate-500 text-white py-2 px-4 rounded-md font-bold hover:bg-slate-400 duration-300
                disabled:cursor-not-allowed disabled:bg-slate-300"
            >
                Next
            </button>
        </div>
    );
};

export default Pagenation;