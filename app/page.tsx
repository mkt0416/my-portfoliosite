
import Header from "./components/header/Header";
import HeroSection from "./components/hero/HeroSection";
import Weather from "./components/weather/Weather";
import CardSection from "./components/hero/CardSection";
import News, { Article } from "./components/news/News";

const getNews = async (): Promise<Article[]> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/news`, {
            cache: "no-store",
        });
        const jsonData = await response.json();
        return jsonData.news || [];
    } catch (err) {
        console.log(err);
        return [];
    }
};

const Page = async () => {
    const articles = await getNews();

    return (
        <>
            <Header />
            <HeroSection />
            <Weather />
            <News articles={articles} />
            <CardSection />
        </>
    );
};

export default Page;