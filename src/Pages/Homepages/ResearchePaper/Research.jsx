import { useEffect, useState } from "react";
import  '.././Banner/Banner.css'

const Research = () => {
    const [research, setResearch] =useState([])

    useEffect(()=>{
        fetch('/Research.json')
        .then(res => res.json())
        .then(data => setResearch(data))
    })
    return (
        <div className=" mt-52">
            <h2 className="text-4xl font-bold mb-12 text-center">Recommended Research <span className="text-[#ffc333] ">Papers</span></h2>

            <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 items-center justify-center gap-7 max-w-screen-xl mx-auto">
                {
                    research.map((item, index) =>
                        <article key={index} className="flex bg-white transition shadow-xl hover:shadow-yellow-50">
                            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                                <time
                                    
                                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                                >
                                    <span>{item?.researchPaperDate}</span>
                                    <span className="w-px flex-1 bg-gray-900/10"></span>
                                    <span>Oct 10</span>
                                </time>
                            </div>

                            <div className="hidden sm:block sm:basis-56">
                                <img
                                    alt=""
                                    src={item?.image}
                                    className="aspect-square h-full w-full object-cover"
                                />
                            </div>

                            <div className="flex flex-1 flex-col justify-between">
                                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                    <a href="#">
                                        <h3 className="font-bold text-2xl uppercase text-gray-900">
                                            {item?.title}
                                        </h3>
                                    </a>

                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                        {item?.Details}
                                    </p>
                                </div>

                                <div className="sm:flex sm:items-end sm:justify-end">
                                    <a
                                        href={item?.link}
                                        className="block bg-[#f6cc6a] px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </article>
                    
                )
                }



            </div>
    </div>
    );
};

export default Research;