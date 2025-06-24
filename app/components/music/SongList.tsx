
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
                <div
                    style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)" }}
                    className="bg-gray-300 p-6 rounded-xl"
                    key={song.id}
                >
                    <div className="flex flex-col gap-1 mb-2">
                        <h1 className="text-sm font-bold">{song.artists[0].name}</h1>
                        <p className="text-xs font-semibold">{song.album.name}</p>
                    </div>
                    <Image
                        className="w-full rounded-xl mb-4"
                        src={song.album.images[0].url}
                        alt="thumbnail"
                        width={song.album.images[0].width}
                        height={song.album.images[0].height}
                    />
                    <iframe
                        src={`https://open.spotify.com/embed/track/${song.id}`}
                        width="100%"
                        height="80"
                        allow="encrypted-media"
                    />
                </div>
            ))}
        </div>
    );
};

export default SongList;