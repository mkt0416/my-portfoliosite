
import Header from "./components/header/Header";
import HeroSection from "./components/hero/HeroSection";
import Weather from "./components/weather/Weather";
import News from "./components/news/News";
import CardSection from "./components/hero/CardSection";

const Page = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <Weather />
            <News />
            <CardSection />
        </>
    );
};

export default Page;