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

            <div className="mt-32 flex flex-col justify-center items-center w-full max-w-screen-2xl  mx-auto">

                <div className="overflow-x-auto w-full">
                    <table className="min-w-[90%] shadow-md  mx-auto   my-6">
                        <thead>
                            <tr className="bg-gray-100 text-black">
                                <th className="py-3 px-6 text-left border-b">Profile</th>
                                <th className="py-3 px-6 text-left border-b">Email</th>
                                <th className="py-3 px-6 text-left border-b">Mobile</th>
                                <th className="py-3 px-6 text-left border-b">Subject</th>
                                <th className="py-3 px-6  border-b text-end">Address</th>
                                <th className="py-3 px-6  border-b text-end">Review</th>
                            </tr>
                        </thead>
                        <tbody >
                            {booking.length > 0 ? (
                                booking.map((book, index) => (
                                    <tr key={index} className="hover:bg-gray-50 transition duration-300">
                                        <td className="py-4 px-6 border-b border-gray-300">
                                            <img className="w-16 h-16 rounded-full" src={book?.image} alt="" />

                                        </td>
                                        <td className="py-4 px-6 border-b border-gray-300 ">{book.email}</td>
                                        <td className="py-4 px-6 border-b border-gray-300">{book.mobile}</td>
                                        <td className="py-4 px-6 border-b border-gray-300">{book.subject}</td>
                                        <td className="py-4 px-6  border-b border-gray-300 text-end">{book.address}</td>
                                        <td className="py-4 px-6 border-b border-gray-300 text-end">

                                            <button
                                                className="border-b-2 border-[#ffc333] px-5 rounded-xl"
                                                onClick={() => handleFeedbackClick(book)}
                                            >
                                                Review
                                            </button>

                                        </td>
                                        
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center py-4 text-gray-500">
                                        No Booking Found
                                    </td>
                                </tr>
                            )}
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
