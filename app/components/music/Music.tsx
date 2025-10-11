
'use client'
import { useEffect, useState } from "react";
import { SpotifyTrack } from "@/app/lib/spotifyTypes";
import SongList from "@/app/components/music/SongList";
import SearchInput from "./SearchInput";
import Pagenation from "./Pagenation";

const limit = 20;

const Music = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [popularSongs, setPopularSongs] = useState<SpotifyTrack[]>([]);
    const [searchedSongs, setSearchedSongs] = useState<SpotifyTrack[] | null>(null);
    const [keyword, setKeyword] = useState('');
    const [page, setPage] = useState(1);
    const [hasNext, setHasNext] = useState(false);
    const [hasPrev, setHasPrev] = useState(false);

    useEffect(() => {
        fetchPopularSongs();
    }, []);

    const fetchPopularSongs = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/music/popularsongs`);
            const result = await response.json();
            console.log(result);
            const popularSongs = result?.items.map((item: any) => item.track) ?? [];
            setPopularSongs(popularSongs)
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    const searchSongs = async (page: number) => {
        setIsLoading(true);
        const offset = page ? (page - 1) * limit : 0;
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/music/search?q=${keyword}&limit=${limit}&offset=${offset}`);
        const result = await response.json();
        const searchTracks = result?.items ?? [] as SpotifyTrack[];
        setHasNext(result?.next !== null);
        setHasPrev(result?.previous !== null);
        setSearchedSongs(searchTracks);
        setIsLoading(false);
    };

    const moveToNext = async () => {
        const nextPage = page + 1;
        setPage(nextPage);
        await searchSongs(nextPage);
    };

    const moveToPrev = async () => {
        const prevPage = page - 1;
        setPage(prevPage);
        await searchSongs(prevPage);
    };

    return (
        <div className="w-full container mx-auto px-8 mb-20">
            <SearchInput
                setKeyword={setKeyword}
                searchSongs={searchSongs}
            />
            <SongList
                isLoading={isLoading}
                popularSongs={searchedSongs ? searchedSongs : popularSongs}
            />
            {searchedSongs && (
                <Pagenation
                    onNext={hasNext ? moveToNext : null}
                    onPrev={hasPrev ? moveToPrev : null}
                />
            )}
        </div>
    );
};

export default Music;