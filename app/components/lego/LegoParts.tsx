
"use client";
import { useEffect, useState } from "react";
import { Parts, Themes } from "@/app/lib/lego";
import InitialView from "./InitialView";
import SelectArea from "./SelectArea";
import InputArea from "./InputArea";
import ShowMoreButton from "./ShowMoreButton";
import LegoLoading from "./LegoLoading";
import ResetButton from "./ResetButton";
import PartsGridArea from "./PartsGridArea";

const LegoParts = ({ themes }: { themes: Themes[] }) => {
    const [themeId, setThemeId] = useState("");
    const [parts, setParts] = useState<Parts[]>([]);
    const [keyword, setKeyWord] = useState("");
    const [loading, setLoading] = useState(false);
    const [visibleMinfigs, setVisibleMinfigs] = useState(9);

    useEffect(() => {
        if (!themeId) return;
        setKeyWord("");

        const getParts = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/lego/parts?themeId=${themeId}`,
                    {
                        next: { revalidate: 3600 },
                    }
                );
                const jsonData = await response.json();
                setParts(jsonData);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        getParts();
    }, [themeId]);

    const searchParts = async () => {
        if (!keyword.trim()) return;
        setThemeId("");
        setLoading(true);
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/lego/search/parts?keyword=${encodeURIComponent(keyword)}`, {
                cache: "no-store",
            });
            const jsonData = await response.json();
            setParts(jsonData);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const showMoreMinfigs = () => {
        setVisibleMinfigs((prev) => prev + 9);
    }

    const handelResetParts = () => {
        setParts([]);
        setThemeId("");
        setKeyWord("");
    };

    return (
        <section className="w-full max-w-screen-2xl min-h-screen mx-auto px-4 sm:px-8 py-20 text-gray-600 dark:text-gray-200">
            <div className="flex flex-wrap items-center gap-5">
                <SelectArea
                    initialText="LEGOパーツのテーマを選択"
                    themes={themes}
                    themeId={themeId}
                    setThemeId={setThemeId}

                />
                <InputArea
                    keyword={keyword}
                    setKeyWord={setKeyWord}
                    handler={searchParts}
                />
            </div>
            <div className="mt-5 md:mt-10 flex justify-start">
                <ResetButton handler={handelResetParts} />
            </div>
            {loading
                ? (
                    <LegoLoading />
                )
                : parts.length === 0
                    ? (
                        <InitialView
                            title="LEGOパーツのテーマまたはキーワードを選択してください"
                            text="テーマを選ぶか、キーワードで検索するとセットが表示されます。"
                        />
                    )
                    : (
                        <PartsGridArea
                            data={parts}
                            visibleData={visibleMinfigs}
                        />
                    )
            }
            {visibleMinfigs < parts.length && (
                <ShowMoreButton handler={showMoreMinfigs} />
            )}
        </section>
    );
};

export default LegoParts;