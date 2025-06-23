
export type SpotifyTokenResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
};

export type SpotifyPlaylistResponse = {
    collaborative: boolean;
    description: string;
    external_urls: {
        spotify: string;
    };
    followers: {
        href: string | null;
        total: number;
    };
    id: string;
    images: Array<{
        url: string;
        height: number | null;
        width: number | null;
    }>;
    name: string;
    owner: {
        display_name: string;
        external_urls: {
            spotify: string;
        };
        id: string;
        type: string;
        uri: string;
    };
    public: boolean;
    snapshot_id: string;
    tracks: {
        href: string;
        items: Array<any>;
        limit: number;
        next: string | null;
        offset: number;
        previous: string | null;
        total: number;
    };
    type: string;
    uri: string;
};

export type SpotifyTrack = {
    id: string;
    name: string;
    album: {
        name: string;
        images: { url: string; width: number; height: number }[];
    };
    artists: { name: string }[];
    duration_ms: number;
    preview_url: string | null;
};