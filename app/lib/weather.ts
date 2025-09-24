
export type WeatherCondition = {
    text: string;
    icon: string;
};

export type WeatherDay = {
    date: string;
    day: {
        maxtemp_c: number;
        mintemp_c: number;
        totalprecip_mm: number;
        maxwind_kph: number;
        daily_chance_of_rain: number;
        condition: WeatherCondition;
    };
};