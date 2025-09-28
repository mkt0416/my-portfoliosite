
import Header from "./components/header/Header";
import HeroSection from "./components/hero/HeroSection";
import Weather from "./components/weather/Weather";
import CardSection from "./components/hero/CardSection";
import { WeatherDay } from "./lib/weather";
import News, { Article } from "./components/news/News";

const getWeather = async (city: string): Promise<WeatherDay[]> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/weather?city=${city}`,
            {
                next: { revalidate: 3600 },
            }
        );
        const jsonData = await response.json();
        return jsonData.forecast?.forecastday ?? []
    } catch (err) {
        console.log(err);
        return [];
    }
};

const getNews = async (): Promise<Article[]> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/news`,
            {
                next: { revalidate: 3600 },
            }
        );
        const jsonData = await response.json();
        return jsonData.news || [];
    } catch (err) {
        console.log(err);
        return [];
    }
};

const Page = async () => {
    const articles = await getNews();
    const weatherData = await getWeather("Yamagata");

    return (
        <>
            <Header />
            <HeroSection />
            <Weather initialWeather={weatherData} />
            <News articles={articles} />
            <CardSection />
        </>
    );
};

export default Page;