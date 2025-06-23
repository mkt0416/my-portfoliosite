
import { SpotifyPlaylistResponse, SpotifyTokenResponse } from "./spotifyTypes";

const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

let accessToken: string | null = null;

export const getAccessToken = async () => {
    try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: 'Basic ' + btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`),
            },
            body: new URLSearchParams({
                grant_type: "client_credentials",
            }),
        });
        const jsonData: SpotifyTokenResponse = await response.json();
        accessToken = jsonData.access_token;
    } catch (err) {
        console.log(err);
    }
};

export const getPopularSongs = async () => {
    if (!accessToken) {
        await getAccessToken();
    }
    try {
        const response = await fetch('https://api.spotify.com/v1/playlists/5SLPaOxQyJ8Ne9zpmTOvSe', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        const jsonData: SpotifyPlaylistResponse = await response.json();
        return jsonData.tracks;
    } catch (err) {
        console.log(err);
    }
};

export const getSearchedSongs = async (keyword: string, limit: string, offset: string) => {
    if (!accessToken) {
        await getAccessToken();
    }
    try {
        const response = await fetch('https://api.spotify.com/v1/search?' +
            new URLSearchParams({
                q: keyword,
                type: 'track',
                limit,
                offset,
            }),
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
        const jsonData: SpotifyPlaylistResponse = await response.json();
        return jsonData.tracks;
    } catch (err) {
        console.log(err);
    }
};