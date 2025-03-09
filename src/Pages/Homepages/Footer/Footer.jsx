const Footer = () => {
    return (
        <footer className="bg-gray-200  text-black py-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    {/* College Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-yellow-400">College Admission</h2>
                        <p className="mt-2 ">
                            Your gateway to top universities. Apply now and secure your future!
                        </p>
                        <img className="w-[100px]" src="https://i.ibb.co/K69hGj1/image.png" alt="" />
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-yellow-400">Quick Links</h3>
                        <ul className="mt-2 space-y-2">
                            <li><a href="#" className=" hover:text-yellow-400 text-black">About Us</a></li>
                            <li><a href="#" className=" hover:text-yellow-400 text-black">Admissions</a></li>
                            <li><a href="#" className=" hover:text-yellow-400 text-black">Courses</a></li>
                            <li><a href="#" className=" hover:text-yellow-400 text-black">Contact</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Subscription */}
                    <div>
                        <h3 className="text-xl font-semibold text-yellow-400">Subscribe</h3>
                        <p className="text-black mt-2">Get admission updates & news.</p>
                        <div className="mt-3 flex items-center">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-3 py-2 rounded-l-md bg-gray-700 text-white focus:outline-none"
                            />
                            <button className="bg-yellow-500 px-4 py-2 rounded-r-md hover:bg-yellow-600">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Social Media */}
                <div className="mt-10 flex justify-center space-x-6">
                    <a href="#" className="text-gray-300 hover:text-yellow-400 text-xl">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-yellow-400 text-xl">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-yellow-400 text-xl">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-center  mt-6">
                    &copy; {new Date().getFullYear()} College Admission. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
