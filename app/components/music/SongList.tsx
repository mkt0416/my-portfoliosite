
import Image from "next/image";
import { SpotifyTrack } from "../../lib/spotifyTypes";
import Loading from "../common/Loading";

type Props = {
    isLoading: boolean;
    popularSongs: SpotifyTrack[]
};

const SongList = ({ isLoading, popularSongs }: Props) => {
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {popularSongs.map((song) => (
                <a
                    href={`https://open.spotify.com/intl-ja/track/${song.id}`}
                    target="_blank"
                    style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)" }}
                    className="bg-gray-300 dark:bg-gray-600 p-6 rounded-xl"
                    key={song.id}
                >
                    <Image
                        className="w-full rounded-xl mb-4"
                        src={song.album.images[0].url}
                        alt="thumbnail"
                        width={song.album.images[0].width}
                        height={song.album.images[0].height}
                    />
                    <div className="flex items-center justify-between gap-1 mb-2">
                        <h1 className="text-sm font-bold">{song.album.name}</h1>
                        <p className="text-xs font-semibold">{song.artists[0].name}</p>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default SongList;