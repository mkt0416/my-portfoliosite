
import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="w-full min-h-screen relative">
            <section className="w-full h-full max-w-screen-xl px-8 md:px-12 lg:px-16">
                <Image
                    src={"/images/hero.jpg"}
                    alt="hero-image"
                    fill
                    priority
                    className="object-cover object-left-top"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute h-full text-white max-w-screen-xl flex flex-col justify-center"
                >
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold mb-10">
                        Explore the universe of creative web apps.
                    </h1>
                    <p className="md:text-xl">
                        テクノロジーと想像力を融合させた、心地よいデジタル体験の世界へ。
                    </p>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;