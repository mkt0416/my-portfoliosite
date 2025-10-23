
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

const LegoMinifig = ({ themes }: { themes: Themes[] }) => {
    const [themeId, setThemeId] = useState("");
    const [minifigs, setMinifigs] = useState<Sets[]>([]);
    const [keyword, setKeyWord] = useState("");
    const [loading, setLoading] = useState(false);
    const [visibleMinfigs, setVisibleMinfigs] = useState(9);

    useEffect(() => {
        if (!themeId) return;
        setKeyWord("");

        const getFigs = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/lego/minifigs?themeId=${themeId}`, {
                    cache: "no-store",
                });
                const jsonData = await response.json();
                setMinifigs(jsonData);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        getFigs();
    }, [themeId]);

    const searchFigs = async () => {
        if (!keyword.trim()) return;
        setThemeId("");
        setLoading(true);
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/lego/search/minifigs?keyword=${encodeURIComponent(keyword)}`, {
                cache: "no-store",
            });
            const jsonData = await response.json();
            setMinifigs(jsonData);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const showMoreMinfigs = () => {
        setVisibleMinfigs((prev) => prev + 9);
    }

    const handelResetMinifig = () => {
        setMinifigs([]);
        setThemeId("");
        setKeyWord("");
    };

    return (
        <section className="w-full max-w-screen-2xl min-h-screen mx-auto px-4 sm:px-8 pt-24 pb-10 text-gray-600 dark:text-gray-200">
            <div className="flex flex-wrap items-center gap-5">
                <SelectArea
                    initialText="ミニフィグのテーマを選択"
                    themes={themes}
                    themeId={themeId}
                    setThemeId={setThemeId}


                />
                <InputArea
                    keyword={keyword}
                    setKeyWord={setKeyWord}
                    handler={searchFigs}
                />
            </div>
            <div className="mt-5 md:mt-10 flex justify-start">
                <ResetButton handler={handelResetMinifig} />
            </div>
            {loading
                ? (
                    <LegoLoading />
                )
                : minifigs.length === 0
                    ? (
                        <InitialView
                            title="ミニフィグのテーマまたはキーワードを選択してください"
                            text="テーマを選ぶか、キーワードで検索するとセットが表示されます。"
                        />
                    )
                    : (
                        <GridArea
                            basePath="/site/lego/minifig"
                            data={minifigs}
                            visibleData={visibleMinfigs}
                        />
                    )
            }
            {visibleMinfigs < minifigs.length && (
                <ShowMoreButton handler={showMoreMinfigs} />
            )}
        </section>
    );
};

export default LegoMinifig;