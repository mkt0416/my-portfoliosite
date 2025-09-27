
"use client";
import { useEffect, useState } from "react";
import { WeatherDay } from "@/app/lib/weather";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import WeatherCard from "./WeatherCard";
import cityJson from "../../constants/city.json";
import "swiper/css";
import "swiper/css/pagination";

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
                font-semibold bg-gradient-to-l from-purple-300 to-blue-300 text-white appearance-none relative dark:bg-none dark:bg-gray-600"
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
                    <div className='w-full h-96 flex items-center justify-center'>
                        <div className='w-12 h-12 border-4 border-blue-500 rounded-full border-t-transparent animate-spin'></div>
                    </div>
                )
                : (
                    <>
                        <ul className="hidden lg:flex flex-col gap-20 lg:gap-10 lg:flex-row items-center justify-between
                         max-w-screen-xl mx-auto mt-20"
                        >
                            {weatherData.length > 0 && weatherData.map((data) => (
                                <WeatherCard key={data.date} data={data} />
                            ))}
                        </ul>

                        <ul className="block lg:hidden mt-10">
                            <Swiper
                                spaceBetween={25}
                                slidesPerView={1.0}
                                centeredSlides={true}
                                pagination={{ clickable: true }}
                                modules={[Pagination]}
                            >
                                {weatherData.length > 0 && weatherData.map((data) => (
                                    <SwiperSlide key={data.date} className="mb-12">
                                        <WeatherCard key={data.date} data={data} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </ul>
                    </>
                )
            }
        </section>
    );
};

export default Weather;