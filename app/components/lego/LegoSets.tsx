
"use client";
import { useEffect, useState } from "react";
import { Themes } from "@/app/lib/lego";
import { Sets } from "@/app/lib/lego";
import InitialView from "./InitialView";
import SelectArea from "./SelectArea";
import InputArea from "./InputArea";
import GridArea from "./GridArea";
import ShowMoreButton from "./ShowMoreButton";
import LegoLoading from "./LegoLoading";
import ResetButton from "./ResetButton";

const LegoSets = ({ themes }: { themes: Themes[] }) => {
    const [themeId, setThemeId] = useState("");
    const [sets, setSets] = useState<Sets[]>([]);
    const [keyword, setKeyWord] = useState("");
    const [loading, setLoading] = useState(false);
    const [visibleSets, setVisibleSets] = useState(9);

    useEffect(() => {
        if (!themeId) return;
        setKeyWord("");

        const getSets = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/lego/sets?themeId=${themeId}`, {
                    next: { revalidate: 86400 },
                });
                const jsonData = await response.json();
                setSets(jsonData);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        getSets();
    }, [themeId]);

    const searchSets = async () => {
        if (!keyword.trim()) return;
        setThemeId("");
        setLoading(true);
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/lego/search/sets?keyword=${encodeURIComponent(keyword)}`, {
                next: { revalidate: 3600 },
            });
            const jsonData = await response.json();
            setSets(jsonData);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const showMoreSets = () => {
        setVisibleSets((prev) => prev + 9);
    }

    const handelResetSets = () => {
        setSets([]);
        setThemeId("");
        setKeyWord("");
    };

    return (
        <section className="w-full max-w-screen-2xl min-h-screen mx-auto px-4 sm:px-8 pt-24 pb-10 text-gray-600 dark:text-gray-200">
            <div className="flex flex-wrap items-center gap-5">
                <SelectArea
                    initialText="レゴのテーマを選択"
                    themes={themes}
                    themeId={themeId}
                    setThemeId={setThemeId}
                />
                <InputArea
                    keyword={keyword}
                    setKeyWord={setKeyWord}
                    handler={searchSets}
                />
            </div>
            <div className="mt-5 md:mt-10 flex justify-start">
                <ResetButton handler={handelResetSets} />
            </div>
            {loading
                ? (
                    <LegoLoading />
                )
                : sets.length === 0
                    ? (
                        <InitialView
                            title="LEGOのテーマまたはキーワードを選択してください"
                            text="テーマを選ぶか、キーワードで検索するとセットが表示されます。"
                        />
                    )
                    : (
                        <GridArea
                            data={sets}
                            visibleData={visibleSets}
                        />
                    )
            }
            {visibleSets < sets.length && (
                <ShowMoreButton handler={showMoreSets} />
            )}
        </section>
    );
};

export default LegoSets;