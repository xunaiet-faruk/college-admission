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
             
              <h1 className="text-6xl text-center text-yellow-400 font-bold pt-[20%]">Profile Details</h1>
            </div>

            <div className="mt-32 px-12 ">

                <div className="overflow-x-auto mb-12">
                    <table className="min-w-[90%] shadow-md  border mx-auto border-gray-100  my-6">
                        <thead>
                            <tr className="bg-gray-200 text-black">
                                <th className="py-3 px-6 text-left border-b">Profile</th>
                                <th className="py-3 px-6 text-left border-b">Subject </th>
                                <th className="py-3 px-6 text-left border-b">College</th>
                                <th className="py-3 px-6  border-b ">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {booking.map((item, index) => (
                                <tr key={index}>
                                    <td className="text-xl">
                                        <div className="flex items-center gap-3">
                                            
                                            <div>
                                                <div className="font-bold p-1">{item?.email}</div>
                                                <div className="text-sm opacity-80 p-1">{item?.mobile}</div>
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
                                            className="border-[#ffc333] border-b rounded-xl px-5  hover:bg-[#ffc333] hover:text-white"
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
