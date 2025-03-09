import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Bannner = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [{ img: "https://i.ibb.co/Qjv8Hgw/image.png" }, { img: "https://i.ibb.co/MNTyvgY/image.png" },
         { img: "https://i.ibb.co/k4HK0q7/image.png" }, 
        { img: "https://i.ibb.co/5GsZqg0/image.png" },
        { img: "https://i.ibb.co/VM12g6s/evening-view-town-hall-vienna-1398-2837.jpg" },];
    const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? sliders.length - 1 : currentSlider - 1);
    const nextSlider = () => setCurrentSlider((currentSlider) => currentSlider === sliders.length - 1 ? 0 : currentSlider + 1);
    const isSmallScreen = window.innerWidth <= 768;
    return (
        <div className="w-full h-60 sm:h-96 md:h-[680px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/30 before:inset-0 transform duration-1000 ease-linear  overflow-hidden"
            style={{ backgroundImage: `url(${currentSlider === 0 ? sliders[sliders.length - 1].img : sliders[currentSlider - 1].img})` }}>
            {/* arrow */}
            <div className="absolute bottom-1/4 flex gap-6 z-50 px-5 " >
                {/* arrow left */}
                <button onClick={prevSlider} className="flex  justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-9 md:h-9">
                    <IoIosArrowBack className="text-5xl font-bold text-yellow-400" />

                </button>
                {/* arrow right */}
                <button onClick={nextSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-9 md:h-9">
                    <IoIosArrowForward className="text-5xl font-bold text-yellow-400" />

                </button>
            </div>
            {/* text container here */}
            <div className="w-1/2 px-4 left-0 absolute drop-shadow-lg text-white rounded-lg">
                <h1 className="lg:text-3xl mb-3">{sliders[currentSlider].title}</h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">{sliders[currentSlider].des}</p>
            </div>
            {/* slider container */}
            <div className="w-1/2 ml-auto overflow-hidden  absolute -right-5 lg:-right-16 z-50 px-4 py-10">
                <div className="ease-linear duration-300 flex gap-4 items-center"
                    style={{ transform: `translateX(-${currentSlider * (isSmallScreen ? 98 : 200)}px)` }}>
                    {/* sliders */}
                    {sliders.map((slide, inx) => (
                        <img key={inx} src={slide.img}
                            className={`h-[180px] sm:h-[200px] lg:h-[320px] min-w-[90px] lg:min-w-[184px] ${currentSlider - 1 === inx ? 'scale-0' : 'scale-100 delay-500'
                                } drop-shadow-lg shadow-lg shadow-black bg-black/50 duration-300 rounded-lg z-50`}
                            alt={slide.title} />
                    ))}
                </div>
            </div>
        </div>
    )
};
export default Bannner;