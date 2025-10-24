
import { formatDate } from "@/app/lib/utils";
import { BsCloudRainHeavyFill } from "react-icons/bs";
import { FaTemperatureArrowDown, FaTemperatureArrowUp } from "react-icons/fa6";
import { GiWindsock } from "react-icons/gi";
import { WeatherDay } from "@/app/lib/weather";

type Props = {
    data: WeatherDay;
};

const WeatherCard = ({ data }: Props) => {
    return (
        <li
            className="w-full flex flex-col items-center md:gap-4 xl:px-20 bg-white/40 dark:bg-gray-600/60 
            p-8 rounded-3xl md:shadow-2xl"
            key={data.date}
        >
            <h3 className="text-xl md:text-2xl font-semibold">{formatDate(data.date)}</h3>
            <img
                src={`https:${data.day.condition.icon}`}
                alt="icon"
                className="w-20 h-20"
            />
            <div className="flex flex-col gap-2 font-semibold">
                <div className="flex items-baseline gap-2 border-b border-gray-600 dark:border-gray-200 text-sm md:text-base">
                    <FaTemperatureArrowUp />
                    <p>最高気温: <span className="text-red-600 text-2xl md:text-3xl">{data.day.maxtemp_c}</span>℃</p>
                </div>
                <div className="flex items-baseline gap-2 border-b border-gray-600 dark:border-gray-200 text-sm md:text-base">
                    <FaTemperatureArrowDown />
                    <p>最低気温: <span className="text-orange-600 text-2xl md:text-3xl">{data.day.mintemp_c}</span>℃</p>
                </div>
                <div className="flex items-baseline gap-2 border-b border-gray-600 dark:border-gray-200 text-sm md:text-base">
                    <BsCloudRainHeavyFill />
                    降水確率: <span className="text-blue-600 text-2xl md:text-3xl">{data.day.daily_chance_of_rain}</span>%
                </div>
                <div className="flex items-baseline gap-2 border-b border-gray-600 dark:border-gray-200 text-sm md:text-base">
                    <BsCloudRainHeavyFill />
                    降水量: <span className="text-blue-600 text-2xl md:text-3xl">{data.day.totalprecip_mm}</span>mm
                </div>
                <div className="flex items-baseline gap-2 border-b border-gray-600 dark:border-gray-200 text-sm md:text-base">
                    <GiWindsock />
                    最大風速: <span className="text-green-600 text-2xl md:text-3xl">{data.day.maxwind_kph}</span>km/h
                </div>
            </div>
        </li>
    );
};

export default WeatherCard;