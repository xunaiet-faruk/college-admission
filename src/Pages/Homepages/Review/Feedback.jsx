import React from 'react';
import Useaxios from '../../../Component/Hooks/Useaxios';
import Swal from 'sweetalert2';

const FeedbackModal = ({ isOpen, onClose, onSubmit }) => {
    if (!isOpen) return null;

    const axiosPublic=Useaxios()

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const from =e.target;
        const name =from.name.value;
        const designation =from.designation.value;
        const rating =parseInt(from.rating.value)
        const feedback = from.details.value;
        const email = from.email.value;
        const Alldata = { name, designation, rating, feedback,email }
        console.log(Alldata);
        try {
            const res = await axiosPublic.post('/collegefeedback', Alldata);
            console.log(res.data,Alldata);
            if (res.data.insertedId) {
                Swal.fire({
                    icon: 'success',
                    text: 'Successfully submitted Feedback'
                });
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
        }

    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl mb-4">Submit Feedback</h2>
                <form onSubmit={handleSubmit} className=''>
                    <div className='flex flex-col gap-4'>
                        <input type="text" name="name" id="" placeholder='Name' className='px-4 w-96 py-2 border-b-2 rounded-xl border-[#ffc333]' required/>
                        <input type="text" name="designation" id="" placeholder='Designation' className='px-4 w-96 py-2 border-b-2 rounded-xl border-[#ffc333]' required/>
                        <input type="email" name="email" id="" placeholder='Email' className='px-4 w-96 py-2 border-b-2 rounded-xl border-[#ffc333]' required/>
                        <input type="number" name="rating" id="" placeholder='Rating' className='w-96 px-4 py-2 border-b-2 rounded-xl border-[#ffc333]' required/>
                        <textarea type="number" name="details" id="" placeholder='Feedback' rows={7} className='w-96 px-4 py-2 border-b-2 rounded-xl border-[#ffc333]' required/>
                    
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
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FeedbackModal;
