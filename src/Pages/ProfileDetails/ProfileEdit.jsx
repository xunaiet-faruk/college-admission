import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Useaxios from '../../Component/Hooks/Useaxios';

const ProfileEdit= ({ isOpen, onClose, booking, onSave }) => {
    const axiosPublic = Useaxios();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        university: '',
        address: ''
    });

    useEffect(() => {
        if (booking) {
            setFormData({
                name: booking?.name,
                email: booking?.email,
                university: booking?.university,
                address: booking?.address
            });
        }
    }, [booking]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosPublic.put(`/collegeadmision/${booking?._id}`, formData);
            if (res.data.modifiedCount > 0) {
                Swal.fire({
                    icon: 'success',
                    text: 'Successfully updated booking',
                });
                onSave({ ...booking, ...formData });
                onClose();
            }
        } catch (error) {
            console.error('Error updating the booking:', error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-yellow-50 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl mb-4">Edit Booking</h2>
                <form onSubmit={handleSubmit} className=''>
                    <div className='flex flex-col gap-4'>
                        <input type="text" name="name" value={formData?.name} onChange={handleChange} placeholder='Name' className='px-4 w-96 py-2 border-b-2 rounded-xl border-[#ffc333]' required />
                        <input type="email" name="email" value={formData?.email} onChange={handleChange} placeholder='Email' className='px-4 w-96 py-2 border-b-2 rounded-xl border-[#ffc333]' required />
                        <input type="text" name="university" value={formData?.university} onChange={handleChange} placeholder='University' className='px-4 w-96 py-2 border-b-2 rounded-xl border-[#ffc333]' required />
                        <input type="text" name="address" value={formData?.address} onChange={handleChange} placeholder='Address' className='px-4 w-96 py-2 border-b-2 rounded-xl border-[#ffc333]' required />
                    </div>
                    <div className="flex justify-end mt-8">
                        <button
                            type="button"
                            className="border-[#ffc333] hover:bg-gray-700 hover:text-white border-2 font-bold py-2 px-4 rounded mr-2"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-[#ffc333] hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileEdit;
