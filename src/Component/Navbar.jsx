import React from 'react';
import { TbLogout } from 'react-icons/tb';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar shadow-sm justify-between px-5  mx-auto  md:px-12 lg:px-16 bg-[linear-gradient(220deg,_rgba(197,20,20,0)_30%,_rgba(68,51,204,0.7)_67%,_rgba(254,2,2,1))]">
            <div className="flex-none">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>

            <div className="flex  gap-2 ">
                <NavLink to='/'>Home</NavLink>
                <a>about</a>
            </div>

            <div className='flex items-center'>

            <div className="flex">
                    <div className="relative group ml-4">
                        <div className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                />
                            </div>
                        </div>
                        <ul
                            className="menu menu-sm absolute right-0 bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200"
                        >
                            <li><a>Profile</a></li>
                        </ul>
                    </div>


                </div>

                <div className='flex items-center'>
                    <Link to='/login' className="btn">Login</Link>
                    <Link to='/signup' className="btn">SignUp</Link>
                    <a href="#_" class="inline-flex items-center justify-center w-full px-5 py-2 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                        <TbLogout />
                    </a>
                </div>


            </div>

        </div>
    );
};

export default Navbar;
