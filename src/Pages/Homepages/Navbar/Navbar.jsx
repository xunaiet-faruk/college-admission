import { useContext, useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Authcontext } from '../../Autentication/Providers/Authprovider';

const Navbar = () => {
    const { user, logout } = useContext(Authcontext);
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef(null); // Initialize useRef with null

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        const closeDropDown = (e) => {
            // Check if dropdown menu ref exists and if click is outside dropdown
            if (dropDownMenuRef.current && !dropDownMenuRef.current.contains(e.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    return (
        <div>
            <nav className="flex items-center justify-between px-4 py-2 bg-[#f6f6f6]">
                <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                    <img className='w-14' src="https://i.ibb.co/K69hGj1/image.png" alt="" />
                </div>
                <ul className="hidden items-center justify-between gap-10 md:flex">
                    <li className="group flex  cursor-pointer flex-col font-semibold">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#ffc333] transition-all duration-300 group-hover:w-full"></span>
                        </NavLink>
                    </li>
                    <li className="group flex  cursor-pointer flex-col font-semibold">
                        <NavLink
                            to="/college"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Colleges<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#ffc333] transition-all duration-300 group-hover:w-full"></span>
                        </NavLink>
                    </li>
                    <li className="group flex  cursor-pointer flex-col font-semibold">
                        <NavLink
                            to="/admission"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Admission<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#ffc333]  transition-all duration-300 group-hover:w-full"></span>
                        </NavLink>
                    </li>
                    <li className="group flex  cursor-pointer flex-col font-semibold">
                        <NavLink
                            to="/mycollege"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            My College<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#ffc333]  transition-all duration-300 group-hover:w-full"></span>
                        </NavLink>
                    </li>
                    <li>
                        {user ? (
                            <>
                                   
                                  <div className='flex gap-10'>
                                 
                                        <li className="group flex  cursor-pointer flex-col font-semibold text-[18px]  text-gray-500 ">
                                            <NavLink
                                            to="/profile"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "active" : ""
                                                }
                                            >
                                               {user?.displayName}<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#ffc333]  transition-all duration-300 group-hover:w-full"></span>
                                            </NavLink>
                                      
                                    </li>
                                        <li className="group flex  cursor-pointer flex-col font-semibold text-[18px] pb-1 text-red-500 ">
                                            <NavLink
                                                to="/mycollege"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "active" : ""
                                                }
                                            >
                                            <Link onClick={handleLogout}>Logout</Link><span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#ffc333]  transition-all duration-300 group-hover:w-full"></span>
                                            </NavLink>
                                      
                                    </li>
                                  </div>
                                    
                                
                            </>
                        ) : (
                            <li className="group flex  cursor-pointer flex-col font-semibold">
                                <NavLink
                                    to="/login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Login<span className="mt-[2px]  h-[3px]  w-[0px] rounded-full bg-[#ffc333]  transition-all duration-300 group-hover:w-full"></span>
                                </NavLink>
                            </li>
                        )}
                    </li>
                </ul>
                <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                    {dropDownState && (
                        <ul className="z-10 gap-2 bg-[#393E46] absolute right-0 top-11 flex w-[200px] flex-col rounded-lg text-base">
                            <li className="cursor-pointer px-6 py-2 text-white rounded-t-lg hover:bg-sky-600">
                                Home
                            </li>
                            <li className="cursor-pointer px-6 py-2 text-white hover:bg-sky-600">
                                Colleges
                            </li>
                            <li className="cursor-pointer px-6 py-2 text-white hover:bg-sky-600">
                                Admission
                            </li>
                            <li className="cursor-pointer px-6 py-2 text-white hover:bg-sky-600">
                                My College
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
