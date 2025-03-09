import { useContext, useEffect, useState } from "react";
import Useaxios from "../../Component/Hooks/Useaxios";
import { Authcontext } from "../Autentication/Providers/Authprovider";
import ProfileEdit from "./ProfileEdit";


const ProfileDetails = () => {
    const axiosPublic = Useaxios();
    const [booking, setBooking] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(Authcontext);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);

    useEffect(() => {
        const CollegeBook = async () => {
            const res = await axiosPublic.get('/collegeadmision');
            setBooking(res.data);
            setLoading(false);
        };
        CollegeBook();
    }, [axiosPublic]);

    const handleEditClick = (booking) => {
        setSelectedBooking(booking);
        setIsEditModalOpen(true);
    };

    const handleModalClose = () => {
        setIsEditModalOpen(false);
        setSelectedBooking(null);
    };

    const handleEditSave = (updatedBooking) => {
        setBooking(booking.map(b => b._id === updatedBooking._id ? updatedBooking : b));
    };

    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{ backgroundImage: "url(https://i.ibb.co/RvBmK21/image.png)" }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="">
                        <h1 className="mb-7 text-6xl font-bold">
                            See Your <span className="text-[#ffc333]">Profile</span> Details{' '}
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
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {booking.map((item, index) => (
                                <tr key={index}>
                                    <td className="text-xl">
                                        <div className="flex items-center gap-3">
                                            <div className="">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img src={user?.photoURL} alt="" />
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
                                            className="border-[#ffc333] border-b rounded-xl px-5 hover:bg-[#ffc333] hover:text-white"
                                            onClick={() => handleEditClick(item)}
                                        >
                                            Edit
                                        </button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <ProfileEdit
                isOpen={isEditModalOpen}
                onClose={handleModalClose}
                booking={selectedBooking}
                onSave={handleEditSave}
            />
        </div>
    );
};

export default ProfileDetails;
