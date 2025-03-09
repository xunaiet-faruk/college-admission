import { useEffect, useState } from "react";
import { MdDateRange, MdEmojiEvents, MdSportsEsports } from "react-icons/md";
const CollegeCard = () => {

    const [card, setCard] =useState([])

    useEffect(()=>{
        fetch('/Card.json')
        .then(res => res.json())
        .then(data => setCard(data))
    })


    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-screen-xl mx-auto gap-12 mt-52">
            {
                card.map((cards, index) => 
                    <div key={index} className="w-full space-y-3 rounded-xl backdrop-blur-2xl hover:shadow-[#e8d9b7]   p-4 shadow-lg dark:bg-[#18181B]">
                        <div className="relative flex h-48 w-full justify-center lg:h-[260px]">
                            <div className="absolute left-4 right-4 top-4 flex justify-end">
                              
                                <button className="rounded-xl border-b-2 hover:bg-black  border-[#ffc333] px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">{cards?.name}</button>
                            </div>
                            <img width={260} height={260} className="h-full w-full rounded-lg bg-black/40" src={cards?.image} alt="card navigate ui" />
                        </div>
                        <div className="flex justify-between">
                          <div className="flex items-center gap-2">
                                <MdEmojiEvents className="text-xl "/>
                                <h6 className="text-sm md:text-base lg:text-lg text-black">{cards?.events}</h6>
                            </div>
                          <div className="flex items-center gap-2">
                                <MdDateRange className="text-xl" />
                                <p className="text-sm">{cards?.admissionDates}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-center text-gray-400 gap-2">
                            <MdSportsEsports className="text-xl" />
                            <p>{cards?.sports}</p>
                        </div>
                        <p className="text-gray-500 text-md">{cards?.researchHistory}</p>
                        <div className="flex flex-wrap items-center justify-between gap-6 text-sm md:text-base">
                           
                            <button className="rounded-lg border-2 border-[#ffc333]  px-4 py-2 font-semibold text-black duration-300 hover:scale-105 hover:bg-[#ffc333]">View Details</button>
                        </div>
                    </div>
               
                )
            }
        </div>
    );
};

export default CollegeCard;