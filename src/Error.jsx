import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
                <div className="mt-[300px]">
            <div className="flex justify-center items-center">
                    <img className="w-[200px]" src="https://i.ibb.co/7VRC7Pj/image.png" alt="" />
                    <h1 className="text-5xl font-bold text-center ">
                        This page could not be found.</h1>

            </div>
        <div className="flex justify-center items-center mt-5">
        <Link to={'/'}>
        
        <button className="btn">Back Home</button>
        
        </Link>

        </div>

        
                </div>
        </div>
    );
};

export default Error;