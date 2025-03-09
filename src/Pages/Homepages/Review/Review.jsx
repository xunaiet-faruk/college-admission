import { useEffect, useState } from "react";
import Useaxios from "../../../Component/Hooks/Useaxios";
import Rating from "react-rating";


const Review = () => {
    const [review, setReview] = useState([]);
    const [currentSlider, setCurrentSlider] = useState(0);
    const [loading, setLoading] = useState(true);
    
    const axiosPublic=Useaxios()

    useEffect(() => {
        const CollegeBook = async () => {
            try {
                const res = await axiosPublic.get('/feedback');
                setReview(res.data);
                console.log(res.data);
            } catch (error) {
                console.error("Error fetching booking data:", error);
            } finally {
                setLoading(false);
            }
        };
        CollegeBook();
    }, [axiosPublic]);

    const prevSlider = () => setCurrentSlider((currentSlider) => (currentSlider === 0 ? review.length - 1 : currentSlider - 1));
    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === review.length - 1 ? 0 : currentSlider + 1));

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => {
            clearInterval(intervalId);
        };
    }, [currentSlider,nextSlider]);

    const isSmallScreen = window.innerWidth <= 768;

    return (
        <div className="mt-52">
            <h2 className="text-4xl font-bold mb-12 text-center">Users<span className="text-[#ffc333] "> Feedback</span></h2>
            <div className="max-w-full min-w-[350px] mx-auto h-[400px] flex flex-row items-center overflow-hidden gap-5 lg:gap-10 px-8 md:px-16 lg:px-24">
                <div className="relative overflow-hidden">
                    <div
                        className="ease-linear duration-300 flex"
                        style={{ transform: `translateX(-${currentSlider * (isSmallScreen ? 100 : 50)}%)` }}
                    >
                        {review?.map((each, idx) => (
                            <div key={idx} className="p-4 min-w-full md:min-w-[50%]">
                                <div className="h-full p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
                                   <div className="flex justify-between items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-slate-800 mb-4" viewBox="0 0 975.036 975.036">
                                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                        </svg>

                                        <p className="text-sm -mt-7 ">{each?.email}</p>

                                   </div>
                                    <p className="leading-relaxed mb-6 text-gray-500">{each?.feedback}</p>
                                    <a className="inline-flex items-center">
                                        <img className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" src={"https://i.ibb.co/FXwVfjk/image.png"} alt="User Profile" />
                                       
                                       
                                        <div className="flex">

                                       

                                          <div>
                                                <span className="flex-grow flex flex-col pl-4">
                                                    <span className="title-font font-medium text-gray-900">{each?.name}</span>
                                                    <span className="text-gray-500 text-sm">{each?.designation}</span>
                                                </span>
                                          </div>

                                            <div className="">
                                                <Rating
                                                    emptySymbol={<svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-6 h-6 text-[#ffc333]"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                        />
                                                    </svg>}
                                                    fullSymbol={<svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="w-6 h-6 text-[#ffc333]"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>}
                                                    initialRating={
                                                        each?.rating
                                                    }
                                                    readonly
                                                />
                                            </div>


                                        </div>
                                      
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                  
                </div>

             
            </div>

          
        </div>
    );
};

export default Review;
