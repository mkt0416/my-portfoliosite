
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { WeatherDay } from "@/app/lib/weather";
import { formatDate } from "@/app/lib/utils";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { FaTemperatureArrowDown } from "react-icons/fa6";
import { BsCloudRainHeavyFill } from "react-icons/bs";
import { GiWindsock } from "react-icons/gi";
import cityJson from "../../constants/city.json";

const Weather = () => {
    const [loading, setLoading] = useState(false);
    const [city, setCity] = useState("Yamagata");
    const [weatherData, setWetherData] = useState<WeatherDay[]>([]);

    useEffect(() => {
        const getWeather = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/weather?city=${city}`);
                const jsonData = await response.json();
                setWetherData(jsonData.forecast?.forecastday ?? []);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        };
        getWeather();
    }, [city]);

    return (
        <section className='w-full max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16
        text-gray-600 dark:text-white my-32 relative'
        >
            <h2 className="text-xl md:text-4xl font-extrabold mb-10 text-center">
                3Day Weather Forecast
            </h2>
            <select
                className="mb-10 w-full flex justify-center max-w-screen-sm mx-auto p-3 rounded-full text-xl outline-none
                font-semibold bg-gradient-to-l from-indigo-400 to-blue-300 text-white appearance-none relative"
                onChange={(e) => setCity(e.target.value)}
            >
                {cityJson.map((city, index) => (
                    <option
                        className="bg-gray-400"
                        key={index}
                        value={city.Slug}
                    >
                        {city.City}
                    </option>
                ))}
            </select>
            {loading
                ? (
                    <div className='w-full h-96 flex items-center justify-center bg-blue-100 dark:bg-gray-600 py-10 rounded-xl'>
                        <div className='w-12 h-12 border-4 border-blue-500 rounded-full border-t-transparent animate-spin'></div>
                    </div>
                )
                : (
                    <ul className="flex flex-col gap-20 md:gap-10 md:flex-row items-center justify-between max-w-screen-xl mx-auto
                    bg-blue-100 dark:bg-gray-600 py-10 px-5 rounded-xl">
                        {weatherData.length > 0 && weatherData.map((data) => (
                            <li
                                className="flex flex-col items-center md:gap-4 xl:px-20"
                                key={data.date}>
                                <h3 className="text-2xl font-semibold">{formatDate(data.date)}</h3>
                                <Image
                                    src={`https:${data.day.condition.icon}`}
                                    alt="icon"
                                    width={100}
                                    height={100}
                                />
                                <div className="flex flex-col gap-2 font-semibold">
                                    <div className="flex items-baseline gap-2 border-b">
                                        <FaTemperatureArrowUp />
                                        <p>最高気温: <span className="text-red-600 text-3xl">{data.day.maxtemp_c}</span>℃</p>
                                    </div>
                                    <div className="flex items-baseline gap-2 border-b">
                                        <FaTemperatureArrowDown />
                                        <p>最低気温: <span className="text-green-600 text-3xl">{data.day.mintemp_c}</span>℃</p>
                                    </div>
                                    <div className="flex items-baseline gap-2 border-b">
                                        <BsCloudRainHeavyFill />
                                        降水確率: <span className="text-blue-600 text-3xl">{data.day.daily_chance_of_rain}</span>%
                                    </div>
                                    <div className="flex items-baseline gap-2 border-b">
                                        <BsCloudRainHeavyFill />
                                        降水量: <span className="text-blue-600 text-3xl">{data.day.totalprecip_mm}</span>mm
                                    </div>
                                    <div className="flex items-baseline gap-2 border-b">
                                        <GiWindsock />
                                        最大風速: <span className="text-blue-600 text-3xl">{data.day.maxwind_kph}</span>km/h
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )
            }
        </section>
    );
};

export default Weather;