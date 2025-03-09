import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../Component/Loading';

const CollegeDetails = () => {
    const { id } = useParams();
    const [collegeDetails, setCollegeDetails] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/collegeView')
            .then(res => res.json())
            .then(data => {

                const selectedCollege = data.find(college => college.id === parseInt(id));
                setCollegeDetails(selectedCollege);
                console.log(selectedCollege);
            })
            .catch(error => console.error('Error fetching college details:', error));
    }, [id]);

    if (!collegeDetails) {
        return <Loading />
    }

    return (


        <div className='max-w-screen-xl mx-auto'>
            <div className='flex flex-col md:flex-col lg:flex-row   justify-center gap-6 mt-32'>
                <div className='flex-1 flex flex-col justify-center items-center'>
                    <img className='lg:w-[800px] md:w-[600px] md:h-[400px] lg:h-[500px]  bg-cover rounded-xl' src={collegeDetails?.image} alt="" />
                </div>
                <div className='flex-1 lg:space-y-8 md:space-y-3 md:ml-24 lg:ml-0'>
                    <h1 className='lg:text-4xl font-bold'>{collegeDetails.name}</h1>
                    <p className='lg:text-xl'><span className='lg:text-2xl font-semibold'>Rating:</span> {collegeDetails.rating}</p>
                    <p className='lg:text-xl'><span className='lg:text-2xl font-semibold'>Events:</span> {collegeDetails?.events[0]?.description}</p>
                    <p className='lg:text-xl'><span className='lg:text-2xl font-semibold'>Admission Date:</span> {collegeDetails.admissionDate}</p>
                    <p className='lg:text-xl'><span className='lg:text-2xl font-semibold'>Sports:</span> {collegeDetails?.sports[0]?.facilities}</p>
                    <p className='lg:text-xl'><span className='lg:text-2xl font-semibold'>Research Count:</span> {collegeDetails.researchCount}</p>
                </div>
            </div>
        </div>

    );
};

export default CollegeDetails;
