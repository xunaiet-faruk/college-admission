import { useEffect, useState } from "react";
import Useaxios from "../../Component/Hooks/Useaxios";
import ProfileDetails from "../ProfileDetails/ProfileDetails";
import './Mycollege.css';
import FeedbackModal from "../Homepages/Review/Feedback";


const Mycollege = () => {
    const axiosPublic = Useaxios();
    const [booking, setBooking] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [selectedBooking, setSelectedBooking] = useState(null);

    useEffect(() => {
        const CollegeBook = async () => {
            try {
                const res = await axiosPublic.get('/collegeadmision');
                setBooking(res.data);
                console.log(res.data,"college boooking ");
            } catch (error) {
                console.error("Error fetching booking data:", error);
            } finally {
                setLoading(false);
            }
        };
        CollegeBook();
    }, [axiosPublic]);

    const handleFeedbackClick = (booking) => {
        setSelectedBooking(booking);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedBooking(null);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const feedback = event.target.feedback.value;
        const rating = event.target.rating.value;
        console.log('Feedback submitted:', feedback, 'Rating:', rating);
        handleModalClose();
    };

    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://i.ibb.co/GRCSvr6/image.png)",
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="">
                        <h1 className="mb-7 text-6xl font-bold">
                            See Your <span className="text-[#ffc333]">Booking</span> College{' '}
                        </h1>
                        <p className="mb-7">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Error, inventore.
                        </p>
                        <button className="btn btn-primary justify-center mx-auto">Get Started</button>
                    </div>
                </div>
            </div>

            <div className="mt-32 px-12">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className="text-xl text-black bg-gray-200">
                                <th>Profile</th>
                                <th>Sub/Date</th>
                                <th>Address</th>
                                <th>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {booking.map((item, index) => (
                                <tr key={index}>
                                    <td className="text-xl">
                                        <div className="flex items-center gap-3">
                                            <div className="">
                                                <div className="mask mask-squircle h-16 w-16">
                                                    <img  src={item?.image} alt="" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item?.email}</div>
                                                <div className="text-sm opacity-80">{item?.mobile}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item?.subject}
                                        <br />
                                        <span className="text-black">{item?.date}</span>
                                    </td>
                                    <td className="text-black">{item?.address}</td>
                                    <th>
                                        <button
                                            className="border-b-2 border-[#ffc333] px-5 rounded-xl"
                                            onClick={() => handleFeedbackClick(item)}
                                        >
                                            Review
                                        </button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <FeedbackModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                onSubmit={handleSubmit}
            />

            {booking.length > 0 && (
                <div className="hidden">
                    <ProfileDetails booking={booking} loading={loading} />
                </div>
            )}
        </div>
    );
};

export default Mycollege;
