import React, { useState } from 'react';
import Useaxios from '../../Component/Hooks/Useaxios';
import Swal from 'sweetalert2';


const EnvvaribaleImage = import.meta.env.VITE_IMAGE_API;
const Imagehoisting = `https://api.imgbb.com/1/upload?key=${EnvvaribaleImage}`
const AdmisitionCollege = () => {
    const [selectedCollege, setSelectedCollege] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const axiosPublic = Useaxios()
    const college = [
        { name: 'Harvard College' },
        { name: 'Stanford College' },
        { name: 'Raozan College' },
        { name: 'Dhaka College' },
        { name: 'Ctg College' },
        { name: 'Hathazari College' },
        { name: 'Duke University' },
        { name: 'Boston College' },
        { name: 'MIT College' },
        { name: 'California College' },
        { name: 'Oxford College' },
    ];

    const handleCollegeClick = (collegeName) => {
        setSelectedCollege(collegeName);
        setShowForm(true);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const university = form.university.value;
        const subject = form.subject.value;
        const email = form.email.value;
        const mobile = form.mobaile.value;
        const address = form.address.value;
        const date = form.date.value;
        const formData = new FormData();
        formData.append('image', form.image.files[0]);
        try {
            const imgBBResponse = await axiosPublic.post(Imagehoisting, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Image upload response:', imgBBResponse.data);
            const allData = { name, subject, email, mobile, address, date, university, image: imgBBResponse.data.data.display_url };
            const res = await axiosPublic.post('/collegeadmision', allData);
            console.log('Form submission response:', res.data);

            if (res.data.insertedId) {
                Swal.fire({
                    icon: 'success',
                    text: 'Successfully submitted the form!',
                });
            }

            setSelectedCollege(null);
            setShowForm(false);
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };


    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://i.ibb.co/M5jXJMy/image.png)",
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="">
                        <h1 className="mb-7 text-6xl font-bold">
                            Choose Your <span className="text-[#ffc333]">Best</span> College{' '}
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

            {/* Admission Form Modal */}
            {showForm && (
                <div className="fixed z-[100] flex items-center justify-center inset-0 bg-black/60 backdrop-blur-2xl duration-300 transition-opacity">
                    <div className="absolute max-w-xl rounded-lg bg-white p-3 pb-5 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white opacity-100 scale-100 duration-300">
                        <svg
                            onClick={() => {
                                setShowForm(false);
                                setSelectedCollege(null);
                            }}
                            className="mx-auto mr-0 w-8 cursor-pointer fill-black dark:fill-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g strokeWidth="0"></g>
                            <g strokeLinecap="round" strokeLinejoin="round"></g>
                            <g>
                                <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path>
                            </g>
                        </svg>
                        <div>
                            <h1 className="text-3xl text-center pb-12">
                                Admission Form for <span className="text-[#ffc333] font-bold">{selectedCollege}</span>
                            </h1>
                            <form onSubmit={handleSubmit}>
                                <input
                                    name='name'
                                    defaultValue={name}
                                    type="text"
                                    placeholder="Candidate Name"
                                    className="w-full mb-2 p-2 border rounded"
                                    required
                                />
                                <input
                                    name='university'
                                    defaultValue={selectedCollege}
                                    type="text"
                                    placeholder="Candidate Name"
                                    className="w-full mb-2 p-2 border rounded"
                                    readOnly
                                />
                                <input
                                    name='subject'
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full mb-2 p-2 border rounded"
                                    required
                                />
                                <input
                                    name='email'
                                    type="email"
                                    placeholder="Candidate Email"
                                    className="w-full mb-2 p-2 border rounded"
                                    required
                                />
                                <input
                                    name='mobaile'
                                    type="tel"
                                    placeholder="Candidate Phone number"
                                    className="w-full mb-2 p-2 border rounded"
                                    required
                                />
                                <input
                                    name='address'
                                    type="text"
                                    placeholder="Address"
                                    className="w-full mb-2 p-2 border rounded"
                                    required
                                />
                                <input
                                    name='date'
                                    type="date"
                                    placeholder="Date of Birth"
                                    className="w-full mb-2 p-2 border rounded"
                                    required
                                />
                                <input
                                    name='image'
                                    type="file"
                                    placeholder="Image"
                                    className="w-full mb-2 p-2 border rounded"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="rounded-md w-full mt-3 bg-[#f5d27b] hover:bg-[#d4b668] px-6 py-1.5 text-white"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* College List */}
            <div className="flex flex-wrap max-w-screen-xl mx-auto gap-6 mt-32 justify-center items-center">
                {college.map((item, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                        <div className="text-center">
                            <h1
                                className="text-lg border-[#ffc333] hover:border-2 cursor-pointer hover:text-red-300 border-b-2 rounded-full py-2"
                                onClick={() => handleCollegeClick(item.name)}
                            >
                                {item.name}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default AdmisitionCollege;
