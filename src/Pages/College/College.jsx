import { useEffect, useState } from 'react';
import '../Homepages/Banner/Banner.css';
import { CiStar } from 'react-icons/ci';
import { TbBrandDaysCounter } from 'react-icons/tb';
import { MdDateRange, MdEmojiEvents, MdSportsEsports } from 'react-icons/md';
import { Link } from 'react-router-dom';

const College = () => {
    const [collegeCard, setCollegeCard] = useState([]);

    const hadleDetails = id => {
        console.log(id);
    }

    useEffect(() => {
        fetch('http://localhost:5000/collegeView')
            .then(res => res.json())
            .then(data => setCollegeCard(data));
    }, []);

    return (
        <div>


            <div
                className="hero min-h-screen"
                style={{ backgroundImage: "url(https://i.ibb.co.com/Z6DYCqDW/freepik-adjust-57723.png)" }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-screen-xl mx-auto gap-12 mt-52 mb-20">
                {collegeCard?.map((cards, index) => (
                    <div key={index} className="w-full space-y-3 rounded-xl backdrop-blur-2xl hover:shadow-[#e8d9b7] p-4 shadow-lg dark:bg-[#18181B]">
                        <div className="relative flex h-48 w-full justify-center lg:h-[260px]">
                            <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                                <div className='flex items-center justify-center border rounded-full px-3 gap-2'>
                                    <CiStar className='text-[#ffc333] text-xl' />
                                    <p className='text-white pb-1'>{cards?.rating}</p>
                                </div>
                                <button className="rounded-xl border-b-2 hover:bg-black border-[#ffc333] px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">
                                    {cards.name}
                                </button>
                            </div>
                            <img width={260} height={260} className="h-full w-full rounded-lg bg-black/40" src={cards.image} alt="card navigate ui" />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <MdEmojiEvents className="text-xl" />
                                <p className="text-md">{cards?.events[0]?.name}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <MdDateRange className="text-xl" />
                                <p className="text-md">{cards?.admissionDate}</p>
                            </div>
                        </div>
                        <div className='flex justify-evenly'>
                            <div className="flex items-center justify-center gap-2">
                                <MdSportsEsports className="text-xl" />
                                <p className='text-md'>{cards?.sports[0]?.name}</p>
                            </div>
                            <div className='flex items-center gap-2 justify-center'>
                                <TbBrandDaysCounter />
                                <p className='text-md'>{cards?.researchCount}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-6 text-sm md:text-base">
                            <Link to={`/college/${cards?.id}`}>
                                <button onClick={hadleDetails} className="rounded-lg border-2 border-[#ffc333] px-4 py-2 font-semibold text-black duration-300 hover:scale-105 hover:bg-[#ffc333] w-full">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default College;
