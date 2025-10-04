
export type Location = {
    lat: number;
    lng: number;
} | null;

export type Works = {
    _id: string;
    createdAt: string;
    province: string;
    city: string;
    neighbourhood: string;
    image: string;
    siteName: string;
    workDescription: string;
    feedback: string;
    location: {
        lat: number;
        lng: number;
    };
};