
import { TfiWrite } from "react-icons/tfi";
import { VscOpenPreview } from "react-icons/vsc";


const Applydetails = () => {
    return (
        <div className="mt-64 max-w-screen-xl mx-auto">
            <div className="flex flex-col  md:flex-row justify-between  items-center">

                <div className="">
                    <h1 className="text-4xl font-bold mb-12">How To Admission <span className="text-[#ffc333] ">At</span> College</h1>

                    <div>
                        <div className="space-y-3 md:mb-4 lg:mb-12">
                        <div className="flex items-center gap-5">
                                <TfiWrite className="lg:text-2xl text-[#ffc333]"/>
                                <p className="lg:text-2xl font-semibold"><span className="text-[#ffc333] font-semibold text-2xl">01.</span> Complete Application Form</p>

                        </div>
                            <p className="text-gray-500 px-12">Furthermore, our university campus provides <br /> a vibrant & supportive community that embraces <br/> diversity and fosters inclusivity.</p>
                        </div>

                        <div className="space-y-3 md:mb-4 lg:mb-12">
                            <div className="flex items-center  gap-5">
                                <VscOpenPreview className="lg:text-2xl text-[#ffc333]" />
                                <p className="lg:text-2xl font-semibold"><span className="text-[#ffc333] font-semibold text-2xl">02.</span> Application Review</p>
                          </div>
                            <p className="text-gray-500 px-12">We believe that a diverse student body enhances <br/> the learning experience and prepares students <br/> to thrive in a globalized world.</p>
                        </div>

                        <p className="lg:text-3xl font-bold md:mb-4 lg:mb-12">Free of cost for Appling </p>
                        <button className='btn animate-pulse '>
                            Admission Now </button>
                    </div>
                </div>

                <div>
                    <img className="lg:w-[570px] md:mt-32 lg:mt-0"
                        src="https://themephi.net/template/eduan/eduan/assets/img/banner/1/banner-img.png" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Applydetails;