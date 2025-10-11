
import Header from "./components/header/Header";
import HeroSection from "./components/hero/HeroSection";
import Weather from "./components/weather/Weather";
import News, { Article } from "./components/news/News";
import SiteLog from "./components/hero/SiteLog";
import Notee from "./components/hero/Notee";
import Circle from "./components/hero/Circle";
import CardSection from "./components/hero/CardSection";
import Talksy from "./components/hero/Talksy";
import TuneFindr from "./components/hero/TuneFindr";
import AppBox from "./components/hero/AppBox";
import { WeatherDay } from "./lib/weather";
import Footer from "./components/footer/Footer";

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
            <Header isHero={true} />
            <HeroSection />
            <News articles={articles} />
            <Weather initialWeather={weatherData} />
            <SiteLog />
            <Notee />
            <Circle />
            <Talksy />
            <TuneFindr />
            <AppBox />
            <CardSection />
            <Footer />
        </>
    );
};

export default Page;