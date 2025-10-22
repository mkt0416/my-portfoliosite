
import { Themes } from "@/app/lib/lego";
import { TbLego } from "react-icons/tb";

type Props = {
    initialText: string;
    themes: Themes[];
    themeId: string;
    setThemeId: React.Dispatch<React.SetStateAction<string>>;
};

const SelectArea = ({ initialText, themes, themeId, setThemeId }: Props) => {
    return (
        <div className="flex items-center gap-1">
            <TbLego className="size-10 text-yellow-400" />
            <select
                className="w-full rounded-xl py-2 px-4 font-semibold border-4 border-yellow-400 
                outline-none appearance-none dark:bg-gray-800 text-sm sm:text-base"
                onChange={(e) => setThemeId(e.target.value)}
                value={themeId}
            >
                <option value="">
                    {initialText}
                </option>
                {themes.map((theme, index) => (
                    <option key={index} value={theme.id}>
                        {theme.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectArea;